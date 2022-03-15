import React from "react";
import SectionHero from "../components/SectionHero";
import WhyChapters from "../components/chapters/WhyChapters";
import WhyJoinChapter from "../components/chapters/WhyJoinChapter";
// import OurChapters from "../components/chapters/OurChapters";
// import Team from "../components/about/Team"

export default function Chapters() {
  return (
    <div className="chapters page">
      <SectionHero
        title="Chapters"
        subtitle="Register a YAM Chapter"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:0/v1612564896/Pages/solitude_by_tomprante-d9tgijn_xdae6w.jpg"
        // imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/v1603608876/image0_krzgoj.jpg"
      />
      <WhyChapters />
      <WhyJoinChapter />
      {/* <OurChapters /> */}
      {/* <Team /> */}
    </div>
  );
}
