"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      role: "SDE Intern",
      company: "Trademo",
      location: "Gurgaon",
      duration: "June 2025 - Aug 2025",
      highlights: [
        "Built and debugged 150+ ETL pipelines for web-to-database integration",
        "Automated pipelines with Apache Airflow and integrated Kibana for real-time monitoring",
        "Applied NER (BERT) and automated text processing using Llama3 (Ollama)",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Selenium", "Airflow", "Elasticsearch", "Jupyter"],
    },
    {
      role: "Engineering Intern",
      company: "Zeni",
      location: "Pune",
      duration: "May 2024 - Aug 2024",
      highlights: [
        "Processed and validated data from QuickBooks and Dashboard for 20+ client companies",
        "Structured and enriched business data to populate user-facing financial dashboards",
        "Built training datasets from QuickBooks and contributed to AI-driven automation models",
      ],
      technologies: ["Python", "GitHub", "QuickBooks", "Data Labeling"],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Work Experience</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              Practical experience building production-grade systems
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up border-l-4 border-l-primary"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                    </div>
                    <p className="text-lg text-primary font-semibold">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIndex) => (
                    <Badge key={tIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
