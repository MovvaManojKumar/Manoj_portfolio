export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Enterprise Backend' | 'Full Stack' | 'ML & Blockchain' | 'Web Platform';
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  architectureDetails: string[];
  techStack: string[];
  keyEndpointsOrFeatures: {
    name: string;
    description: string;
    badge?: string;
  }[];
  databaseHighlights?: string;
  githubUrl?: string;
  liveUrl?: string;
  isProfessional?: boolean;
  lessonsLearned: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "rma-insurance-core",
    title: "RMA Insurance Policy Administration System",
    category: "Enterprise Backend",
    isProfessional: true,
    tagline: "High-volume, enterprise insurance management platform serving South African policyholders.",
    summary: "Large-scale enterprise platform actively deployed since 2016, powering policy underwriting, claim settlements, and billing across Rand Mutual Assurance.",
    problem: "Handling high-concurrency policy transactions and claims while guaranteeing zero data loss, strict audit compliance, and sub-second response times across distributed nodes.",
    solution: "Engineered scalable RESTful APIs in C# and ASP.NET Core, optimized mission-critical SQL Server stored procedures, and monitored microservices on Service Fabric clusters.",
    architectureDetails: [
      "Client requests routed through secure ASP.NET Core API Gateway with claim-based auth.",
      "Business domain services partitioned across Service Fabric stateless microservices.",
      "Persistence layer backed by Microsoft SQL Server with clustered indexing and strict ACID transactions.",
      "Continuous health monitoring and rolling upgrades executed through Service Fabric Explorer."
    ],
    techStack: ["C#", "ASP.NET Core 8", "SQL Server", "Service Fabric", "SSMS", "Azure DevOps", "Postman", "Git"],
    keyEndpointsOrFeatures: [
      { name: "POST /api/v1/policies/underwrite", description: "Validates applicant risk profiles and generates policy contracts transactional ledger.", badge: "Core Engine" },
      { name: "GET /api/v1/claims/{id}/audit", description: "Retrieves complete immutable claim history with audit trails for claims adjudicators.", badge: "Audit Service" },
      { name: "PUT /api/v1/billing/reconcile", description: "Performs batch reconciliation between external banking receipts and active policies.", badge: "Batch Pipeline" }
    ],
    databaseHighlights: "T-SQL Stored procedures with indexed views, query execution plan tuning, and isolation levels preventing deadlocks during high-load reconciliations.",
    lessonsLearned: "Mastered enterprise-scale microservice architecture, defensive coding, backward-compatible API versioning, and triaging production incidents under tight SLAs."
  },
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker (Tracker)",
    category: "Full Stack",
    isProfessional: false,
    tagline: "Comprehensive recruitment management platform streamlining talent pipelines and hiring workflows.",
    summary: "Engineered during the Soarswell internship to automate candidate management, interview scheduling, and client requisitions via secure Spring Boot REST APIs.",
    problem: "Fragmented hiring communication and spreadsheet chaos causing delayed candidate pipelines, lost interview notes, and lack of role-based data security.",
    solution: "Built a centralized backend engine with Spring Boot, implementing Role-Based Access Control (RBAC), candidate status state machines, and relational database schemas.",
    architectureDetails: [
      "Layered Spring Boot MVC architecture (Controller -> Service -> Repository -> Database).",
      "Token-based authentication with role verification for Recruiters, Interviewers, and Admins.",
      "Automated interview lifecycle transitions with validation guards."
    ],
    techStack: ["Java", "Spring Boot", "SQL", "RESTful APIs", "Postman", "Git"],
    keyEndpointsOrFeatures: [
      { name: "POST /api/candidates/pipeline", description: "Transitions candidate through hiring stages (Applied -> Shortlisted -> Interview -> Offered).", badge: "State Machine" },
      { name: "GET /api/jobs/{id}/metrics", description: "Generates pipeline conversion analytics for hiring managers.", badge: "Analytics" }
    ],
    databaseHighlights: "Relational schema modeling candidates, jobs, evaluations, and interviewer calendars with foreign key cascades and indexed lookups.",
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Deepened practical mastery of REST standards, Spring dependency injection, request validation middleware, and agile team delivery."
  },
  {
    id: "secure-attendance-system",
    title: "Secure Attendance System (ML + Blockchain)",
    category: "ML & Blockchain",
    isProfessional: false,
    tagline: "Tamper-proof biometric verification combining MTCNN face recognition with Ethereum smart contracts.",
    summary: "Combines machine learning biometric recognition with Ethereum blockchain smart contracts to provide immutable, audit-proof attendance logging.",
    problem: "Traditional RFID or centralized biometric attendance systems are susceptible to proxy check-ins, spoofing, and centralized database tampering.",
    solution: "Integrated dual ML models (MTCNN for bounding-box detection, FaceNet for 128-d vector embeddings) with decentralized Ethereum smart contracts for verified immutable logging.",
    architectureDetails: [
      "Camera feed captured and passed to MTCNN model for accurate facial detection and alignment.",
      "FaceNet generates facial embeddings compared against verified cryptographic identities.",
      "Successful match triggers a signed Web3 transaction invoking an Ethereum Solidity smart contract to commit attendance.",
      "Zero centralized points of failure for stored verification proofs."
    ],
    techStack: ["Python", "MTCNN", "FaceNet", "Ethereum Blockchain", "Solidity Smart Contracts", "Web3", "Node.js"],
    keyEndpointsOrFeatures: [
      { name: "Biometric Embedding Pipeline", description: "Sub-second 128-dimensional facial representation extraction with high anti-spoofing accuracy.", badge: "Computer Vision" },
      { name: "Smart Contract Attendance Logger", description: "Solidity contract recording verified timestamp, student hash, and cryptographically signed session proof.", badge: "Decentralized Ledger" }
    ],
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Gained firsthand understanding of latency tradeoffs between edge machine learning inference and decentralized blockchain transaction finality."
  },
  {
    id: "chefs-palace",
    title: "Chef's Palace",
    category: "Full Stack",
    isProfessional: false,
    tagline: "Virtual culinary marketplace connecting passionate home-based chefs with food enthusiasts.",
    summary: "A community food marketplace empowering independent home cooks—particularly women homemakers—to showcase culinary menus and manage customer orders.",
    problem: "Independent culinary artisans lack technical storefronts, ordering systems, and payment infrastructure to monetize home-cooked meals.",
    solution: "Developed an interactive marketplace with customized meal discovery, regional cuisine filters, direct chef messaging, and automated order confirmation workflows.",
    architectureDetails: [
      "Client frontend built in React with dynamic catalog filters and shopping cart state.",
      "Node.js & Express REST API managing vendor profiles, dish listings, and customer reviews.",
      "MongoDB database storing schemaless menu variations, dietary tags, and order records."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "CSS Modules", "Git"],
    keyEndpointsOrFeatures: [
      { name: "Customized Meal Discovery", description: "Allows customers to filter by authentic regional cuisines, dietary restrictions, and kitchen proximity.", badge: "Catalog Engine" },
      { name: "Chef Dashboard", description: "Enables home cooks to manage daily dish availability, portion limits, and incoming order statuses.", badge: "Vendor Portal" }
    ],
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Learned user-centric empathetic product design, full-stack state management, and building intuitive interfaces for non-technical home chefs."
  },
  {
    id: "mvm-scholarship",
    title: "MVM Scholarship Platform",
    category: "Web Platform",
    isProfessional: false,
    tagline: "Dedicated platform connecting deserving students with global educational scholarship opportunities.",
    summary: "Streamlines the discovery, application submission, and document evaluation process for scholarship aspirants seeking higher education funding.",
    problem: "High friction in scholarship applications, fragmented eligibility criteria, and lack of transparent application tracking for underprivileged students.",
    solution: "Engineered an accessible application portal with automated eligibility screening, document upload verification, and application status dashboards.",
    architectureDetails: [
      "Modular web application with applicant onboarding and administrator review portals.",
      "Eligibility calculator matching student GPA, demographic tags, and chosen university program with funding criteria."
    ],
    techStack: ["Web Technologies", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"],
    keyEndpointsOrFeatures: [
      { name: "Eligibility Matcher", description: "Quick multi-step questionnaire that matches applicants to eligible grant opportunities.", badge: "Matching Engine" },
      { name: "Application Status Tracker", description: "Real-time timeline showing review progress from submission to disbursement.", badge: "Applicant Dashboard" }
    ],
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Solidified principles of accessible design (a11y), responsive form validation, and building applications with genuine social impact."
  }
];
