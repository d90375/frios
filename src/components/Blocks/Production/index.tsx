"use client";
import { productData } from "@/data";
import { Card } from "./Card";
import { GroupButton } from "@/components/GroupButton";
import { useState } from "react";
import clsx from "clsx";

const defaultValue = "Сплит-системы on/off";

type Tab = "СТАНДАРТ" | "ИНВЕНТОР" | "МУЛЬТИСПЛИТ";

export const Production = ({ uniquePage }: { uniquePage?: boolean }) => {
  const [tab, setTab] = useState(defaultValue);
  return (
    <>
      <div className={clsx("mb-[32px] md:mb-[48px]", uniquePage && "!mb-4")}>
        <h2
          className={clsx(
            "text-[36px] md:text-[44px] mt-6 md:mt-0 font-jost font-semibold text-center",
            uniquePage && "!text-[30px] md:!text-[44px]"
          )}
        >
          Каталог товаров
        </h2>
        {uniquePage && <div className="h-[2px] w-full bg-primary" />}
      </div>
      <GroupButton
        className="mb-[24px] !w-full divide-y divide-x-0 md:!divide-x md:!divide-y-0 md:!w-auto !flex-col md:!flex-row"
        currentValue={tab}
        onClick={(value) => {
          setTab(value as unknown as Tab);
        }}
      >
        {[
          "Сплит-системы on/off",
          "Сплит-системы инверторные",
          "Сплит-системы мульти",
        ]}
      </GroupButton>
      {!uniquePage && (
        <p className="text-center leading-[24px] tracking-[0.44px] mb-[32px] md:mb-[48px]">
          Стандартный кондиционер выполняет все необходимые функции и работает
          по принципу: включился/охладил/выключился. Во внутренний блок
          кондиционера установлен датчик, он фиксирует, что температура в
          комнате нагрелась и кондиционер включился. Стандартные модели более
          устойчивы к перепадам напряжения эл.энергии. <br /> Купить кондиционер
          с установкой в Бресте и области по самым низким ценам от компании
          FRIOS можно оставив заявку на интересующую Вас модель или позвонив по
          телефону +375 29 999 11 11.
        </p>
      )}
      <div className="flex flex-row justify-center flex-wrap gap-[29px]">
        {productData.map((el, index) => (
          <Card
            className={clsx("", index >= 8 && "hidden md:block")}
            key={`${el.title} ${index}`}
            {...el}
          />
        ))}
      </div>
    </>
  );
};
