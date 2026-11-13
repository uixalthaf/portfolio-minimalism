import React from "react";
import "./styles.css";
import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ArticlesSection from "./components/sections/ArticlesSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page page-load">
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArticlesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
