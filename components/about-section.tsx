import { MapPin, GraduationCap, Award, Languages, Heart, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"

export default function AboutSection() {
  const aboutCards = [
    {
      icon: Briefcase,
      title: "Current Role",
      content: "Cybersecurity Analyst",
      subtitle: "The Fifth Element, Dubai",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: GraduationCap,
      title: "Education",
      content: "BSc Cybersecurity",
      subtitle: "University of West London",
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Sharjah, UAE",
      subtitle: "Available for remote work",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
    },
    {
      icon: Award,
      title: "Certifications",
      badges: ["CompTIA A+", "CompTIA Security+"],
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5",
    },
    {
      icon: Languages,
      title: "Languages",
      badges: ["English", "Hindi", "Arabic"],
      color: "text-secondary",
      gradient: "from-secondary/20 to-secondary/5",
    },
    {
      icon: Heart,
      title: "Interests",
      content: "Fitness Enthusiast",
      subtitle: "Health & Wellness Advocate",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5",
    },
  ]

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-transparent to-card/30">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Currently working at The Fifth Element, specializing in SIEM monitoring, threat detection, and security
              breach analysis
            </p>
          </div>
        </RevealOnView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aboutCards.map((card, idx) => (
            <RevealOnView key={idx} delay={idx * 0.1}>
              <div
                className={`relative bg-gradient-to-br ${card.gradient} border border-border/50 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-primary/10`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <card.icon className={`w-10 h-10 mb-6 ${card.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                {card.content && <p className="text-foreground font-medium mb-1">{card.content}</p>}
                {card.subtitle && <p className="text-sm text-muted-foreground">{card.subtitle}</p>}
                {card.badges && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {card.badges.map((badge) => (
                      <Badge key={badge} variant="secondary" className="text-xs px-3 py-1 bg-background/50">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </RevealOnView>
          ))}
        </div>
      </div>
    </section>
  )
}
