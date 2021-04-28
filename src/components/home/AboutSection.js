import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

import { Image } from "cloudinary-react";
import ExecutiveTeam from "./ExecutiveTeam";
import CountUp from "react-countup"

export default function AboutSection() {
  return (
    <div>
      <section className="about about-section text-center">
        <div className="container py-4 px-2">
          <div className="row align-content-center">
            <Fade duration={1738} delay={100}>
              <div className="col-12">
                <h1>
                  The <span className="theme-peach">Y</span>outh{" "}
                  <span className="theme-green">A</span>rts{" "}
                  <span className="theme-blue">M</span>ovement
                </h1>
              </div>
              <div className="col-12">
                <p>
                  We’re a 501(c)3 <b>a nonprofit organization</b>  dedicated to providing young artists a platform and community
                for creative expression, collaboration, and communication.
                </p>
                <Fade duration={1738} delay={100}>
                  <div className="col-lg-12 col-sm-12">
                    <ExecutiveTeam />
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <p>
                      We are dedicated to magnifying the voices of the unheard.
                      Too often do we see the work of young artists marginalized
                      in society and shrouded in a stigma of instability and unintelligence;
                      we want to provide students the platform of creative expression and recognition they deserve.
                      YAM strives to close this gap between the STEM field and the arts, emphasizing the importance of
                      both in our society today. The Youth Arts Movement is focused on providing a platform for your
                      voice through music, art, literature, and all aspects of the arts.
                    </p>
                    <p>Reach out to us, we’d love to hear from you!</p>
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
                    <div className="pt-2 col-12">
                      <a type="button"
                        className="action-btn main-action mx-2 mb-3"
                        href="https://charity.gofundme.com/o/en/campaign/helping-to-close-the-gap" target="blank">
                        Support Us
                  </a>
                      <Link to="/about/story" className="action-btn mx-2 mb-3">
                        Our Story
                </Link>
                      <button
                        className="action-btn main-action mx-2 mb-3"
                        data-toggle="modal"
                        data-target="#newsletterModal"
                      >
                        Join Newsletter
                </button>
                    </div>
                  </div>
                </Fade>
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
                <h1>Social Justice Gallery</h1>
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
