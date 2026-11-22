export interface SkillItem {
  name: string;
  isCore?: boolean;
}

export interface SkillDomain {
  id: string;
  title: string;
  sqlWhere: string;
  skills: SkillItem[];
}

export const skillDomains: SkillDomain[] = [
  {
    id: "backend",
    title: "CORE BACKEND (.NET)",
    sqlWhere: "domain = 'Backend' AND runtime = '.NET 8'",
    skills: [
      { name: "C#", isCore: true },
      { name: "ASP.NET Core (.NET 8)", isCore: true },
      { name: "RESTful Web APIs", isCore: true },
      { name: "Entity Framework Core", isCore: true },
      { name: "LINQ", isCore: true },
      { name: "OOP & Clean Architecture" }
    ]
  },
  {
    id: "database",
    title: "DATA & PERSISTENCE",
    sqlWhere: "domain = 'Data' AND engine = 'SQL_SERVER'",
    skills: [
      { name: "Microsoft SQL Server", isCore: true },
      { name: "SSMS", isCore: true },
      { name: "Stored Procedures & T-SQL", isCore: true },
      { name: "Database Query Tuning" },
      { name: "Relational Modeling & Schema Design" }
    ]
  },
  {
    id: "operations",
    title: "ARCHITECTURE & OPERATIONS",
    sqlWhere: "domain = 'Operations' AND cloud = 'Hybrid'",
    skills: [
      { name: "Service Fabric (Microservices)", isCore: true },
      { name: "Azure DevOps & CI/CD", isCore: true },
      { name: "Git & Version Control", isCore: true },
      { name: "Postman API Testing", isCore: true },
      { name: "Unit Testing & Code Reviews" }
    ]
  }
];

export const additionalExposureSkills: string[] = [
  "Java",
  "Spring Boot",
  "C++ (DSA & Problem Solving)",
  "React & Node.js",
  "Python (AI & Automation Exploration)"
];
