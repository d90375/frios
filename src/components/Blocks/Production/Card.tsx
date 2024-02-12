"use client";
import { Button } from "@/components/Button";
import { GroupButton } from "@/components/GroupButton";
import { sizeRect } from "@/data";
import clsx from "clsx";

import Image from "next/image";
import Link from "next/link";

type CardProp = {
  url: string;
  title: string;
  descriptionList: string[];
  description: string;
  size: string;
  price: number;
  className?: string;
};
export const Card = ({
  url,
  title,
  descriptionList,
  description,
  size,
  price,
  className,
}: CardProp) => {
  return (
    <div
      className={clsx(
        "p-5 bg-white flex flex-col rounded-[20px] w-[253px] h-[650px]",
        className
      )}
    >
      <Image
        className="rounded-[8px] w-full h-auto px-5 pb-5"
        src={url}
        alt={title}
        width="0"
        height="0"
        sizes="100vw"
      />
      <h4 className="text-[20px] font-bold leading-tight tracing-[0.25px]">
        {title}
      </h4>
      <ul className="text-[#333333] flex mt-1 flex-col text-sm">
        {descriptionList.map((el) => (
          <div key={el} className="inline-flex items-center gap-1">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_6214_1201)">
                <circle cx="4" cy="4" r="4" fill="white" />
                <path
                  d="M4 0C1.8 0 0 1.8 0 4C0 6.2 1.8 8 4 8C6.2 8 8 6.2 8 4C8 1.8 6.2 0 4 0ZM6.23333 3.06667L3.8 5.8C3.7 5.9 3.56667 5.96667 3.43333 5.96667C3.3 5.96667 3.16667 5.9 3.06667 5.83333L1.8 4.56667C1.6 4.36667 1.6 4.06667 1.8 3.86667C2 3.66667 2.3 3.66667 2.5 3.83333L3.4 4.73333L5.5 2.36667C5.66667 2.2 5.96667 2.16667 6.2 2.33333C6.4 2.53333 6.4 2.83333 6.23333 3.06667Z"
                  fill="#78909C"
                />
              </g>
              <defs>
                <clipPath id="clip0_6214_1201">
                  <rect width="8" height="8" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <li className="leading-[20px]" key={el}>
              {el}
            </li>
          </div>
        ))}
      </ul>
      <p className="text-[#333333] text-[13px] leading-[20px]">{description}</p>
      <div className="mt-4 flex flex-col">
        <span className="mb-[4px] text-[11px] tracking-[0.17px]">
          Площадь до:
        </span>

        <GroupButton size="s" additionalText="м²" currentValue={size}>
          {sizeRect}
        </GroupButton>
      </div>
      <div className="mt-2 ml-3 inline-flex text-[20px] tracking-[0.25px] gap-[10px]">
        <span className="text-[#D02726] line-through">
          {(price / 100) * 30 + price} Br
        </span>
        <h4 className="font-bold">{price} Br</h4>
      </div>

      <div className="mt-auto">
        <div className="px-[10px] mt-4 pb-0.5 bg-[#FFD6D6] rounded-[20px]">
          <span className="text-[#333333] leading-[16px] tracking-[0.4px] text-[12px] text-center">
            Доставка и монтаж бесплатно!
          </span>
        </div>
        <Link href={`/conditioner/${title.replace(/ /g, "-")}`}>
          <Button
            onClick={() => {}}
            className="mt-2"
            variant="rounded"
            size="xm"
          >
            ПОДРОБНЕЕ
          </Button>
        </Link>
        <a href="tel:+375291122333">
          <Button
            onClick={() => {}}
            className="mt-2"
            variant="filled"
            size="xm"
          >
            КУПИТЬ
          </Button>
        </a>
      </div>
    </div>
  );
};
