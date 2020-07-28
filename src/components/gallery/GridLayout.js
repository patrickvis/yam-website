import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default function GridLayout(props) {
  return (
    <div className="grid-layout container align-items-center px-1">
      <div className="row no-gutters gallery-row justify-content-center">
        {props.images.map((img) => {
          let id = /[^/]*$/.exec(img.imageURL)[0];
          console.log(img);
          return (
            <div
              className="col-6 col-md-4 col-lg-3 d-flex align-items-stretch img-col"
              id={id}
              key={id}
            >
              <Link className="d-flex align-items-stretch">
                <Image
                  cloudName="masonwang"
                  publicId={img.imageURL}
                  className="img-fluid gallery-image"
                  style={{ backgroundColor: "#152828" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
