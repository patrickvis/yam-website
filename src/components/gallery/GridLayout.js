import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default function GridLayout(props) {
  return (
    <div className="grid-layout container align-items-center px-1 pt-3 pb-5">
      {props.images.length > 0 ? (
        <div className="row no-gutters gallery-row justify-content-center">
          {props.images.map((img) => {
            let id = /[^/]*$/.exec(img.imageURL)[0];
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch img-col"
                id={id}
                key={id}
              >
                <Link
                  to="/gallery/visualarts"
                  className="d-flex align-items-stretch flex-row"
                >
                  <Image
                    cloudName="masonwang"
                    publicId={img.imageURL}
                    className="img-fluid gallery-image"
                    style={{ backgroundColor: "#152828" }}
                  />
                  <div className="title">
                    <span>
                      <i>{img.title}</i> by <b>{img.artist}</b>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center pt-5">
          Sorry, there are no results matching your search.
        </p>
      )}
    </div>
  );
}
