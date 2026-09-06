import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectHeaderProps {
  title: string;
  url?: string;
  backTo?: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  url,
  backTo = "/",
}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }

    navigate(backTo, { replace: true });
  };

  return (
    <header className="sticky top-4 z-40 px-2 md:px-0 mb-6">
      <div className="transperent-card rounded-2xl p-3 flex items-center justify-between border border-white/10 shadow-xl backdrop-blur-xl">
        <button
          type="button"
          onClick={handleGoBack}
          aria-label="Go back"
          className="inline-flex items-center justify-center p-2 text-slate-300 bg-slate-900 border border-white/10 hover:border-sky-500/30 hover:text-white rounded-xl transition-all cursor-pointer text-xs font-medium gap-1.5"
        >
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Back</span>
        </button>

        <h1 className="text-center text-base md:text-lg font-bold text-white tracking-tight px-3">
          {title}
        </h1>

        {url ? (
          <a
            className="inline-flex items-center justify-center p-2 text-slate-300 bg-slate-900 border border-white/10 hover:border-sky-500/30 hover:text-white rounded-xl transition-all text-xs font-medium gap-1.5"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} external link (opens in a new tab)`}
          >
            <span className="hidden sm:inline">Open Link</span>
            <ExternalLink size={14} className="text-sky-400" />
          </a>
        ) : (
          <div className="w-16" aria-hidden />
        )}
      </div>
    </header>
  );
};

export default ProjectHeader;
