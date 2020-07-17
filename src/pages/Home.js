import React, { useState, useEffect, useContext } from "react";
import Hero from "../components/home/Hero";

import { heroAnimation } from "../animations/homeAnimations";
import Overlay from "../components/other/Overlay";
import { HeaderContext } from "../contexts/HeaderContext";
import { Link } from "react-router-dom";

export default function Home() {
  // disabling header
  const { setDisabled } = useContext(HeaderContext);

  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setDisabled(false);
    setAnimationComplete(true);
  };

  useEffect(() => {
    setDisabled(true);
    heroAnimation(completeAnimation);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {!animationComplete && <Overlay />}
      <Hero />
      <div className="about text-center">
        <div className="container py-5 px-2">
          <div className="row py-5 my-2">
            <div className="col-12">
              <h1>
                The <span className="theme">Y</span>outh{" "}
                <span className="theme">A</span>rts{" "}
                <span className="theme">M</span>ovement
              </h1>
            </div>
            <div className="col-12">
              <p>
                We are <b>a nonprofit organization</b> dedicated to providing
                students and aspiring artists a platform for their creative
                expression.
                <br />
                We seek to create <b>a community for artists</b> to collaborate
                and communicate.
              </p>
            </div>
            <div className="col-12 pt-2 pb-2">
              <Link to="/chapters" className="action-btn main-action mx-2 mb-2">
                Register a Chapter
              </Link>
              <Link to="/chapters" className="action-btn mx-2 mb-2">
                More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
