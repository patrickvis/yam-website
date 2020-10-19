import React from "react";
import "../../styles/pages/projects.scss";


export default function CurrentProjects() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <>
      <div className="section-header">
        <h1>Our Current Projects</h1>
      </div>
      <div className="container pb-5">
        <div className="row text-center text-md-left">
          <div className="col">
            <p>
              {tab}Here at YAM, we want to provide opportunities for other young artists and <b>create a tangible positive impact in our communities.</b> Thanks to our numerous <b>partners and sponsorships,</b> we have the ability to accomplish that. Here are some projects we’re working on at the moment:
            </p>

            <div class="sponsors">
              <img class="sponsors__image" src={require("../../assets/Projects/ama.png")} alt="Arts Made Accessible"></img>
              <div class="sponsors__text">
                <h2>Arts Made Accessible (AMA)</h2>
                <p>Our mission is to support young artists and showcase their artwork. However, not every student has access to the resources needed for quality art exploration and education. We seek to supplement such students with the opportunities they do not have access to. With the aid of our various partnerships and sponsors, we are able to provide basic art materials to students across the country. If you are interested in sponsoring us visit the sponsoring page for more info!</p>
                {/* <a
                  // href="https://www.arthubsd.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn main-action mx-2 mb-2"
                >
                  Learn More
                </a> */}
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </>
  );
}
