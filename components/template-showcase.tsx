import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TemplateShowcase() {
  const templates = [
    {
      id: "minimal",
      name: "Minimal",
      description: "Clean and simple design focusing on content",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "professional",
      name: "Professional",
      description: "Traditional layout with a touch of color",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      id: "creative",
      name: "Creative",
      description: "Modern design for creative industries",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  return (
    <>
      {templates.map((template) => (
        <div key={template.id} className="flex flex-col items-center space-y-4">
          <div className="overflow-hidden rounded-lg border bg-background">
            <img
              src={template.image || "/placeholder.svg"}
              alt={`${template.name} Template`}
              width={300}
              height={400}
              className="object-cover transition-all hover:scale-105"
            />
          </div>
          <h3 className="text-xl font-bold">{template.name}</h3>
          <p className="text-muted-foreground text-center">{template.description}</p>
          <Button asChild variant="outline">
            <Link href={`/builder?template=${template.id}`}>Use Template</Link>
          </Button>
        </div>
      ))}
    </>
  )
}
