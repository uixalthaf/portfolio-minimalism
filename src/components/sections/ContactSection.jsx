import React from "react";
import { LINKS, PROFILE } from "../../configs/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="block contact section-reveal">
      <div className="label">CONTACT</div>
      <div className="links">
        <a href={`mailto:${PROFILE.email}`}>Email</a>
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}
