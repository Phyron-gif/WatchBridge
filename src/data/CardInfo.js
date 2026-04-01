const jobs = [
  {
    id: 1,
    title: "Junior Frontend Developer",
    company: "PhyTech Solutions",
    type: "Full-Time",
    category: "Job",
    location: "Douala, Cameroon",
    salary: "250k - 400k XAF",
    description: "Build responsive web interfaces using React and Tailwind CSS.",
    requirements: ["HTML", "CSS", "JavaScript", "React"],
    postedAt: "2026-03-20",
    deadline: "2026-04-10"
  },
  {
    id: 2,
    title: "Shop Assistant",
    company: "Mama Nkechi Store",
    type: "Part-Time",
    category: "Local Job",
    location: "Bonaberi, Douala",
    salary: "60k XAF",
    description: "Assist customers, arrange goods, and manage small transactions.",
    requirements: ["Basic communication", "Honesty"],
    postedAt: "2026-03-25",
    deadline: "2026-04-05"
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    company: "Andela",
    type: "Internship",
    category: "Internship",
    location: "Remote",
    salary: "Stipend provided",
    description: "Work with senior engineers on real-world software projects.",
    requirements: ["Python basics", "Git", "Problem solving"],
    postedAt: "2026-03-18",
    deadline: "2026-04-15"
  },
  {
    id: 4,
    title: "Tailoring Apprentice",
    company: "Bright Fashion House",
    type: "Training",
    category: "Training",
    location: "Akwa, Douala",
    salary: "Unpaid (Skill-based)",
    description: "Learn sewing, cutting, and garment finishing.",
    requirements: ["Willingness to learn"],
    postedAt: "2026-03-22",
    deadline: "2026-04-12"
  },
  {
    id: 5,
    title: "Youth Leadership Fellow",
    company: "Ashesi Leadership Institute",
    type: "Fellowship",
    category: "Fellowship",
    location: "Accra, Ghana",
    salary: "Fully Funded",
    description: "Develop leadership and policy-making skills.",
    requirements: ["Leadership experience", "Strong communication"],
    postedAt: "2026-03-10",
    deadline: "2026-04-20"
  },
  {
    id: 6,
    title: "Community Clean-Up Volunteer",
    company: "Green Africa Initiative",
    type: "Volunteer",
    category: "Volunteer",
    location: "Douala, Cameroon",
    salary: "Unpaid",
    description: "Participate in environmental sanitation campaigns.",
    requirements: ["Passion for environment"],
    postedAt: "2026-03-28",
    deadline: "2026-04-30"
  },
  {
    id: 7,
    title: "Digital Marketing Workshop",
    company: "TechHub Africa",
    type: "Workshop",
    category: "Workshop",
    location: "Online",
    salary: "Free",
    description: "Learn SEO, social media ads, and branding strategies.",
    requirements: ["Laptop", "Internet access"],
    postedAt: "2026-03-21",
    deadline: "2026-04-08"
  },
  {
    id: 8,
    title: "Motorbike Delivery Rider",
    company: "QuickDrop",
    type: "Full-Time",
    category: "Local Job",
    location: "Douala, Cameroon",
    salary: "120k - 180k XAF",
    description: "Deliver packages within the city.",
    requirements: ["Valid license", "Motorbike"],
    postedAt: "2026-03-27",
    deadline: "2026-04-10"
  },
  {
    id: 9,
    title: "Data Entry Clerk",
    company: "Global Data Corp",
    type: "Part-Time",
    category: "Job",
    location: "Remote",
    salary: "80k XAF",
    description: "Input and manage company data accurately.",
    requirements: ["Typing skills", "Attention to detail"],
    postedAt: "2026-03-23",
    deadline: "2026-04-09"
  },
  {
    id: 10,
    title: "AI & Robotics Bootcamp",
    company: "Innovate Africa",
    type: "Training",
    category: "Training",
    location: "Yaoundé, Cameroon",
    salary: "Paid Program",
    description: "Hands-on training in AI and robotics systems.",
    requirements: ["Basic programming knowledge"],
    postedAt: "2026-03-15",
    deadline: "2026-04-18"
  }
];

export function getJobs(){
    return jobs;
}