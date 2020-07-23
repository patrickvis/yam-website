import React from "react";
import Team from "../components/about/Team";
import WhoWeAre from "../components/about/WhoWeAre";
import SectionHero from "../components/SectionHero";

export default function About() {
  return (
    <div className="about page">
      <SectionHero
        title="About YAM"
        subtitle="The Youth Arts Movement"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595458581/yam-website/gallery/previews/visualarts-cover.jpg"
      />
      <WhoWeAre />
      <Team />
    </div>
  );
}
