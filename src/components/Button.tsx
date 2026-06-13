import type { ButtonHTMLAttributes } from "react";

type ButtonProps =
  ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        rounded-lg
        px-6
        py-3
        font-medium
        transition
        hover:opacity-90
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;