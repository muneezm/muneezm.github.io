"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import RevealOnView from "@/components/reveal-on-view"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Sharjah, UAE",
      color: "text-primary",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 56 211 4282",
      href: "tel:+971562114282",
      color: "text-secondary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "muneezmoidu@gmail.com",
      href: "mailto:muneezmoidu@gmail.com",
      color: "text-accent",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <RevealOnView>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            Have a project in mind or want to discuss cybersecurity? Let's connect!
          </p>
        </RevealOnView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <RevealOnView delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className={cn("p-3 rounded-lg bg-card border border-border", info.color)}>
                        <info.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="font-medium hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-semibold mb-3">Available For</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Cybersecurity Consulting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Security Audits & Assessments
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Full-Stack Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    Technical Collaboration
                  </li>
                </ul>
              </div>
            </div>
          </RevealOnView>

          {/* Contact Form */}
          <RevealOnView delay={0.4}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </RevealOnView>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
