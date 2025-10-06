"use client"

import { Badge } from "@/components/ui/badge"
import RevealOnView from "@/components/reveal-on-view"
import { Shield, Code, Terminal } from "lucide-react"
import { useEffect, useRef, useState } from "react"

// Custom SkillBar component with animation
function SkillBar({ name, level, delay = 0 }: { name: string; level: number; delay?: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation after a staggered delay
            setTimeout(() => {
              setAnimatedWidth(level)
            }, 300 + delay * 150)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (barRef.current) {
      observer.observe(barRef.current)
    }

    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={barRef}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
        <div
          className="h-full rounded-full relative overflow-hidden bg-primary"
          style={{ 
            width: `${animatedWidth}%`,
            transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)"
          }}
        >
          {/* Shimmer effect */}
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
            style={{
              animation: animatedWidth > 0 ? "shimmer 2s infinite" : "none"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: Shield,
      title: "Cybersecurity",
      skills: [
        { name: "SIEM Management", level: 88 },
        { name: "Threat Detection", level: 90 },
        { name: "Penetration Testing", level: 85 },
        { name: "Network Security", level: 86 },
      ],
      color: "text-primary",
    },
    {
      icon: Code,
      title: "Programming",
      skills: [
        { name: "Python", level: 82 },
        { name: "JavaScript", level: 80 },
        { name: "TypeScript", level: 75 },
        { name: "React", level: 78 },
      ],
      color: "text-secondary",
    },
    {
      icon: Terminal,
      title: "Security Tools",
      skills: [
        { name: "Splunk", level: 88 },
        { name: "Wireshark", level: 85 },
        { name: "Metasploit", level: 80 },
        { name: "Burp Suite", level: 82 },
      ],
      color: "text-accent",
    },
  ]

  const certifications = [
    "CompTIA A+",
    "CompTIA Security+",
    "SIEM Analysis",
    "Vulnerability Assessment",
    "Incident Response",
    "Threat Intelligence",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Technical skills and certifications in cybersecurity and software development
          </p>
        </RevealOnView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, idx) => (
            <RevealOnView key={idx} delay={idx * 0.15}>
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <category.icon className={`w-10 h-10 mb-4 ${category.color}`} />
                <h3 className="text-xl font-bold mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <SkillBar 
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={skillIdx}
                    />
                  ))}
                </div>
              </div>
            </RevealOnView>
          ))}
        </div>

        <RevealOnView>
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications & <span className="text-primary">Specializations</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="text-sm px-4 py-2 border-primary/50 text-primary hover:bg-primary/10 transition-colors"
                >
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </RevealOnView>
      </div>
    </section>
  )
}

