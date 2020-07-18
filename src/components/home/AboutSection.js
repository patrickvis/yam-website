import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function AboutSection() {
  return (
    <div>
      <section className="about about-section text-center">
        <div className="container py-4 px-2">
          <div className="row align-content-center">
            <Fade duration={1738} delay={100}>
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
                  We seek to create <b>a community for artists</b> to
                  collaborate and communicate.
                </p>
              </div>
              <div className="col-12 pt-2">
                <Link
                  to="/chapters"
                  className="action-btn main-action mx-2 mb-2"
                >
                  Register a Chapter
                </Link>
                <Link to="/about" className="action-btn mx-2 mb-2">
                  About Us
                </Link>
                <a
                  href="mailto:official.youthartsmovement@gmail.com"
                  className="action-btn mx-2 mb-2"
                >
                  Contact Us
                </a>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="blm-about about-section text-center">
        <div className="container py-4 px-2">
          <div className="row align-content-center">
            <Fade duration={1738} delay={100}>
              <div className="col-12">
                <h1>BLM Virtual Art Gallery</h1>
              </div>
              <div className="col-12">
                <h2>Freedom ~ Equality ~ Justice</h2>
              </div>
              <div className="col-12">
                <p>
                  <b>Join the movement</b> against state-sanctioned violence and
                  racism. <b>Fight for your voice</b> by expressing justice
                  through the arts.
                  <br />
                  Enter our virtual art gallery or donate to have your work
                  impact people nationwide.
                </p>
              </div>
              <div className="col-12 pt-2">
                <Link
                  to="/gallery/submit"
                  className="action-btn main-action mx-2 mb-2"
                >
                  Fight for Your Voice
                </Link>
                <Link to="/chapters" className="action-btn mx-2 mb-2">
                  See Gallery
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
