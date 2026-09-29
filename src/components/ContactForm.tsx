"use client";
import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { services, site, whatsappUrl } from "@/lib/site";
import Reveal from "@/components/Reveal";

const field =
  "mt-1 w-full rounded-lg border px-3 py-2.5 text-sm placeholder:text-gray-400 focus:border-brand focus:outline-none";
const serviceOptions = [...services.map((s) => s.title), "Other"];

type Errors = Partial<Record<"name" | "phone" | "email", string>>;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s+()-]{7,}$/;

// No backend yet: submitting opens WhatsApp or the visitor's email app with
// the enquiry pre-filled, once the form passes validation.
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  function validate(d: FormData): Errors {
    const name = String(d.get("name") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    const email = String(d.get("email") || "").trim();
    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!phone) next.phone = "Please enter your phone number.";
    else if (!PHONE_RE.test(phone)) next.phone = "Please enter a valid phone number.";
    if (email && !EMAIL_RE.test(email)) next.email = "Please enter a valid email address.";
    return next;
  }

  function buildMessage(d: FormData) {
    const chosen = d.getAll("services").join(", ") || "-";
    return [
      `New enquiry from ${d.get("name")}`,
      `Phone: ${d.get("phone")}`,
      `Email: ${d.get("email") || "-"}`,
      `Services: ${chosen}`,
      `Message: ${d.get("message") || "-"}`,
    ].join("\n");
  }

  function onWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const errs = validate(d);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(buildMessage(d))}`, "_blank", "noopener");
    setSentVia("whatsapp");
  }

  function onEmail(e: React.MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.form;
    if (!form) return;
    const d = new FormData(form);
    const errs = validate(d);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const subject = encodeURIComponent(`New enquiry from ${d.get("name")}`);
    const body = encodeURIComponent(buildMessage(d));
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSentVia("email");
  }

  return (
    <Reveal as="section" className="mx-auto flex max-w-6xl flex-col overflow-hidden rounded-2xl shadow-xl md:flex-row">
      {/* Left panel */}
      <div className="bg-brand p-8 text-white sm:p-10 md:w-[340px] md:shrink-0">
        <h2 className="text-2xl font-bold">Get in touch</h2>
        <p className="mt-2 text-sm text-white/80">
          We&apos;d love to hear from you. Our friendly team is always here to chat.
        </p>

        <ul className="mt-10 space-y-8 text-sm">
          <li className="flex gap-3">
            <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold">Chat to us</p>
              <p className="mt-1 text-white/80">Our friendly team is here to help.</p>
              <a href={`mailto:${site.email}`} className="mt-1 block underline underline-offset-2">{site.email}</a>
            </div>
          </li>
          <li className="flex gap-3">
            <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold">Office</p>
              <p className="mt-1 text-white/80">Come say hello at our office.</p>
              <p className="mt-1">{site.address.locality}, {site.address.region}, India</p>
            </div>
          </li>
          <li className="flex gap-3">
            <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="mt-1 text-white/80">Mon–Sat, business hours.</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="mt-1 block underline underline-offset-2">
                {site.phone}
              </a>
            </div>
          </li>
        </ul>

        <div className="mt-10 flex gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ZynorTech on Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25"
          >
            <SiInstagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ZynorTech on WhatsApp"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 hover:bg-white/25"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 bg-white p-8 sm:p-10">
        <h2 className="text-2xl font-bold">Level up your brand</h2>
        <p className="mt-2 text-sm text-gray-600">
          You can reach us anytime via{" "}
          <a href={`mailto:${site.email}`} className="text-brand underline underline-offset-2">{site.email}</a>
        </p>

        <form onSubmit={onWhatsApp} noValidate className="mt-6 space-y-4">
          <label className="block text-sm font-medium">
            Name
            <input
              name="name"
              autoComplete="name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              className={`${field} ${errors.name ? "border-red-400" : "border-gray-300"}`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium">
              Email
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                className={`${field} ${errors.email ? "border-red-400" : "border-gray-300"}`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </label>
            <label className="block text-sm font-medium">
              Phone number
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                aria-invalid={!!errors.phone}
                className={`${field} ${errors.phone ? "border-red-400" : "border-gray-300"}`}
              />
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </label>
          </div>
          <label className="block text-sm font-medium">
            How can we help?
            <textarea name="message" rows={3} placeholder="Tell us a little about your business…" className={`${field} border-gray-300`} />
          </label>

          <fieldset>
            <legend className="text-sm font-medium text-gray-700">Services</legend>
            <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {serviceOptions.map((s) => (
                <label key={s} className="flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" name="services" value={s} className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand" />
                  {s}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="flex-1 rounded-lg bg-brand py-3 font-semibold text-white hover:bg-brand-dark">
              Send via WhatsApp
            </button>
            <button
              type="button"
              onClick={onEmail}
              className="flex-1 rounded-lg border border-brand py-3 font-semibold text-brand hover:bg-brand/5"
            >
              Send via Email
            </button>
          </div>
          {sentVia === "whatsapp" && (
            <p role="status" className="text-sm text-green-700">Opening WhatsApp… we&apos;ll reply shortly.</p>
          )}
          {sentVia === "email" && (
            <p role="status" className="text-sm text-green-700">Opening your email app… we&apos;ll reply shortly.</p>
          )}
        </form>
      </div>
    </Reveal>
  );
}
