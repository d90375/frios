import clsx from "clsx";
import { MouseEventHandler } from "react";

type Props = {
  children: JSX.Element | string;
  active?: boolean;
  className?: string;
  variant?: "link" | "filled" | "rounded";
  size?: "s" | "xm" | "m" | "l";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
  disabled?: boolean;
};

export const Button = ({
  children,
  active,
  className,
  size = "s",
  variant = "filled",
  onClick,
  icon,
  disabled,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "leading-tight text-base font-roboto-cond font-bold duration-100 active:shadow-lg",
        size === "s" && "px-3 py-1.5 rounded-lg",
        size === "xm" && "w-full py-[10px] rounded-[10px]",
        size === "m" && "px-5 py-3 rounded-lg",
        size === "l" && "px-10 py-4 rounded-[10px]",
        variant === "link" &&
          active &&
          "text-quaternary bg-transparent hover:text-primary hover:bg-white",
        variant === "link" &&
          !active &&
          "text-white bg-transparent hover:text-quaternary hover:bg-white",
        variant === "filled" && "bg-primary text-white hover:bg-quaternary",
        variant === "rounded" &&
          "border !py-2 border-[#BDCFDB] bg-white text-text hover:bg-gray-100",
        disabled && "pointer-events-none !bg-disabled",
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};
