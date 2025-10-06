import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import RevealOnView from "@/components/reveal-on-view"

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Enhanced Insider Threat Detection",
      description:
        "Advanced machine learning system for detecting insider threats using behavioral biometrics and anomaly detection patterns.",
      image: "/cybersecurity-ai-threat-detection.jpg",
      tags: ["Python", "Machine Learning", "Behavioral Analysis", "Security"],
      github: "#",
      demo: "#",
    },
    {
      title: "AI Image Caption Generation",
      description:
        "Accessibility-focused AI application that generates descriptive captions for images to assist visually impaired users.",
      image: "/ai-image-caption-accessibility.jpg",
      tags: ["AI/ML", "Computer Vision", "Accessibility", "Python"],
      github: "#",
      demo: "#",
    },
    {
      title: "Productivity Tracking Pipeline",
      description:
        "Full-stack MERN application with real-time dashboard for tracking and analyzing team productivity metrics.",
      image: "/productivity-dashboard-analytics.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express", "Real-time"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Showcasing my work in cybersecurity, AI, and full-stack development
          </p>
        </RevealOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <RevealOnView key={idx} delay={idx * 0.15}>
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={project.demo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  )
}
