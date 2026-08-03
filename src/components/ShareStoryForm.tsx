"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const RELATIONSHIPS = [
  "I live with Graves' disease",
  "I care for someone with Graves'",
  "I'm a healthcare professional",
  "Prefer not to say",
];

export function ShareStoryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFieldErrors({});
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const story = String(data.get("story") ?? "").trim();
    const consent = data.get("consent") === "on";

    const errs: Record<string, string> = {};
    if (story.length < 20) {
      errs.story = "Please share at least a sentence or two (20+ characters).";
    }
    if (!consent) {
      errs.consent = "We need your consent before we can accept your story.";
    }
    if (Object.keys(errs).length) {
      setFieldErrors(errs);
      // Move focus to the first error for screen-reader users.
      const first = Object.keys(errs)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          alias: String(data.get("alias") ?? "").trim(),
          relationship: String(data.get("relationship") ?? "").trim(),
          region: String(data.get("region") ?? "").trim(),
          story,
          consent,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your story. Please try again in a moment."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-3xl border border-sky/40 bg-sky/5 p-8 text-center md:p-12"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sky text-navy-900">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mt-5 font-display text-2xl font-medium text-navy">
          Thank you for sharing
        </h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink/80">
          Your story helps unmask Graves&rsquo; disease for someone who may feel
          alone right now. Every voice makes the community stronger.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-navy/25 px-6 py-2.5 text-sm font-semibold text-navy hover:bg-navy/5"
        >
          Share another story
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-7">
      <div className="rounded-2xl bg-paper p-5 text-sm leading-relaxed text-ink/80">
        <strong className="font-semibold text-navy">Your privacy comes first.</strong>{" "}
        We never publish real names. Share only what you&rsquo;re comfortable
        making public. You can choose a display name or stay anonymous, and you
        may ask us to remove your story at any time.
      </div>

      <Field
        label="Display name (optional)"
        hint="Shown publicly if you choose. Leave blank to appear as “Anonymous.” Please don't enter your real full name."
      >
        <input
          type="text"
          name="alias"
          autoComplete="off"
          maxLength={40}
          placeholder="e.g. A community member"
          className={inputClass}
        />
      </Field>

      <Field label="How Graves' disease touches your life (optional)">
        <select name="relationship" defaultValue="" className={inputClass}>
          <option value="" disabled>
            Select one…
          </option>
          {RELATIONSHIPS.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label="Region (optional)"
        hint="A state or country only — nothing that could identify you."
      >
        <input
          type="text"
          name="region"
          autoComplete="off"
          maxLength={60}
          placeholder="e.g. Ohio, US"
          className={inputClass}
        />
      </Field>

      <Field
        label="Your story"
        required
        error={fieldErrors.story}
        hint="What has living with — or alongside — Graves' disease been like for you?"
      >
        <textarea
          name="story"
          required
          rows={7}
          maxLength={2000}
          aria-invalid={Boolean(fieldErrors.story)}
          className={`${inputClass} resize-y`}
          placeholder="Share as much or as little as you'd like…"
        />
      </Field>

      <div className="rounded-2xl border border-navy/10 p-5">
        <label className="flex items-start gap-3 text-sm leading-relaxed text-ink/85">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={Boolean(fieldErrors.consent)}
            className="mt-1 h-5 w-5 shrink-0 rounded border-navy/30 text-sky focus:ring-sky"
          />
          <span>
            I consent to my story being shared publicly for awareness purposes,
            without my name, and I understand I can request its removal at any
            time. I&rsquo;ve read the{" "}
            <a href="/privacy" className="link-underline">
              Privacy Policy
            </a>
            . <span className="text-sky-700">*</span>
          </span>
        </label>
        {fieldErrors.consent && (
          <p role="alert" className="mt-2 pl-8 text-sm font-medium text-purple">
            {fieldErrors.consent}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="rounded-xl bg-purple/10 px-4 py-3 text-sm font-medium text-purple">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-navy px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Share my story"}
      </button>

      <p className="text-sm text-muted">
        This form is for awareness storytelling only. It is not a way to reach a
        healthcare provider and cannot be used for medical questions or
        emergencies.
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-navy/20 bg-white px-4 py-3 text-base text-ink placeholder:text-muted/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-sky/40";

function Field({
  label,
  hint,
  error,
  required,
  children,
}: {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-base font-semibold text-navy">
        {label}
        {required && <span className="text-sky-700"> *</span>}
      </span>
      {hint && <span className="mb-2 block text-sm text-muted">{hint}</span>}
      {children}
      {error && (
        <span role="alert" className="mt-2 block text-sm font-medium text-purple">
          {error}
        </span>
      )}
    </label>
  );
}
