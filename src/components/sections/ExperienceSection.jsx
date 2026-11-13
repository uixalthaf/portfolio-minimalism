import React from "react";
import { EXPERIENCE } from "../../configs/constants";
import Row from "../Row";

export default function ExperienceSection() {
  return (
    <section id="experience" className="block section-reveal">
      <div className="label">EXPERIENCE</div>
      {EXPERIENCE.map(({ company, role, date, description }, index) => (
        <Row index={index} key={`${company}-${role}`} className="experience-row">
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
      ))}
    </section>
  );
}
