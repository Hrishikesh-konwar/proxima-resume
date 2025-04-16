"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ResumeForm } from "@/components/resume-form"
import { ResumePreview } from "@/components/resume-preview"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Download, Eye } from "lucide-react"
import { generatePDF } from "@/lib/pdf-generator"
import { initialResumeData } from "@/lib/initial-data"
import type { ResumeData } from "@/lib/types"

export default function BuilderPage() {
  const searchParams = useSearchParams()
  const templateParam = searchParams.get("template") || "minimal"

  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData)
  const [activeTemplate, setActiveTemplate] = useState(templateParam)
  const [activeTab, setActiveTab] = useState("edit")

  // Load saved data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      setResumeData(JSON.parse(savedData))
    }
  }, [])

  // Save data to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
  }, [resumeData])

  const handleDataChange = (newData: Partial<ResumeData>) => {
    setResumeData((prev) => ({ ...prev, ...newData }))
  }

  const handleTemplateChange = (template: string) => {
    setActiveTemplate(template)
  }

  const handleDownload = async () => {
    await generatePDF(resumeData, activeTemplate)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <a href="/" className="flex items-center gap-2">
              <span className="text-primary">Resume</span>Builder
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button onClick={handleDownload} className="hidden md:flex">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 py-6 md:px-6 md:py-8">
        <div className="md:hidden mb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="edit">Edit</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <ResumeForm
                data={resumeData}
                onChange={handleDataChange}
                activeTemplate={activeTemplate}
                onTemplateChange={handleTemplateChange}
              />
            </TabsContent>
            <TabsContent value="preview">
              <div className="flex flex-col gap-4">
                <ResumePreview data={resumeData} template={activeTemplate} />
                <Button onClick={handleDownload} className="w-full">
                  <Download className="mr-2 h-4 w-4" /> Download PDF
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm
              data={resumeData}
              onChange={handleDataChange}
              activeTemplate={activeTemplate}
              onTemplateChange={handleTemplateChange}
            />
          </div>
          <div className="sticky top-6 h-fit space-y-6">
            <div className="p-4 border rounded-lg bg-background">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <Eye className="mr-2 h-4 w-4" /> Preview
              </h2>
              <ResumePreview data={resumeData} template={activeTemplate} />
            </div>
            <Button onClick={handleDownload} className="w-full">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
