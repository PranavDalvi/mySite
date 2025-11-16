import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button/Button";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [showNav, setShowNav] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const prevY = useRef<number>(
    typeof window !== "undefined" ? window.scrollY : 0
  );

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

  // show/hide navbar on scroll and toggle floaty appearance when at top
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const current = window.scrollY;
        // Consider "at top" when within first 20px
        if (current <= 20) {
          setIsAtTop(true);
          setShowNav(true);
        } else {
          setIsAtTop(false);
          // if scrolling down and past threshold, hide; if scrolling up, show
          if (current > prevY.current && current > 100 && !open) {
            setShowNav(false);
          } else {
            setShowNav(true);
          }
        }
        prevY.current = current;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    // Make the navbar sticky so it remains visible at the top while scrolling
    <nav
      className={`sticky z-50 transform transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "top-5" : "top-0"}`}
    >
      <div
        className={`nav-wrapper flex flex-row justify-between items-center gap-4 transperent-card p-5 rounded-xl transition-all duration-300 ${
          isAtTop ? "floaty" : "flat"
        }`}
      >
        <span className="text-shadow text-2xl font-semibold">Pranav Dalvi</span>

        {/* Desktop links */}
        <ul className="hidden md:flex flex-row gap-4 items-center">
          <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("work");
              }}
            >
              Work
            </a>
          </li>
          <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="hover:bg-[#EBF3FA] transition-colors hover:text-black p-2 rounded-lg">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("experience");
              }}
            >
              Experience
            </a>
          </li>
        </ul>

        {/* Mobile actions */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <Button onClick={() => scrollToId("contact")}>Contact Me</Button>
          </div>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile overlay (covers page when menu is open) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* Mobile menu panel */}
      <div
        ref={menuRef}
        className={`md:hidden absolute left-4 right-4 mt-2 bg-[#1b1b1b] rounded-xl shadow-lg overflow-hidden transition-max-h duration-300 ease-in-out z-50 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
  <div className={`flex flex-col p-5 gap-2`}>
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("work");
            }}
            className="p-2 rounded hover:bg-white/5"
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("skills");
            }}
            className="p-2 rounded hover:bg-white/5"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("experience");
            }}
            className="p-2 rounded hover:bg-white/5"
          >
            Experience
          </a>
          <div className="pt-2">
            <Button onClick={() => scrollToId("contact")} className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
