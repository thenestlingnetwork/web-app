import React from "react";
import HeroSection from "./heroSection";
import IconGallery from "./iconGallery";
import Services from "./services";
import TeamSection from "./teamSection";
import Contact from "./contact";
import WhyChooseUs from "./whyChooseUs";
function Home() {
  return (
    <>
      <HeroSection />
      <IconGallery />
      <Services />
      <WhyChooseUs />
      <TeamSection />
      <Contact />
    </>
  );
}

export default Home;
