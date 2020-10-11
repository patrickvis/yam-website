import React from "react";
import "../../styles/pages/projects.scss";


export default function ProjectsList() {
  return (
    <div className="gray-bg">
      <div className="container pb-5">
        <div className="section-header">
          <h1>Partnerships</h1>
        </div>
        <div class="sponsors">
          <a href="https://www.arthubsd.com/"><img class="sponsors__image" src={require("../../assets/Projects/arthublogo.png")} alt="ArtHub" href="https://www.arthubsd.com/"></img></a>
          <div class="sponsors__text">
            <h2>Arthub</h2>
            <p>In partnership with Arthub, YAM is delighted to introduce art classes accessible to everyone! All of our classes are FREE to register and join. To enroll, simply click the register button and fill in the necessary information. We can't wait to start an exciting journey with our students! </p>
            <a
              href="https://www.arthubsd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn main-action mx-2 mb-2"
            >
              Learn More
            </a>
          </div>
        </div>

        <div class="sponsors">
          <a href="https://www.arthubsd.com/"><img class="sponsors__image" src={require("../../assets/Projects/ama.png")} alt="Arts Made Accessible"></img></a>
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
  );
}
