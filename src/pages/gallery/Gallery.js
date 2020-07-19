import React from "react";

export default function Gallery() {
  return (
    <div className="gallery page">
      <div className="d-none d-lg-block container-fluid m-0 p-0">
        <div className="row">
          {/* content begins here */}
          {/* first column */}
          <div className="col-5">
            <div className="flex-container">sdf</div>
          </div>
          {/* second column */}
          <div className="col-7">sfd</div>
          {/* content ends here */}
        </div>
      </div>
      <div className="d-none d-sm-block d-lg-none container-fluid m-0 p-0">
        MEDIUM LAYOUT
      </div>
      <div className="d-block d-sm-none container-fluid m-0 p-0">
        SMALL LAYOUT
      </div>
    </div>
  );
}
