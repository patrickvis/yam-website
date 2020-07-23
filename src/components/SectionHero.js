import React from "react";
import { Image } from "cloudinary-react";

export default function SectionHero(props) {
  return (
    <div className="section-hero">
      <Image
        cloudName="masonwang"
        publicId={props.imageURL}
        className="img-fluid"
        style={{ backgroundColor: "#152828" }}
      />
      <div className="container text-center my-auto">
        <div className="row justify-content-center">
          <div className="col-fit">
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
          </div>
        </div>
      </div>
    </div>
  );
}
