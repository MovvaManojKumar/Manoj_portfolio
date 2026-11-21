export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  scoreLabel: string;
  highlights: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  description: string;
  badgeType: 'SILVER' | 'TEST' | 'COMPETITIVE' | 'SPORTS';
}

export const educationData: EducationItem[] = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Prasad V. Potluri Siddhartha Institute of Technology (PVPSIT), Vijayawada",
    period: "2021 – 2025",
    score: "8.41",
    scoreLabel: "CGPA",
    highlights: [
      "Core Coursework: Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, Operating Systems, Computer Networks.",
      "Final Year Project: Securing Attendance System Using Machine Learning (MTCNN & FaceNet) and Ethereum Blockchain.",
      "Organized national-level technical quiz; actively participated in department hackathons and IoT technical workshops."
    ]
  },
  {
    degree: "Intermediate (Class XII, MPC)",
    institution: "Narayana Junior College, Andhra Pradesh",
    period: "2019 – 2021",
    score: "907 / 1000",
    scoreLabel: "Total Marks",
    highlights: [
      "Specialization in Mathematics, Physics, and Chemistry.",
      "Strong analytical and mathematical foundation supporting algorithmic problem solving."
    ]
  },
  {
    degree: "Secondary School Certificate (Class X)",
    institution: "Flora English Medium High School, Andhra Pradesh",
    period: "2018 – 2019",
    score: "9.3",
    scoreLabel: "CGPA",
    highlights: ["Distinction in science and mathematics; active participant in scholastic competitions."]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: "Silver Badge in Problem Solving",
    organization: "HackerRank",
    description: "Demonstrated mastery of core data structures, graph traversals, dynamic programming, and complexity optimization.",
    badgeType: "SILVER"
  },
  {
    title: "87% Score in C++ Skill Assessment",
    organization: "Technical Assessment Platform",
    description: "Evaluated on low-level memory management, pointers, OOP, templates, and STL efficiency.",
    badgeType: "TEST"
  },
  {
    title: "Active Competitive Programmer",
    organization: "LeetCode · CodeChef · HackerRank",
    description: "Consistently solving algorithmic challenges to hone data structures, edge-case analysis, and runtime complexity.",
    badgeType: "COMPETITIVE"
  },
  {
    title: "Silver Medalist — Inter-Department Badminton",
    organization: "PVPSIT Sports Tournament",
    description: "Silver medal recognition in campus athletics, reflecting discipline, stamina, and team spirit.",
    badgeType: "SPORTS"
  }
];
