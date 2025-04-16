import type { ResumeData } from "@/lib/types"
import { MinimalTemplate } from "@/components/templates/minimal-template"
import { ProfessionalTemplate } from "@/components/templates/professional-template"
import { CreativeTemplate } from "@/components/templates/creative-template"

interface ResumePreviewProps {
  data: ResumeData
  template: string
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  const renderTemplate = () => {
    switch (template) {
      case "minimal":
        return <MinimalTemplate data={data} />
      case "professional":
        return <ProfessionalTemplate data={data} />
      case "creative":
        return <CreativeTemplate data={data} />
      default:
        return <MinimalTemplate data={data} />
    }
  }

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <div className="scale-[0.7] origin-top-left min-h-[1000px] w-[140%]">{renderTemplate()}</div>
    </div>
  )
}
