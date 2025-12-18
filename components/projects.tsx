"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Khelo-ON",
      description:
        "A comprehensive fitness application featuring real-time location tracking, health metrics monitoring, nutrition insights, and Google-authenticated dashboards for personalized fitness journeys.",
      technologies: ["Flutter", "FastAPI", "Firebase", "Google Fit API", "Maps API", "GCP"],
      image: "/fitness-app-mobile-tracking.jpg",
      category: "Mobile App",
    },
    {
      title: "AI Chatbot",
      description:
        "An intelligent NLP-powered AI chatbot designed for students, efficiently handling over 300 queries with advanced vector search capabilities and semantic understanding.",
      technologies: ["SBERT", "Llama", "Flask", "NLP", "Information Retrieval"],
      image: "/ai-chatbot-interface.png",
      category: "AI/ML",
    },
    {
      title: "Food Delivery Predictor",
      description:
        "A machine learning-based system for estimating food delivery times by analyzing traffic conditions, distance, and historical data patterns to provide accurate predictions.",
      technologies: ["Flask", "Pandas", "Matplotlib", "HTML", "CSS", "Machine Learning"],
      image: "/food-delivery-dashboard.jpg",
      category: "Web App",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              A selection of projects showcasing my technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary">{project.category}</Badge>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, tIndex) => (
                      <Badge key={tIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="gap-2 flex-1 bg-transparent">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button size="sm" className="gap-2 flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
