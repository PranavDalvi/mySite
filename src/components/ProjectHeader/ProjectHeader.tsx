import React from "react";
import { ArrowBigLeftDash, Link2 } from "lucide-react";
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
    <header className="sticky top-0 z-40 px-2 md:px-4">
      <div className="transperent-card rounded-2xl p-2.5 my-2 flex flex-row gap-3 md:gap-0 items-center justify-between border border-[rgba(145,182,232,0.26)] shadow-[0_16px_30px_rgba(3,8,16,0.44)]">
        <button
          type="button"
          onClick={handleGoBack}
          aria-label="Go back"
          className="inline-flex items-center justify-center p-2.5 text-[#dfecff] bg-[rgba(11,24,44,0.85)] border border-[rgba(145,182,232,0.34)] hover:bg-[rgba(128,189,255,0.22)] hover:text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(122,196,255,0.5)]"
        >
          <ArrowBigLeftDash size={20} />
          <span className="sr-only">Back</span>
        </button>

        <h1 className="display-face text-center md:text-left text-xl md:text-2xl font-semibold bg-[rgba(11,24,44,0.85)] border border-[rgba(145,182,232,0.34)] text-[#edf6ff] py-2 px-4 md:px-5 rounded-full">
          {title}
        </h1>

        {url ? (
          <a
            className="inline-flex items-center justify-center p-2.5 text-[#dfecff] bg-[rgba(11,24,44,0.85)] border border-[rgba(145,182,232,0.34)] hover:bg-[rgba(128,189,255,0.22)] hover:text-white rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[rgba(122,196,255,0.5)]"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} external link (opens in a new tab)`}
          >
            <Link2 size={20} />
            <span className="sr-only">Open repository</span>
          </a>
        ) : (
          <div className="w-10 h-10" aria-hidden />
        )}
      </div>
    </header>
  );
};

export default ProjectHeader;
