import React from "react";
import "../../styles/pages/Sponsors.scss";


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
        <div className="row text-center text-md-left">
          <div className="col">
            <p>
              {tab}Thank you so much in your interest in "A Movement for the Visual Arts Winter 2021". Here are some more details.
            </p>

            <main>
                <ol class="gradient-list">
                    <li>Submissions open from <b>January 22 to February 22</b></li>
                    <li>Theme: Personal expression/passion; No materials</li>
                    <li>Divisions: <b>Visual Arts</b></li>
                    <li>1st place: <b>$100</b>{tab}2nd place: <b>$50</b></li>
                    <li>Submit <b><a href="https://forms.gle/5HjVbbiYcXpmrnoh8">here</a></b></li>
                    <li>Donate <b><a href="https://charity.gofundme.com/o/en/campaign/chitrakaaran-a-movement-for-the-arts">here</a></b></li>
                </ol>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
