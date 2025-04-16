export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website: string
  summary: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  date: string
  description: string
}

export interface Experience {
  id: string
  company: string
  position: string
  date: string
  description: string
}

export interface Skill {
  id: string
  name: string
  level: "beginner" | "intermediate" | "advanced" | "expert"
}

export interface Achievement {
  id: string
  title: string
  date: string
  description: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string
  link: string
  date: string
}

export interface ResumeData {
  personalInfo: PersonalInfo
  education: Education[]
  experience: Experience[]
  skills: Skill[]
  achievements: Achievement[]
  projects: Project[]
}
