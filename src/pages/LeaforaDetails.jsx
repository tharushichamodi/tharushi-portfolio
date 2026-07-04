
import { Footer } from "../components/Footer";
import LeaforaHero from "../components/leafora/LeaforaHero";
import Overview from "../components/leafora/Overview";
import MyContribution from "../components/leafora/MyContribution";
import BrandStory from "../components/leafora/BrandStory";
import DesignProcess from "../components/leafora/DesignProcess";
import PackagingShowcase from "../components/leafora/PackagingShowcase";
import BrandIdentity from "../components/leafora/BrandIdentity";
import Outcome from "../components/leafora/Outcome";
import Gallery from "../components/leafora/Gallery";
import FooterCTA from "../components/leafora/FooterCTA";

export function LeaforaDetails() {
  return (
    <>
   

      <main className="bg-[#08140F] text-white">
        <LeaforaHero />
        <Overview />
        <MyContribution />
        <BrandStory />
        <DesignProcess />
        <PackagingShowcase />
        <BrandIdentity />
        <Outcome />
        <Gallery />
        <FooterCTA />
      </main>

      <Footer />
    </>
  );
}