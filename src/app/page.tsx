import { Calculator } from "@/components/Blocks/Quiz";
import { Examples } from "@/components/Blocks/Examples";
import { Hero } from "@/components/Blocks/Hero";
import { Production } from "@/components/Blocks/Production";
import { Suggestion } from "@/components/Blocks/Suggestion";

export default function MainPage() {
  return (
    <main className="mb-auto">
      <Hero />
      <Calculator />
      <Production />
      <Suggestion />
      <Examples />
    </main>
  );
}
