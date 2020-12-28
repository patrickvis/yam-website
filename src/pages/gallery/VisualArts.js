import React, { useState } from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { visualarts } from "../../data/galleries";

export default function VisualArts() {
  const [images, setImages] = useState(visualarts);

  return (
    <div className="page">
      <SectionHero
        title="Visual Arts"
        subtitle="YAM Visual Arts Gallery"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:231/v1609134679/Galleries/image0_tgqijc.jpg"
      />
      <div className="container filter-grid pt-5">
        <input
          type="text"
          placeholder="Search by title or artist"
          onChange={(e) => {
            const filterText = e.target.value.toLowerCase();
            setImages(
              visualarts.filter((image) => {
                if (
                  image.title.toLowerCase().includes(filterText) ||
                  image.artist.toLowerCase().includes(filterText)
                )
                  return true;
                return false;
              })
            );
          }}
        />
      </div>
      <GridLayout images={images} category="visualarts" />
    </div>
  );
}
