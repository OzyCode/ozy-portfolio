export const profile = {
  name: "Osamah AlBahnasi",
  role: "SAP Consultant · Software Engineer",
  location: "Saudi Arabia",
  tagline:
    "SAP-certified consultant and software engineer who's led delivery teams, shipped a warehouse visualization platform and a fleet maintenance system, and is now taking that into ERP consulting.",
  bio: "I got into SAP through the Young Professionals Program, and it reframed how I think about software: less about shipping a feature, more about whether the org around it can actually run on what you built. I like problems where the hard part is people and process as much as code — figuring out what a stakeholder actually needs versus what they asked for, then building something a team can maintain after I'm not in the room. That instinct is what's pulling me toward SAP consulting next — ERP, S/4HANA, BTP.",
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
  orgLogo?: { src: string; chip?: boolean };
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
    orgLogo: { src: "/images/logos/sap-logo.png", chip: true },
    role: "Young Professionals Program (YPP) — Trainee",
    period: "04/2026 – 06/2026",
    location: "Riyadh, Saudi Arabia",
    summary:
      "Selected for SAP's flagship Young Professionals Program from 1,500+ global applicants — trained across S/4HANA, BTP, and Generative AI, earning two SAP Associate certifications.",
    points: [
      "Trained in S/4HANA, Business Suite, BTP, and Generative AI. Went through FI, CO, MM, PP, and SD process walkthroughs, plus a consulting-skills track.",
      "Certified: E2E Business Processes (IEE2E) and Generative AI Developer (C_AIG).",
    ],
  },
  {
    org: "RFID Saudi Trading Company",
    orgHref: "https://www.rfidsaudi.com.sa/",
    orgLogo: { src: "/images/logos/rfid-saudi-logo.png", chip: true },
    role: "Software Engineer",
    period: "10/2022 – 09/2025",
    location: "Dammam, Saudi Arabia",
    summary:
      "Business analyst and delivery lead for a cross-functional team (UI/UX, PHP, Flutter), and presented a department-wide IT roadmap review to leadership.",
    summaryVideo: "/videos/rfid-roadmap-preview",
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
    orgLogo: { src: "/images/logos/talents-logo.jpg", chip: false },
    role: "Technology Coordinator Assistant",
    period: "07/2018 – 08/2018",
    location: "Dhahran, Saudi Arabia",
    summary: "Deployed and configured 800+ Raspberry Pi devices for a national educational rollout.",
    points: [],
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
    image: { src: "/images/projects/horse-race-er-diagram.svg", alt: "Entity-relationship diagram of the horse racing database schema" },
  },
  {
    name: "Uber Trip Analytics & ML Predictor",
    period: "11/2024 – 12/2024",
    description:
      "Collaborated on a team project building predictive models with Linear Regression and Random Forest to support data-driven decisions on trip patterns.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    href: "https://github.com/muzammilbehzad/Students-Projects-ICS474-Big-Data-Analytics-Fall-2024/tree/main/Project_s201970750_s201970370",
    image: { src: "/images/projects/uber-predicted-vs-actual.png", alt: "Random Forest predicted-vs-actual trip cost scatter plot" },
  },
  {
    name: "Blood Drive Management System",
    period: "10/2023 – 01/2024",
    description:
      "Collaborated on a web platform for managing blood donation drives, using Agile practices across development and deployment.",
    tags: ["Web App", "Agile", "Team Project"],
    href: "https://github.com/jawad-alalasi/ICS321",
    image: { src: "/images/projects/blooddrive-donor-list.jpg", alt: "Donor/recipient information admin screen", light: true },
  },
  {
    name: "This Portfolio",
    period: "2026",
    description:
      "This site — built with Next.js and Motion for React, exploring scroll-driven reveals, gradient motion, and reduced-motion-aware interactions.",
    tags: ["Next.js", "Motion", "Tailwind CSS"],
    href: "https://github.com/OzyCode/ozy-portfolio",
    image: {
      src: "/images/projects/portfolio-scroll-thumb.webp",
      alt: "Scroll-driven reveal animation on the Projects section",
      unoptimized: true,
    },
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
    image: { src: "/images/certs/sap-e2e-cert.jpg", width: 1650, height: 1275 },
  },
  {
    name: "SAP Certified Associate – SAP Generative AI Developer (C_AIG)",
    issuer: "SAP · via YPP",
    href: "https://www.credly.com/badges/2457f6aa-c606-4194-8f14-2c94911221e4/public_url",
    image: { src: "/images/certs/sap-genai-cert.jpg", width: 1650, height: 1275 },
  },
  {
    name: "70-462: SQL Server Database Administration (DBA)",
    issuer: "Microsoft · Udemy",
    href: "http://ude.my/UC-715e4cf0-85ce-4c27-ae75-a779933e2c27",
    image: { src: "/images/certs/sql-dba-cert.jpg", width: 1800, height: 1339 },
  },
];

export const education = {
  degree: "B.S. Software Engineering",
  school: "King Fahd University of Petroleum and Minerals (KFUPM)",
  schoolHref: "https://www.kfupm.edu.sa/",
  schoolLogo: "/images/logos/kfupm-logo.png",
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
  photos: [
    {
      src: "/images/ktmc-speaking.jpg",
      alt: "Speaking at a KTMC (Toastmasters) event",
      width: 1200,
      height: 1600,
      aspect: "aspect-[3/4]",
      caption: "Presenting at a session run by KTMC — KFUPM's Toastmasters club.",
    },
    {
      src: "/images/ktmc-yearbook.jpg",
      alt: "KTMC feature page from the KFUPM annual yearbook",
      width: 1600,
      height: 1200,
      aspect: "aspect-[4/3]",
      caption: "KTMC's page in the KFUPM yearbook — the club behind the 4th-place finish at the Storytelling Contest.",
    },
  ],
  clips: [
    {
      label: "Icebreaker",
      src: "/videos/toastmasters-icebreaker.mp4",
      poster: "/images/toastmasters-icebreaker-poster.jpg",
      width: 464,
      height: 832,
    },
    {
      label: "4th place round",
      src: "/videos/toastmasters-competition.mp4",
      poster: "/images/toastmasters-competition-poster.jpg",
      width: 464,
      height: 832,
    },
  ],
};

export const stats = [
  { target: 1500, prefix: "", suffix: "+", label: "applicants, 1 of 30 selected" },
  { target: 3, prefix: "", suffix: " yrs", label: "Delivery lead" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
