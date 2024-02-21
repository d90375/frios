import SectionContainer from "@/components/SectionContainer";

const Wrapper = ({ children }: { children: JSX.Element | string }) => {
  return (
    <div className="min-w-8 basis-8 h-8 rounded-full border-primary flex flex-col items-center justify-center border-[4px]">
      {children}
    </div>
  );
};

export default function Page() {
  return (
    <SectionContainer className="mt-16 bg-white rounded-lg py-10 flex flex-col gap-5 mb-10">
      <div className="w-fit mb-5 md:mb-10">
        <h1 className="text-[24px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Сервисное обслуживание кондиционеров в Бресте
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>
      <p className="text-lg font-bold md:text-xl mb-3">
        Компания <span className="text-quaternary">«Фриос» </span>представляет
        качественные услуги по выбору, приобретению, установке и техническому
        обслуживанию микроклиматических устройств. У нас вы можете приобрести
        бытовой кондиционер, от известных проверенных брендов недорого и с
        гарантией на установку.
      </p>
      <p className="text-base md:text-lg">
        Мы дорожим каждым клиентом, поэтому индивидуально подходим к каждому
        запросу. Наши специалисты помогут Вам выбрать кондиционер исходя из
        ваших потребностей и бюджета.
      </p>
      <ul className="ml-4 flex flex-col gap-1">
        <span className="font-bold text-lg">Что предлагает наша компания:</span>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>1</Wrapper>
          Помощь в подборе и снабжении необходимыми климатическими устройствами
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>2</Wrapper> Монтаж, тестирование устройства
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>3</Wrapper> Гарантийное обслуживание, техосмотр прибора
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>4</Wrapper> Устранение проблем, поломок кондиционеров
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>5</Wrapper> Демонтаж кондиционера
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>6</Wrapper> Заправка кондиционеров
        </li>
        <li className="flex flex-row items-start gap-2">
          <Wrapper>7</Wrapper> Дезинфекция климатической техники
        </li>
      </ul>
      <p className="text-sm ml-2 mr-6 md:mr-12">
        С нами вам не придется тратить время и усилия для ознакомления со всеми
        вариантами, типами и характеристиками микроклиматического оборудования.
        Клиенту достаточно лишь оставить заявку на консультацию о подборе
        кондиционера, и наши высококвалифицированные специалисты помогут вам
        выбрать идеальное устройство, выбрать место установки и составят смету,
        подробное развернутое техническое задание для монтажников.
        <br />
        <br /> Наша сплоченная команда поможет в выборе, покупке, установке и
        профилактике, сервисном обслуживании кондиционера. С нами удобно и
        легко, ведь мы предлагаем широкий ассортимент по каждому бренду, а на
        сайте вы увидите только те модели, которые есть в наличии.
        <br /> Если вы хотите самостоятельно выбрать модель по характеристикам и
        внешнему виду, достаточно лишь зайти в необходимую категорию выбрать
        бренд и бюджет.
      </p>
    </SectionContainer>
  );
}
