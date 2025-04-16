"use client"

import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import type { ResumeData } from "./types"

export async function generatePDF(data: ResumeData, template: string) {
  // Create a temporary container for the resume
  const container = document.createElement("div")
  container.style.position = "absolute"
  container.style.left = "-9999px"
  container.style.top = "-9999px"
  container.style.width = "800px" // Fixed width for PDF
  document.body.appendChild(container)

  // Import the template component dynamically
  let TemplateComponent
  switch (template) {
    case "minimal":
      const { MinimalTemplate } = await import("@/components/templates/minimal-template")
      TemplateComponent = MinimalTemplate
      break
    case "professional":
      const { ProfessionalTemplate } = await import("@/components/templates/professional-template")
      TemplateComponent = ProfessionalTemplate
      break
    case "creative":
      const { CreativeTemplate } = await import("@/components/templates/creative-template")
      TemplateComponent = CreativeTemplate
      break
    default:
      const { MinimalTemplate: DefaultTemplate } = await import("@/components/templates/minimal-template")
      TemplateComponent = DefaultTemplate
  }

  // Create a temporary React root and render the template
  const root = document.createElement("div")
  root.style.width = "800px"
  root.style.backgroundColor = "white"
  container.appendChild(root)

  // Use React DOM to render the template
  const { createRoot } = await import("react-dom/client")
  const reactRoot = createRoot(root)
  reactRoot.render(<TemplateComponent data={data} />)

  // Wait for the component to render
  await new Promise((resolve) => setTimeout(resolve, 100))

  try {
    // Convert the rendered template to canvas
    const canvas = await html2canvas(root, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
      backgroundColor: "#ffffff",
    })

    // Create PDF
    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width / 2, canvas.height / 2],
    })

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2)

    // Generate filename
    const fileName = `${data.personalInfo.name.replace(/\s+/g, "_")}_Resume_${template}.pdf`

    // Download the PDF
    pdf.save(fileName)
  } catch (error) {
    console.error("Error generating PDF:", error)
    alert("There was an error generating your PDF. Please try again.")
  } finally {
    // Clean up
    reactRoot.unmount()
    document.body.removeChild(container)
  }
}
