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
            <p>In partnership with Arthub, YAM is delighted to introduce art classes accessible to everyone! All of our classes are FREE to register and join. To enroll, simply click the register button and fill in the necessary information. We can't wait to start an exciting journey with our students!</p>
            <a
              href="https://www.arthubsd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn main-action mx-2 mb-2"
            >
              Learn More
            </a>
          </div>

          <a href="https://thedrawingstudiotds.org/"><img class="sponsors__image" src={require("../../assets/Projects/theDrawingStudio.png")} alt="The Drawing Studio" href="https://www.arthubsd.com/"></img></a>
          <div class="sponsors__text">
            <h2>The Drawing Studio</h2>
            <p>The Drawing Studio is a 501(c)3 nonprofit in Tucson, Arizona, that offers affordable fee-based and free classes and workshops, hosts events and exhibits, and fosters awareness of the positive effects of creativity on individuals and the entire community. Their mission is to inspire people of all ages and backgrounds to embrace art practice as a pathway to personal growth and healthy community.</p>
            <a
              href="https://thedrawingstudiotds.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn main-action mx-2 mb-2"
            >
              Learn More
            </a>

            
          </div>

          <a href="https://www.instagram.com/key2musicorg/"><img class="sponsors__image" src={require("../../assets/Projects/key2music.png")} alt="Key2Music" href="https://www.instagram.com/key2musicorg/"></img></a>
          <div class="sponsors__text">
            <h2>Key2Music</h2>
            <p>Key2music is a nonprofit that focuses on nurturing the love of music in underprivileged children and youth around the world through teaching string instruments. We are super excited to work with them because we believe in their mission and the positivity they bring to the world!</p>
            <a
              href="https://www.instagram.com/key2musicorg/"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn main-action mx-2 mb-2"
            >
              Learn More
            </a>

            
          </div>

        </div>

        
      </div>
    </div>
  );
}
