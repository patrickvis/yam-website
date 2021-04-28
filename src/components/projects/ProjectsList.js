import React from "react";
import "../../styles/pages/projects.scss";


export default function ProjectsList() {
  return (
    <div className="container pb-5">
      <div className="section-header" style={{marginTop: "5%"}}>
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

        <a href="https://laplumamvhs.weebly.com/"><img class="sponsors__image" src={require("../../assets/Projects/lapluma.png")} alt="Key2Music" href="https://www.instagram.com/key2musicorg/"></img></a>
        <div class="sponsors__text">
          <h2>La Pluma</h2>
          <p>La Pluma is Monta Vista's only creative writing and art magazine. They've created a platform for artists to not only express themselves but connect with others. We can't wait to start an exciting journey with our students!</p>
          <a
            href="https://laplumamvhs.weebly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Learn More
            </a>
        </div>

        <a href="https://www.lovenotepoetry.com/"><img class="sponsors__image" src={require("../../assets/Projects/lovenote.png")} alt="Key2Music" href="https://www.instagram.com/key2musicorg/"></img></a>
        <div class="sponsors__text">
          <h2>Love Note</h2>
          <p>LoveNote is dedicated to spreading self love through poetry; love for yourself and others is cultivated through discovering what we have in common. Love note’s principles are of self love through the arts and we are ecstatic to work with them!</p>
          <a
            href="https://www.lovenotepoetry.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Learn More
            </a>
        </div>

        <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.happy-art.org%2F&e=ATN-5pusB8DQTpQdmalfxZ6uf4gFQOTG2cAsDOKTm9qk4TfBRMlRFrJYEr57TSomMN_cAsTJRsvfkhhpZORe_w4&s=1"><img class="sponsors__image" src={require("../../assets/Projects/happyart.png")} alt="Key2Music" href="https://www.instagram.com/key2musicorg/"></img></a>
        <div class="sponsors__text">
          <h2>HappyArt</h2>
          <p>HappyArt is an organization trying to spread love, kindness, and most importantly happiness around communities. HappyArt's goal is to help support all those who need help and create a movement to empower others to do good in their communities.</p>
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fwww.happy-art.org%2F&e=ATN-5pusB8DQTpQdmalfxZ6uf4gFQOTG2cAsDOKTm9qk4TfBRMlRFrJYEr57TSomMN_cAsTJRsvfkhhpZORe_w4&s=1"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Learn More
            </a>
        </div>

      </div>


    </div>
  );
}
