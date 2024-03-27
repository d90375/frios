"use client";

import { Card } from "./Card";
import { GroupButton } from "@/components/GroupButton";
// import { useState } from "react";
import clsx from "clsx";

const defaultValue = "Сплит-системы on/off";

// type Tab = "СТАНДАРТ" | "ИНВЕНТОР" | "МУЛЬТИСПЛИТ";

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
};

export const Production = ({
  uniquePage,
  productData,
}: {
  uniquePage?: boolean;
  productData: Product[] | undefined | null;
}) => {
  // const [tab, setTab] = useState(defaultValue);

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
        currentValue={defaultValue}
        // onClick={(value) => {
        //   setTab(value as unknown as Tab);
        // }}
      >
        {[
          "Сплит-системы on/off",
          "Сплит-системы инверторные",
          "Сплит-системы мульти",
        ]}
      </GroupButton>
      {!uniquePage && (
        <p className="text-center leading-[24px] tracking-[0.44px] mb-[32px] md:mb-[48px]">
          Стандартная сплит-система выполняет все необходимые функции и работает
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
        {productData?.map((card) => (
          <Card
            id={card.id}
            url={card.imageUrl}
            key={card.id}
            title={card.model}
            square={card.square}
            size={card.sizeBlockInside}
            descriptionList={[
              card.hasCoolerControl ? "Осушение воздуха" : "",
              card.filter ? "Биофильтр" : "",
              card.hasDisplay ? "Дисплей" : "",
              card.hasAnalytic ? "Авторестарт" : "",
              card.hasAutoClear ? "Самодиагностика" : "",
            ]}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};
