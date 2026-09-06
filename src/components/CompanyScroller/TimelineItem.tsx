import type { Experience } from "../../types/experience";

const renderFormattedText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
};

interface TimelineItemProps extends Experience {
  isFirstItem?: boolean;
  isLastItem?: boolean;
  prevAccentEnd?: string;
}

export const TimelineItem = ({
  role,
  dateRange,
  responsibilities,
  company,
  location,
  projectName,
}: TimelineItemProps) => {
  return (
    <div className="transperent-card p-5 md:p-7 rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-200">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg md:text-xl font-bold text-white">
            {role}
          </h3>
          <span className="text-slate-400 font-normal">@</span>
          <span className="font-semibold text-sky-300">
            {company}
          </span>
        </div>
        <div className="text-xs font-mono text-slate-400 whitespace-nowrap">
          {dateRange} {location && `• ${location}`}
        </div>
      </div>

        {/* Project Tag on Dedicated Second Line */}
        {projectName && (
          <div className="flex items-center mb-3">
            <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-950/60 text-sky-400 border border-sky-500/20">
              {projectName}
            </span>
          </div>
        )}

        <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc ml-4">
          {responsibilities.map((task, i) => (
            <li key={i} className="pl-1">
              {renderFormattedText(task)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
