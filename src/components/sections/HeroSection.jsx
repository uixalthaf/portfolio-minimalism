import React from "react";
import { PROFILE } from "../../configs/constants";
import { calculateExp } from "../../utils/calculateExp";

export default function HeroSection() {
  const currentExperience = calculateExp();

  return (
    <section className="hero reveal reveal-1">
      <div className="identity reveal reveal-2">
        <div>
          <h4 className="!mb-2">{PROFILE.name}</h4>
          <span className="identity-role">{PROFILE.role}</span>
        </div>

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
  );
}
