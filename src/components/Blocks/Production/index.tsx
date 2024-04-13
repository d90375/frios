"use client";

import { Card } from "./Card";
import { GroupButton } from "@/components/GroupButton";
import { useState } from "react";
import clsx from "clsx";

export type Tabs = {
  value: number;
  label: string;
};

export const tabs = [
  { value: 1, label: "Сплит-системы on/off" },
  { value: 2, label: "Сплит-системы инверторные" },
  { value: 3, label: "Сплит-системы мульти" },
];
const defaultValue = tabs[0]!;

type Product = {
  id: string | undefined | null;
  imageUrl: string | undefined | null;
  model: string | undefined | null;
  square: string | undefined | null;
  type: string | undefined | null;
  installType: string | undefined | null;
  mode: string | undefined | null;
  typeMode: string | undefined | null;
  freon: string | undefined | null;
  workingRangeHeat: string | undefined | null;
  workingRangeCold: string | undefined | null;
  color: string | undefined | null;
  magistralLength: string | undefined | null;
  heightStep: string | undefined | null;
  filter: string | undefined | null;
  management: string | undefined | null;
  hasDisplay: string | undefined | null;
  hasCoolerControl: string | undefined | null;
  hasSpeedCoolerControl: string | undefined | null;
  hasDehumidificationAir: string | undefined | null;
  hasAutoClear: string | undefined | null;
  hasAnalytic: string | undefined | null;
  hasAntiIce: string | undefined | null;
  hasIndication: string | undefined | null;
  powerForHeat: string | undefined | null;
  powerForCold: string | undefined | null;
  coldPower: string | undefined | null;
  heatPower: string | undefined | null;
  squarePower: string | undefined | null;
  airRate: string | undefined | null;
  noiseBlockInside: string | undefined | null;
  noiseBlockOutside: string | undefined | null;
  sizeBlockInside: string | undefined | null;
  weightBlockInside: string | undefined | null;
  weightBlockOutside: string | undefined | null;
  price: string | undefined | null;
  category: "инв" | "мульти" | "онофф" | undefined | null;
};

export const Production = ({
  uniquePage,
  productData,
}: {
  uniquePage?: boolean;
  productData: Product[] | undefined | null;
}) => {
  const [tab, setTab] = useState<Tabs>(defaultValue);

  // const x = productData?.reduce(
  //   (acc, el) => {
  //     if (el.category === "инв") {
  //       return acc[1] [[]];
  //     }
  //     if (el.category === "мульти") {
  //       return { ...acc, el };
  //     }
  //     if (el.category === "онофф") {
  //       return { ...acc, el };
  //     }

  //     return acc;
  //   },
  //   { 1: [], 2: [], 3: [] }
  // );

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
          setTab(value);
        }}
      >
        {tabs}
      </GroupButton>
      {tab.value === 1 && (
        <p className="text-center leading-[24px] tracking-[0.44px] mb-[32px] md:mb-[48px]">
          Стандартная сплит-система выполняет все необходимые функции и работает
          по принципу: включился/охладил/выключился. Во внутренний блок
          кондиционера установлен датчик, он фиксирует, что температура в
          комнате нагрелась и кондиционер включился. Стандартные модели более
          устойчивы к перепадам напряжения эл.энергии. <br /> Купить кондиционер
          с установкой в Бресте и области по самым низким ценам от компании
          FRIOS можно оставив заявку на интересующую Вас модель или позвонив по
          телефону{" "}
          <span className="text-primary font-semibold">
            <a href="tel:+375298983222">+375 29 898 32 22</a>
            <br />
            <a href="tel:+375298983222">+375 29 883 08 74</a>
          </span>
        </p>
      )}
      {tab.value === 2 && (
        <p className="text-center leading-[24px] tracking-[0.44px] mb-[32px] md:mb-[48px]">
          Инверторный кондиционер работает по похожему принципу как и
          обычный кондиционер, но с небольшим отличием. Он постоянно измеряет
          температуру окружающей среды, как в помещении, так и на улице. При
          этом он понимает, сколько мощности необходимо подать на компрессор,
          чтобы достигнуть заданной температуры в помещении.{" "}
          <span className="text-primary font-semibold">
            <a href="tel:+375298983222">+375 29 898 32 22</a>
            <br />
            <a href="tel:+375298983222">+375 29 883 08 74</a>
          </span>
        </p>
      )}
      {tab.value === 3 && (
        <p className="text-center leading-[24px] tracking-[0.44px] mb-[32px] md:mb-[48px]">
          Мульти сплит системы - это обычная сплит система, которая разделена на
          две части (испаритель и конденсатор) и позволяет осуществить
          охлаждение или обогрев нескольких помещений при одном внешнем блоке.{" "}
          <span className="text-primary font-semibold">
            <a href="tel:+375298983222">+375 29 898 32 22</a>
            <br />
            <a href="tel:+375298983222">+375 29 883 08 74</a>
          </span>
        </p>
      )}

      <div className="flex flex-row justify-center flex-wrap gap-[29px]">
        {productData?.map((card) => (
          <Card
            id={card.id}
            url={card.imageUrl}
            key={card.id}
            title={card.model}
            square={card.square}
            size={card.sizeBlockInside}
            descriptionList={[
              card.management ?? "",
              card.hasCoolerControl ? "Осушение воздуха" : "",
              card.filter ? "Биофильтр" : "",
              card.hasDisplay ? "Дисплей" : "",
              card.hasAnalytic ? "Авторестарт" : "",
            ]}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};
