# Minimal Portfolio

This update only reorganizes the existing React code into focused components. The original `styles.css` is carried over unchanged, and the JSX keeps the existing class names, content, section order, layout, and behavior.

## Structure

```text
src/
├── App.jsx
├── main.jsx
├── styles.css
├── components/
│   ├── Row.jsx
│   ├── Footer.jsx
│   └── sections/
│       ├── HeroSection.jsx
│       ├── ExperienceSection.jsx
│       ├── ProjectsSection.jsx
│       ├── ArticlesSection.jsx
│       ├── SkillsSection.jsx
│       └── ContactSection.jsx
├── configs/
│   └── constants.js
└── utils/
    └── calculateExp.js
```

`App.jsx` composes the page. Each section owns its markup. `Row.jsx` remains the shared wrapper for the existing row styles and reveal animation. Content and dynamic experience calculation remain in their existing config and utility files.

Keep your existing project configuration and dependencies. The hero expects `public/visual.png`.
