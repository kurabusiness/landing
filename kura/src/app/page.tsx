import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JourneyIndicator } from "@/components/ui/JourneyIndicator";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { ManifestoTeaser } from "@/components/sections/ManifestoTeaser";
import { Pilares } from "@/components/sections/Pilares";
import { Transformation } from "@/components/sections/Transformation";
import { EmailGate } from "@/components/sections/EmailGate";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <JourneyIndicator />
      <main className="scroll-snap-container pb-[calc(5.5rem+env(safe-area-inset-bottom,0px))] sm:pb-[calc(6rem+env(safe-area-inset-bottom,0px))] md:pb-[calc(6.5rem+env(safe-area-inset-bottom,0px))]">
        <Hero />
        <Problem />
        <ManifestoTeaser />
        <Pilares />
        <Transformation />
        <EmailGate />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
