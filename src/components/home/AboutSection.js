import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Image } from "cloudinary-react";

export default function AboutSection() {
  
  const [showList, setShowList] = React.useState(false);
  //const [showList] = React.useState(false);
  console.log('🚀 ~ AboutSection ~ showList', showList);
  
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
              </div>
            </Fade>
            <Fade duration={1738} delay={100}>
            <div className="col-lg-12 col-sm-12">
                  <div className="section-header-inline">
                    <h1>Our Mission</h1>
                  </div>
                  <p className="lead-p">
                    We are dedicated to magnifying the voices of the unheard. Too often did we see the same story;
                    young artists and writers taking a begrudged back seat. From school funding to basic recognition,
                    we realized a fundamental appreciation for art was missing from schools near and far from our founding
                    place of Saratoga, CA.
                  </p>
                  <p className="lead-p">
                    We founded the Youth Arts Movement as a response to such imbalance, seeking to showcase student
                    artwork and provide opportunities to the young artists who needed it most. YAM strives to close this
                    gap between the STEM field and the arts, emphasizing the importance of both in our society today.
                  </p>
                  {/* <p>Reach out to us, we’d love to hear from you!</p> */}
                  {/* <p className="email">
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
                  </p> */}
                  <div className="pt-2 col-12">
                    <Link to="/about/story" className="action-btn mx-2 mb-3">
                      Our Story
                    </Link>
                    {/* <button
                      className="action-btn main-action mx-2 mb-3"
                      data-toggle="modal"
                      data-target="#newsletterModal"
                    >
                      Join Newsletter
                    </button> */}
                  </div>
                </div>
            </Fade>
          </div>
        </div>
      </section>

      <section className="writing-competition-section text-lg-left text-center">
        <div className="container py-4 px-2">
          <div className="row align-content-center">
            //<Fade duration={1738} delay={100}>
              <div className="col-12 col-lg-8">
                  <div className="comp-banner">
                     <img src={require('../../assets/home/outreach/writingcompetitiongraphic.png')} alt="Now accepting submissions!" />
                   </div>
                <h1>YAM WritingFest</h1>
                <h2>YAM's WritingFest has officially been launched!! 📝✨🖋️</h2>

                <p>
                  This is a writing contest in which applicants will be creating a poem or short story! Applicants will be graded on conventions, originality, and overall skills.
                  The form for submissions will close on April 30th, 2023 at 11:59PM so get in as many pieces as you can!
                    <p>
                    
                    <button
                      className={`rules-list-btn${showList ? ' expand' : ''}`}
                      type="button"
                      onClick={() => setShowList((prevShowList) => !prevShowList)}
                      tabIndex={0}
                      aria-expanded={showList}
                      aria-controls="rules-list"
                       >
                      The rules are as follows:
                    </button>
                        <ul
                          className={`list-group list-group-flush incentive-list${showList ? ' expand' : ''}`}
                          id="incentive-list"
                        >
                          <li className="list-group">Times New Roman, 12-sized, and double-spaced formatting and font (basically MLA)</li>
                          <li className="list-group">can be any narrative and theme</li>
                          <li className="list-group">350 words or less for poems, 2500 words or less for short stories</li>
                          <li className="list-group"> to make the judging process go by efficiently and nicely, submissions will have to be in English</li>
                          <li className="list-group">we are dedicated to making sharing our platform with yours, so you must be comfortable with your work being shared</li>
                          <li className="list-group">Prizes will be given approximately two weeks after the deadline</li>
                          <li className="list-group">Prizes will ONLY be given electronically</li>
                          <li className="list-group">Prizes will ONLY be in US currency</li>
                          <li className="list-group">Prizes will have 3 winners per category</li>
                          <li className="list-group">Get to partner with other organizations and individuals with similar goals/missions</li>
                        </ul>
                     </p> 

                  First place receives: $100USD
                  Second place receives: $50USD
                  Third place receives: $25USD

                  Thank you for your interest in our mission and happy writing! ✍️
                </p>
                 <a
                    href="tinyurl.com/yamwritingfest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn mx-2 mb-2"
                  >
                    SUBMISSION LINK
                </a>
            </div>    
            //</Fade>
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
