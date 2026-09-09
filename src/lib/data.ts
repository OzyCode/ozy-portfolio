export const profile = {
  name: "Osamah AlBahnasi",
  role: "SAP Consultant · Software Engineer",
  location: "Saudi Arabia",
  tagline:
    "SAP-certified consultant and software engineer who's led delivery teams, shipped enterprise tooling, and is now taking that into ERP consulting.",
  bio: "I'm an SAP-certified consultant and software engineer. I got into SAP through the Young Professionals Program — one of about 30 people picked out of 1,500+ applicants worldwide — and came out with certifications in E2E Business Processes and Generative AI. Before that, I spent three years at RFID Saudi Trading Company, where I ended up running delivery for a team as business analyst and delivery lead across two internal platforms: coordinating with stakeholders, writing the specs, and keeping documentation people could actually use. Now I'm looking to bring that into SAP consulting — ERP, S/4HANA, BTP.",
  currentlyExploring:
    "Outside of that, I've been digging into workflow automation — building and experimenting with n8n to connect systems and automate processes from start to finish.",
  links: {
    github: "https://github.com/OzyCode",
    linkedin: "https://www.linkedin.com/in/osamakb/",
    email: "OsamahBah@hotmail.com",
  },
};

type ExperiencePoint = string | { text: string; muted?: boolean };

export const experience: {
  org: string;
  orgHref: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  summaryVideo?: string;
  points: ExperiencePoint[];
}[] = [
  {
    org: "SAP · SAP Digital Skills Center",
    orgHref: "https://www.sap.com/mena/training-certification/digital-skills-center.html",
    role: "Young Professionals Program (YPP) — Trainee",
    period: "04/2026 – 06/2026",
    location: "Riyadh, Saudi Arabia",
    summary:
      "Selected for SAP's flagship Young Professionals Program from 1,500+ global applicants — trained across S/4HANA, BTP, and Generative AI, earning two SAP Associate certifications.",
    points: [
      "Beat out 1,500+ applicants worldwide for one of roughly 30 spots in SAP's partner talent program.",
      "Trained in S/4HANA, Business Suite, BTP, and Generative AI. Went through FI, CO, MM, PP, and SD process walkthroughs, plus a consulting-skills track.",
      "Certified: E2E Business Processes (IEE2E) and Generative AI Developer (C_AIG).",
    ],
  },
  {
    org: "RFID Saudi Trading Company",
    orgHref: "https://www.rfidsaudi.com.sa/",
    role: "Software Engineer",
    period: "10/2022 – 09/2025",
    location: "Dammam, Saudi Arabia",
    summary:
      "Business analyst and delivery lead for a cross-functional team (UI/UX, PHP, Flutter) — coordinated stakeholders, shipped documentation practices, and presented a department-wide IT roadmap review to leadership.",
    summaryVideo: "/videos/roadmap-presentation.mp4",
    points: [
      "Took over as business analyst and delivery lead for a team spanning UI/UX, PHP backend, and Flutter mobile partway through my time there. Planned and managed the team's tasks and coordinated requirements directly with internal stakeholders.",
      "Handled release communications to internal stakeholders. Collected feedback, wrote the user documentation and how-to guides that supported adoption.",
      "Set up documentation practices that cut friction between developers.",
      "Cleaned and standardized data on the application server with SQL.",
      "Built and presented a department-wide IT status review and strategic roadmap for leadership: security practices, documentation standards, training across the app portfolio.",
      {
        text: "Also contributed to the company website — owned documentation and content organization, working alongside the developer — and took over a dead internal password manager app, getting it stable for a production handoff.",
        muted: true,
      },
    ],
  },
  {
    org: "National Talents Company",
    orgHref: "https://talents.edu.sa/",
    role: "Technology Coordinator Assistant",
    period: "07/2018 – 08/2018",
    location: "Dhahran, Saudi Arabia",
    summary: "Deployed and configured 800+ Raspberry Pi devices for a national educational rollout.",
    points: [
      "Deployed and configured 800+ Raspberry Pi devices for national educational initiatives.",
      "Assisted with system setup, troubleshooting, and technical coordination across multiple institutions.",
    ],
  },
];

export const featuredProjects = [
  {
    name: "3PL — Logistics & Warehouse Visualization Platform",
    problem:
      "Warehouse operations needed digitizing — inventory, reporting, and a way for staff to navigate unfamiliar warehouse layouts.",
    role: "Delivery lead for a 4-person team (2 backend, 2 mobile). Personally led the AR/3D visualization R&D from a standing start — learned Unity, Blender, and Immersal, then scanned and modeled two physical facilities.",
    result:
      "Shipped authentication, warehouse/storage CRUD, filtered reporting with Excel export, and inventory management. The AR/3D navigation R&D hit a real hardware limit — mobile cameras couldn't spatially map large warehouse areas — and was shelved in favor of the core platform.",
    tags: ["PHP", "Flutter", "Unity/Blender (R&D)", "Team Leadership"],
  },
  {
    name: "CarLog — Fleet Maintenance Tracking System",
    problem:
      "Vehicle maintenance, equipment checklists, and accident reporting needed a proper system instead of ad hoc tracking.",
    role: "Owned SRS documentation end-to-end across 4 revisions, coordinated a backend and a mobile developer, ran the phase 2 planning cycle.",
    result:
      "Shipped authentication, a notification system, exportable maintenance and accident records, and conditional equipment checklist logic.",
    tags: ["SRS/Requirements", "PHP", "Flutter", "JWT Auth"],
  },
];

export const secondaryProjects = [
  {
    name: "Horse Racing Database System",
    period: "02/2024 – 03/2024",
    description:
      "Designed a PostgreSQL analytical database with optimized queries, stored procedures, and triggers, ensuring data integrity and high-performance execution.",
    tags: ["PostgreSQL", "SQL", "Database Design"],
    href: "https://github.com/OzyCode/ICS424_HorseRace",
  },
  {
    name: "Uber Trip Analytics & ML Predictor",
    period: "11/2024 – 12/2024",
    description:
      "Collaborated on a team project building predictive models with Linear Regression and Random Forest to support data-driven decisions on trip patterns.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    href: "https://github.com/muzammilbehzad/Students-Projects-ICS474-Big-Data-Analytics-Fall-2024/tree/main/Project_s201970750_s201970370",
  },
  {
    name: "Blood Drive Management System",
    period: "10/2023 – 01/2024",
    description:
      "Collaborated on a web platform for managing blood donation drives, using Agile practices across development and deployment.",
    tags: ["Web App", "Agile", "Team Project"],
    href: "https://github.com/jawad-alalasi/ICS321",
  },
  {
    name: "This Portfolio",
    period: "2026",
    description:
      "This site — built with Next.js and Motion for React, exploring scroll-driven reveals, gradient motion, and reduced-motion-aware interactions.",
    tags: ["Next.js", "Motion", "Tailwind CSS"],
    href: "https://github.com/OzyCode/ozy-portfolio",
  },
];

export const skills = [
  {
    category: "SAP",
    items: ["Business Suite", "BTP", "Generative AI (C_AIG)", "E2E Processes (IEE2E)"],
  },
  {
    category: "Programming",
    items: ["Python", "SQL", "JavaScript", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "SQL Server", "SQLite"],
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "Jupyter", "Postman"],
  },
  {
    category: "Automation",
    items: ["n8n", "Workflow Automation", "API Integrations"],
  },
  {
    category: "Delivery",
    items: ["Agile", "SRS Documentation", "Requirements Gathering", "Stakeholder Coordination"],
  },
];

export const certificates = [
  {
    name: "SAP Certified Associate – E2E Business Processes for SAP Business Suite (IEE2E)",
    issuer: "SAP · via YPP",
    href: "https://www.credly.com/badges/6084f08d-fb83-45af-88c5-4aec47faff3e",
  },
  {
    name: "SAP Certified Associate – SAP Generative AI Developer (C_AIG)",
    issuer: "SAP · via YPP",
    href: "https://www.credly.com/badges/2457f6aa-c606-4194-8f14-2c94911221e4/public_url",
  },
  {
    name: "70-462: SQL Server Database Administration (DBA)",
    issuer: "Microsoft · Udemy",
    href: "http://ude.my/UC-715e4cf0-85ce-4c27-ae75-a779933e2c27",
  },
];

export const education = {
  degree: "B.S. Software Engineering",
  school: "King Fahd University of Petroleum and Minerals (KFUPM)",
  schoolHref: "https://www.kfupm.edu.sa/",
  period: "09/2019 – 12/2024",
  location: "Dhahran, Saudi Arabia",
  photos: [
    {
      src: "/images/kfupm-water-tower.jpg",
      alt: "KFUPM's landmark water tower, lit at night",
      width: 900,
      height: 1600,
      caption: "KFUPM's landmark water tower, lit up at night.",
      quote: false,
    },
    {
      src: "/images/kfupm-campus-night.jpg",
      alt: "KFUPM campus at night",
      width: 1200,
      height: 1600,
      caption: "Some of my best thinking happened after the campus emptied out.",
      quote: true,
    },
  ],
};

export const extracurricular = {
  org: "Toastmasters Club",
  orgHref: "https://www.toastmasters.org/",
  period: "09/2016 – 05/2024",
  location: "Saudi Arabia",
  points: ["8 years of presentation & structured communication; 4th place, KFUPM Storytelling Contest."],
  photo: {
    src: "/images/ktmc-speaking.jpg",
    alt: "Speaking at a KTMC (Toastmasters) event",
    width: 1200,
    height: 1600,
    caption: "Presenting at a session run by KTMC — KFUPM's Toastmasters club.",
  },
  clips: [
    { label: "Icebreaker", src: "/videos/toastmasters-icebreaker.mp4" },
    { label: "4th place round", src: "/videos/toastmasters-competition.mp4" },
  ],
};

export const stats = [
  { target: 1500, prefix: "", suffix: "+", label: "YPP applicants" },
  { target: 30, prefix: "~", suffix: "", label: "Selected worldwide" },
  { target: 3, prefix: "", suffix: " yrs", label: "Delivery lead" },
  { target: 800, prefix: "", suffix: "+", label: "Devices deployed" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
