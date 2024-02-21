import SectionContainer from "@/components/SectionContainer";

export default function NotFound() {
  return (
    <SectionContainer className="flex gap-10 items-center justify-center mt-25">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-white md:border-r-2 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-white">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          Извините, мы не смогли найти эту страницу.
        </p>
        <p className="mb-8">
          Но не волнуйтесь, вы можете найти множество других вещей на нашей
          домашней странице.
        </p>
      </div>
    </SectionContainer>
  );
}
