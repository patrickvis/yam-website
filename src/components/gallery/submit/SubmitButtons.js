import React from "react";

export default function SubmitButtons() {
  return (
    <div className="container text-center pb-5">
      <div className="section-header">
        <h1>Submit Your Work</h1>
      </div>

      <div className="row">
        <div className="col-12">
          <p className="lead-p mb-2">
            Innovate. Inspire others. Empower your voice.
          </p>
          <p>
            Pieces can be any aspects of the arts, including but not limited to:{" "}
            <b>photography, visual art, music, sculpture</b>.<br />
            Please read submission guidelines below.
          </p>
        </div>
        <div className="col">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfqVcf35PSE7x49w0o1BHNlfkbq5CvPzTS9BwbGE_Bsfr13rA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            Main Gallery
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfHO_Nnyo-N2dO5KdFosKhPfdFXlyBjBs2kYnhNn0dJblpy3A/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn main-action mx-2 mb-2"
          >
            BLM Gallery
          </a>
        </div>
      </div>
    </div>
  );
}
