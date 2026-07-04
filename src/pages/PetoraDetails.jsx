
import { Footer } from "../components/Footer";

import PetoraHero from "../components/petora/PetoraHero";
import Overview from "../components/petora/Overview";
import Contribution from "../components/petora/Contribution";
import TechStack from "../components/petora/TechStack";
import ProjectPreview from "../components/petora/ProjectPreview";
import FooterCTA from "../components/petora/FooterCTA";

export function PetoraDetails() {
  return (
    <>
     

      <main className="bg-[#FFF8F1] text-[#111827]">

        <PetoraHero />

        <Overview />

        <Contribution />

        <TechStack />

        <ProjectPreview />

        <FooterCTA />

      </main>

      <Footer />
    </>
  );
}