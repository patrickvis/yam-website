import React, { useState } from "react";
import GridLayout from "../../components/gallery/GridLayout";
import SectionHero from "../../components/SectionHero";
import { creativewriting } from "../../data/galleries";

export default function Photography() {
  const [images, setImages] = useState(creativewriting);

  return (
    <div className="page">
      <SectionHero
        title="Writing"
        subtitle="YAM Creative Writing Gallery"
        imageURL="https://res.cloudinary.com/dmpjsarum/image/upload/v1606503308/Galleries/writing_blez4t.jpg"
      />
      <div className="container filter-grid pt-5">
        <input
          type="text"
          placeholder="Search by title or artist"
          onChange={(e) => {
            const filterText = e.target.value.toLowerCase();
            setImages(
              creativewriting.filter((image) => {
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
      <GridLayout images={images} category="creativewriting" />
    </div>
  );
}
