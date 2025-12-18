"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"],
    },
    {
      category: "Web Technologies",
      skills: ["HTML", "CSS", "React.js", "Flask", "Flutter", "FastAPI"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      category: "Tools & Technologies",
      skills: ["Git", "GitHub", "Firebase", "Jupyter", "Vercel", "Linux", "Docker"],
    },
    {
      category: "Data & ML",
      skills: ["Pandas", "NumPy", "BERT", "Llama3", "NLP", "Selenium", "Apache Airflow"],
    },
    {
      category: "Cloud & APIs",
      skills: ["GCP", "Google Fit API", "Maps API", "Elasticsearch", "Kibana"],
    },
  ]

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technical Skills</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
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
