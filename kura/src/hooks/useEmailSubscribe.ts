"use client";

import { useState, useCallback } from "react";
import type { SubscribeResponse } from "@/types";

export function useEmailSubscribe() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "already_subscribed" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const subscribe = useCallback(async (email: string, website?: string) => {
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website: website ?? "" }),
      });

      const data: SubscribeResponse = await res.json();

      if (data.status === "subscribed" || data.status === "already_subscribed") {
        setStatus(data.status === "subscribed" ? "success" : "already_subscribed");
        setMessage(data.message ?? "");
        if (typeof window !== "undefined") {
          window.location.href = "/obrigado";
        }
      } else if (data.status === "not_configured") {
        setStatus("error");
        setMessage(data.message ?? "Cadastro em breve. Volte em alguns dias.");
      } else {
        setStatus("error");
        setMessage(data.message ?? "Algo deu errado. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setMessage("Algo deu errado. Tente novamente.");
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setMessage("");
  }, []);

  return { status, message, subscribe, reset };
}
