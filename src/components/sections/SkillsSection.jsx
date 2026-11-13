import React from "react";
import { SKILLS } from "../../configs/constants";

export default function SkillsSection() {
  return (
    <section id="skills" className="block section-reveal">
      <div className="label">SKILLS</div>
      <p className="skills">{SKILLS.join(", ")}</p>
    </section>
  );
}
