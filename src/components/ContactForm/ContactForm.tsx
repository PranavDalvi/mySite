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
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Navigate to mailto to open user's mail client
    window.location.href = mailto;
  };

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
          className="w-full md:w-2/3 max-w-xl flex flex-col transperent-card p-6 rounded-3xl md:rounded-l-3xl md:rounded-r-none shadow-lg"
        >
          <div className="mb-4 mt-auto">
            <label
              htmlFor="name"
              className="block text-white font-semibold mb-2"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              className="w-full p-3 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4 mt-auto">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full p-3 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4 mt-auto">
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={5}
              className="w-full px-3 py-2 bg-[#1e1e1e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="mt-auto">
            <button
              type="submit"
              className="flex items-center justify-center gap-2 font-semibold bg-[#e9f1f9] text-black w-full py-3 rounded-lg hover:bg-[#d1e3f8] transition-colors"
            >
              Send Message <ArrowRight />
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/3 overflow-hidden shadow-lg rounded-3xl md:rounded-r-3xl md:rounded-l-none flex-shrink-0">
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
