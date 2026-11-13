// Keep profile and company details in one place so they stay consistent.
export const PROFILE = {
  name: "Althaf Shaik",
  email: "althaf.sh658@gmail.com",
  role: "Software Engineer (Frontend)",
  tagline: "Frontend engineer obsessed with detail",
  company: "Samsung Electro-Mechanics",
  experienceStartDate: "2023-02-01",
};

export const LINKS = {
  linkedin: "https://linkedin.com/in/althaf-shaik-658138229/",
  github: "https://github.com/uixalthaf/",
  graz: "https://learn-korean-with-graz.vercel.app/home",
};

export const EXPERIENCE = [
  {
    company: PROFILE.company,
    role: "Frontend Engineer",
    date: "Aug 2023 — Present",
    description:
      "Building and maintaining frontend experiences with React, JavaScript and TypeScript, translating product requirements into responsive interfaces and reusable UI components.",
  },
  {
    company: PROFILE.company,
    role: "UI/UX Developer Intern",
    date: "Feb 2023 — Aug 2023",
    description:
      "Worked on user interface development and responsive layouts, turning design requirements into clean, usable web experiences.",
  },
  {
    company: "Chegg",
    role: "Chegg Expert",
    date: "Apr 2022 — Jan 2023",
    description:
      "Supported students by creating clear, structured explanations and solutions to subject-related questions.",
  },
];

export const ARTICLES = [
  {
    title:
      "The call stack isn't scary — here's what's actually happening when your code runs",
    url: "https://uixalthaf.github.io/execution-context-theory/",
  },
  {
    title:
      "Responsive web design, and why your site keeps breaking on mobile",
    url: "https://uixalthaf.github.io/responsive-design-page/demo_page.html",
  },
];

export const PROJECTS = [
  {
    title: "Learn Korean with Graz",
    status: "In progress",
    type: "Next.js-based SaaS Tutoring Platform",
    description:
      "A platform designed to bring Korean tutoring into one place, with a focused learning experience for students and tools to manage classes and learning resources.",
    technologies: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"],
    url: LINKS.graz,
  },
];

export const SKILLS = [
  "React.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "jQuery",
  "Python",
  "Tailwind CSS",
  "React Router",
  "REST APIs",
  "Swagger / OpenAPI",
  "Git",
  "Vite",
  "IIS",
  "Material UI",
  "Bootstrap",
  "Sass",
  "WebSocket",
  "Figma",
];