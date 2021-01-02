import React from "react";
import "../../styles/pages/projects.scss";


export default function Speakers() {
  return (
    <div className="gray-bg">
      <div className="container pb-5">
        <div className="section-header">
          <h1>Speaker Series</h1>
        </div>
        <div className="row justify-content-center text-center">


            <div class="card">
            <img src={require("../../assets/Projects/speakers/JohnCaserta.png")} alt="location" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>John Caserta</b></h4>
                <a
                        href="https://www.risd.edu/people/john-caserta/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>
            
            <div class="card">
            <img src={require("../../assets/Projects/speakers/MarieOtsuka.png")} alt="location" style={{width:"100%"}}></img>
            <div class="container">
                <h4><b>Marie Otsuka</b></h4>
                <a
                        href="https://www.risd.edu/people/marie-otsuka/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-btn mx-2 mb-2"
                    >
                        Read More
                </a>
            </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}
