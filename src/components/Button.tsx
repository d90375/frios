import clsx from "clsx";

type Props = {
  children: JSX.Element | string;
  active?: boolean;
  className?: string;
  variant?: "link" | "filled" | "rounded";
  size?: "s" | "xm" | "m" | "l";
  onClick: () => void;
  icon?: JSX.Element;
};

export const Button = ({
  children,
  active,
  className,
  size = "s",
  variant = "filled",
  onClick,
  icon,
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
          "text-quaternary bg-white hover:text-primary",
        variant === "link" &&
          !active &&
          "text-white bg-transparent hover:text-quaternary",
        variant === "filled" && "bg-primary text-white hover:bg-quaternary",
        variant === "rounded" &&
          "border !py-2 border-[#BDCFDB] hover:bg-gray-100",
        className
      )}
    >
      {children}
      {icon}
    </button>
  );
};

// #BDCFDB

// transition-all
