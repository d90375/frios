import SectionContainer from "@/components/SectionContainer";

export default function Page() {
  return (
    <SectionContainer className="mt-16 bg-white rounded-lg py-10 flex flex-col md:items-start items-center gap-5 mb-10">
      <div className="w-fit mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Условия доставки
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>

      <div className="flex flex-row justify-center flex-wrap mb-10 gap-5">
        <div className="border rounded border-gray-200 items-start gap-5  max-w-[300px] md:max-w-[400px] flex flex-row p-5">
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M3 4a2 2 0 00-2 2v11h2a3 3 0 003 3 3 3 0 003-3h6a3 3 0 003 3 3 3 0 003-3h2v-5l-3-4h-3V4m-7 2l4 4-4 4v-3H4V9h6m7 .5h2.5l1.97 2.5H17M6 15.5A1.5 1.5 0 017.5 17 1.5 1.5 0 016 18.5 1.5 1.5 0 014.5 17 1.5 1.5 0 016 15.5m12 0a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold">ДОСТАВКА</span>
            <span className="text-sm">
              Доставка техники производится до подъезда.
            </span>
          </div>
        </div>

        <div className="border rounded border-gray-200 items-start gap-5 max-w-[300px] md:max-w-[400px] flex flex-row p-5">
          <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m.5 11H11V7h1.5v4.3l3.7-2.1.8 1.3-4.5 2.5z" />
          </svg>
          <div className="flex flex-col">
            <span className="font-bold">ВРЕМЯ</span>
            <span className="text-sm">
              Техника доставляется в интервал времени с 09:00 до 24:00 часов
              (точное время доставки не оговаривается)
            </span>
          </div>
        </div>
      </div>
      <p className="text-lg md:text-xl">
        Климатическое оборудование относится к разряду крупногабаритной бытовой
        техники, что делает для большинства покупателей актуальной задачу
        доставки приобретенной техники к месту ее установки.
        <br /> <br />{" "}
        <span className="font-bold">
          Доставка кондиционера, купленного у нас, осуществляется
          квалифицированными специалистами компании.
        </span>{" "}
        Правильная транспортировка – это одна из причин надёжной работы
        кондиционера.
      </p>
      <p className="text-base md:text-lg">
        <br />
        <br /> Мы работаем как по Бресту так и по Брестской области. Доставка по
        городу Брест и Брестской области осуществляется внутренней службой
        доставки компании{" "}
        <span className="font-bold text-primary">FRIOS.BY</span>
        <br /> Доставка товаров осуществляется ежедневно Доставка мелкой бытовой
        техники - 0 руб.
        <br /> Доставка кондиционеров в пределах Бреста - 0 руб. Доставка в
        пределах Брестской области: от 20руб Сроки доставки
        <br /> Доставка осуществляется по г.Брест, а также по Брестской области,
        при наличии товара на складе, в течение 1-6 рабочих дней.
        <br />
        <br />
      </p>
      <span className="text-sm">
        Если Вы приобретаете под заказ - срок поставки 2-10 рабочих дня.
        Доставка в иные города и регионы РБ по согласованию с менеджером через
        транспортные компании , Деловые линии и т.д., согласно вашим
        предпочтениям.
      </span>
    </SectionContainer>
  );
}
