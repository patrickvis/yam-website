import React from "react";
import { Link } from "react-router-dom";

export default function SectionPreview(props) {
  if (props.name !== "submit")
    return (
      <div className={`section ${props.name}`}>
        <Link to={`/gallery/${props.name}`} style={{ textDecoration: "none" }}>
          <div style={{ height: "100%", width: "100%" }}>
            <img
              src={require(`../../assets/img/gallery/${props.name}-cover.jpeg`)}
              alt={props.name}
              className="section-bg"
            />
            <h1>{props.h1}</h1>
            {props.h2 && <h2>{props.h2}</h2>}
          </div>
        </Link>
      </div>
    );
  else
    return (
      <>
        <h1>Submit Art</h1>
        <h2>Inspire others and empower your voice</h2>
        <Link to="/gallery/submit" className="action-btn">
          Submit
        </Link>
      </>
    );
}
