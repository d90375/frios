import Image from "next/image";
import SectionContainer from "../SectionContainer";
import { dataMontage } from "@/data";
import clsx from "clsx";

const SuccessSVG = () => {
  return (
    <div className="mt-1">
      <div className="relative rounded-full w-[24px] h-[24px] bg-[#8DB932]">
        <div className="absolute rotate-[45deg] translate-1/2 h-3 w-2 left-2 top-[5px] border-b-[3px] rounded-l-sm rounded-r-sm  border-b-[#fff] border-r-[3px] border-r-[#fff]" />
      </div>
    </div>
  );
};

const Block = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        "bg-[#DDEFFF] w-auto flex items-center flex-col gap-[48px] rounded-[30px] shadow-custom p-[30px]",
        className
      )}
    >
      <span className="md:text-[32px] text-center md:text-start text-[24px] leading-[26px] font-jost font-semibold md:leading-[48px]">
        Стандартный монтаж включает:
      </span>

      <div className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start font-jost font-semibold gap-4 md:gap-[30px]">
        {dataMontage.map((el, index) => (
          <div className="flex flex-col items-center md:flex-row gap-4 md:gap-[24px]">
            <div className="flex items-center justify-center w-[72px] h-[72px] shadow-custom rounded-[20px] bg-custom-gradient">
              <span className="text-[#45B2EA]  font-jost font-semibold text-[44px]">
                {index + 1}
              </span>
            </div>
            <h5 className="text-[15px] mt-0  md:pt-2 max-w-max md:max-w-[229px] md:text-start text-center font-medium leading-[18px]">
              {el}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Suggestion = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/back-3.webp"
        alt="background-image-3"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-full lg:h-[800px]  -z-10 inset-0 absolute object-cover"
      />
      <SectionContainer className="pb-[36px] relative">
        <h2 className="text-white font-jost pt-[50px] pb-[53px] text-center text-[32px] md:text-[44px] font-semibold leading-[32px] md:leading-[48px]">
          Установка кондиционера — <br /> ответственный процесс
        </h2>
        <div className="flex flex-wrap flex-row">
          <div className="relative basis-[calc(1/2-80px)]">
            <Image
              className="mx-auto lg:mx-[80px] h-auto w-[288px] md:w-[300px] lg:w-[358px]"
              src="/assets/images/woman-1.webp"
              alt="woman-image"
              width="358"
              height="600"
            />
            <Block className="!flex lg:!hidden" />
          </div>

          <div className="text-white flex-1">
            <p className="text-base text-center lg:text-start lg:mt-0 mt-[32px] leading-[24px] tracking-[0.44px] mb-[38px]">
              Профессиональный монтаж кондиционера – залог его долгой и надежной
              работы. В нашей компании работают опытные бригады монтажников,
              оснащённые профессиональным оборудованием и имеющие за плечами
              многолетний опыт, что гарантирует высокое качество производимых
              монтажных работ.
            </p>
            <div className="flex items-start gap-[10px]">
              <SuccessSVG />
              <p className="text-[20px] font-bold leading-normal mb-5">
                Мы осуществляем установку сплит-систем, приобретенных в нашей
                компании со скидкой 20%
              </p>
            </div>
            <div className="flex items-start gap-[10px]">
              <SuccessSVG />
              <p className="text-[20px] font-bold leading-normal mb-[30px]">
                Так же можем установить ваш кондиционер
                <br /> по Акции всего за{" "}
                <span className="line-through text-[#FF8D8D]">
                  600 бел. рублей
                </span>{" "}
                350 бел. рублей
              </p>
            </div>
            <p className="text-base text-center lg:text-start leading-[24px] tracking-[0.44px]">
              Компания <span className="font-bold">FRIOS</span> нацелена на
              долговременное сотрудничество со своими клиентами, а потому берет
              на себя гарантийные обязательства за установку кондиционера,
              проведенную сотрудниками нашей организации.
            </p>
          </div>

          <Block className="!hidden lg:!flex" />
        </div>
      </SectionContainer>
    </div>
  );
};
