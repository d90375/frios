import SectionContainer from "@/components/SectionContainer";

export default function Page() {
  return (
    <SectionContainer className="mt-16 bg-white rounded-lg py-10 flex flex-col md:items-start items-center gap-5 mb-10">
      <div className="w-fit mb-5 md:mb-10">
        <h1 className="text-[28px] text-center md:text-start leading-[28px] mb-2 md:leading-[44px] md:text-[44px] font-jost font-semibold">
          Гарантия
        </h1>
        <div className="h-[2px] w-full bg-primary" />
      </div>

      <p className="text-lg ml-3 mr-6 md:mr-12 md:text-xl">
        Компания <span className="font-bold text-primary">«Фриос»</span>
         представляет качественные услуги по выбору, приобретению, установке и
        техническому обслуживанию микроклиматических устройств.
      </p>

      <p>всякая хуйня про гарантию</p>
    </SectionContainer>
  );
}
