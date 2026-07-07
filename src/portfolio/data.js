// Portfolio content — edit copy, links, and lists here.

export const EMAIL = "h.harisali124@gmail.com";
export const PHONE = "+92 323 4139068";
export const GH = "https://github.com/haris-byte";
export const LINKEDIN = "https://linkedin.com/in/muhammad-haris-ali";

export const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const PROJECTS = [
  {
    n: "01",
    year: "2025",
    title: "Ship Detection",
    kicker: "Computer Vision",
    description:
      "Three-model YOLO ensemble (YOLOv8s, YOLOv11s, YOLOv8m) with Weighted Box Fusion — 0.995 mAP@0.5 on SSDD. Led evaluation and ensemble strategy for a 3-person team.",
    tech: ["Python", "YOLOv8/v11", "OpenCV", "Weighted Box Fusion"],
    href: `${GH}/Ship-detection-CV-Project`,
  },
  {
    n: "02",
    year: "2025",
    title: "Persist",
    kicker: "AI Goal Tracking",
    description:
      "20+ screen cross-platform app (React Native, migrating to Flutter) with LLM-powered planning, a 7-factor 'skip risk' model, mood logging, and a private friend-pod accountability system.",
    tech: ["React Native", "Flutter", "Firebase"],
    href: `${GH}/Persist-Doc`,
  },
  {
    n: "03",
    year: "2024",
    title: "NPR News Scraper",
    kicker: "Data Pipeline",
    description:
      "Clean article extraction pipeline with pagination, deduplication, and structured CSV/JSON output for NLP workflows.",
    tech: ["Python", "BeautifulSoup", "Data"],
    href: `${GH}/NPR-News-data-scraper`,
  },
  {
    n: "04",
    year: "2024",
    title: "Habit Tracker",
    kicker: "Web App",
    description:
      "Streak-based habit tracker built with React, Vite, and Bootstrap — daily tracking, progress reports, and a consistency-focused UI.",
    tech: ["React", "Vite", "Bootstrap"],
    href: `${GH}/Habit-Tracker-With-Streaks`,
  },
];

export const EXPERIENCE = [
  {
    period: "2022 — 2024",
    role: "Data Annotator",
    org: "Adaxiom",
    desc: "Labelled CV and NLP datasets including bounding boxes, segmentation, and classification for production ML pipelines.",
  },
  {
    period: "Jun 2024 — Aug 2024",
    role: "Frontend Developer Intern",
    org: "Adaxiom",
    desc: "Built and shipped responsive web pages using HTML, CSS, and JavaScript in an Agile team, debugging cross-browser issues under real delivery timelines.",
  },
  {
    period: "Sep 2023 — Mar 2026",
    role: "Computer Science Tutor",
    org: "Independent",
    desc: "Taught Python, DSA, and web fundamentals through practical, project-based sessions.",
  },
];

export const SKILLS = [
  "Python", "JavaScript", "React Native", "Flutter", "Django",
  "Firebase", "PyTorch", "OpenCV", "YOLOv8/v11", "scikit-learn",
  "Pandas", "NumPy", "Git",
];

export const EASE = [0.22, 1, 0.36, 1];
