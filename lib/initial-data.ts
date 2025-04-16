import type { ResumeData } from "./types"

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Software Engineer",
    email: "john.doe@example.com",
    phone: "(123) 456-7890",
    location: "San Francisco, CA",
    website: "johndoe.com",
    summary:
      "Experienced software engineer with a passion for building scalable web applications. Skilled in JavaScript, React, and Node.js with a strong focus on user experience and performance optimization.",
  },
  education: [
    {
      id: "1",
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science in Computer Science",
      date: "2015 - 2019",
      description:
        "Graduated with honors. Relevant coursework included Data Structures, Algorithms, Web Development, and Database Systems.",
    },
  ],
  experience: [
    {
      id: "1",
      company: "Tech Solutions Inc.",
      position: "Senior Software Engineer",
      date: "2021 - Present",
      description:
        "Lead developer for the company's flagship product. Implemented new features, optimized performance, and mentored junior developers.",
    },
    {
      id: "2",
      company: "Web Innovations",
      position: "Software Engineer",
      date: "2019 - 2021",
      description:
        "Developed and maintained client websites. Collaborated with designers to implement responsive UI components.",
    },
  ],
  skills: [
    {
      id: "1",
      name: "JavaScript",
      level: "expert",
    },
    {
      id: "2",
      name: "React",
      level: "advanced",
    },
    {
      id: "3",
      name: "Node.js",
      level: "intermediate",
    },
    {
      id: "4",
      name: "HTML/CSS",
      level: "expert",
    },
    {
      id: "5",
      name: "TypeScript",
      level: "advanced",
    },
  ],
  achievements: [
    {
      id: "1",
      title: "Employee of the Year",
      date: "2022",
      description: "Recognized for outstanding contributions to the company's flagship product.",
    },
    {
      id: "2",
      title: "Speaker at React Conference",
      date: "2021",
      description: "Presented on optimizing React applications for performance.",
    },
  ],
  projects: [
    {
      id: "1",
      title: "E-commerce Platform",
      description: "Developed a full-stack e-commerce platform with advanced search and filtering capabilities.",
      technologies: "React, Node.js, MongoDB, Express",
      link: "github.com/johndoe/ecommerce",
      date: "2020 - 2021",
    },
    {
      id: "2",
      title: "Task Management App",
      description: "Built a collaborative task management application with real-time updates.",
      technologies: "React, Firebase, Material UI",
      link: "github.com/johndoe/taskmanager",
      date: "2019 - 2020",
    },
  ],
}
