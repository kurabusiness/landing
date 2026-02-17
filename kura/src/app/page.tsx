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
      <main id="main-scroll" className="scroll-snap-container">
        <Hero />
        <Problem />
        <ManifestoTeaser />
        <Pilares />
        <Transformation />
        <EmailGate />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
