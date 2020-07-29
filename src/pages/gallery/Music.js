import React, { useState } from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { music } from "../../data/galleries";

export default function Music() {
  const [images, setImages] = useState(music);

  return (
    <div className="page">
      <SectionHero
        title="Music"
        subtitle="YAM Photgraphy Gallery"
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1595458064/yam-website/gallery/previews/music-cover.jpg"
      />
      <div className="container filter-grid pt-5">
        <input
          type="text"
          placeholder="Search by title or artist"
          onChange={(e) => {
            const filterText = e.target.value.toLowerCase();
            setImages(
              music.filter((image) => {
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
      <GridLayout images={images} category="music" />
    </div>
  );
}
