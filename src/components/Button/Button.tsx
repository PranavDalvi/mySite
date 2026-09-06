import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm inline-flex items-center justify-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-sky-400 to-teal-300 hover:from-sky-300 hover:to-teal-200 text-slate-950 font-semibold shadow-md hover:shadow-lg active:scale-[0.98]",
    secondary:
      "bg-slate-900/90 text-slate-200 border border-white/10 hover:bg-slate-800 hover:border-sky-500/30 hover:text-white shadow-sm active:scale-[0.98]",
    outline:
      "bg-transparent text-slate-300 border border-white/10 hover:bg-white/5 hover:border-white/20 hover:text-white active:scale-[0.98]",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        {children}
      </div>
    </button>
  );
};

export default Button;
