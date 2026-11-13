import React from "react";
import { PROJECTS } from "../../configs/constants";
import Row from "../Row";

export default function ProjectsSection() {
  return (
    <section id="projects" className="block section-reveal">
      <div className="label">PERSONAL PROJECTS</div>
      {PROJECTS.map((project, index) => (
        <Row index={index} key={project.title} href={project.url} className="project-row">
          <div className="project-heading">
            <div className="project-title">{project.title}</div>
            <span className="project-status">{project.status}</span>
          </div>
          <div className="project-type">{project.type}</div>
          <p className="project-description">{project.description}</p>
          <div className="project-technologies" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <span className="technology" key={technology}>{technology}</span>
            ))}
          </div>
          <span className="project-visit">Visit project</span>
        </Row>
      ))}
    </section>
  );
}
