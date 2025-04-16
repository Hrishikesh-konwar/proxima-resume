import type { ResumeData } from "@/lib/types"

interface MinimalTemplateProps {
  data: ResumeData
}

export function MinimalTemplate({ data }: MinimalTemplateProps) {
  return (
    <div className="p-8 max-w-[800px] mx-auto font-sans text-black">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{data.personalInfo.name || "Your Name"}</h1>
        <p className="text-lg text-gray-600 mb-4">{data.personalInfo.title || "Professional Title"}</p>

        <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          {data.personalInfo.email && <div>{data.personalInfo.email}</div>}
          {data.personalInfo.phone && <div>{data.personalInfo.phone}</div>}
          {data.personalInfo.location && <div>{data.personalInfo.location}</div>}
          {data.personalInfo.website && <div>{data.personalInfo.website}</div>}
        </div>
      </header>

      {data.personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Summary</h2>
          <p className="text-sm">{data.personalInfo.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{exp.position || "Position"}</h3>
                    <p className="text-sm text-gray-600">{exp.company || "Company"}</p>
                  </div>
                  <p className="text-sm text-gray-600">{exp.date || "Date"}</p>
                </div>
                {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* New Projects Section */}
      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{project.title || "Project Title"}</h3>
                    <p className="text-sm text-gray-600">{project.technologies || "Technologies"}</p>
                  </div>
                  <p className="text-sm text-gray-600">{project.date || "Date"}</p>
                </div>
                {project.description && <p className="text-sm mt-1">{project.description}</p>}
                {project.link && (
                  <p className="text-sm text-gray-600 mt-1">
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
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{edu.degree || "Degree"}</h3>
                    <p className="text-sm text-gray-600">{edu.institution || "Institution"}</p>
                  </div>
                  <p className="text-sm text-gray-600">{edu.date || "Date"}</p>
                </div>
                {edu.description && <p className="text-sm mt-1">{edu.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* New Achievements Section */}
      {data.achievements.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Achievements</h2>
          <div className="space-y-4">
            {data.achievements.map((achievement) => (
              <div key={achievement.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{achievement.title || "Achievement"}</h3>
                  </div>
                  <p className="text-sm text-gray-600">{achievement.date || "Date"}</p>
                </div>
                {achievement.description && <p className="text-sm mt-1">{achievement.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold border-b pb-1 mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <div key={skill.id} className="text-sm bg-gray-100 px-3 py-1 rounded">
                {skill.name}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
