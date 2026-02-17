import { NextRequest, NextResponse } from "next/server";

// Rate limiting simples (evita abuso)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60_000; // 1 minuto

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// IDs do formulário Mailchimp embed oficial
const MAILCHIMP_U = "83788d869028df5aadea2eae8";
const MAILCHIMP_ID = "e1c6adbac5";
const MAILCHIMP_F_ID = "00cd16e0f0";
const HONEYPOT = `b_${MAILCHIMP_U}_${MAILCHIMP_ID}`;

const MAILCHIMP_POST_JSON = `https://gmail.us16.list-manage.com/subscribe/post-json`;

interface MailchimpResponse {
  result?: string;
  msg?: string;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? request.headers.get("x-real-ip") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { status: "error", message: "Muitas tentativas. Tente novamente em breve." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";

    if (!email) {
      return NextResponse.json(
        { status: "error", message: "E-mail é obrigatório." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { status: "error", message: "E-mail inválido." },
        { status: 400 }
      );
    }

    const params = new URLSearchParams({
      u: MAILCHIMP_U,
      id: MAILCHIMP_ID,
      f_id: MAILCHIMP_F_ID,
      EMAIL: email,
      [HONEYPOT]: "",
      c: "mc_cb", // callback para JSONP — resposta vem como mc_cb({...})
    });

    const url = `${MAILCHIMP_POST_JSON}?${params.toString()}`;
    const res = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      cache: "no-store",
    });

    const text = await res.text();

    // Resposta JSONP: mc_cb({"result":"success",...}) ou mc_cb({"result":"error","msg":"..."})
    const jsonMatch = text.match(/mc_cb\s*\(\s*(\{[\s\S]*\})\s*\)/);
    if (!jsonMatch) {
      console.error("[mailchimp-subscribe] Resposta inesperada:", text.slice(0, 200));
      return NextResponse.json(
        { status: "error", message: "Resposta inválida do serviço. Tente novamente." },
        { status: 502 }
      );
    }

    const data: MailchimpResponse = JSON.parse(jsonMatch[1]);
    const result = data?.result?.toLowerCase();
    const msg = data?.msg ?? "";

    const isAlreadySubscribed =
      msg.toLowerCase().includes("already subscribed") ||
      msg.toLowerCase().includes("já está inscrit") ||
      msg.toLowerCase().includes("já inscrit") ||
      msg.toLowerCase().includes("already a list member");

    if (result === "success" || isAlreadySubscribed) {
      return NextResponse.json({ status: "success", message: "" });
    }

    // Extrair texto de msg que pode vir com HTML
    const errorMsg = (msg || "").replace(/<[^>]*>/g, "").trim() || "Algo deu errado. Tente novamente.";

    return NextResponse.json(
      { status: "error", message: errorMsg },
      { status: 400 }
    );
  } catch (error) {
    console.error("[mailchimp-subscribe] Erro:", error);
    return NextResponse.json(
      { status: "error", message: "Erro de conexão. Tente novamente." },
      { status: 500 }
    );
  }
}
