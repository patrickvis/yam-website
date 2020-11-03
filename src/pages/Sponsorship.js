import React from "react";
import SectionHero from "../components/SectionHero";
import SponsorIntro from "../components/sponsorship/SponsorIntro";
// import OurChapters from "../components/chapters/OurChapters";
// import Team from "../components/about/Team"

export default function Chapters() {
  return (
    <div className="chapters page">
      <SectionHero
        title="Sponsorship"
        // subtitle="Register a YAM Chapter"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595541747/yam-website/gallery/previews/about-us-cover.jpg"
        // imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/v1603608876/image0_krzgoj.jpg"
      />
      <SponsorIntro />
      {/* <OurChapters /> */}
      {/* <Team /> */}
    </div>
  );
}
