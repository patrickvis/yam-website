import React from "react";
import Profile from "../about/Profile";
import executiveTeamMembers from "../../data/executiveTeam";
import teamMembers from "../../data/team";

export default function ExecutiveTeam() {
  return (
    <div>
      <section className="team">
        <div className="container text-center mb-3">
          <div className="row justify-content-center text-center">
            {executiveTeamMembers.map((member) => (
              <Profile
                key={member.name}
                name={member.name}
                imageURL={member.imageURL}
                position={member.position}
                instagram={member.instagram}
                instagram2={member.instagram2}
                linkedin={member.linkedin}
                github={member.github}
                facebook={member.facebook}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}