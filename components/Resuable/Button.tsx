import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type: "button" | "submit";
  label?: string;
  className?: string;
  variant: "primary" | "secondary" | "outline";
  icon: ReactNode | null;
  iconPosition: "left" | "right";
  onClick?: () => void;
};

const Button = ({
  type,
  label,
  className,
  variant,
  icon,
  iconPosition,
  onClick,
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-4 rounded-full font-bold font-jakarta text-base flex items-center justify-between gap-8 cursor-pointer transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover [&_img]:brightness-0 [&_img]:invert [&_img]:opacity-100"
      : "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white hover:border-primary [&_img]:transition-[filter] hover:[&_img]:brightness-0 hover:[&_img]:invert";
  const combinedStyles = twMerge(baseStyles, variantStyles, className);

  return (
    <button type={type} className={combinedStyles} onClick={onClick}>
      {icon && iconPosition === "left" && icon}
      {label}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
