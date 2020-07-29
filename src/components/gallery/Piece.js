import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import artists from "../../data/artists";
import { visualarts } from "../../data/galleries";

export default function Piece() {
  const notFound = (
    <div className="404 page container text-center display-4">
      <div className="row">
        <div className="col mt-3">
          <span className="theme">404:</span> Not found.
        </div>
      </div>
    </div>
  );
  const pathTokens = useLocation().pathname.split("/");
  const category = pathTokens[2];
  const title = pathTokens[4];

  if (category === "visualarts") {
    const piece = visualarts.find((image) => image.imageURL.endsWith(title));
    const artist = artists[piece.artist];
    const otherPiecesByArtist = visualarts.filter((image) => {
      if (image.imageURL !== piece.imageURL)
        return image.artist === piece.artist;
      return false;
    });

    if (piece)
      return (
        <div className="piece page">
          <div className="container">
            <div className="row justify-content-center align-items-center text-center text-lg-left">
              <div className="col-lg-6 col-12">
                <Link to="/gallery/visualarts" className="btn">
                  <i className="fa fa-arrow-left"></i> Back to all
                </Link>
                <div className="card card-body">
                  <h1>{piece.title}</h1>
                  <h2>
                    By <span className="artist">{piece.artist}</span> (
                    {artist.age})
                  </h2>
                  <h3>{artist.school}</h3>
                  <p className="description">{piece.description}</p>
                  {otherPiecesByArtist.length > 0 && (
                    <div className="other">
                      <p className="mb-2">
                        <b>
                          Other pieces by this artist:
                          <br />
                        </b>
                      </p>
                      {otherPiecesByArtist.map((otherPiece, index) => (
                        <span key={index} className="mb-2 d-inline-block">
                          <Link
                            to={`/gallery/visualarts/piece/${
                              otherPiece.imageURL.split("/")[10]
                            }`}
                          >
                            <span className="otherPiece">
                              {otherPiece.title}
                            </span>
                          </Link>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="img-col col-lg-6 col-12 mt-4 mt-lg-0">
                <Image
                  cloudName="masonwang"
                  publicId={piece.imageURL}
                  className="img-fluid"
                  style={{ backgroundColor: "#152828" }}
                />
              </div>
            </div>
          </div>
        </div>
      );
    else return notFound;
  } else return notFound;
}
