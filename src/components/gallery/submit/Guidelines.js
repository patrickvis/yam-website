import React from "react";

export default function Guidelines() {
  const rules = [
    <>
      Pieces must be <b>created and submitted by applicant</b>.
    </>,
    <>
      Artwork must be <b>scanned or photographed</b> and uploaded for
      submission. Videos must be in the form of a{" "}
      <b>Google Drive or YouTube link</b>.
    </>,
    <>
      The submission <b>must not contain</b> material that is obscene, hateful,
      defamatory or otherwise objectionable.
    </>,
    <>
      The submission <b>must not contain</b> material that violates the laws or
      regulations of the United States or of any jurisdiction where the
      Submission is created.
    </>,
  ];
  return (
    <div className="guidelines gray-bg">
      <div className="section-header">
        <h1>Guidelines</h1>
      </div>
      <div className="container text-center">
        <div className="row pb-5">
          <div className="col-12 mb-2">
            <p className="lead-p">
              <b>No purchase necessary</b> to enter.
              <br />
              Rules that do not follow guidelines <b>will not be shown</b>.
            </p>
          </div>
          <div className="col text-md-left text-center">
            {rules.map((rule, index) => (
              <p className="">
                <span className="number">{index + 1}. </span> {rule}
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
