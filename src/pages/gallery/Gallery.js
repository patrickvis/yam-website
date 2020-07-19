import React from "react";

export default function Gallery() {
  return (
    <div className="gallery page">
      <div className="d-none d-md-flex content-container ">
        {/* blm side */}
        <div className="blm-column section">
          <img
            src={require("../../assets/img/gallery/blm-cover.jpg")}
            alt="blm"
            className="section-bg"
          />
          <h1>Black Lives Matter Gallery</h1>
          <h2>Expressing justice through the arts</h2>
        </div>
        {/* rest */}
        <div className="rest-column">
          <div className="submit-row">submit</div>
          <div className="art-sections">
            <div className="row1">
              <div className="visual-arts">arts</div>
              <div className="creative-writing">write</div>
            </div>
            <div className=" row2">
              <div className="photography">photo</div>
              <div className="music">music</div>
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
