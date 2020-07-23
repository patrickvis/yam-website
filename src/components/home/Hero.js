import React, { useContext } from "react";
import Brusher from "./Brusher";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../contexts/HeaderContext";

export default function Hero() {
  const { disabled } = useContext(HeaderContext);

  let heroContent = (
    <div className="container text-center hero-content">
      <div className="row p-1 align-content-center h-100">
        <div className="col-12">
          <div className="title">
            <div className="line">
              <h1 className="m-0">
                <span className="letter">Y</span>
                <span className="letter">A</span>
                <span className="letter">M</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="slogan">
            <div className="triple">
              <div className="line-slogan">
                <h2>A Platform </h2>
              </div>
              <div className="line-slogan">
                <h2>for Creative</h2>
              </div>
              <div className="line-slogan">
                <h2>Expression.</h2>
              </div>
            </div>
            <div className="double">
              <div className="line-slogan">
                <h2>A Platform for </h2>
              </div>
              <div className="line-slogan">
                <h2>Creative Expression.</h2>
              </div>
            </div>
            <div className="single">
              <div className="line-slogan">
                <h2>A Platform for Creative Expression.</h2>
              </div>
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
        {disabled || window.innerWidth <= 992 || window.innerHeight <= 450 ? (
          heroContent
        ) : (
          <Brusher
            options={{
              image:
                "https://res.cloudinary.com/masonwang/image/upload/v1595467829/yam-website/hero/lg-color.jpg", // Path of the image to be used as a brush
              brushStyle: "round", // Brush style (round, square, butt)
              keepCleared: true,
              brushSize: 55,
              brushBlur: 50,
            }}
          >
            {heroContent}
          </Brusher>
        )}
      </div>
    </div>
  );
}
