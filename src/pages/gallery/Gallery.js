import React from "react";
import SectionPreview from "../../components/gallery/SectionPreview";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <div className="gallery page">
      <div className="largeContainer">
        <div className="content-container flex-row">
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
      </div>

      <div className="container-fluid m-0 p-0 smallContainer">
        <div className="flex-container flex-column text-center">
          <div className="submit">
            <h1>Submit Art</h1>
            <h4>Inspire others and empower your voice</h4>
            <Link to="/gallery/submit" className="action-btn">
              Submit
            </Link>
          </div>
          <SectionPreview
            name="blm"
            h1="Black Lives Matter Gallery"
            h2="Expressing justice through the arts"
          />
          <SectionPreview name="visualarts" h1="Visual Arts" />
          <SectionPreview name="creativewriting" h1="Creative Writing" />
          <SectionPreview name="photography" h1="Photography" />
          <SectionPreview name="music" h1="Music" />
        </div>
      </div>
    </div>
  );
}
