import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button = ({ children, onClick, className = "" }: ButtonProps) => {
  return (
    <button
      className={`p-2 bg-[#EBF3FA] text-black rounded-lg font-semibold ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {children}
      </div>
    </button>
  );
};

export default Button;
