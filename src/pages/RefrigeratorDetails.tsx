
import { Footer } from "../components/Footer";

import RefrigeratorHero from "../components/refrigerator/RefrigeratorHero";
import Overview from "../components/refrigerator/Overview";
import Problem from "../components/refrigerator/Problem";
import Research from "../components/refrigerator/Research";
import Solution from "../components/refrigerator/Solution";
import Prototype from "../components/refrigerator/Prototype";
import PromoVideo from "../components/refrigerator/PromoVideo";
import Contribution from "../components/refrigerator/Contribution";
import Outcome from "../components/refrigerator/Outcome";
import FooterCTA from "../components/refrigerator/FooterCTA";

export function RefrigeratorDetails() {
  return (
    <>
     

      <main className="bg-[#060B14] text-white">

        <RefrigeratorHero />

        <Overview />

        <Problem />

        <Research />

        <Solution />

        <Prototype />

        <PromoVideo />

        <Contribution />

        <Outcome />

        <FooterCTA />

      </main>

      <Footer />
    </>
  );
}

export default RefrigeratorDetails;