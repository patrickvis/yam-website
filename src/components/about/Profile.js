import React from "react";
import { Image } from "cloudinary-react";

export default function Profile(props) {
  let escapedName = props.name.replace(/\s+/g, "-").toLowerCase();
  return (
    <div className="col-lg-3 col-sm-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
          <Image
            cloudName="masonwang"
            publicId={`https://res.cloudinary.com/masonwang/image/upload/v1595421639/yam-website/team/${escapedName}`}
            className="img-fluid"
            style={{ backgroundColor: "#222" }}
          />
          <div className="social">
            {props.instagram && (
              <a
                href={props.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            )}
            {props.facebook && (
              <a
                href={props.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            )}
            {props.linkedin && (
              <a
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            )}
            {props.github && (
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
            )}
          </div>
        </div>
        <div className="member-info">
          <h4>{props.name}</h4>
          <span>{props.position}</span>
        </div>
      </div>
    </div>
  );
}
