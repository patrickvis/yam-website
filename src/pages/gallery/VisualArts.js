import React from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { visualarts } from "../../data/galleries";

export default function VisualArts() {
  return (
    <div className="page">
      <SectionHero
        title="Visual Arts"
        subtitle="YAM Visual Arts Gallery"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595458581/yam-website/gallery/previews/visualarts-cover.jpg"
      />
      <GridLayout images={visualarts} />
    </div>
  );
}
