import React, { useState } from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { photos } from "../../data/galleries";

export default function Photography() {
  const [images, setImages] = useState(photos);

  return (
    <div className="page">
      <SectionHero
        title="Photos"
        subtitle="YAM Photography Gallery"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/e_blur:150/v1609136594/Galleries/image2_a3mfxu.jpg"
      />
      <div className="container filter-grid pt-5">
        <input
          type="text"
          placeholder="Search by title or artist"
          onChange={(e) => {
            const filterText = e.target.value.toLowerCase();
            setImages(
              photos.filter((image) => {
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
      <GridLayout images={images} category="photography" />
    </div>
  );
}
