import React, { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  tag: string;
  title: string;
  description: string;
}

const ValueCard = ({ icon, tag, title, description }: ValueCardProps) => {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between transperent-card rounded-2xl border border-white/10 hover:border-sky-500/30 transition-all duration-200 group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-sky-400 group-hover:text-sky-300 group-hover:border-sky-500/30 transition-all">
            {icon}
          </div>
          <span className="font-mono text-[10px] tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-white/5">
            {tag}
          </span>
        </div>
        <h3 className="font-bold text-lg md:text-xl text-white mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
