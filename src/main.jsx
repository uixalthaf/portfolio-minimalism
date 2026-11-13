import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import {
  ARTICLES,
  EXPERIENCE,
  LINKS,
  PROFILE,
  PROJECTS,
  SKILLS,
} from "./configs/constants";
import { calculateExp } from "./utils/calculateExp";

// Shared row keeps the existing reveal animation and row styling consistent.
function Row({ index, href, children, className = "" }) {
  const rowClassName = `exp row-reveal row-${index + 1} !p-1 ${className}`.trim();

  if (href) {
    return (
      <a
        className={rowClassName}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return <div className={rowClassName}>{children}</div>;
}

function ExperienceSection() {
  return (
    <section id="experience" className="block section-reveal">
      <div className="label">EXPERIENCE</div>

      {EXPERIENCE.map(
        ({ company, role, date, description }, index) => (
          <Row
            index={index}
            key={`${company}-${role}`}
            className="experience-row"
          >
            <div className="experience-content">
              <div className="experience-heading">
                <div className="experience-title-group">
                  <div className="company">{company}</div>
                  <div className="role">{role}</div>
                </div>
                <div className="date">{date}</div>
              </div>
              <p className="experience-description">{description}</p>
            </div>
          </Row>
        ),
      )}
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="block section-reveal">
      <div className="label">PERSONAL PROJECTS</div>

      {PROJECTS.map((project, index) => (
        <Row
          index={index}
          key={project.title}
          href={project.url}
          className="project-row"
        >
          <div className="project-heading">
            <div className="project-title">{project.title}</div>
            <span className="project-status">{project.status}</span>
          </div>
          <div className="project-type">{project.type}</div>

          <p className="project-description">{project.description}</p>

          <div className="project-technologies" aria-label="Technologies used">
            {project.technologies.map((technology) => (
              <span className="technology" key={technology}>
                {technology}
              </span>
            ))}
          </div>

          <span className="project-visit">Visit project</span>
        </Row>
      ))}
    </section>
  );
}

function ArticlesSection() {
  return (
    <section id="articles" className="block section-reveal">
      <div className="label">ARTICLES</div>

      {ARTICLES.map(({ title, url }, index) => (
        <Row index={index} href={url} key={title}>
          <div className="article-title">{title}</div>
        </Row>
      ))}
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="block contact section-reveal">
      <div className="label">CONTACT</div>

      <div className="links">
        <a href={`mailto:${PROFILE.email}`}>Email</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </section>
  );
}

function App() {
  const currentExperience = calculateExp();

  return (
    <div className="page page-load">
      <main>
        <section className="hero reveal reveal-1">
          <div className="identity reveal reveal-2">
            <div>
              <h4 className="!mb-2">{PROFILE.name}</h4>
              <span className="identity-role">{PROFILE.role}</span>
            </div>

            {/* <img
              src={`${import.meta.env.BASE_URL}visual.png`}
              alt={`${PROFILE.name} portrait`}
              width="160"
              height="160"
              className="rounded portrait"
            /> */}
          </div>

          <div className="tagline reveal reveal-3">{PROFILE.tagline}</div>

          <div className="bio reveal reveal-4">
            <p>
              I'm a Frontend engineer with {currentExperience}+ years of
              professional experience building web applications with React,
              JavaScript and TypeScript.
            </p>
            <p>
              I enjoy turning complex requirements into clean, responsive
              interfaces and working across UI components, REST APIs,
              application data flows and frontend deployment.
            </p>
            <p>
              Currently, I'm working as a {PROFILE.role}{" "}
              <span className="current-company">@ {PROFILE.company}.</span>
            </p>
          </div>

          <p className="reach reveal reveal-5">
            You can reach me at{" "}
            <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          </p>
        </section>

        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection />

        <section id="skills" className="block section-reveal">
          <div className="label">SKILLS</div>
          <p className="skills">{SKILLS.join(", ")}</p>
        </section>

        <ContactSection />
      </main>

      <footer>
        <span>© {new Date().getFullYear()} {PROFILE.name}</span>
        <span>{PROFILE.role}</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);