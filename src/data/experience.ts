export interface IconResponsibility {
  category: 'API' | 'SQL' | 'OPS' | 'TEST';
  badge: string;
  shortText: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  statusTag: 'PRODUCTION' | 'COMPLETED';
  projectContext: string;
  iconResponsibilities: IconResponsibility[];
  detailedResponsibilities: string[];
  technologies: string[];
  pipelineNodes?: {
    step: string;
    label: string;
    sublabel: string;
  }[];
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "linkfields-rma",
    role: "Software Developer",
    company: "Linkfields Innovations",
    location: "Hyderabad, India",
    type: "Full-Time",
    period: "Sep 2025 – Present",
    statusTag: "PRODUCTION",
    projectContext: "Enterprise Insurance Policy Administration Platform — Mission-critical policy administration system operating across South Africa.",
    iconResponsibilities: [
      {
        category: "API",
        badge: "API",
        shortText: "Build and maintain REST APIs using C# and ASP.NET Core (.NET 8)."
      },
      {
        category: "SQL",
        badge: "DATABASE",
        shortText: "Write optimized SQL queries, stored procedures, and migration scripts in SSMS."
      },
      {
        category: "OPS",
        badge: "RELEASE",
        shortText: "Support Service Fabric releases and triage post-deployment production issues."
      },
      {
        category: "TEST",
        badge: "QUALITY",
        shortText: "Test APIs with Postman, participate in code reviews, and collaborate with QA."
      }
    ],
    detailedResponsibilities: [
      "Engineered and maintained resilient RESTful APIs and backend services using C#, ASP.NET Core (.NET 8), and SQL Server to handle daily policy administration workflows.",
      "Authored, tuned, and refactored high-performance SQL queries, stored procedures, and data migration scripts via SSMS for release cycles.",
      "Monitored live application telemetry, microservices node health, and rolling deployments using Service Fabric; triaged and resolved production issues.",
      "Collaborated closely with QA engineers and business analysts across the SDLC; implemented structured API integration testing with Postman.",
      "Participated in peer code reviews to maintain clean code architecture, SOLID design principles, and secure API standards."
    ],
    technologies: [
      "C#",
      ".NET 8 / ASP.NET Core",
      "SQL Server (SSMS)",
      "Service Fabric",
      "REST Web APIs",
      "Stored Procedures",
      "Azure DevOps",
      "Postman"
    ],
    pipelineNodes: [
      { step: "01", label: "Client Portal", sublabel: "Web / Broker Traffic" },
      { step: "02", label: "ASP.NET Core API", sublabel: "Auth, Routing & Validation" },
      { step: "03", label: "Microservice Logic", sublabel: "Policy Engine on Fabric" },
      { step: "04", label: "SQL Server DB", sublabel: "Stored Procedures & Tables" }
    ]
  },
  {
    id: "soarswell-tracker",
    role: "Full Stack Intern",
    company: "Soarswell Consulting",
    location: "Offsite",
    type: "Internship",
    period: "Spring 2025 – Sep 2025",
    statusTag: "COMPLETED",
    projectContext: "Recruitment Tracker — Candidate hiring pipeline and talent workflow management platform.",
    iconResponsibilities: [
      {
        category: "API",
        badge: "BACKEND",
        shortText: "Engineered candidate management and interview scheduling REST APIs with Spring Boot."
      },
      {
        category: "OPS",
        badge: "SECURITY",
        shortText: "Implemented Role-Based Access Control (RBAC) and token-based authentication."
      }
    ],
    detailedResponsibilities: [
      "Built Spring Boot REST endpoints for candidate tracking, job posting, and interview scheduling workflows.",
      "Implemented secure RBAC and JWT validation across candidate and client management modules.",
      "Managed version control and team code reviews in Git."
    ],
    technologies: ["Java", "Spring Boot", "SQL", "REST APIs", "Git", "Postman"]
  },
  {
    id: "smart-internz",
    role: "Software Engineering Intern",
    company: "Smart Internz",
    location: "Offsite",
    type: "Internship",
    period: "Jul 2024 – Aug 2024",
    statusTag: "COMPLETED",
    projectContext: "Foundational software engineering workflows and cloud services integration.",
    iconResponsibilities: [
      {
        category: "API",
        badge: "INTEGRATION",
        shortText: "Collaborated on full-lifecycle software delivery and backend API integration."
      }
    ],
    detailedResponsibilities: [
      "Gained hands-on experience in full-lifecycle software delivery and backend API integration.",
      "Participated in pair programming sessions and architectural reviews."
    ],
    technologies: ["Java", "REST APIs", "Git"]
  }
];
