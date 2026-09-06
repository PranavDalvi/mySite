import React from "react";
import ProjectHeader from "../../components/ProjectHeader/ProjectHeader";
import { Footer } from "../../components/Footer/Footer";
import ResumeDocument from "../../components/Resume/ResumeDocument";
import { printResumeDocument } from "../../components/Resume/ResumeModal";
import { Download, Sparkles } from "lucide-react";

export const ResumePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ProjectHeader title="Resume" backTo="/" />

      <main className="flex-1 max-w-5xl mx-auto px-4 py-6 md:py-8 space-y-6 w-full">
        {/* Actions Bar */}
        <div className="no-print flex flex-col sm:flex-row items-center justify-between gap-4 transperent-card p-4 sm:p-5 rounded-2xl border border-white/10 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-sky-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white leading-tight flex items-center gap-2">
                Live Generated Resume
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 border border-sky-500/20">
                  ATS Verified
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                Compiled dynamically from portfolio data • Clean 1-page standard layout
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={printResumeDocument}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-400 to-teal-300 text-slate-950 font-semibold shadow-md hover:from-sky-300 hover:to-teal-200 transition-all text-xs sm:text-sm cursor-pointer"
          >
            <Download size={15} /> Download PDF
          </button>
        </div>

        {/* Printable Resume Container */}
        <div className="py-2">
          <ResumeDocument />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
