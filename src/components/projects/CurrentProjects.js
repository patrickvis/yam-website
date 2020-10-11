import React from "react";

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
              {tab}Here at YAM, we want to provide opportunities for other young artists and <b>create a tangible positive impact in our communities.</b> Thanks to our numerous <b>partners and sponsorships,</b> we have the ability to accomplish that. Here is a list of projects we’re working on at the moment.
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
