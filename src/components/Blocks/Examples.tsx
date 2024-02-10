import { Button } from "../Button";
import { CustomCarousel } from "../CustomCarousel";
import SectionContainer from "../SectionContainer";

export const Examples = () => {
  return (
    <SectionContainer className="mt-[60px] mb-[100px]">
      <p className="text-[32px] text-center font-jost font-bold mb-[40px] leading-[48px]">
        Примеры наших работ
      </p>
      <CustomCarousel />
      <div className="flex w-full justify-center">
        <Button className="mt-[55px] mb-[100px]" size="l">
          ЗАКАЗАТЬ МОНТАЖ
        </Button>
      </div>
    </SectionContainer>
  );
};
