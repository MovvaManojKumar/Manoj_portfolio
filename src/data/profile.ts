export interface Profile {
  name: string;
  headlineRole: string;
  tagline: string;
  status: 'Online' | 'Deploying' | 'Investigating';
  systemUptime: string;
  location: string;
  experienceYears: string;
  noticePeriod: string;
  email: string;
  github: string;
  linkedin: string;
  shortBio: string;
  telemetryMetrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const profileData: Profile = {
  name: "Manoj Kumar Movva",
  headlineRole: "Backend Developer (.NET)",
  tagline: "Building scalable backend microservices, resilient REST APIs, and enterprise SQL Server systems with production-grade reliability.",
  status: "Online",
  systemUptime: "99.98%",
  location: "Hyderabad, India",
  experienceYears: "1+ Year",
  noticePeriod: "1 Month",
  email: "movvamanojkumar96@gmail.com",
  github: "https://github.com/MovvaManojKumar",
  linkedin: "https://www.linkedin.com/in/movva-manoj-kumar",
  shortBio: "Specialized in C#, ASP.NET Core (.NET 8), and SQL Server enterprise systems. Currently contributing to RMA's Insurance Policy Administration platform with linkfields innovations, handling high-concurrency policy workflows, database optimizations, Service Fabric deployments, and live production support.",
  telemetryMetrics: [
    { label: "Core Stack", value: ".NET 8 / C#", sublabel: "Enterprise Microservices" },
    { label: "Database Engine", value: "SQL Server", sublabel: "Optimized SPs & Indexing" },
    { label: "Production Health", value: "99.98%", sublabel: "Service Fabric Monitored" },
    { label: "Notice Period", value: "1 Month", sublabel: "Immediate Impact" }
  ]
};
