import { useState } from "react";
import { ArrowDown, Mail, Check, Copy } from "lucide-react";
import Button from "../Button/Button";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#work";
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = "#contact";
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("pranav.dalvi932@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section-fade mt-10 md:mt-20 py-8 md:py-16 flex flex-col items-center justify-center text-center px-4 w-full">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Status indicator pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-xs font-medium text-emerald-300 shadow-sm backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-[11px] tracking-wide uppercase">Available for High-Impact Roles</span>
          <span className="text-slate-500">•</span>
          <span className="text-slate-300 text-[11px]">Mumbai, India</span>
        </div>

        {/* Tagline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 max-w-5xl">
          Architecting{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-300">
            High-Throughput LLMs
          </span>{" "}
          & Distributed Backends.
        </h1>

        {/* Description */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto mb-10">
          Hi, I'm <strong className="text-white font-semibold">Pranav Dalvi</strong>, a Software Engineer at{" "}
          <span className="text-sky-300 font-medium">IIT Bombay</span> and ex-Full Stack Developer at{" "}
          <span className="text-indigo-300 font-medium">Excellitude</span>. I specialize in vLLM inference orchestration, real-time WebSockets, and low-latency cloud infrastructure.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Button onClick={scrollToWork} className="text-sm px-6 py-3.5">
            See My Work <ArrowDown size={16} />
          </Button>
          <Button variant="secondary" onClick={scrollToContact} className="text-sm px-6 py-3.5">
            <Mail size={16} /> Contact Me
          </Button>
          <button
            type="button"
            onClick={copyEmail}
            title="Copy email to clipboard"
            className="px-5 py-3.5 rounded-xl border border-white/10 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-all text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer shadow-sm"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400" /> Copied Email
              </>
            ) : (
              <>
                <Copy size={14} className="text-slate-400" /> Copy Direct Email
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
