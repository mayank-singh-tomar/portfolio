"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Mayank_Singh_Tomar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold">
            <span className="text-primary">{"<"}</span>
            MST
            <span className="text-primary">{"/>"}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
            <ThemeToggle />
            <Button onClick={handleDownloadResume} size="sm" className="gap-2">
              <Download className="w-4 h-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 animate-fade-in">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center justify-between">
              <span className="text-sm">Theme</span>
              <ThemeToggle />
            </div>
            <Button onClick={handleDownloadResume} size="sm" className="gap-2 w-full">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
