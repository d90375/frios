import SectionContainer from "@/components/SectionContainer";
import { genPageMetadata } from "../seo";

export const metadata = genPageMetadata({
  title: "установка кондиционеров Брест Frios. обслуживание",
});

export default function Page() {
  return (
    <SectionContainer className="mt-16 bg-white rounded-lg py-10 flex flex-col md:items-start items-center gap-5 mb-10">
      <div className="w-fit mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Услуги - демонтаж кондиционеров
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>

      <p className="text-base ml-3 mr-6 md:mr-12">
        Демонтаж кондиционера чаще всего нужен при смене жилья или ремонте и
        наша фирма выполнит данный спектр услуг быстро и достаточно аккуратно
        без повреждений самого климатического устройства.
        <br /> Для того чтобы выполнить правильный демонтаж кондиционера, наши
        специалисты первым делом перекачивают фреон во внешние блоки. Данный
        процесс означает включение климатического оборудования в режиме
        охлаждения принудительно.
        <br /> Затем специальное в определённой последовательности откручивают
        кран и загоняют фреон в компрессор кондиционера. Как только монтажник
        увидит, что фреон из данной техники выкачан полностью, компрессор
        обесточивается и бригада может начать работы по демонтажу каждого блока.
        <br />
        <br />
        Необходимо сделать акцент на то, что, если вы живете на верхнем этаже
        многоэтажки, для демонтажа внешнего блока понадобится вызов
        промышленного альпиниста. Цена демонтажа кондиционера будет зависеть от
        мощности устройства, доступности к внешнему блоку. Наша фирма рада
        предложить высококачественные услуги по доступной цене и гарантией на
        демонтаж.
      </p>

      <div className="w-fit mt-5 mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Услуги - заправка кондиционеров
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>

      <div className="w-fit mt-5 mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Услуги - сервисное обслуживание
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>

      <div className="w-fit mt-5 mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Услуги - установка кондиционеров
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>
    </SectionContainer>
  );
}
