import React from "react";

export default function TheRules() {
  const tab = (
    <span className="d-none d-md-inline">&nbsp;&nbsp;&nbsp;&nbsp;</span>
  );
  
  
  return (
    <>
      
      <div className="section-header">
        <h1>The Rules</h1>
      </div>
    
      <div className="container pb-5">
        <div className="row text-center text-md-left">
          <div className="col">
            <p>
              {tab}This is a writing contest in which applicants will be creating a poem or short story! Applicants will be graded on conventions, originality, and overall skills.

                    The form for submissions will close on April 30th, 2023 at 11:59PM so get in as many pieces as you can!

                    The rules are as follows:
                    - Times New Roman, 12-sized, and double-spaced formatting and font (basically MLA)
                    - can be any narrative and theme
                    - 350 words or less for poems, 2500 words or less for short stories
                    - to make the judging process go by efficiently and nicely, submissions will have to be in English
                    - we are dedicated to making sharing our platform with yours, so you must be comfortable with your work being shared

                    Prizes will be given approximately two weeks after the deadline and
                    - will ONLY be given electronically
                    - will ONLY be in US currency
                    - will have 3 winners per category

                    First place receives: $100USD
                    Second place receives: $50USD
                    Third place receives: $25USD

                    Thank you for your interest in our mission and happy writing!       
            </p>

          </div>
        </div> 
      </div>
              <div className="container">
                  <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSe2nJCQoRaRn91Cq7g2X_ifuRxQEfsBDk8jv09HZKhC9oio-Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn mx-2 mb-2"
                  >
                  SUBMISSION LINK
                  </a>
              </div>

      <div className="writingfestpics">
        <img class="comp_graphic1" src={require('../../assets/home/outreach/writingfest1.png')} align = "middle" alt="Now accepting submissions!"></img>
        <img class="comp_graphic2" src={require('../../assets/home/outreach/prizescomp.png')} align = "middle" alt="Prizes"></img>
        <img class="comp_graphic3" src={require('../../assets/home/outreach/rulescomp.png')} align = "middle" alt="Rules"></img>
      </div>
        

                                                
  );
}
