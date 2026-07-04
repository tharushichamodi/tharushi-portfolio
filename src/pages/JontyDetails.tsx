import { HeroSection } from "../components/jonty/HeroSection";
import { Overview } from "../components/jonty/Overview";
import { BrandIdentity } from "../components/jonty/BrandIdentity";
import { Gallery } from "../components/jonty/Gallery";
import Results from "../components/jonty/Results";
import Timeline from "../components/jonty/Timeline";
import VideoShowcase from "../components/jonty/VideoShowcase";
import MarketingStrategy from "../components/jonty/MarketingStrategy";
import FooterCTA from "../components/jonty/FooterCTA";


import React, { useEffect } from "react";
export function JontyDetails() {
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  
  return (
    <>
      <HeroSection />
      <Overview />
      <BrandIdentity />
      <Timeline />
      <VideoShowcase />
      <Gallery />
       <MarketingStrategy />
       <Results />
      <FooterCTA />
    
      
     
      
     
    </>
  );
}