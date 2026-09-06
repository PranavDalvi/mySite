import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full mt-20 pt-8 pb-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-2 text-xs text-slate-400">
      <div className="flex items-center gap-2">
        <span className="font-mono font-bold text-white">PD</span>
        <span>•</span>
        <span>Pranav Dalvi — Software Engineer</span>
      </div>

      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pranav-dalvi-03947a207"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile in a new tab"
          className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all"
        >
          <Linkedin size={16} />
        </a>
        <a
          target="_blank"
          href="https://github.com/PranavDalvi"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile in a new tab"
          className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all"
        >
          <Github size={16} />
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            const el = document.getElementById("contact");
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Go to Contact form"
          className="p-2 rounded-lg bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-300 hover:text-white transition-all"
        >
          <Mail size={16} />
        </a>
      </div>

      <div className="font-mono text-[11px] text-slate-500">
        &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};
