import { heroData } from "@/data";
import SectionContainer from "../SectionContainer";

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="w-[253px] h-[237px] px-5 pb-5 pt-5 flex flex-col divide-y divide-[#AAC8D7] shadow-custom bg-custom-gradient rounded-[20px]">
      <div className="flex items-center gap-[14px] mb-4">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
        <span className="font-roboto-cond text-[24px] leading-7 w-[95px] font-bold uppercase">
          {title}
        </span>
      </div>
      <span className="pt-[14px] font-roboto text-base font-normal leading-[24px] tracking-[0.44px]">
        {description}
      </span>
    </div>
  );
};

export const Hero = () => {
  return (
    <section>
      <SectionContainer className="pt-[80px] flex items-center flex-col">
        <h2 className="text-[48px] leading-[56px] font-bold uppercase text-center font-jost text-white">
          Купи кондиционер - подари себе
          <br /> тишину и комфорт
        </h2>
        <div className="mt-[14px] h-[44px] w-[420px] mb-[415px] bg-custom-gradient2">
          <p className="text-quaternary py-1 text-center font-roboto-cond text-[24px] font-bold uppercase leading-normal">
            более 200 моделей
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[29px] mb-[35px]">
          {heroData.map((prop) => (
            <Card {...prop} key={prop.title} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};
