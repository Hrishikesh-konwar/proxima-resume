import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TemplateShowcase } from "@/components/template-showcase"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">Resume</span>Builder
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="/builder" className="text-sm font-medium hover:underline underline-offset-4">
              Create Resume
            </Link>
            <Link href="#templates" className="text-sm font-medium hover:underline underline-offset-4">
              Templates
            </Link>
          </nav>
          <Button asChild>
            <Link href="/builder">Get Started</Link>
          </Button>
        </div>
      </header> */}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Create Professional Resumes in Minutes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Choose from multiple templates, customize your content, and download your perfect resume. Stand out
                    from the crowd and land your dream job.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/builder">
                      Create Your Resume <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  {/* <Button asChild variant="outline" size="lg">
                    <Link href="#templates">View Templates</Link>
                  </Button> */}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/resumePic.jpg?height=550&width=450"
                  alt="Resume Preview"
                  width={450}
                  height={550}
                  className="rounded-lg object-cover border shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <section id="templates" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Template</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Select from our professionally designed templates to create your perfect resume.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <TemplateShowcase />
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Create your professional resume in three simple steps.
                </p>
              </div>
              <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-bold">Choose a Template</h3>
                  <p className="text-muted-foreground text-center">
                    Select from our collection of professionally designed resume templates.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-bold">Fill in Your Details</h3>
                  <p className="text-muted-foreground text-center">
                    Add your personal information, work experience, education, and skills.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-bold">Download Your Resume</h3>
                  <p className="text-muted-foreground text-center">
                    Preview your resume and download it as a PDF to share with employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ResumeBuilder. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
