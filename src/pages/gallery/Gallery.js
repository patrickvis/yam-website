import React from "react";
import SectionPreview from "../../components/gallery/SectionPreview";

export default function Gallery() {
  return (
    <div className="gallery page">
      <div className="d-none d-md-flex content-container ">
        <div className="blm-column">
          <SectionPreview
            name="blm"
            h1="Black Lives Matter Gallery"
            h2="Expressing justice through the arts"
          />
        </div>
        <div className="rest-column">
          <div className="submit-row">
            <SectionPreview name="submit" />
          </div>
          <div className="art-sections">
            <div className="row1">
              <SectionPreview name="visualarts" h1="Visual Arts" />
              <SectionPreview name="creativewriting" h1="Creative Writing" />
            </div>
            <div className="row2">
              <SectionPreview name="photography" h1="Photography" />
              <SectionPreview name="music" h1="Music" />
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-none container-fluid m-0 p-0">
        SMALL LAYOUT
      </div>
    </div>
  );
}
