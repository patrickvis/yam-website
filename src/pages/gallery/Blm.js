import React, { useState } from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { blm } from "../../data/galleries";

export default function Blm() {
  const [images, setImages] = useState(blm);

  return (
    <div className="page">
      <SectionHero
        title="BLM"
        subtitle="YAM BLM Gallery"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595458065/yam-website/gallery/previews/blm-cover.jpg"
      />
      <div className="container filter-grid pt-5">
        <input
          type="text"
          placeholder="Search by title or artist"
          onChange={(e) => {
            const filterText = e.target.value.toLowerCase();
            setImages(
              blm.filter((image) => {
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
      <GridLayout images={images} category="blm" />
    </div>
  );
}
