export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  period: string;
  statusTag: 'PRODUCTION' | 'COMPLETED';
  projectContext: string;
  responsibilities: string[];
  technologies: string[];
  architectureOverview?: {
    client: string;
    gateway: string;
    services: string;
    database: string;
  };
}

export const experiencesData: ExperienceItem[] = [
  {
    id: "linkfields-rma",
    role: "Software Developer",
    company: "Linkfields Innovations",
    location: "Hyderabad, India (Offsite)",
    type: "Full-Time",
    period: "Sep 2025 – Present",
    statusTag: "PRODUCTION",
    projectContext: "RMA (Rand Mutual Assurance) Insurance Policy Administration System — Large-scale enterprise insurance platform in continuous production across South Africa since 2016.",
    responsibilities: [
      "Engineered and maintained resilient RESTful APIs and backend services using C#, ASP.NET Core (.NET 8), and SQL Server to handle high-volume policy administration and insurance claims workflows.",
      "Authored, tuned, and refactored high-performance SQL queries, stored procedures, and complex data migration scripts via SSMS for critical production releases.",
      "Monitored live application telemetry, node health, and rolling deployment clusters using Service Fabric; triaged and resolved post-deployment production incidents.",
      "Collaborated closely with QA engineers and business analysts throughout the SDLC; implemented rigorous API integration testing and automated Postman suites.",
      "Conducted structured code reviews to maintain strict design pattern standards, clean code architecture, and high backend security."
    ],
    technologies: [
      "C#",
      ".NET 8 / ASP.NET Core",
      "RESTful APIs",
      "SQL Server (SSMS)",
      "Service Fabric",
      "Stored Procedures",
      "Entity Framework Core",
      "Azure DevOps",
      "Postman",
      "Git"
    ],
    architectureOverview: {
      client: "Enterprise Web Client / Portal",
      gateway: "ASP.NET Core API Gateway (Auth & Routing)",
      services: "Service Fabric Microservices (Policy & Claims Engine)",
      database: "SQL Server (Clustered Tables & Stored Procedures)"
    }
  },
  {
    id: "soarswell-tracker",
    role: "Full Stack Intern",
    company: "Soarswell Consulting",
    location: "Offsite",
    type: "Internship",
    period: "Mar 2025 – Sep 2025",
    statusTag: "COMPLETED",
    projectContext: "Tracker — End-to-end recruitment management and talent workflow platform.",
    responsibilities: [
      "Engineered scalable RESTful backend endpoints using Spring Boot and Java to streamline candidate tracking, job requisitions, and interview scheduling.",
      "Designed secure Role-Based Access Control (RBAC), token authentication, and data validation layers across candidate and client management modules.",
      "Collaborated in Agile sprints, wrote comprehensive unit test cases, and managed branch deployments via Git."
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
    responsibilities: [
      "Gained hands-on experience in full-lifecycle software delivery, backend API integration, and cloud fundamentals.",
      "Participated in pair programming sessions and architectural reviews."
    ],
    technologies: ["Java", "Web Technologies", "API Integration", "Git"]
  }
];
