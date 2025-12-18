"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export function Education() {
  const coursework = [
    "Advanced Data Structures",
    "Object Oriented Programming",
    "Database Management Systems",
    "Web Applications Development",
    "Deep Learning",
    "Machine Learning",
    "Search Engine & IR",
    "Artificial Intelligence",
    "Operating Systems",
  ]

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Education</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">Academic background and achievements</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up border-t-4 border-t-primary">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">B.Tech in Computer Science</h3>
                  <p className="text-primary font-semibold">Sitare University with SRMU</p>
                  <p className="text-muted-foreground text-sm">Lucknow, India</p>
                  <p className="text-muted-foreground text-sm">Expected: May 2026</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">GPA</span>
                  <span className="text-2xl font-bold text-primary">7.53</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "75.3%" }} />
                </div>
              </div>

              <div className="p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">100% B.Tech CS Scholarship</p>
                    <p className="text-sm text-muted-foreground">Sitare Foundation (Oct 2023 - Present)</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up animation-delay-200">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Relevant Coursework</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {course}
                  </Badge>
                ))}
              </div>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Comprehensive computer science curriculum with focus on algorithms, software engineering, and AI/ML
                  applications. Strong foundation in both theoretical concepts and practical implementation.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
