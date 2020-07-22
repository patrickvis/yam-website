import React from "react";
import Team from "../components/about/Team";
import AboutHero from "../components/about/AboutHero";

export default function About() {
  return (
    <div className="about page">
      <AboutHero />
      <Team />
    </div>
  );
}
