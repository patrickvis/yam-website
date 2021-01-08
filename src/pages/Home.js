import React, { useEffect, useContext } from "react";
import Hero from "../components/home/Hero";

import { heroAnimation } from "../animations/homeAnimations";
import Overlay from "../components/other/Overlay";
import { HeaderContext } from "../contexts/HeaderContext";
import AboutSection from "../components/home/AboutSection";
import SponsorIntro from "../components/sponsorship/SponsorIntro";


export default function Home({ animationComplete, completeAnimation }) {
  // disabling header
  const { setDisabled } = useContext(HeaderContext);

  useEffect(() => {
    if (animationComplete === false) {
      setDisabled(true);
      heroAnimation(() => {
        completeAnimation();
        setDisabled(false);
      });
    } else {
      setDisabled(false);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="homepage">
      {!animationComplete && <Overlay />}
      <Hero />
      <AboutSection />
      <SponsorIntro />
    </div>
  );
}
