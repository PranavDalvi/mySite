import type { BatchProps } from "../../types/BatchProps";

const Batch = ({
  title,
  icon: Icon,
  backgroundColor = "#ffffff",
  version = "latest",
}: BatchProps) => {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full py-1 px-2 text-xs"
      title={version}
      style={{ backgroundColor }}
    >
      {Icon ? <Icon width={20} height={20} /> : null}
      <span className="truncate max-w-32 ml-1">{title}</span>
    </div>
  );
};

export default Batch;
