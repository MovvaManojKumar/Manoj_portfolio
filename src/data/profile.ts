export interface Profile {
  name: string;
  headlineRole: string;
  tagline: string;
  status: 'Available' | 'Active';
  location: string;
  experienceYears: string;
  noticePeriod: string;
  email: string;
  github: string;
  linkedin: string;
  shortBio: string;
  proofTiles: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}

export const profileData: Profile = {
  name: "Manoj Kumar Movva",
  headlineRole: "Backend Developer (.NET)",
  tagline: "Building and supporting enterprise REST APIs and SQL Server systems.",
  status: "Available",
  location: "Hyderabad, India",
  experienceYears: "1+ Year",
  noticePeriod: "1 Month",
  email: "movvamanojkumar96@gmail.com",
  github: "https://github.com/MovvaManojKumar",
  linkedin: "https://www.linkedin.com/in/movva-manoj-kumar",
  shortBio: "Backend developer specializing in C# and ASP.NET Core, with professional experience building enterprise services and optimizing SQL Server databases. Focused on reliable REST APIs, clean architecture, and rapid production issue resolution.",
  proofTiles: [
    { label: "EXPERIENCE", value: "1+ Year Professional", sublabel: "Backend & Enterprise Systems" },
    { label: "CORE STACK", value: "C# / ASP.NET Core", sublabel: "SQL Server & REST APIs" },
    { label: "DOMAIN EXPOSURE", value: "Enterprise Insurance", sublabel: "Policy Administration Platform" },
    { label: "NOTICE PERIOD", value: "1 Month (Immediate)", sublabel: "Ready to Onboard" }
  ]
};
