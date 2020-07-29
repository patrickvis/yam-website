import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

export default function GridLayout(props) {
  return (
    <div className="grid-layout container align-items-center px-1 pt-3 pb-5">
      {props.images.length > 0 ? (
        <div className="row no-gutters gallery-row justify-content-center">
          {props.images.map((img) => {
            let id;
            if (img.youtubeLink) id = youtube_parser(img.youtubeLink);
            else id = /[^/]*$/.exec(img.imageURL)[0];
            return (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch img-col"
                id={id}
                key={id}
              >
                <Link
                  to={`/gallery/${props.category}/piece/${id}`}
                  className="d-flex align-items-stretch flex-row"
                >
                  <Image
                    cloudName="masonwang"
                    publicId={
                      img.youtubeLink
                        ? `https://img.youtube.com/vi/${id}/0.jpg`
                        : img.imageURL
                    }
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

function youtube_parser(url) {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return match && match[7].length === 11 ? match[7] : false;
}
