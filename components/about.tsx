"use client"

import { Card } from "@/components/ui/card"
import { Award, Code, Zap } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "150+ ETL Pipelines",
      description: "Built and debugged complex data integration systems",
    },
    {
      icon: Zap,
      title: "Full Stack",
      description: "Proficient in Python, React, Flutter, and modern web technologies",
    },
    {
      icon: Award,
      title: "100% Scholarship",
      description: "Merit-based full scholarship for B.Tech CS",
    },
  ]

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">About Me</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto text-pretty">
              I'm a Computer Science student at Sitare University with hands-on experience in software development, data
              engineering, and AI/ML applications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 animate-fade-in-up animation-delay-600">
            <p className="text-muted-foreground leading-relaxed">
              I specialize in building scalable web applications and data processing systems. My recent internships at{" "}
              <span className="text-foreground font-semibold">Trademo</span> and{" "}
              <span className="text-foreground font-semibold">Zeni</span> have equipped me with practical experience in
              ETL pipeline development, NLP automation, and backend data processing. I'm passionate about leveraging
              technology to solve real-world problems and continuously learning new frameworks and tools.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
