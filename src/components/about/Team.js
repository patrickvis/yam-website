import React from "react";
import Profile from "./Profile";
import teamMembers from "../../data/team";

export default function Team() {
  return (
    <section className="team gray-bg">
      <div className="container text-center mb-3">
        <div className="section-header">
          <h1>Meet Our Team</h1>
        </div>

        <div className="row justify-content-center text-center">
          {teamMembers.map((member) => (
            <Profile
              key={member.name}
              name={member.name}
              position={member.position}
              instagram={member.instagram}
              linkedin={member.linkedin}
              github={member.github}
              facebook={member.facebook}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
