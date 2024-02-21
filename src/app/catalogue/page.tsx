import { Production } from "@/components/Blocks/Production";
import SectionContainer from "@/components/SectionContainer";

export default function Page() {
  return (
    <SectionContainer className="flex items-center justify-center mt-12 rounded-lg py-10 md:py-5 flex-col gap-5 mb-10">
      <Production uniquePage />
    </SectionContainer>
  );
}
