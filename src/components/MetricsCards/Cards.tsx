import type { ReactNode } from "react";

interface CardProps {
  value: string | number;
  label: string;
  description: string;
  tag?: string;
  icon?: ReactNode;
}

const Cards = ({ value, label, description, tag, icon }: CardProps) => {
  return (
    <div className="w-full p-5 sm:p-6 flex flex-col justify-between transperent-card rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-200 group">
      <div>
        <div className="flex items-center justify-between mb-3">
          {tag && (
            <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-sky-950/60 text-sky-400 border border-sky-500/20">
              {tag}
            </span>
          )}
          {icon && <div className="text-slate-400 group-hover:text-sky-400 transition-colors">{icon}</div>}
        </div>
        <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-mono">
          {value}
        </div>
        <div className="text-sm font-semibold text-slate-200 mb-1">{label}</div>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed mt-2 pt-2 border-t border-white/5">
        {description}
      </p>
    </div>
  );
};

export default Cards;
