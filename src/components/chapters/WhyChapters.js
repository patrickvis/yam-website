import React from "react";

export default function WhyChapters() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );

  return (
    <>
      <div className="section-header">
        <h1>Why Register a Chapter?</h1>
      </div>
      <div className="container pb-5">
        <div className="row text-center text-md-left">
          <div className="col">
            <p>
              {tab}The YAM allows <b>any academic club</b> related to the arts
              (including and not limited to photography, art, architecture,
              writing) to register a chapter.{" "}
              <b>Registering a chapter allows benefits</b> including first
              notice of competitions , vast networking opportunities, and
              resources.
            </p>
            <p>
              {tab}By registering your chapter, officers and members{" "}
              <b>still have the freedom</b> to perform individual club functions
              in meetings however they like. The YAM will guide, mentor, and
              give opportunities to chapters.{" "}
              <b>As a registered chapter, you must uphold YAM mission</b> of
              empowering youth voices through the arts.
            </p>
          </div>
        </div>
        <div className="col text-center mt-1">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdnCJRjW0_nm3qyEhQfe67FbpevxyztOW1damH0WL0aOuOhuA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Existing Club
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1FtdOjB__B2vQa8BX5aV0GGMowcnZQ-Kc0IVtttxpDokOsg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            New Club
          </a>
          
        </div>
        <div className="col text-center mt-1">
          <a
            href="https://docs.google.com/document/d/1LBOeqq_rQno21fa6YKERfmpWM4MnMXxV4OueE-gKjIE/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn mx-2 mb-2"
          >
            More Information
          </a>
        </div>
        
      </div>
    </>
  );
}
