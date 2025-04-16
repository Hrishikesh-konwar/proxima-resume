"use client"

import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Plus, Trash2 } from "lucide-react"
import type { ResumeData, Education, Experience, Skill, Achievement, Project } from "@/lib/types"

interface ResumeFormProps {
  data: ResumeData
  onChange: (data: Partial<ResumeData>) => void
  activeTemplate: string
  onTemplateChange: (template: string) => void
}

export function ResumeForm({ data, onChange, activeTemplate, onTemplateChange }: ResumeFormProps) {
  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    onChange({
      personalInfo: {
        ...data.personalInfo,
        [name]: value,
      },
    })
  }

  const handleAddEducation = () => {
    onChange({
      education: [
        ...data.education,
        { id: Date.now().toString(), institution: "", degree: "", date: "", description: "" },
      ],
    })
  }

  const handleEducationChange = (id: string, field: keyof Education, value: string) => {
    onChange({
      education: data.education.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu)),
    })
  }

  const handleRemoveEducation = (id: string) => {
    onChange({
      education: data.education.filter((edu) => edu.id !== id),
    })
  }

  const handleAddExperience = () => {
    onChange({
      experience: [
        ...data.experience,
        { id: Date.now().toString(), company: "", position: "", date: "", description: "" },
      ],
    })
  }

  const handleExperienceChange = (id: string, field: keyof Experience, value: string) => {
    onChange({
      experience: data.experience.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp)),
    })
  }

  const handleRemoveExperience = (id: string) => {
    onChange({
      experience: data.experience.filter((exp) => exp.id !== id),
    })
  }

  const handleAddSkill = () => {
    onChange({
      skills: [...data.skills, { id: Date.now().toString(), name: "", level: "intermediate" }],
    })
  }

  const handleSkillChange = (id: string, field: keyof Skill, value: string) => {
    onChange({
      skills: data.skills.map((skill) => (skill.id === id ? { ...skill, [field]: value } : skill)),
    })
  }

  const handleRemoveSkill = (id: string) => {
    onChange({
      skills: data.skills.filter((skill) => skill.id !== id),
    })
  }

  // New handlers for achievements
  const handleAddAchievement = () => {
    onChange({
      achievements: [...data.achievements, { id: Date.now().toString(), title: "", date: "", description: "" }],
    })
  }

  const handleAchievementChange = (id: string, field: keyof Achievement, value: string) => {
    onChange({
      achievements: data.achievements.map((achievement) =>
        achievement.id === id ? { ...achievement, [field]: value } : achievement,
      ),
    })
  }

  const handleRemoveAchievement = (id: string) => {
    onChange({
      achievements: data.achievements.filter((achievement) => achievement.id !== id),
    })
  }

  // New handlers for projects
  const handleAddProject = () => {
    onChange({
      projects: [
        ...data.projects,
        { id: Date.now().toString(), title: "", description: "", technologies: "", link: "", date: "" },
      ],
    })
  }

  const handleProjectChange = (id: string, field: keyof Project, value: string) => {
    onChange({
      projects: data.projects.map((project) => (project.id === id ? { ...project, [field]: value } : project)),
    })
  }

  const handleRemoveProject = (id: string) => {
    onChange({
      projects: data.projects.filter((project) => project.id !== id),
    })
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        {/* <h2 className="text-xl font-bold">Resume Builder</h2> */}
        <div className="space-y-2">
          <Label>Template</Label>
          <RadioGroup value={activeTemplate} onValueChange={onTemplateChange} className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="minimal" id="minimal" />
              <Label htmlFor="minimal">Minimal</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="professional" id="professional" />
              <Label htmlFor="professional">Professional</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="creative" id="creative" />
              <Label htmlFor="creative">Creative</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <Accordion type="multiple" defaultValue={["personal-info"]}>
        <AccordionItem value="personal-info">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={data.personalInfo.name} onChange={handlePersonalInfoChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" name="title" value={data.personalInfo.title} onChange={handlePersonalInfoChange} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={data.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={data.personalInfo.phone} onChange={handlePersonalInfoChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={data.personalInfo.location}
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website/LinkedIn</Label>
                <Input
                  id="website"
                  name="website"
                  value={data.personalInfo.website}
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea
                  id="summary"
                  name="summary"
                  rows={4}
                  value={data.personalInfo.summary}
                  onChange={handlePersonalInfoChange}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="education">
          <AccordionTrigger>Education</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {data.education.map((edu) => (
                <div key={edu.id} className="p-4 border rounded-lg space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveEducation(edu.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                      <Input
                        id={`institution-${edu.id}`}
                        value={edu.institution}
                        onChange={(e) => handleEducationChange(edu.id, "institution", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                      <Input
                        id={`degree-${edu.id}`}
                        value={edu.degree}
                        onChange={(e) => handleEducationChange(edu.id, "degree", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`date-${edu.id}`}>Date</Label>
                    <Input
                      id={`date-${edu.id}`}
                      value={edu.date}
                      onChange={(e) => handleEducationChange(edu.id, "date", e.target.value)}
                      placeholder="e.g., 2018 - 2022"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`description-${edu.id}`}>Description</Label>
                    <Textarea
                      id={`description-${edu.id}`}
                      value={edu.description}
                      onChange={(e) => handleEducationChange(edu.id, "description", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddEducation} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Education
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger>Work Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {data.experience.map((exp) => (
                <div key={exp.id} className="p-4 border rounded-lg space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveExperience(exp.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`company-${exp.id}`}>Company</Label>
                      <Input
                        id={`company-${exp.id}`}
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`position-${exp.id}`}>Position</Label>
                      <Input
                        id={`position-${exp.id}`}
                        value={exp.position}
                        onChange={(e) => handleExperienceChange(exp.id, "position", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`date-${exp.id}`}>Date</Label>
                    <Input
                      id={`date-${exp.id}`}
                      value={exp.date}
                      onChange={(e) => handleExperienceChange(exp.id, "date", e.target.value)}
                      placeholder="e.g., Jan 2020 - Present"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`description-${exp.id}`}>Description</Label>
                    <Textarea
                      id={`description-${exp.id}`}
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(exp.id, "description", e.target.value)}
                      rows={3}
                      placeholder="Describe your responsibilities and achievements"
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddExperience} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Experience
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* New Achievements Section */}
        <AccordionItem value="achievements">
          <AccordionTrigger>Achievements</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {data.achievements.map((achievement) => (
                <div key={achievement.id} className="p-4 border rounded-lg space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveAchievement(achievement.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`title-${achievement.id}`}>Title</Label>
                      <Input
                        id={`title-${achievement.id}`}
                        value={achievement.title}
                        onChange={(e) => handleAchievementChange(achievement.id, "title", e.target.value)}
                        placeholder="e.g., Employee of the Year"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`date-${achievement.id}`}>Date</Label>
                      <Input
                        id={`date-${achievement.id}`}
                        value={achievement.date}
                        onChange={(e) => handleAchievementChange(achievement.id, "date", e.target.value)}
                        placeholder="e.g., 2022"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`description-${achievement.id}`}>Description</Label>
                    <Textarea
                      id={`description-${achievement.id}`}
                      value={achievement.description}
                      onChange={(e) => handleAchievementChange(achievement.id, "description", e.target.value)}
                      rows={3}
                      placeholder="Describe your achievement"
                    />
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddAchievement} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Achievement
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* New Projects Section */}
        <AccordionItem value="projects">
          <AccordionTrigger>Projects</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {data.projects.map((project) => (
                <div key={project.id} className="p-4 border rounded-lg space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="space-y-2">
                    <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                    <Input
                      id={`title-${project.id}`}
                      value={project.title}
                      onChange={(e) => handleProjectChange(project.id, "title", e.target.value)}
                      placeholder="e.g., E-commerce Platform"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`description-${project.id}`}>Description</Label>
                    <Textarea
                      id={`description-${project.id}`}
                      value={project.description}
                      onChange={(e) => handleProjectChange(project.id, "description", e.target.value)}
                      rows={3}
                      placeholder="Describe your project"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`technologies-${project.id}`}>Technologies Used</Label>
                    <Input
                      id={`technologies-${project.id}`}
                      value={project.technologies}
                      onChange={(e) => handleProjectChange(project.id, "technologies", e.target.value)}
                      placeholder="e.g., React, Node.js, MongoDB"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`link-${project.id}`}>Project Link</Label>
                      <Input
                        id={`link-${project.id}`}
                        value={project.link}
                        onChange={(e) => handleProjectChange(project.id, "link", e.target.value)}
                        placeholder="e.g., github.com/username/project"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`date-${project.id}`}>Date</Label>
                      <Input
                        id={`date-${project.id}`}
                        value={project.date}
                        onChange={(e) => handleProjectChange(project.id, "date", e.target.value)}
                        placeholder="e.g., 2020 - 2021"
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddProject} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Project
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger>Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-6">
              {data.skills.map((skill) => (
                <div key={skill.id} className="p-4 border rounded-lg space-y-4 relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={() => handleRemoveSkill(skill.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`skill-${skill.id}`}>Skill</Label>
                      <Input
                        id={`skill-${skill.id}`}
                        value={skill.name}
                        onChange={(e) => handleSkillChange(skill.id, "name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Proficiency Level</Label>
                      <RadioGroup
                        value={skill.level}
                        onValueChange={(value) => handleSkillChange(skill.id, "level", value)}
                        className="flex flex-wrap gap-4"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="beginner" id={`beginner-${skill.id}`} />
                          <Label htmlFor={`beginner-${skill.id}`}>Beginner</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="intermediate" id={`intermediate-${skill.id}`} />
                          <Label htmlFor={`intermediate-${skill.id}`}>Intermediate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="advanced" id={`advanced-${skill.id}`} />
                          <Label htmlFor={`advanced-${skill.id}`}>Advanced</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="expert" id={`expert-${skill.id}`} />
                          <Label htmlFor={`expert-${skill.id}`}>Expert</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={handleAddSkill} className="w-full">
                <Plus className="mr-2 h-4 w-4" /> Add Skill
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
