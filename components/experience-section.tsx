import { Calendar } from "lucide-react"
import RevealOnView from "@/components/reveal-on-view"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Cybersecurity Analyst",
      company: "The Fifth Element",
      period: "Oct 2024 - Present",
      location: "Dubai, UAE",
      responsibilities: [
        "SIEM monitoring & threat detection",
        "Security breach analysis & root cause investigation",
        "Developed preventive security measures",
      ],
      color: "primary",
    },
    {
      title: "IT Security Intern",
      company: "Cyberguard",
      period: "Apr 2024 - Sep 2024",
      location: "Dubai, UAE",
      responsibilities: [
        "Vulnerability assessments & penetration testing",
        "SIEM log analysis support",
        "Security incident investigations",
      ],
      color: "secondary",
    },
    {
      title: "Junior IT Support Specialist",
      company: "Techflow Mobile Services",
      period: "Jun 2023 - Mar 2024",
      location: "Dubai, UAE",
      responsibilities: ["Mobile device security management", "Security patch management", "System log monitoring"],
      color: "accent",
    },
    {
      title: "Cybersecurity Research Assistant",
      company: "University of West London",
      period: "Jan 2023 - May 2023",
      location: "London, UK",
      responsibilities: [
        "Behavioral biometrics research",
        "Insider threat detection models",
        "Python security automation scripts",
      ],
      color: "primary",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            My professional journey in cybersecurity and IT security
          </p>
        </RevealOnView>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <RevealOnView key={idx} delay={idx * 0.15}>
              <div className="relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 group">
                {/* Timeline dot */}
                <div
                  className={cn(
                    "absolute -left-3 top-8 w-6 h-6 rounded-full border-4 border-background",
                    exp.color === "primary" && "bg-primary",
                    exp.color === "secondary" && "bg-secondary",
                    exp.color === "accent" && "bg-accent",
                  )}
                />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <Badge variant="outline" className="self-start border-primary/50 text-primary">
                    <Calendar className="w-3 h-3 mr-1" />
                    {exp.period}
                  </Badge>
                </div>

                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">▹</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
