import type { BatchProps } from "../../types/BatchProps";

const Batch = ({
    title,
    icon: Icon,
    backgroundColor = "fff",
    version = "latest",
}: BatchProps) => {
    return (
        <div
            className="flex items-center gap-2 rounded-full py-1 px-2 text-xs"
            title={version}
            style={{ backgroundColor }}
        >
            <Icon width={20} />
            <span>{title}</span>
        </div>
    );
};

export default Batch;
