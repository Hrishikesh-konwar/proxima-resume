import type { ResumeData } from "@/lib/types"

interface CreativeTemplateProps {
  data: ResumeData
}

export function CreativeTemplate({ data }: CreativeTemplateProps) {
  return (
    <div className="max-w-[800px] mx-auto font-sans text-black">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1 bg-blue-700 text-white p-8">
          <div className="sticky top-0">
            <header className="mb-8">
              <h1 className="text-2xl font-bold mb-1">{data.personalInfo.name || "Your Name"}</h1>
              <p className="text-lg opacity-90 mb-4">{data.personalInfo.title || "Professional Title"}</p>
            </header>

            <section className="mb-8">
              <h2 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Contact</h2>
              <div className="space-y-2 text-sm">
                {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
                {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
                {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
                {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
              </div>
            </section>

            {data.skills.length > 0 && (
              <section className="mb-8">
                <h2 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Skills</h2>
                <div className="space-y-3">
                  {data.skills.map((skill) => (
                    <div key={skill.id}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{skill.name}</span>
                      </div>
                      <div className="w-full bg-blue-800 rounded-full h-1.5">
                        <div
                          className="bg-white h-1.5 rounded-full"
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

            {/* New Achievements Section in Sidebar */}
            {data.achievements.length > 0 && (
              <section>
                <h2 className="text-lg font-semibold mb-3 border-b border-blue-500 pb-1">Achievements</h2>
                <div className="space-y-4">
                  {data.achievements.map((achievement) => (
                    <div key={achievement.id}>
                      <h3 className="font-medium text-sm">{achievement.title || "Achievement"}</h3>
                      <p className="text-xs opacity-80 mb-1">{achievement.date || "Date"}</p>
                      {achievement.description && <p className="text-xs opacity-90">{achievement.description}</p>}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>

        <div className="md:col-span-2 p-8">
          {data.personalInfo.summary && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-700 mb-3">About Me</h2>
              <p className="text-sm">{data.personalInfo.summary}</p>
            </section>
          )}

          {data.experience.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:bg-blue-700 before:rounded-full before:content-[''] after:absolute after:left-1.5 after:top-5 after:w-0.5 after:h-full after:bg-blue-200 after:content-[''] last:after:hidden"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-semibold text-gray-800">{exp.position || "Position"}</h3>
                      <p className="text-sm text-gray-600">{exp.date || "Date"}</p>
                    </div>
                    <p className="text-sm font-medium text-blue-700 mb-2">{exp.company || "Company"}</p>
                    {exp.description && <p className="text-sm">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* New Projects Section */}
          {data.projects.length > 0 && (
            <section className="mb-8">
              <h2 className="text-xl font-bold text-blue-700 mb-4">Projects</h2>
              <div className="space-y-6">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:bg-blue-700 before:rounded-full before:content-[''] after:absolute after:left-1.5 after:top-5 after:w-0.5 after:h-full after:bg-blue-200 after:content-[''] last:after:hidden"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-semibold text-gray-800">{project.title || "Project Title"}</h3>
                      <p className="text-sm text-gray-600">{project.date || "Date"}</p>
                    </div>
                    <p className="text-sm font-medium text-blue-700 mb-2">{project.technologies || "Technologies"}</p>
                    {project.description && <p className="text-sm mb-1">{project.description}</p>}
                    {project.link && (
                      <p className="text-sm text-blue-600">
                        <a
                          href={project.link.startsWith("http") ? project.link : `https://${project.link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          View Project
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {data.education.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-blue-700 mb-4">Education</h2>
              <div className="space-y-6">
                {data.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="relative pl-6 before:absolute before:left-0 before:top-1 before:w-3 before:h-3 before:bg-blue-700 before:rounded-full before:content-[''] after:absolute after:left-1.5 after:top-5 after:w-0.5 after:h-full after:bg-blue-200 after:content-[''] last:after:hidden"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <h3 className="font-semibold text-gray-800">{edu.degree || "Degree"}</h3>
                      <p className="text-sm text-gray-600">{edu.date || "Date"}</p>
                    </div>
                    <p className="text-sm font-medium text-blue-700 mb-2">{edu.institution || "Institution"}</p>
                    {edu.description && <p className="text-sm">{edu.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}
