import type { NewSectionTitleProps } from "../../types/NewSectionTitleProps";

export const NewSectionTitle: React.FC<NewSectionTitleProps> = ({
  icon: Icon,
  title,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase text-sky-300 bg-sky-950/40 border border-sky-500/20 shadow-sm backdrop-blur-md">
        <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
        <span className="flex gap-1.5 items-center justify-center text-slate-200">
          <Icon className="w-3.5 h-3.5 text-sky-400" />
          <span className="text-[11px] font-mono tracking-widest text-slate-300">{title}</span>
        </span>
      </div>
    </div>
  );
};
