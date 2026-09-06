import React from "react";
import type { BatchProps } from "../../types/BatchProps";

const Batch = ({
  title,
  icon: Icon,
  backgroundColor = "#38bdf8",
  version = "latest",
}: BatchProps) => {
  return (
    <div
      className="inline-flex items-center gap-1.5 rounded-md py-0.5 px-2 text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-white/10 hover:border-sky-400/30 hover:text-white transition-all duration-150"
      title={version}
    >
      {Icon ? (
        <span
          className="flex-shrink-0 flex items-center justify-center opacity-85"
          style={{ color: backgroundColor }}
        >
          <Icon width={12} height={12} />
        </span>
      ) : (
        <span
          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
          style={{ backgroundColor }}
        />
      )}
      <span className="truncate max-w-32">{title}</span>
    </div>
  );
};

export default Batch;
