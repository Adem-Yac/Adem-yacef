"use client";

import { FormEvent, useState } from "react";

import { useLocale } from "@/components/locale-provider";
import { social } from "@/data/portfolio";
import { WhatsAppIcon } from "@/components/brand-icons";
import { ClientReviews } from "@/components/client-reviews";

export function Contact() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const typeLabel = t.types.find((item) => item.value === projectType)?.label ?? projectType;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          fax_number: data.get("fax_number"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      const result = (await res.json()) as { ok?: boolean; mailed?: boolean };
      if (!result.mailed) {
        const subject = encodeURIComponent(`Portfolio — ${name} (${typeLabel})`);
        const body = encodeURIComponent(`${name}\n${email}\n${typeLabel}\n\n${message}`);
        window.location.href = `mailto:${social.emails.join(",")}?subject=${subject}&body=${body}`;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-6">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="type-tight font-display text-[3rem] leading-[0.92] font-bold text-ink sm:text-7xl">
            {t.contactTitle}
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-ink-soft">{t.contactLead}</p>

          <p className="mt-10 text-sm text-muted">{t.coords}</p>
          <ul className="mt-3 space-y-3">
            {social.emails.map((address) => (
              <li key={address}>
                <a href={`mailto:${address}`} className="link-underline text-xl font-semibold break-all text-ink sm:text-2xl">
                  {address}
                </a>
              </li>
            ))}
            <li>
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-base font-medium text-ink transition-colors hover:text-accent"
              >
                <WhatsAppIcon size={18} /> {t.labelPhone}
              </a>
            </li>
          </ul>
          <p className="mt-8 text-sm text-muted">
            {social.location[locale]}. {t.remote}.
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-[32px] bg-card p-6 sm:p-10 lg:col-span-6 lg:col-start-7">
          <input
            type="text"
            name="fax_number"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.formName}</span>
              <input
                id="contact-name"
                name="name"
                required
                minLength={2}
                maxLength={80}
                autoComplete="name"
                className="field"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.formEmail}</span>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                maxLength={120}
                autoComplete="email"
                className="field"
              />
            </label>
          </div>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.formType}</span>
            <select id="contact-type" name="projectType" required className="field cursor-pointer">
              {t.types.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.formMessage}</span>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={5}
              maxLength={2000}
              rows={5}
              className="field resize-y"
            />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="btn-ink w-full cursor-pointer rounded-full px-7 py-4 text-base font-semibold disabled:cursor-wait disabled:opacity-60"
          >
            {pending ? "…" : t.formSubmit}
          </button>
          <p aria-live="polite" className="text-sm">
            {status === "ok" ? (
              <span className="text-ink">
                {t.formOk} {t.formOkLead}
              </span>
            ) : null}
            {status === "error" ? <span className="text-red-700 dark:text-red-400">{t.formError}</span> : null}
          </p>
        </form>
      </div>
      <ClientReviews />
    </section>
  );
}
