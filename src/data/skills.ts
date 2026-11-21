export interface SkillGroup {
  category: string;
  categoryCode: string;
  queryFilter: string;
  description: string;
  skills: {
    name: string;
    level: 'Core Enterprise' | 'Proficient' | 'Academic / Working';
    highlight?: boolean;
    tags?: string[];
  }[];
}

export const skillsData: SkillGroup[] = [
  {
    category: "Backend & Systems",
    categoryCode: "BACKEND_CORE",
    queryFilter: "WHERE category = 'Backend' AND status = 'PRODUCTION_READY'",
    description: "Primary enterprise engine stack utilized in mission-critical insurance and banking workflows.",
    skills: [
      { name: "C#", level: "Core Enterprise", highlight: true, tags: ["Generics", "Async/Await", "LINQ"] },
      { name: ".NET 8 / ASP.NET Core", level: "Core Enterprise", highlight: true, tags: ["Web API", "Middleware", "Dependency Injection"] },
      { name: "RESTful Web APIs", level: "Core Enterprise", highlight: true, tags: ["HTTP Standards", "Routing", "Serialization"] },
      { name: "Entity Framework Core", level: "Core Enterprise", highlight: true, tags: ["Code-First", "Migrations", "LINQ to Entities"] },
      { name: "LINQ", level: "Core Enterprise", highlight: true, tags: ["Data Queries", "Deferred Execution"] },
      { name: "OOP & Clean Architecture", level: "Core Enterprise", tags: ["SOLID Principles", "Design Patterns", "Separation of Concerns"] }
    ]
  },
  {
    category: "Databases & Storage",
    categoryCode: "DB_STORAGE",
    queryFilter: "WHERE category = 'Database' AND engine = 'SQL_SERVER'",
    description: "Relational database engineering, data integrity, and high-performance querying.",
    skills: [
      { name: "Microsoft SQL Server", level: "Core Enterprise", highlight: true, tags: ["Relational Engine", "Clustered Indexes"] },
      { name: "SSMS (SQL Server Mgmt Studio)", level: "Core Enterprise", highlight: true, tags: ["Execution Plans", "Query Profiling"] },
      { name: "Stored Procedures & T-SQL", level: "Core Enterprise", highlight: true, tags: ["Complex Joins", "Transactions", "Triggers"] },
      { name: "Database Design & Normalization", level: "Proficient", tags: ["3NF", "Foreign Keys", "Constraint Validation"] }
    ]
  },
  {
    category: "Distributed Systems & Operations",
    categoryCode: "OPS_DISTRIBUTED",
    queryFilter: "WHERE category = 'Operations' AND orchestration IN ('Azure', 'ServiceFabric')",
    description: "Microservice orchestration, CI/CD automation, and version control.",
    skills: [
      { name: "Service Fabric", level: "Core Enterprise", highlight: true, tags: ["Stateless Services", "Cluster Management", "Health Probes"] },
      { name: "Azure DevOps", level: "Proficient", highlight: true, tags: ["Pipelines", "Boards", "Sprint Planning"] },
      { name: "Git & Version Control", level: "Core Enterprise", tags: ["Branching Strategies", "PR Reviews", "Merge Resolving"] },
      { name: "Production Support & Triage", level: "Core Enterprise", highlight: true, tags: ["Incident Response", "Log Diagnostics", "Hotfixes"] }
    ]
  },
  {
    category: "Testing & Engineering Practices",
    categoryCode: "TESTING_QA",
    queryFilter: "WHERE category = 'Testing_SDLC'",
    description: "Quality assurance protocols, automated validation, and agile collaboration.",
    skills: [
      { name: "Postman Tool", level: "Core Enterprise", highlight: true, tags: ["Mock Servers", "API Automation", "Environment Envs"] },
      { name: "Unit Testing", level: "Proficient", tags: ["xUnit", "Test Cases", "Regression Testing"] },
      { name: "Authentication & Authorization", level: "Core Enterprise", tags: ["JWT", "Role-Based Access (RBAC)", "Claim Verification"] },
      { name: "Agile / Scrum & Code Reviews", level: "Core Enterprise", tags: ["Sprint Planning", "Peer Reviews", "Documentation"] }
    ]
  },
  {
    category: "Secondary & Academic Experience",
    categoryCode: "SECONDARY_STACK",
    queryFilter: "WHERE category = 'Secondary' ORDER BY experience DESC",
    description: "Polyglot background across academic projects and full-stack internships.",
    skills: [
      { name: "Java & Spring Boot", level: "Proficient", tags: ["Internship Experience", "MVC Architecture", "Spring Security"] },
      { name: "C++", level: "Proficient", tags: ["Data Structures", "Algorithms", "87% Skill Test Score"] },
      { name: "HTML, CSS & JavaScript", level: "Academic / Working", tags: ["Frontend Enhancements", "DOM Basics"] },
      { name: "React & Node.js", level: "Academic / Working", tags: ["Academic Projects", "Chef's Palace"] }
    ]
  }
];
