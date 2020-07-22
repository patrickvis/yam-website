import React from "react";
import Team from "../components/about/Team";
import AboutHero from "../components/about/AboutHero";
import WhoWeAre from "../components/about/WhoWeAre";

export default function About() {
  return (
    <div className="about page">
      <AboutHero />
      <WhoWeAre />
      <Team />
    </div>
  );
}
