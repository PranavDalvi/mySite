import type { NewSectionTitleProps } from "../../types/NewSectionTitleProps";

export const NewSectionTitle: React.FC<NewSectionTitleProps> = ({
    icon: Icon,
    title,
    className,
}) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="bg-[#17161a] inline-block px-4 py-2 rounded-lg text-sm font-medium text-white">
                <span className="flex gap-2 items-center justify-center">
                    <Icon width={20} /> {title}
                </span>
            </div>
        </div>
    );
};
