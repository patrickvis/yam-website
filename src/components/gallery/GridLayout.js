import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default function GridLayout(props) {
  return (
    <div className="grid-layout container align-items-center px-1">
      <div className="row no-gutters gallery-row justify-content-center">
        {props.images.map((img) => {
          let id = /[^/]*$/.exec(img.imageURL)[0];
          return (
            <div
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center img-col"
              id={id}
              key={id}
            >
              <div className="wrapper d-flex flex-column align-items-stretch text-center">
                <Link>
                  <Image
                    cloudName="masonwang"
                    publicId={img.imageURL}
                    className="img-fluid gallery-image"
                    style={{ backgroundColor: "#152828" }}
                  />
                </Link>
                <div className="title">
                  <i>{img.title}</i> by <b className="theme">{img.artist}</b>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
