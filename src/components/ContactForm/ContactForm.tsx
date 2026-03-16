import React from "react";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { NewSectionTitle } from "../NewSectionTitle/NewSectionTitle";
import cimage from "../../assets/contactForm/image 188.png";

export const ContactForm = () => {
  // Change this to the desired recipient email or leave empty to let user choose in mail client
  const recipient = "pranav.dalvi932@gmail.com"; // e.g. "hello@yourdomain.com"

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

    // Build mailto URL. If `recipient` is empty, mailto: will open compose without a 'to' address.
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    // Navigate to mailto to open user's mail client
    window.location.href = mailto;
  };

  const fieldLabelClass =
    "block text-[#e8f3ff] font-semibold mb-2 text-sm tracking-wide";

  const fieldClass =
    "w-full p-3.5 bg-[rgba(10,22,41,0.78)] text-[#ecf5ff] rounded-xl border border-[rgba(128,171,235,0.3)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] placeholder:text-[#8ea6c9] focus:outline-none focus:ring-2 focus:ring-[rgba(109,188,255,0.45)] focus:border-[rgba(122,196,255,0.7)] transition-colors duration-200";

  return (
    <div>
      <NewSectionTitle
        className="mt-10 mb-6"
        icon={MessageCircleMore}
        title="Have a question or idea? Let's connect!"
      />
      <div className="flex flex-col-reverse md:flex-row gap-8 items-stretch justify-center px-4 md:px-0">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-2/3 max-w-xl flex flex-col transperent-card p-6 md:p-7 rounded-3xl md:rounded-l-3xl md:rounded-r-none shadow-[0_20px_42px_rgba(5,10,20,0.5)] border border-[rgba(135,175,236,0.24)]"
        >
          <div className="mb-4 mt-auto">
            <label htmlFor="name" className={fieldLabelClass}>
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className={fieldClass}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4 mt-auto">
            <label htmlFor="email" className={fieldLabelClass}>
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className={fieldClass}
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 mt-auto">
            <label htmlFor="message" className={fieldLabelClass}>
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className={`${fieldClass} resize-y min-h-32`}
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mt-auto">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-[#071322] bg-gradient-to-r from-[#7fd0ff] to-[#9df7e0] shadow-[0_12px_26px_rgba(32,118,176,0.35)] hover:translate-y-[-1px] hover:shadow-[0_16px_30px_rgba(25,110,168,0.42)] active:translate-y-0 transition-all duration-200"
            >
              Send Message <ArrowRight />
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/3 overflow-hidden transperent-card rounded-3xl md:rounded-r-3xl md:rounded-l-none flex-shrink-0 border border-[rgba(135,175,236,0.24)] shadow-[0_20px_42px_rgba(5,10,20,0.5)]">
          <img
            src={cimage}
            alt="Contact"
            loading="lazy"
            className="w-full h-full object-cover object-center block"
          />
        </div>
      </div>
    </div>
  );
};
