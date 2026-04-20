import { AnnouncementBar } from "@/components/AnnouncementBar";
import { BenefitStrip } from "@/components/BenefitStrip";
import { FaqSection } from "@/components/FaqSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MobileStickyCta } from "@/components/MobileStickyCta";
import { Navbar } from "@/components/Navbar";
import { ProductPurchaseModule } from "@/components/ProductPurchaseModule";
import { SectionEarlyAccess } from "@/components/SectionEarlyAccess";
import { SectionIngredients } from "@/components/SectionIngredients";
import { SectionProblemSolution } from "@/components/SectionProblemSolution";
import { SectionRoutine } from "@/components/SectionRoutine";
import { SectionTrust } from "@/components/SectionTrust";
import { SectionWhyGummies } from "@/components/SectionWhyGummies";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <BenefitStrip />
        <SectionProblemSolution />
        <SectionWhyGummies />
        <SectionIngredients />
        <SectionRoutine />
        <SectionTrust />
        <SectionEarlyAccess />
        <ProductPurchaseModule />
        <FaqSection />
        <FinalCta />
        <Footer />
      </main>
      <MobileStickyCta />
    </>
  );
}
