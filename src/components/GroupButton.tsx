"use client";
import clsx from "clsx";
import { Tabs } from "./Blocks/Production";

type Props = {
  className?: string;
  children: Tabs[];
  currentValue: Tabs;
  onClick?: (val: Tabs) => void;
  size?: "s" | "m";
  additionalText?: string;
};

export const GroupButton = ({
  className,
  children,
  currentValue,
  onClick,
  size = "m",
  additionalText,
}: Props) => {
  return (
    <div
      className={clsx(
        "flex flex-row border overflow-hidden border-[#BDCFDB] divide-x divide-[#BDCFDB] rounded-[20px]",
        !onClick && "pointer-events-none",
        className
      )}
    >
      {children.map((el) => (
        <button
          className={clsx(
            "duration-75",
            size === "s"
              ? "px-[9px] py-[6px] text-[11px] font-roboto font-medium leading-[12px] tracking-[0.58px]"
              : "px-10 py-4 leading-5 font-roboto-cond font-bold",
            currentValue.value === el.value
              ? "bg-primary text-white hover:bg-quaternary"
              : "bg-white text-text hover:bg-gray-100"
          )}
          key={el.value}
          onClick={() => {
            onClick?.(el);
          }}
        >
          {el.label}{" "}
          {additionalText && (
            <span className="text-[10px]">{additionalText}</span>
          )}
        </button>
      ))}
    </div>
  );
};
