"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Profile Image */}
          <div className="animate-fade-in-up mb-6 flex justify-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl">
              <Image
                src="/profile.png"
                alt="Mayank Singh Tomar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Hi, I'm <span className="text-primary">Mayank Singh Tomar</span>
            </h1>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Full Stack Developer & AI Enthusiast
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-600">
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Computer Science student passionate about building innovative web applications,
              AI solutions, and mobile apps. Experienced in ETL pipelines, NLP, and full-stack development.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-800 flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="animate-fade-in-up animation-delay-1000 flex justify-center gap-6">
            <a href="https://github.com/mayank-singh-tomar" target="_blank" className="text-muted-foreground hover:text-primary">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/mayanksingh921" target="_blank" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mayankksinghtomar@gmail.com" className="text-muted-foreground hover:text-primary">
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
