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
        subtitle="YAM Photgraphy Gallery"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595458064/yam-website/gallery/previews/photography-cover.jpg"
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
