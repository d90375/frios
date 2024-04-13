import { genPageMetadata } from "@/app/seo";
import { getGoogleSheetsData } from "@/gsheets";
import { siteMetadata } from "@/utils/siteMetadata";
import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { slug: string };
}): Promise<Metadata> {
  const slug = decodeURI(searchParams.slug);

  return genPageMetadata({
    title: `установка кондиционера ${slug}`,
    description: `${siteMetadata.title} ${slug} установка и монтаж кондиционеров брест`,
    alternates: {
      canonical: "./",
      types: {
        "application/rss+xml": `${siteMetadata.siteUrl}/tags/${slug}/feed.xml`,
      },
    },
  });
}

export default async function Page({ params }: { params: { id: string } }) {
  const id = decodeURI(params.id);

  const data: string[][] | null | undefined = await getGoogleSheetsData(
    `Table!${+id + 1}:${+id + 1}`
  );

  if (!data) {
    return <></>;
  }

  const [el] = data;

  if (!el) {
    return <></>;
  }

  const product = {
    id: el[0],
    imageUrl: el[1],
    model: el[2],
    square: el[3],
    price: el[4],
    sizeBlockInside: el[5],
    type: el[6],
    hasDisplay: el[7],
    hasCoolerControl: el[8],
    hasSpeedCoolerControl: el[9],
    hasDehumidificationAir: el[10],
    hasAutoClear: el[11],
    hasAnalytic: el[12],
    hasAntiIce: el[13],
    hasIndication: el[14],
    installType: el[15],
    mode: el[16],
    typeMode: el[17],
    color: el[18],
    magistralLength: el[19],
    heightStep: el[20],
    filter: el[21],
    management: el[22],
    freon: el[23],
    workingRangeHeat: el[24],
    workingRangeCold: el[25],
    powerForHeat: el[26],
    powerForCold: el[27],
    coldPower: el[28],
    heatPower: el[29],
    squarePower: el[30],
    airRate: el[31],
    noiseBlockInside: el[32],
    noiseBlockOutside: el[33],
    weightBlockInside: el[34],
    weightBlockOutside: el[35],
    desc1: el[36],
    desc2: el[37],
  };

  return (
    <div className="px-5 bg-white rounded-lg pt-10 pb-20 flex flex-col items-start gap-5">
      <div className="container">
        <h1 className="text-[24px] text-center md:text-start self-center leading-[28px] mb-10 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Сплит-система {product.model ?? ""}
        </h1>
        <div className="flex flex-col mb-6 md:mb-16 lg:flex-row  gap-10">
          <Image
            src={
              product.imageUrl
                ? product.imageUrl
                : "/assets/images/kond-no-image.jpeg"
            }
            alt={product.model ?? "картинка кондиционера"}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[300px] max-w-[500px] 2xl:h-[400px] object-contain"
          />
          <div className="w-full flex flex-col">
            <span className="mb-6">
              <span className="leading-[39px] text-[36px] font-semibold font-roboto-cond">
                {product.price?.replace(/\B(?=(\d{3})+(?!\d))/g, " ")},00
              </span>
              <span className="text-[14px] ml-0.5">р</span>
            </span>
            <p className="mb-4 font-medium">
              {product.desc1}{" "}
              <span className="text-primary">{product.model}</span> <br />
              <br />
              {product.desc2}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="flex gap-5 flex-col">
            <div>
              <p className="text-base font-bold mb-2">
                Основные характеристики
              </p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Тип кондиционера</span>
                <span>{product.type}</span>
                <span>Способ установки внутреннего блока</span>
                <span>{product.installType}</span>
                <span>Режим работы</span>
                <span>{product.mode}</span>
                <span>Принцип работы</span>
                <span>{product.typeMode}</span>
                <span>Фреон</span>
                <span>{product.freon}</span>
                <span>Рабочий диапазон температур при охлаждении</span>
                <span>{product.workingRangeCold}</span>
                <span>Цвет</span>
                <span>{product.color}</span>
              </div>
            </div>
            <div>
              <p className="text-base font-bold mb-2">Конструкция</p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Максимальная длина магистрали</span>
                <span>{product.magistralLength}</span>
                <span className="">Перепад высот</span>
                <span>{product.heightStep}</span>
              </div>
            </div>
            <div>
              <p className="text-base font-bold mb-2">
                Система фильтрации воздуха
              </p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Дополнительные фильтры</span>
                <span>{product.filter}</span>
              </div>
            </div>
            <div className="">
              <p className="text-base font-bold mb-2">
                Управление и режимы работы
              </p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Способы управления</span>
                <span>{product.management}</span>
                <span className="">Дисплей</span>
                <span>{product.hasDisplay ? "Есть" : ""}</span>
                <span className="">
                  Регулировка направления воздушного потока
                </span>
                <span>{product.hasCoolerControl ? "Есть" : ""}</span>
                <span className="">
                  Регулятор скорости вращения вентилятора
                </span>
                <span>{product.hasSpeedCoolerControl ? "Есть" : ""}</span>
                <span className="">Осушение воздуха</span>
                <span>{product.hasDehumidificationAir ? "Есть" : ""}</span>
                <span className="">Самоочистка</span>
                <span>{product.hasAutoClear ? "Есть" : ""}</span>
                <span className="">Самодиагностика</span>
                <span>{product.hasAnalytic ? "Есть" : ""}</span>
                <span className="">Система против образования льда</span>
                <span>{product.hasAntiIce ? "Есть" : ""}</span>
                <span className="">Индикация</span>
                <span>{product.hasIndication ? "Есть" : ""}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="">
              <p className="text-base font-bold mb-2">
                Производительность и энергоэффективность
              </p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Мощность охлаждения</span>
                <span>{product.coldPower}</span>
                <span className="">Мощность обогрева</span>
                <span>{product.heatPower}</span>
                <span className="">Обслуживаемая площадь</span>
                <span>{product.squarePower}</span>
                <span className="">Расход воздуха</span>
                <span>{product.airRate}</span>
              </div>
            </div>
            <div className="">
              <p className="text-base font-bold mb-2">Шум</p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Уровень шума внутреннего блока</span>
                <span>{product.noiseBlockInside}</span>
                <span className="">Уровень шума внешнего блока</span>
                <span>{product.noiseBlockOutside ? "Есть" : ""}</span>
              </div>
            </div>
            <div className="">
              <p className="text-base font-bold mb-2">Размеры и вес</p>
              <div className="grid grid-cols-2 text-sm gap-x-6">
                <span className="">Размеры внутреннего блока (ВхШхГ)</span>
                <span>{product.sizeBlockInside}</span>
                <span className="">Вес внутреннего блока</span>
                <span>{product.weightBlockInside}</span>
                <span className="">Размеры внешнего блока (ВхШхГ)</span>
                <span>{product.sizeBlockInside}</span>
                <span className="">Вес внешнего блока</span>
                <span>{product.weightBlockOutside}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
