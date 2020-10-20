import React from "react";
import "../../styles/pages/chapter.scss";


export default function OurChapters() {
  return (
    <div className="gray-bg">
      <div className="container pb-5">
        <div className="section-header">
          <h1>Our Chapters</h1>
        </div>
        <div className="row justify-content-center text-center">

        <div class="card">
          <img src={require("../../assets/Chapters/saratogahigh.png")} alt="location" style={{width:"100%"}}></img>
          <div class="container">
            <h4><b>Writers Club</b></h4> 
            <p>Saratoga High</p> 
          </div>
        </div>

        <div class="card">
          <img src={require("../../assets/Chapters/lynbrookhigh.png")} alt="location" style={{width:"100%"}}></img>
          <div class="container">
            <h4><b>LAC</b></h4> 
            <p>Lynbrook High</p> 
          </div>
        </div>

        <div class="card">
          <img src={require("../../assets/Chapters/milpitashigh.png")} alt="location" style={{width:"100%"}}></img>
          <div class="container">
            <h4><b>YAM Art Club</b></h4> 
            <p>Milpitas High</p> 
          </div>
        </div>

        <div class="card">
          <img src={require("../../assets/Chapters/arcadiahigh.png")} alt="location" style={{width:"100%"}}></img>
          <div class="container">
            <h4><b>Art Club</b></h4> 
            <p>Arcadia High</p> 
          </div>
        </div>

        <div class="card">
          <img src={require("../../assets/Chapters/westmonthigh.png")} alt="location" style={{width:"100%"}}></img>
          <div class="container">
            <h4><b>Westmont Art Club</b></h4> 
            <p>Westmont High</p> 
          </div>
        </div>

          {/* <div className="col-12">
            <p className="lead-p">
              Currently, YAM has 5 chapters: Writer's Club at{" "}
              <b>Saratoga High</b>, LAC at <b>Lynbrook High</b>, YAM Art Club at{" "}
              <b>Milpitas High</b>, Art Club at <b>Arcadia High</b>, and
              Westmont Art Club at <b>Westmont High</b>.
            </p>
          </div> */}
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
