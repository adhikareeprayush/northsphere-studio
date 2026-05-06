"use client";

import { useState } from "react";
import { CONTACT_EMAIL, getFormSubmitContactUrl } from "@/lib/site";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return;
    }
    setStatus("sending");
    try {
      await fetch(getFormSubmitContactUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: `Newsletter signup — ${CONTACT_EMAIL}`,
          message: `Newsletter request from ${email}`,
        }),
      });
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="mt-8">
      <h5 className="mb-3 font-jakarta text-sm font-medium text-text-heading">
        Subscribe to our newsletter
      </h5>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex gap-2">
          <input
            type="email"
            name="newsletter-email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-stroke bg-surface-muted px-4 py-2.5 text-sm text-text-heading placeholder:text-text-body/60 focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="shrink-0 cursor-pointer rounded-full bg-accent px-5 py-2.5 font-manrope text-sm font-bold text-white transition-colors hover:bg-accent/90 disabled:opacity-60"
          >
            {status === "sending" ? "…" : "Subscribe"}
          </button>
        </div>
        {status === "done" && (
          <p className="text-xs text-green-700 font-jakarta">
            Thanks — check your inbox to confirm.
          </p>
        )}
        {status === "error" && (
          <p className="text-xs text-red-600 font-jakarta">
            Something went wrong. Try again or email us directly.
          </p>
        )}
      </form>
    </div>
  );
}
