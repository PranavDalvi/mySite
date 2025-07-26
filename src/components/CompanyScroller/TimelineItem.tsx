import React from "react";
import type { Experience } from "../../types/experience";

export const TimelineItem: React.FC<Experience> = ({
  logo,
  accent,
  role,
  dateRange,
  responsibilities,
  isLastItem,
}) => {
  return (
    <div className="flex items-start relative">
      {/* Vertical timeline line */}
      {!isLastItem && (
        <div
          className="absolute left-2 top-0 h-full w-px"
          style={{
            background: `linear-gradient(180deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
          }}
        />
      )}

      {/* Dot + its own segment */}
      <div className="flex flex-col items-center relative z-10">
        {/* Dot */}
        <div
          className="w-4 h-4 rounded-full"
          style={{
            background: `linear-gradient(180deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="ml-8 flex-1">
        <h3 className="text-2xl font-bold text-white">{role}</h3>
        <p className="text-gray-400 mb-4">{dateRange}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-200">
          {responsibilities.map((task, i) => (
            <li key={i}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
