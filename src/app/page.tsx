import { Calculator } from "@/components/Blocks/Quiz";
import { Examples } from "@/components/Blocks/Examples";
import { Hero } from "@/components/Blocks/Hero";
import { Production } from "@/components/Blocks/Production";
import { Suggestion } from "@/components/Blocks/Suggestion";
import SectionContainer from "@/components/SectionContainer";

export default function MainPage() {
  return (
    <main className="mb-auto">
      <Hero />
      <Calculator />
      <SectionContainer className="mb-[60px] md:mb-[100px] flex items-center flex-col">
        <Production />
      </SectionContainer>
      <Suggestion />
      <Examples />
    </main>
  );
}
