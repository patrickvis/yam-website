import React from "react";
import Brusher from "./Brusher";

import { Link } from "react-router-dom";

export default function Hero() {
  let heroContent = (
    <div className="container text-center hero-content">
      <div className="row p-1 align-content-center h-100">
        <div className="col-12">
          <h1 className="m-0">
            <span className="letter">Y</span>
            <span className="letter">A</span>
            <span className="letter">M</span>
          </h1>
        </div>
        <div className="col-12">
          <div className="two-lines d-block d-lg-none">
            <div className="line">
              <h2 className="slogan">A Plaform for </h2>
            </div>
            <div className="line">
              <h2 className="slogan">Creative Expression.</h2>
            </div>
          </div>
          <div className="single-line d-none d-lg-block">
            <div className="line">
              <h2 className="slogan">A Plaform for Creative Expression.</h2>
            </div>
          </div>
        </div>
        <div className="col-12 mt-4">
          <Link to="/gallery" className="btn action-btn main-action mb-2">
            View Gallery
          </Link>
          <Link to="/gallery/submit" className="btn action-btn mx-2 mb-2">
            Submit Art
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="hero">
      <div className="hero-bg">
        <Brusher
          options={{
            image: "lg-color.jpg", // Path of the image to be used as a brush
            brushStyle: "round", // Brush style (round, square, butt)
            keepCleared: true,
            brushSize: 40,
            brushBlur: 20,
          }}
        >
          {heroContent}
        </Brusher>
      </div>
    </div>
  );
}
