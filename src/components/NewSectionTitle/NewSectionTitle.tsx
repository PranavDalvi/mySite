import type { NewSectionTitleProps } from "../../types/NewSectionTitleProps";

export const NewSectionTitle: React.FC<NewSectionTitleProps> = ({
  icon: Icon,
  title,
  className,
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase text-[#d7ebff] bg-[rgba(11,25,45,0.78)] border border-[rgba(138,177,235,0.3)] shadow-[0_10px_28px_rgba(6,14,30,0.45)]">
        <span className="flex gap-2 items-center justify-center">
          <Icon width={20} /> {title}
        </span>
      </div>
    </div>
  );
};
