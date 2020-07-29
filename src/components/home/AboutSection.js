import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { Image } from "cloudinary-react";

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
                <p className="email">
                  <span className="d-none d-sm-block">
                    <a
                      href="mailto:official@youthartsmovement.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      official@youthartsmovement.org
                    </a>
                  </span>
                  <span className="d-block d-sm-none">
                    <a
                      href="mailto:official@youthartsmovement.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      official
                    </a>
                    <a
                      href="mailto:official@youthartsmovement.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      @youthartsmovement.org
                    </a>
                  </span>
                </p>
              </div>
              <div className="pt-2 col-12">
                <Link to="/about" className="action-btn main-action mx-2 mb-3">
                  About Us
                </Link>
                <Link to="/chapters" className="action-btn mx-2 mb-3">
                  Register a Chapter
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <section className="blm-about about-section text-lg-left text-center">
        <div className="container py-4 px-2">
          <div className="row align-content-center">
            <Fade duration={1738} delay={100}>
              <div className="col-12 col-lg-8">
                <h1>BLM Virtual Art Gallery</h1>
                <h2>Freedom ~ Equality ~ Justice</h2>
                <p>
                  <b>Join the movement</b> against state-sanctioned violence and
                  racism. <b>Fight for your voice</b> by expressing justice
                  through the arts.
                  <br />
                  Enter our virtual art gallery or donate to have your work
                  impact people nationwide.
                </p>
                <Link
                  to="/gallery/submit"
                  className="action-btn main-action ml-2 ml-md-0 mr-2 mb-3"
                >
                  Fight for Your Voice
                </Link>
                <Link to="/gallery/blm" className="action-btn mx-2 mb-3">
                  See Gallery
                </Link>
              </div>
              <div className="d-none d-lg-block col-4">
                <Link to="/gallery/blm">
                  <Image
                    cloudName="masonwang"
                    publicId="https://res.cloudinary.com/masonwang/image/upload/v1596040322/blm_pcjs0v.png"
                    className="img-fluid mt-5"
                  />
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </div>
  );
}
