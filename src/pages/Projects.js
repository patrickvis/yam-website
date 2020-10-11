import React from "react";
import SectionHero from "../components/SectionHero";
import CurrentProjects from "../components/projects/CurrentProjects";
import ProjectsList from "../components/projects/ProjectsList";

export default function Projects() {
  return (
    <div className="chapters page">
      <SectionHero
        title="Projects"
        subtitle=""
        imageURL="https://res.cloudinary.com/masonwang/image/upload/v1596048499/yam-website/gallery/previews/chapters-cover.jpg"
      />
      <CurrentProjects />
      <ProjectsList />
    </div>
  );
}
