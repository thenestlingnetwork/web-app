import React from "react";
import HeroSection from "./heroSection_new";
import IconGallery from "./iconGallery";
import Services from "./services_new";
import TeamSection from "./teamSection";
import Contact from "./contact";
import WhyChooseUs from "./whyChooseUs";
import Game from "./games";
import JoinUs from "./joinUs";
function Home() {
  return (
    <>
      <HeroSection />
      <IconGallery />
      <Services />
      <Game />
      <JoinUs />
      <Contact />
    </>
  );
}

export default Home;
