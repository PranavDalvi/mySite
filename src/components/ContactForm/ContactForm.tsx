import React, { useState } from "react";
import { ArrowRight, Mail, Check, Copy } from "lucide-react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import cimage from "../../assets/contactForm/image 188.png";

export const ContactForm = () => {
  const recipient = "pranav.dalvi932@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(recipient);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const message = (fd.get("message") as string) || "";

    const subject = `Contact from ${name || "Website Visitor"}`;
    const bodyLines = [`Name: ${name}`, `Email: ${email}`, "", message];
    const body = bodyLines.join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

  const fieldLabelClass =
    "block text-slate-200 font-medium mb-1.5 text-xs uppercase tracking-wider font-mono";

  const fieldClass =
    "w-full p-3 bg-slate-950/80 text-white rounded-xl border border-white/10 placeholder:text-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/40 transition-all text-sm";

  return (
    <div className="mt-14 md:mt-24">
      <NewSectionTitle
        className="mb-4"
        icon={Mail}
        title="Direct Communication"
      />

      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          Let's Build Something High-Impact
        </h2>
        <p className="text-sm md:text-base text-slate-400 max-w-xl mx-auto mt-2">
          Available for engineering roles, technical collaboration, and system consulting.
        </p>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-6 items-stretch justify-center px-4 md:px-0 max-w-4xl mx-auto">
        <div className="w-full md:w-3/5 flex flex-col transperent-card p-6 md:p-8 rounded-2xl border border-white/10 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col flex-1">
            <div className="mb-4">
              <label htmlFor="name" className={fieldLabelClass}>
                Your Name <span className="text-sky-400">*</span>
              </label>
              <input
                name="name"
                type="text"
                id="name"
                required
                className={fieldClass}
                placeholder="e.g. Alex Smith"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className={fieldLabelClass}>
                Email Address <span className="text-sky-400">*</span>
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className={fieldClass}
                placeholder="alex@company.com"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="message" className={fieldLabelClass}>
                Project Details / Message <span className="text-sky-400">*</span>
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                required
                className={`${fieldClass} resize-y min-h-24`}
                placeholder="Describe your project, role, or technical problem..."
              ></textarea>
            </div>
            <div className="mt-auto flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-sky-400 to-teal-300 hover:from-sky-300 hover:to-teal-200 transition-all shadow-md text-sm cursor-pointer"
              >
                Send Message <ArrowRight size={16} />
              </button>
              <button
                type="button"
                onClick={copyEmail}
                className="px-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-slate-300 hover:text-white hover:border-white/20 transition-all text-xs font-mono inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-400" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} className="text-slate-400" /> Copy Direct Email
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        <div className="w-full md:w-2/5 overflow-hidden transperent-card rounded-2xl flex-shrink-0 border border-white/10 shadow-xl hidden sm:block">
          <img
            src={cimage}
            alt="Contact"
            loading="lazy"
            className="w-full h-full object-cover object-center block min-h-64"
          />
        </div>
      </div>
    </div>
  );
};
