import React from "react";
import Profile from "./Profile";

export default function Team() {
  const teamMembers = [
    {
      name: "Jonathan Li",
      position: "Co-founder and CEO",
      instagram: "https://www.instagram.com/jonathan_jli/",
      facebook: "https://www.facebook.com/jonathan.li.758399",
    },
    {
      name: "Brook Chuang",
      position: "Co-founder and COO",
      linkedin: "https://www.linkedin.com/in/chuangbrook ",
    },
    {
      name: "Isabella Lee",
      position: "Program VP",
      instagram: "https://www.instagram.com/isabella.lee13/",
    },
    {
      name: "Charlie Williams",
      position: "CMO",
      linkedin: "https://linkedin.com/in/charlie-williams-1bb4021b3",
    },
    {
      name: "Mason Wang",
      position: "Tech Director and Webmaster",
      linkedin: "https://www.linkedin.com/in/mason-wang-7b2758176/",
      github: "https://github.com/MasonWang025",
      instagram: "https://www.instagram.com/masonwang025/",
    },
    {
      name: "Katie Chen",
      position: "Outreach and West Coast Branch President",
      linkedin: "https://www.linkedin.com/in/katie-chen-3a8b83177/",
      instagram: "https://www.instagram.com/katiechnn/",
    },
    {
      name: "Tiffany Lieu",
      position: "Marketing Manager",
      linkedin: "https://instagram.com/tfaffniy?igshid=ywfykngjeirx",
    },
    {
      name: "Diana Le",
      position: "Graphic Designer",
      linkedin: "https://www.instagram.com/elkanaid/",
    },
  ];
  return (
    <section className="team">
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
