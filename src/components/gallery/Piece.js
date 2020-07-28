import React from "react";
import { useLocation } from "react-router-dom";
// import artists from "../../data/artists";
import { visualarts } from "../../data/galleries";

export default function Piece() {
  const pathTokens = useLocation().pathname.split("/");
  const category = pathTokens[2];
  const title = pathTokens[4];

  if (category === "visualarts") {
    const piece = visualarts.find((image) => image.imageURL.endsWith(title));
    if (piece)
      return <div className="page">{piece.title + " " + piece.artist}</div>;
    else return <div className="404 page">404: Not found.</div>;
  } else
    return (
      <div className="page">{`This page will show ${title} from the ${category} category.`}</div>
    );
}
