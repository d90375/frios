import Image from "next/image";
import SectionContainer from "../SectionContainer";

const SuccessSVG = () => {
  return (
    <div className="mt-1">
      <div className="relative rounded-full w-[24px] h-[24px] bg-[#8DB932]">
        <div className="absolute rotate-[45deg] translate-1/2 h-3 w-2 left-2 top-[5px] border-b-[3px] rounded-l-sm rounded-r-sm  border-b-[#fff] border-r-[3px] border-r-[#fff]" />
      </div>
    </div>
  );
};

const Block = () => {
  return (
    <div className="bg-[#DDEFFF] flex items-center flex-col gap-[48px] rounded-[30px] shadow-custom p-[30px]">
      <span className="text-[32px] font-jost font-bold leading-[48px]">
        Стандартный монтаж включает:
      </span>

      <div className="flex flex-wrap gap-[30px]">
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            1
          </span>
          <h5>Доставка оборудования к заказчику</h5>
        </div>
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            2
          </span>
          <h5 className="w-[230px] text-[15px] font-medium leading-normal">
            2 Установка внешнего блока кондиционера под окном на несущую стену с
            использованием стандартных кронштейнов
          </h5>
        </div>
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            3
          </span>
          <h5 className="w-[230px] font-medium leading-normal">
            Прокладывание коммуникаций (5 метров входит в стандартный монтаж)
          </h5>
        </div>
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            4
          </span>
          <h5 className="w-[230px] font-medium leading-normal">
            Подключение внутреннего блока
          </h5>
        </div>
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            5
          </span>
          <h5 className="w-[230px] font-medium leading-normal">
            Вакуумирование трассы и запуск системы
          </h5>
        </div>
        <div className="flex gap-[24px] w-[72px] h-[72px] bg-custom-gradient">
          <span className="text-[#45B2EA] text-[44px] font-jost font-bold text-center">
            6
          </span>
          <h5 className="w-[230px] font-medium leading-normal">
            Проверяете как работает оборудование и оплачиваете
          </h5>
        </div>
      </div>
    </div>
  );
};

export const Suggestion = () => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/back-3.png"
        alt="background-image-3"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto -z-10 inset-0 absolute"
      />
      <SectionContainer className="mb-[320px] relative">
        <h2 className="text-white font-jost pt-[50px] pb-[53px] text-center text-[44px] font-extrabold leading-[48px]">
          Установка кондиционера — <br /> ответственный процесс
        </h2>
        <div className="flex gap-[75px] ml-[75px]">
          <Image
            className=""
            src="/assets/images/woman-1.png"
            alt="woman-image"
            width="358"
            height="600"
          />
          <div className="text-white">
            <p className="text-base leading-[24px] tracking-[0.44px] mb-[38px]">
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
                компании совершенно бесплатно
              </p>
            </div>
            <div className="flex items-start gap-[10px]">
              <SuccessSVG />
              <p className="text-[20px] font-bold leading-normal mb-[30px]">
                Так же можем установить ваш кондиционер
                <br /> по Акции всего за{" "}
                <span className="line-through text-[#FF8D8D]">
                  2080 Br
                </span>{" "}
                1600 Br рублей.
              </p>
            </div>
            <p className="text-base leading-[24px] tracking-[0.44px]">
              Компания <span className="font-bold">FRIOS</span> нацелена на
              долговременное сотрудничество со своими клиентами, а потому берет
              на себя гарантийные обязательства за установку кондиционера,
              проведенную сотрудниками нашей организации.
            </p>
          </div>
        </div>
        <Block />
      </SectionContainer>
    </div>
  );
};
