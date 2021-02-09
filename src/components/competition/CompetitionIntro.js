import React from "react";
// import "../../styles/pages/Sponsors.scss";
import "../../styles/pages/projects.scss";



export default function CompetitionIntro() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <>
      <div className="section-header">
        <h1>Chitrakaaran - A Movement for the Visual Arts Winter 2021</h1>
      </div>
      <div className="container pb-5">
        {/* <div className="row text-center text-md-left"> */}
          <div class="sponsors">
            <a><img class="sponsors__imageCompetition" src="https://image.flaticon.com/icons/png/512/1809/1809172.png" height="200" alt="Key2Music"></img></a>
            <div class="sponsors__textCompetition">
              <h2>Submissions open from <b>January 22 to February 22</b></h2>
              {/*
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                Learn More
              </a> */}
            </div>

            <a><img class="sponsors__imageCompetition" src="https://cdn.iconscout.com/icon/free/png-512/theme-8-461757.png" height="200" alt="Key2Music"></img></a>
            <div class="sponsors__textCompetition">
              <h2>Theme: Personal expression/passion; No materials</h2>
              {/*
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                Learn More
              </a> */}
            </div>

            <a><img class="sponsors__imageCompetition" src="https://freeiconshop.com/wp-content/uploads/edd/image-flat.png" height="200" alt="Key2Music"></img></a>
            <div class="sponsors__textCompetition">
              <h2>Divisions: <b>Visual Arts</b></h2>
              {/*
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                Learn More
              </a> */}
            </div>

            <a><img class="sponsors__imageCompetition" src="https://www.shareicon.net/data/512x512/2016/07/08/792753_cup_512x512.png" height="200" alt="Key2Music"></img></a>
            <div class="sponsors__textCompetition">
              <h2>1st place: <b>$100</b>{tab}2nd place: <b>$50</b></h2>
              {/*
              {/* <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                Learn More
              </a> */}
            </div>

            {/* <a><img class="sponsors__imageCompetition" src="https://cdn0.iconfinder.com/data/icons/round-ui-icons/512/tick_red.png" height="230" alt="Key2Music"></img></a> */}
            <div class="sponsors__textSubmit">
              <h2></h2>
              <a
                href="https://forms.gle/5HjVbbiYcXpmrnoh8"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                Submit Your Artwork!
              </a>
            </div>

            {/* <a><img class="sponsors__imageCompetition" src="https://icons.iconarchive.com/icons/iconarchive/blue-election/1024/Election-Donate-Outline-icon.png" height="200" alt="Key2Music"></img></a>
            <div class="sponsors__textSubmit">
              <h2>Donate to YAM!</h2>
              <a
                href="https://charity.gofundme.com/o/en/campaign/chitrakaaran-a-movement-for-the-arts"
                target="_blank"
                rel="noopener noreferrer"
                className="action-btn main-action mx-2 mb-2"
              >
                GoFundme
              </a>
            </div> */}

            {/* <p>
              {tab}Thank you so much in your interest in "A Movement for the Visual Arts Winter 2021". Here are some more details.
            </p> */}

            {/* <main>
                <ol class="gradient-list">
                    <li>Submissions open from <b>January 22 to February 22</b></li>
                    <li>Theme: Personal expression/passion; No materials</li>
                    <li>Divisions: <b>Visual Arts</b></li>
                    <li>1st place: <b>$100</b>{tab}2nd place: <b>$50</b></li>
                    <li>Submit <b><a href="https://forms.gle/5HjVbbiYcXpmrnoh8">here</a></b></li>
                    <li>Donate <b><a href="https://charity.gofundme.com/o/en/campaign/chitrakaaran-a-movement-for-the-arts">here</a></b></li>
                </ol>
            </main> */}
          </div>
        {/* </div> */}
      </div>
    </>
  );
}
