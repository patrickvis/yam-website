import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/home/Hero";

import { heroAnimation } from "../animations/homeAnimations";
import Overlay from "../components/other/Overlay";
import { HeaderContext } from "../contexts/HeaderContext";
import AboutSection from "../components/home/AboutSection";

export default function Home() {
  // disabling header
  const { setDisabled } = useContext(HeaderContext);

  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setDisabled(false);
    setAnimationComplete(true);
  };

  useEffect(() => {
    setDisabled(true);
    heroAnimation(completeAnimation);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div id="homepage">
      {!animationComplete && <Overlay />}
      <Hero />
      <AboutSection />
    </div>
  );
}
