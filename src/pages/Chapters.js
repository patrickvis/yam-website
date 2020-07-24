import React from "react";
import SectionHero from "../components/SectionHero";
import WhyChapters from "../components/chapters/WhyChapters";
import OurChapters from "../components/chapters/OurChapters";

export default function Chapters() {
  return (
    <div className="chapters page">
      <SectionHero
        title="Chapters"
        subtitle="Register a YAM Chapter"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595615623/yam-website/gallery/previews/chapters-cover.jpg"
      />
      <WhyChapters />
      <OurChapters />
    </div>
  );
}
