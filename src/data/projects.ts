export interface ProjectCaseStudy {
  id: string;
  title: string;
  category: 'Enterprise Backend' | 'Full Stack' | 'ML & Blockchain' | 'Web Platform';
  visualType: 'ARCH_PIPELINE' | 'KANBAN' | 'LEDGER' | 'MARKETPLACE' | 'WORKFLOW';
  oneLiner: string;
  summary: string;
  problem: string;
  myContribution: string;
  architectureDetails: string[];
  techStack: string[];
  keyEndpointsOrFeatures: {
    name: string;
    description: string;
    badge?: string;
  }[];
  engineeringDecisions: {
    title: string;
    decision: string;
  }[];
  challenges: string;
  measurableOutcomes: string;
  databaseHighlights?: string;
  githubUrl?: string;
  liveUrl?: string;
  isProfessional?: boolean;
  lessonsLearned: string;
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: "rma-insurance-core",
    title: "Insurance Policy Administration System",
    category: "Enterprise Backend",
    visualType: "ARCH_PIPELINE",
    isProfessional: true,
    oneLiner: "Enterprise backend platform supporting policy administration and claims workflows.",
    summary: "Large-scale enterprise platform actively deployed across South Africa, powering policy underwriting, claim settlements, and billing across Rand Mutual Assurance.",
    problem: "Handling high-concurrency policy transactions and claims while guaranteeing zero data loss, strict audit compliance, and sub-second response times across distributed nodes.",
    myContribution: "Engineered ASP.NET Core REST APIs, optimized SQL Server stored procedures and schemas, and monitored microservices on Service Fabric clusters.",
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
    engineeringDecisions: [
      {
        title: "Stored Procedures vs. Raw ORM Queries",
        decision: "Used SSMS-optimized Stored Procedures for complex policy reconciliations to minimize network roundtrips and guarantee parameterized execution plans."
      },
      {
        title: "Stateless Microservices on Service Fabric",
        decision: "Partitioned claims and policy logic into stateless service instances allowing independent scaling and zero-downtime rolling upgrades."
      }
    ],
    challenges: "Tuning complex multi-table joins on historical policy ledger tables to eliminate query timeouts during peak end-of-month reconciliations.",
    measurableOutcomes: "Delivered stable REST endpoints and optimized database scripts supporting daily production operations with zero data inconsistency.",
    databaseHighlights: "T-SQL Stored procedures with indexed views, query execution plan tuning, and isolation levels preventing deadlocks during high-load reconciliations.",
    lessonsLearned: "Mastered enterprise-scale microservice architecture, defensive coding, backward-compatible API versioning, and triaging production incidents under tight SLAs."
  },
  {
    id: "recruitment-tracker",
    title: "Recruitment Tracker (Tracker)",
    category: "Full Stack",
    visualType: "KANBAN",
    isProfessional: false,
    oneLiner: "Hiring workflow platform with automated candidate pipelines and RBAC security.",
    summary: "Engineered during the Soarswell internship to automate candidate management, interview scheduling, and client requisitions via secure Spring Boot REST APIs.",
    problem: "Fragmented hiring communication and spreadsheet chaos causing delayed candidate pipelines, lost interview notes, and lack of role-based data security.",
    myContribution: "Designed relational database schema, implemented Spring Boot REST endpoints, and developed Role-Based Access Control (RBAC) security filters.",
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
    engineeringDecisions: [
      {
        title: "State Machine Pattern for Candidate Progression",
        decision: "Enforced strict state transitions to prevent invalid skips (e.g. from Applied directly to Hired without interview records)."
      },
      {
        title: "Stateless JWT Auth",
        decision: "Adopted stateless JWT tokens carrying user roles to allow seamless horizontal scalability without sticky sessions."
      }
    ],
    challenges: "Synchronizing interview calendar slots across multiple interviewers while preventing double-booking race conditions.",
    measurableOutcomes: "Automated end-to-end recruitment lifecycle transitions and eliminated manual status tracking overhead across candidate cohorts.",
    databaseHighlights: "Relational schema modeling candidates, jobs, evaluations, and interviewer calendars with foreign key cascades and indexed lookups.",
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Deepened practical mastery of REST standards, Spring dependency injection, request validation middleware, and agile team delivery."
  },
  {
    id: "secure-attendance-system",
    title: "Secure Attendance System (ML + Blockchain)",
    category: "ML & Blockchain",
    visualType: "LEDGER",
    isProfessional: false,
    oneLiner: "Anti-spoofing face recognition with tamper-proof Ethereum smart contract logging.",
    summary: "Combines machine learning biometric recognition with Ethereum blockchain smart contracts to provide immutable, audit-proof attendance logging.",
    problem: "Traditional RFID or centralized biometric attendance systems are susceptible to proxy check-ins, spoofing, and centralized database tampering.",
    myContribution: "Integrated MTCNN and FaceNet computer vision pipelines in Python and authored Solidity smart contracts to record cryptographic attendance proofs.",
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
    engineeringDecisions: [
      {
        title: "Dual Model Architecture (MTCNN + FaceNet)",
        decision: "Separated face detection (MTCNN) from identity embedding (FaceNet) to ensure robust performance across varied lighting conditions."
      },
      {
        title: "Hashing Biometric Embeddings on Chain",
        decision: "Stored cryptographic hashes on Ethereum rather than raw facial data to guarantee personal privacy and minimize gas fees."
      }
    ],
    challenges: "Mitigating high gas costs on Ethereum by batching verification logs and storing only cryptographic hashes on-chain.",
    measurableOutcomes: "Proved 100% elimination of proxy check-ins through tamper-proof biometric matching and decentralized ledger immutability.",
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Gained firsthand understanding of latency tradeoffs between edge machine learning inference and decentralized blockchain transaction finality."
  },
  {
    id: "chefs-palace",
    title: "Chef's Palace",
    category: "Full Stack",
    visualType: "MARKETPLACE",
    isProfessional: false,
    oneLiner: "Culinary marketplace connecting home chefs with local food enthusiasts.",
    summary: "A community food marketplace empowering independent home cooks—particularly women homemakers—to showcase culinary menus and manage customer orders.",
    problem: "Independent culinary artisans lack technical storefronts, ordering systems, and payment infrastructure to monetize home-cooked meals.",
    myContribution: "Architected Express REST API, MongoDB data models, and React state management for menu browsing and customer cart workflows.",
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
    engineeringDecisions: [
      {
        title: "Document-Based Schemas in MongoDB",
        decision: "Chose MongoDB to accommodate diverse, non-standardized daily chef menus and customizable dietary ingredient tags."
      },
      {
        title: "Modular REST Route Separation",
        decision: "Decoupled customer ordering endpoints from vendor menu configuration for clear separation of concerns."
      }
    ],
    challenges: "Handling real-time dish availability toggling so customers cannot place orders for dishes that have sold out for the day.",
    measurableOutcomes: "Successfully built and validated an intuitive multi-vendor food catalog with interactive order tracking.",
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Learned user-centric empathetic product design, full-stack state management, and building intuitive interfaces for non-technical home chefs."
  },
  {
    id: "mvm-scholarship",
    title: "MVM Scholarship Platform",
    category: "Web Platform",
    visualType: "WORKFLOW",
    isProfessional: false,
    oneLiner: "Educational grant portal with eligibility matching and application tracking.",
    summary: "Streamlines the discovery, application submission, and document evaluation process for scholarship aspirants seeking higher education funding.",
    problem: "High friction in scholarship applications, fragmented eligibility criteria, and lack of transparent application tracking for underprivileged students.",
    myContribution: "Developed the frontend client interface, responsive application forms, and eligibility rule validation logic.",
    architectureDetails: [
      "Modular web application with applicant onboarding and administrator review portals.",
      "Eligibility calculator matching student GPA, demographic tags, and chosen university program with funding criteria."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "REST APIs", "Git"],
    keyEndpointsOrFeatures: [
      { name: "Eligibility Matcher", description: "Quick multi-step questionnaire that matches applicants to eligible grant opportunities.", badge: "Matching Engine" },
      { name: "Application Status Tracker", description: "Real-time timeline showing review progress from submission to disbursement.", badge: "Applicant Dashboard" }
    ],
    engineeringDecisions: [
      {
        title: "Client-Side Multi-Step Validation",
        decision: "Structured multi-stage form wizard with progressive validation to minimize user abandonment on complex scholarship applications."
      },
      {
        title: "Accessible Semantic Markup",
        decision: "Strict adherence to semantic HTML landmarks and WCAG form labeling for screen reader compatibility."
      }
    ],
    challenges: "Structuring multi-tier conditional logic to evaluate dynamic eligibility across multiple university and government scholarship schemes.",
    measurableOutcomes: "Delivered a frictionless submission workflow with transparent real-time status progression for scholarship applicants.",
    githubUrl: "https://github.com/MovvaManojKumar",
    lessonsLearned: "Solidified principles of accessible design (a11y), responsive form validation, and building applications with genuine social impact."
  }
];
