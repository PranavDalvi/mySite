import React, { useEffect } from "react";
import { X, Printer, Download, Sparkles, ExternalLink } from "lucide-react";
import ResumeDocument from "./ResumeDocument";
import { Link } from "react-router-dom";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const printResumeDocument = () => {
  const resumeEl = document.getElementById("printable-resume");
  if (!resumeEl) {
    window.print();
    return;
  }

  // Create an isolated printable iframe for clean PDF generation without UI clutter
  const iframe = document.createElement("iframe");
  iframe.style.position = "fixed";
  iframe.style.right = "0";
  iframe.style.bottom = "0";
  iframe.style.width = "0";
  iframe.style.height = "0";
  iframe.style.border = "0";
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow?.document;
  if (!doc) {
    window.print();
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>Pranav_Dalvi_Resume</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
          @page {
            size: letter;
            margin: 10mm 14mm 10mm 14mm;
          }
          body {
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            background: white !important;
            color: #1a202c !important;
            margin: 0;
            padding: 0;
          }
          a {
            text-decoration: none;
            color: #1d4ed8;
          }
          #printable-resume {
            box-shadow: none !important;
            border: none !important;
            padding: 0 !important;
            max-width: 100% !important;
          }
        </style>
      </head>
      <body>
        ${resumeEl.outerHTML}
      </body>
    </html>
  `;

  doc.open();
  doc.write(htmlContent);
  doc.close();

  iframe.contentWindow?.focus();
  setTimeout(() => {
    iframe.contentWindow?.print();
    setTimeout(() => {
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
    }, 2500);
  }, 400);
};

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-slate-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3.5 border-b border-white/10 bg-slate-950/90">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-slate-900 border border-white/10 text-sky-400">
              <Sparkles size={16} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-white leading-tight flex items-center gap-2">
                Live Resume Builder
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/20">
                  ATS Standard
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Generated dynamically from portfolio state
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={printResumeDocument}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-sky-400 to-teal-300 text-slate-950 hover:from-sky-300 hover:to-teal-200 transition-all cursor-pointer shadow-sm"
            >
              <Download size={14} /> Download PDF
            </button>

            <Link
              to="/resume"
              onClick={onClose}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:bg-white/5 transition-all"
            >
              <ExternalLink size={12} /> Full Page
            </Link>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Document Viewer */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-slate-950/90">
          <ResumeDocument />
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
