"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hi, I'm <span className="text-primary">Mayank Singh Tomar</span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">Full Stack Developer & AI Enthusiast</p>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Computer Science student passionate about building innovative web applications, AI solutions, and mobile
              apps. Experienced in ETL pipelines, NLP, and full-stack development.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600 flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild className="gap-2">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2 bg-transparent">
              <a href="#contact">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up animation-delay-800 flex items-center justify-center gap-6">
            <a
              href="https://github.com/mayanksingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/mayanksingh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:su-23020@sitare.org" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
