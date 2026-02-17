import { NextRequest, NextResponse } from "next/server";
import { subscribeEmail } from "@/lib/mailchimp";

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 60_000; // 1 minute

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

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { status: "error", message: "Muitas tentativas. Tente novamente em breve." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { email, website } = body;

    // Honeypot: bots fill this, humans don't
    if (website && typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json(
        { status: "error", message: "Algo deu errado. Tente novamente." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { status: "error", message: "E-mail é obrigatório." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { status: "error", message: "E-mail inválido." },
        { status: 400 }
      );
    }

    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);
    const result = await subscribeEmail(sanitizedEmail);

    if (result.status === "not_configured") {
      return NextResponse.json(
        {
          status: "not_configured",
          message: "Cadastro em breve. Volte em alguns dias.",
        },
        { status: 503 }
      );
    }

    if (result.status === "already_subscribed") {
      return NextResponse.json({
        status: "already_subscribed",
        message: "Você já está inscrito! Conteúdo desbloqueado.",
      });
    }

    return NextResponse.json({
      status: "subscribed",
      message: "Inscrito com sucesso! Conteúdo desbloqueado.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { status: "error", message: "Algo deu errado. Tente novamente." },
      { status: 500 }
    );
  }
}
