import { Calculator } from "@/components/Blocks/Quiz";
import { Examples } from "@/components/Blocks/Examples";
import { Hero } from "@/components/Blocks/Hero";
import { Production } from "@/components/Blocks/Production";
import { Suggestion } from "@/components/Blocks/Suggestion";
import SectionContainer from "@/components/SectionContainer";
import { getGoogleSheetsData } from "@/gsheets";
import { genPageMetadata } from "./seo";

export const metadata = genPageMetadata({
  title: "установка кондиционеров Брест Frios. лучшая цена",
});

export default async function MainPage() {
  const data: string[][] | null | undefined = await getGoogleSheetsData();

  const product = data?.splice(1, data.length - 1).map((el) => ({
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
    category: el[36] as "инв" | "мульти" | "онофф" | undefined | null,
  }));

  return (
    <main className="mb-auto">
      <div className="flex flex-col gap-4"></div>
      <Hero />
      <Calculator />
      <SectionContainer className="mb-[60px] md:mb-[100px] flex items-center flex-col">
        <Production productData={product?.slice(0, 12)} />
      </SectionContainer>
      <Suggestion />
      <Examples />
    </main>
  );
}
