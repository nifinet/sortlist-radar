import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import IdentificationSection from "@/components/IdentificationSection";
import MarketplaceSection from "@/components/MarketplaceSection";
import FeaturesSection from "@/components/FeaturesSection";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <IdentificationSection />
      <MarketplaceSection />
      <FeaturesSection />
      <ComparisonTable />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
