import { useState, useEffect, useRef } from "react";
import useScrollNav from "../../hooks/useScrollNav";
import { Menu, X, FileText } from "lucide-react";
import Button from "../Button/Button";
import ResumeModal from "../Resume/ResumeModal";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { showNav, isAtTop } = useScrollNav(open);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback: update the hash so browser can try to scroll
      window.location.hash = `#${id}`;
    }
    setOpen(false); // close mobile menu after navigation
  };

  // We use an overlay to close the menu on outside clicks (more reliable on mobile)

  // close menu when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Scroll behaviour is handled by `useScrollNav` hook

  return (
    <>
      {/* Make the navbar sticky so it remains visible at the top while scrolling */}
      <nav
        className={`sticky z-50 transform transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${isAtTop ? "top-5" : "top-0"}`}
      >
        <div
          className={`nav-wrapper flex flex-row justify-between items-center gap-4 transperent-card p-3.5 md:p-4 rounded-2xl transition-all duration-300 ${
            isAtTop ? "floaty" : "flat"
          }`}
        >
          <div
            className="cursor-pointer flex items-center gap-2.5"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono font-bold text-sky-400 text-sm shadow-sm">
              PD
            </div>
            <span className="font-bold text-base md:text-lg tracking-tight text-white hover:text-sky-300 transition-colors">
              Pranav Dalvi
            </span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex flex-row gap-1 items-center bg-slate-950/60 p-1 rounded-xl border border-white/5">
            <li>
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("work");
                }}
                className="px-3 py-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all text-xs font-medium"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("experience");
                }}
                className="px-3 py-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all text-xs font-medium"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId("skills");
                }}
                className="px-3 py-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all text-xs font-medium"
              >
                Skills
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsResumeOpen(true)}
                className="px-3 py-2 text-xs font-medium rounded-xl text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1.5 font-mono"
              >
                <FileText size={13} className="text-sky-400" /> Resume
              </button>
              <Button onClick={() => scrollToId("contact")} className="text-xs py-2 px-3.5">
                Contact
              </Button>
            </div>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-2.5 rounded-xl hover:bg-white/10 border border-white/10 text-slate-300 transition-colors flex items-center justify-center min-w-[40px] min-h-[40px]"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setOpen(false)}
            aria-hidden
          />
        )}

        {/* Mobile menu panel */}
        <div
          ref={menuRef}
          className={`md:hidden absolute left-4 right-4 mt-2 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-50 ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col p-4 gap-1.5">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("work");
              }}
              className="p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center min-h-[44px]"
            >
              Work
            </a>
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("experience");
              }}
              className="p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center min-h-[44px]"
            >
              Experience
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("skills");
              }}
              className="p-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 text-sm font-medium flex items-center min-h-[44px]"
            >
              Skills
            </a>
            <div className="pt-2 flex flex-col gap-2 border-t border-white/10 mt-1">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setIsResumeOpen(true);
                }}
                className="w-full text-center py-3 rounded-xl text-xs font-mono font-medium text-slate-200 border border-white/10 hover:bg-white/5 cursor-pointer inline-flex items-center justify-center gap-2 min-h-[44px]"
              >
                <FileText size={15} className="text-sky-400" /> View Resume
              </button>
              <Button onClick={() => scrollToId("contact")} className="w-full text-xs py-3 min-h-[44px]">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Resume Builder Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
};

export default Navigation;
