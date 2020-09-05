import React from "react";

export default function OurChapters() {
  return (
    <div className="gray-bg">
      <div className="container pb-5">
        <div className="section-header">
          <h1>Our Chapters</h1>
        </div>
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <p className="lead-p">
              Currently, YAM has 5 chapters: Writer's Club at{" "}
              <b>Saratoga High</b>, LAC at <b>Lynbrook High</b>, YAM Art Club at{" "}
              <b>Milpitas High</b>, Art Club at <b>Arcadia High</b>, and
              Westmont Art Club at <b>Westmont High</b>.
            </p>
          </div>
          {/* <div className="col-sm-11 col-lg-6 col-md-8 py-3 px-2">
            <Image
              cloudName="masonwang"
              publicId="https://res.cloudinary.com/masonwang/image/upload/v1595618794/yam-website/our-chapters.png"
              className="img-fluid"
              style={{ backgroundColor: "transparent" }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
