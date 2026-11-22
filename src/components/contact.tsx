"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
      <div className="flex items-baseline gap-3 border-t border-ink pt-3 font-code text-xs text-muted">
        <span className="text-ink">06</span>
        <span>{t.contactKicker}</span>
      </div>

      <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[2.6rem] leading-[1.02] font-light tracking-[-0.03em] text-ink sm:text-6xl">
            {t.contactTitle}
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-ink-soft">{t.contactLead}</p>

          <div className="mt-10">
            <p className="font-code text-xs text-muted">{t.coords}</p>
            <ul className="mt-3 space-y-2">
              {social.emails.map((address) => (
                <li key={address}>
                  <a href={`mailto:${address}`} className="link-underline break-all font-display text-xl text-ink sm:text-2xl">
                    {address}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-accent"
                >
                  <WhatsAppIcon size={16} /> {t.labelPhone}
                  <ArrowUpRight size={13} aria-hidden />
                </a>
              </li>
            </ul>
            <p className="mt-8 font-code text-xs text-muted">
              {social.location[locale]} — {t.remote}
            </p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-7 lg:col-span-6 lg:col-start-7 lg:pt-3">
          <input
            type="text"
            name="fax_number"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
            <label className="block">
              <span className="block text-sm text-muted">{t.formName}</span>
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
              <span className="block text-sm text-muted">{t.formEmail}</span>
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
            <span className="block text-sm text-muted">{t.formType}</span>
            <select id="contact-type" name="projectType" required className="field cursor-pointer">
              {t.types.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-sm text-muted">{t.formMessage}</span>
            <textarea
              id="contact-message"
              name="message"
              required
              minLength={5}
              maxLength={2000}
              rows={4}
              className="field resize-y"
            />
          </label>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={pending}
              className="btn-ink inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-medium disabled:cursor-wait disabled:opacity-60"
            >
              {pending ? "…" : t.formSubmit} <ArrowRight size={16} aria-hidden />
            </button>
            <p aria-live="polite" className="text-sm">
              {status === "ok" ? (
                <span className="text-ink">
                  {t.formOk} {t.formOkLead}
                </span>
              ) : null}
              {status === "error" ? <span className="text-accent-deep">{t.formError}</span> : null}
            </p>
          </div>
        </form>
      </div>
      <ClientReviews />
    </section>
  );
}
