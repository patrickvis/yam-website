import React, { useEffect } from "react";
import Hero from "../components/home/Hero";

import { heroAnimation } from "../animations/homeAnimations";

export default function Home() {
  useEffect(() => {
    heroAnimation();
  }, []);
  return (
    <div>
      <Hero />
    </div>
  );
}
