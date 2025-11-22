import React from "react";
import { ArrowBigLeftDash, Link2 } from "lucide-react";
import { Link } from "react-router";

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
  return (
    <header className="sticky top-0 z-40">
      <div className="bg-[#1b1b1b] transperent-card rounded-xl p-2 my-2 flex flex-row gap-4 md:gap-0 items-center justify-between">
        <Link
          to={backTo}
          aria-label="Go back"
          className="inline-flex items-center justify-center p-2 text-white bg-[#0e0e10] border-2 border-[#27272b] hover:bg-white hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
        >
          <ArrowBigLeftDash />
          <span className="sr-only">Back</span>
        </Link>

        <h1 className="text-center md:text-left text-2xl font-semibold bg-[#0e0e10] border-2 border-[#27272b] py-2 px-4 rounded-full">
          {title}
        </h1>

        {url ? (
          <a
            className="inline-flex items-center justify-center p-2 text-white bg-[#0e0e10] border-2 border-[#27272b] hover:bg-white hover:text-black rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${title} external link (opens in a new tab)`}
          >
            <Link2 />
            <span className="sr-only">Open repository</span>
          </a>
        ) : (
          <div />
        )}
      </div>
    </header>
  );
};

export default ProjectHeader;
