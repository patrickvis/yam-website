import React from "react";

export default function WhoWeAre() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );
  return (
    <div className="who-we-are text-center text-md-left">
      <div className="section-header">
        <h1>Who are We?</h1>
      </div>
      <div className="content container">
        <div className="row align-items-center">
          <div className="col">
            <p className="lead-p">
              {tab}We a <b>501(c)(3) nonprofit organization</b> dedicated in
              serving <b>today's youth</b> and <b>tomorrow's future.</b>
            </p>
            <p className="lead-p">
              {tab}The Youth Arts Movement is focused on{" "}
              <b>providing a platform for your voice</b> through music, art,
              literature, and all aspects of the arts.
            </p>

            <p>
              {tab}Based in a community very much influenced in STEM, we saw the
              arts develop a stigma of instability and unintelligence. We’ve all
              been there, your poetry award or art prize never seemed to stack
              up against a robotics championship. YAM strives to{" "}
              <b>close this gap between the STEM field and the arts</b>,
              emphasizing the importance of both in our society today.
            </p>
            <p>
              {tab}YAM provides students with opportunities to{" "}
              <b>elevate their artwork and their own voices</b>. YAM
              competitions provides winners with scholarship prizes, applicants
              with connections, and communities with fundraisers and donations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
