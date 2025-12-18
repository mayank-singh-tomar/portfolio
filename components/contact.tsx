"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react"

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "su-23020@sitare.org",
      href: "mailto:su-23020@sitare.org",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9584510121",
      href: "tel:+919584510121",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mayanksingh",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/mayanksingh",
    },
  ]

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Mayank_Singh_Tomar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 animate-fade-in-up">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t">
                <p className="text-sm font-semibold mb-4">Connect with me</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="p-8 animate-fade-in-up animation-delay-200 bg-primary text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
              <p className="mb-8 opacity-90 leading-relaxed">
                I'm currently seeking full-time opportunities and freelance projects. Whether you have a question or
                just want to say hi, feel free to reach out!
              </p>

              <div className="space-y-4">
                <Button onClick={handleDownloadResume} size="lg" variant="secondary" className="w-full gap-2">
                  <Download className="w-5 h-5" />
                  Download My Resume
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <a href="mailto:su-23020@sitare.org">
                    <Mail className="w-5 h-5" />
                    Send Me an Email
                  </a>
                </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-sm opacity-75 text-center">Available for opportunities starting May 2026</p>
              </div>
            </Card>
          </div>

          <Card className="p-8 text-center animate-fade-in-up animation-delay-400">
            <p className="text-muted-foreground">
              Built with ❤️ using <span className="text-primary font-semibold">Next.js</span>,{" "}
              <span className="text-primary font-semibold">React</span>, and{" "}
              <span className="text-primary font-semibold">Tailwind CSS</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">© 2025 Mayank Singh Tomar. All rights reserved.</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
