import { Button } from "../Button";
import { CustomCarousel } from "../CustomCarousel";
import SectionContainer from "../SectionContainer";

export const Examples = () => {
  return (
    <SectionContainer className="mt-[80px] mb-[60px] md:mb-[100px]">
      <p className="text-[24px] md:text-[32px] text-center font-jost font-semibold mb-[26px] md:mb-[40px] leading-[24px] md:leading-[48px]">
        Примеры наших работ
      </p>
      <CustomCarousel />
      <div className="flex w-full justify-center">
        <Button className="mt-[32px] md:mt-[55px]" size="l">
          ЗАКАЗАТЬ МОНТАЖ
        </Button>
      </div>
    </SectionContainer>
  );
};
