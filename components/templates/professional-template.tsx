import type { ResumeData } from "@/lib/types"

interface ProfessionalTemplateProps {
  data: ResumeData
}

export function ProfessionalTemplate({ data }: ProfessionalTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto font-sans text-black">
      <header className="bg-gray-800 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name || "Your Name"}</h1>
        <p className="text-xl mb-4">{data.personalInfo.title || "Professional Title"}</p>

        <div className="text-sm flex flex-wrap gap-x-6 gap-y-1 text-gray-300">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
          {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
        </div>
      </header>

      <div className="p-8">
        {data.personalInfo.summary && (
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-3">Professional Summary</h2>
            <p className="text-sm">{data.personalInfo.summary}</p>
          </section>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-8">
            {data.experience.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Work Experience</h2>
                <div className="space-y-6">
                  {data.experience.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                        <h3 className="font-semibold text-gray-800">{exp.position || "Position"}</h3>
                        <p className="text-sm text-gray-600">{exp.date || "Date"}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-2">{exp.company || "Company"}</p>
                      {exp.description && <p className="text-sm">{exp.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* New Projects Section */}
            {data.projects.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Projects</h2>
                <div className="space-y-6">
                  {data.projects.map((project) => (
                    <div key={project.id}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                        <h3 className="font-semibold text-gray-800">{project.title || "Project Title"}</h3>
                        <p className="text-sm text-gray-600">{project.date || "Date"}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-2">{project.technologies || "Technologies"}</p>
                      {project.description && <p className="text-sm mb-1">{project.description}</p>}
                      {project.link && (
                        <p className="text-sm text-gray-600">
                          <span className="italic">Link: </span>
                          {project.link}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.education.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Education</h2>
                <div className="space-y-6">
                  {data.education.map((edu) => (
                    <div key={edu.id}>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-1">
                        <h3 className="font-semibold text-gray-800">{edu.degree || "Degree"}</h3>
                        <p className="text-sm text-gray-600">{edu.date || "Date"}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-700 mb-2">{edu.institution || "Institution"}</p>
                      {edu.description && <p className="text-sm">{edu.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="space-y-8">
            {/* New Achievements Section */}
            {data.achievements.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Achievements</h2>
                <div className="space-y-4">
                  {data.achievements.map((achievement) => (
                    <div key={achievement.id} className="border-l-2 border-gray-800 pl-4">
                      <h3 className="font-semibold text-gray-800">{achievement.title || "Achievement"}</h3>
                      <p className="text-sm text-gray-600 mb-1">{achievement.date || "Date"}</p>
                      {achievement.description && <p className="text-sm">{achievement.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {data.skills.length > 0 && (
              <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Skills</h2>
                <div className="space-y-3">
                  {data.skills.map((skill) => (
                    <div key={skill.id} className="text-sm">
                      <div className="flex justify-between mb-1">
                        <span>{skill.name}</span>
                        <span className="text-gray-600">
                          {skill.level === "beginner" && "Beginner"}
                          {skill.level === "intermediate" && "Intermediate"}
                          {skill.level === "advanced" && "Advanced"}
                          {skill.level === "expert" && "Expert"}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div
                          className="bg-gray-800 h-1.5 rounded-full"
                          style={{
                            width:
                              skill.level === "beginner"
                                ? "25%"
                                : skill.level === "intermediate"
                                  ? "50%"
                                  : skill.level === "advanced"
                                    ? "75%"
                                    : "100%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
