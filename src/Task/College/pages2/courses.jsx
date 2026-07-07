
export const courses = [
  // ---------------- MORNING SHIFT ----------------
  {
    id: "bscMaths",
    name: "B.Sc Mathematics",
    shift: "morning",
    dept: "Science",
    duration: "3 Years",
    seats: 50,
    eligibility: "10+2 with Mathematics, minimum 60%.",
    short: "Algebra, calculus and real analysis with strong problem solving.",
    highlights: [
      "Pure & applied mathematics",
      "Statistics and probability",
      "Problem-solving workshops",
    ],
  },
  {
    id: "baEcnomics",
    name: "B.A Economics",
    shift: "morning",
    dept: "Arts",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream, minimum 50%.",
    short: "Micro & macro economics with data-driven analysis.",
    highlights: [
      "Microeconomics & macroeconomics",
      "Indian & international economy",
      "Basic econometrics",
    ],
  },
  {
    id: "bcomComputer",
    name: "B.Com Computer Applications",
    shift: "morning",
    dept: "Commerce",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream, minimum 50%.",
    short: "Commerce fundamentals blended with computer applications.",
    highlights: [
      "Financial & corporate accounting",
      "Programming and databases",
      "Tally, GST and e-commerce",
    ],
  },
  {
    id: "bcomCorporate",
    name: "B.Com Corporate Secretaryship",
    shift: "morning",
    dept: "Commerce",
    duration: "3 Years",
    seats: 50,
    eligibility: "10+2 in any stream, minimum 50%.",
    short: "Company law, governance and corporate administration.",
    highlights: [
      "Company law & secretarial practice",
      "Business & corporate accounting",
      "Corporate governance",
    ],
  },

  // ---------------- EVENING SHIFT ----------------
  {
    id: "bca",
    name: "BCA (Computer Applications)",
    shift: "evening",
    dept: "Computer Science",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 with Mathematics/Computer Science, minimum 55%.",
    short: "Application development, databases and web technologies.",
    highlights: [
      "Web & mobile app development",
      "Data structures and DBMS",
      "Live client-style projects",
    ],
  },
  
  {
    id: "bba",
    name: "BBA (Business Administration)",
    shift: "evening",
    dept: "Management",
    duration: "3 Years",
    seats: 60,
    eligibility: "10+2 in any stream, minimum 50%.",
    short: "Leadership, marketing and management fundamentals.",
    highlights: [
      "Marketing, HR and finance",
      "Team projects & presentations",
      "Internship in the final year",
    ],
  },
  {
    id: "bscDataScience",
    name: "B.Sc Data Science",
    shift: "evening",
    dept: "Science",
    duration: "3 Years",
    seats: 40,
    eligibility: "10+2 with Mathematics, minimum 60%.",
    short: "Statistics, machine learning and data visualization.",
    highlights: [
      "Python, Pandas and SQL",
      "Machine learning basics",
      "Dashboards & real datasets",
    ],
  },
  {
    id: "bscMicro",
    name: "B.Sc Micro-Biology",
    shift: "evening",
    dept: "Science",
    duration: "3 Years",
    seats: 40,
    eligibility: "10+2 with Biology, minimum 55%.",
    short: "Microorganisms, immunology and modern lab techniques.",
    highlights: [
      "Microbiology & immunology",
      "Biochemistry",
      "Laboratory practicals",
    ],
  },
];

// Helper: get all courses for one shift ("morning" | "evening").
export const getCoursesByShift = (shift) =>
  courses.filter((course) => course.shift === shift);

// Helper: find a single course by its id.
export const getCourseById = (id) => courses.find((course) => course.id === id);
