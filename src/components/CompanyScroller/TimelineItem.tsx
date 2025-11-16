import React from "react";
import type { Experience } from "../../types/experience";

export const TimelineItem: React.FC<
  Experience & {
    isFirstItem?: boolean;
    isLastItem?: boolean;
    prevAccentEnd?: string;
  }
> = ({ accent, role, dateRange, responsibilities, prevAccentEnd }) => {
  return (
    <div className="relative pl-10 md:pl-14 py-8 md:py-10">
      {/* Top segment: from previous accent end (if provided) into this item start */}
      <span
        className="pointer-events-none absolute left-7 top-0 w-px -translate-x-1/2 transform z-0"
        style={{
          height: "2.5rem",
          background: `linear-gradient(180deg, ${
            prevAccentEnd ?? accent[0]
          } 0%, ${accent[0]} 100%)`,
        }}
      />
      {/* Bottom segment: from this item start down to this item end */}
      <span
        className="pointer-events-none absolute left-7 top-10 bottom-0 w-px -translate-x-1/2 transform z-0"
        style={{
          background: `linear-gradient(180deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
        }}
      />

      {/* Dot, centered over the line */}
      <span
        className="absolute left-7 top-10 -translate-x-1/2 -translate-y-1/2 transform w-4 h-4 md:w-5 md:h-5 rounded-full z-10 shadow-[0_0_0_2px_rgba(0,0,0,0.65)]"
        style={{
          background: `linear-gradient(180deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-lg md:text-2xl font-bold text-white">{role}</h3>
        <p className="text-sm text-gray-400 mb-3 md:mb-4">{dateRange}</p>
        <ul className="list-disc list-inside space-y-1 md:space-y-2 text-gray-200 text-sm md:text-base">
          {responsibilities.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
