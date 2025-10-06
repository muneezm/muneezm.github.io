import Link from "next/link"
import { Mail, Github, Linkedin, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import RevealOnView from "@/components/reveal-on-view"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ContactSection from "@/components/contact-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(to right, rgb(245 158 11 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(245 158 11 / 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-[10%] w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div
            className="absolute top-40 right-[15%] w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute bottom-32 left-[20%] w-36 h-36 bg-accent/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <RevealOnView intensity="hero">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
          </RevealOnView>

          <RevealOnView delay={0.2}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight mb-6">
              <span className="gradient-text">Muneez Moidu</span>
            </h1>
          </RevealOnView>

          <RevealOnView delay={0.4}>
            <p className="text-2xl md:text-3xl font-light text-foreground/80 mb-6">
              Cybersecurity Analyst & SIEM Expert
            </p>
          </RevealOnView>

          <RevealOnView delay={0.6}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Protecting digital assets through advanced threat detection and SIEM management at{" "}
              <span className="text-primary font-medium">The Fifth Element</span>, Dubai
            </p>
          </RevealOnView>

          <RevealOnView delay={0.8}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                <Link href="#contact">
                  Let's Connect
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 rounded-full px-8 bg-transparent transition-all"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </RevealOnView>

          {/* Stats with elegant design */}
          <RevealOnView delay={1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
              {[
                { value: "4+", label: "Years Experience" },
                { value: "15+", label: "Projects Completed" },
                { value: "2", label: "Certifications" },
                { value: "100+", label: "Threats Mitigated" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </RevealOnView>

          {/* Social links */}
          <RevealOnView delay={1.2}>
            <div className="flex items-center justify-center gap-6 mt-16">
              <Link
                href="https://github.com/muneezm"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/muneez-moidu-62426b16b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:muneezmoidu@gmail.com"
                className="w-12 h-12 rounded-full border border-border hover:border-primary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </RevealOnView>
        </div>

        {/* Elegant scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />

      <footer className="border-t border-border/50 py-12 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-serif font-bold gradient-text mb-2">Muneez Moidu</h3>
              <p className="text-sm text-muted-foreground">Cybersecurity Analyst & SIEM Expert</p>
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/muneezm" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/muneez-moidu-62426b16b/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:muneezmoidu@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="text-center text-sm text-muted-foreground border-t border-border/50 pt-8">
            <p>© 2025 Muneez Moidu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
