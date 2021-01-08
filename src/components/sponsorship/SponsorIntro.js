import React from "react";
import "../../styles/pages/Sponsors.scss";


export default function WhyChapters() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <>
      <div className="section-header">
        <h1>Support Us!</h1>
      </div>
      <div className="container pb-5">
        <div className="row text-center text-md-left">
          <div className="col">
            <p>
              {tab}Thank you so much in your interest in sponsoring us! We are currently working on our <b>art kit drive</b> and would appreciate any financial support. All donations are <b>tax-deductible.</b> If interested contact <a href="mailto:jonathan@youthartsmovement.org">jonathan@youthartsmovement.org</a>.
            </p>

            {/* <p>
              {tab}By registering your chapter, officers and members{" "}
              <b>still have the freedom</b> to perform individual club functions
              in meetings however they like. The YAM will guide, mentor, and
              give opportunities to chapters.{" "}
              <b>As a registered chapter, you must uphold YAM mission</b> of
              empowering youth voices through the arts.
            </p> */}
          </div>
        </div>
        <div className="col text-center mt-1">

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
            href="https://drive.google.com/file/d/1ZQIp0c1G6v3zdUmyEn69JMR8z4q8Ns7l/view?usp=sharing"
          >
            Sponsorship Prospectus
          </a>
          <div class="grid">
            <div><img src="https://i.pinimg.com/originals/50/55/4e/50554e7975371dbbdc8b5a39d39f0cb8.png" alt=""></img></div>
          </div>

          {/* <a
            href="https://drive.google.com/file/d/1ZQIp0c1G6v3zdUmyEn69JMR8z4q8Ns7l/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Sponsorship Prospectus
          </a> */}
        </div>
      </div>
    </>
  );
}
