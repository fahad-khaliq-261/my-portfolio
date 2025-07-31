"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Code2,
  Palette,
  Smartphone,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  Download,
  ArrowRight,
  ChevronDown,
} from "lucide-react"

export default function FreelancerProfile() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["hero", "services", "portfolio", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Full-Stack Development",
      description:
        "Building scalable web applications with modern technologies like React, Next.js, Node.js, and cloud platforms.",
      technologies: ["React", "express", "mongo db", "Node.js", "pyhton-django"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Developing cross-platform mobile applications with React Native and Flutter for iOS and Android.",
      technologies: [ "Flutter", "api's", "Firebase"],
    },
  ]

  const projects = [
    {
      title: "Picabooo",
      category: "web application",
      image: "/placeholder.svg?height=400&width=600",
      description: "ecomerce book store with the complete backend and frontend with node apis.",
      technologies: ["React", "Express", "Mongodb", "Node.js"],
      link: "#",
    },
    {
      title: "Vantedge.Ai",
      category: "Mobile Application",
      image: "/placeholder.svg?height=400&width=600",
      description: "The sales analtics app fro the stores where they can see their weekly and monthly and daily sales ",
      technologies: ["FLutter", "rest api's", "setstate"],
      link: "#",
    },
    {
      title: "Cv Builder",
      category: "web application",
      image: "/placeholder.svg?height=400&width=600",
      description: "to create the cv for the user with the awesome templates",
      technologies: ["python", "django", "react"],
      link: "#",
    },
    {
      title: "Testify",
      category: "Mobile app",
      image: "/placeholder.svg?height=400&width=600",
      description: "the inter net sped tester where user can see internet speed and jitter  ",
      technologies: ["FLutter", "rest api's",],
      link: "#",
    },
  
  ]

  const timeline = [
    {
      year: "2024",
      title: "AI Integration Specialist",
      description:
        "Leading the integration of AI technologies in web applications, focusing on machine learning and natural language processing.",
    },
    {
      year: "2023",
      title: "Senior Full-Stack Developer",
      description:
        "Expanded expertise in cloud architecture and microservices, delivering scalable solutions for enterprise clients.",
    },
    {
      year: "2022",
      title: "Freelance Journey Begins",
      description:
        "Started independent consulting, specializing in modern web technologies and user experience design.",
    },
    {
      year: "2021",
      title: "Tech Lead at StartupX",
      description:
        "Led a team of developers in building innovative SaaS products, focusing on performance and scalability.",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Alex.dev
            </div>
            <div className="hidden md:flex space-x-8">
              {["hero", "services", "portfolio", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? "text-purple-400" : "text-white/70"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 bg-transparent"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-6">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-spin-slow opacity-75" />
              <div className="absolute inset-2 bg-black rounded-full" />
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Alex Developer"
                width={120}
                height={120}
                className="absolute inset-2 rounded-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              Future-Ready
            </span>
            <br />
            <span className="text-white">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed">
            Crafting next-generation digital experiences with cutting-edge technologies.
            <br />
            Specializing in AI integration, blockchain, and immersive web applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              onClick={() => scrollToSection("portfolio")}
            >
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Transforming ideas into reality with cutting-edge technology and innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                  <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Showcasing innovative solutions that push the boundaries of technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-purple-500/80 text-white">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-white/70 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-500/30 text-blue-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              A timeline of innovation, growth, and technological evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-purple-500 to-blue-500" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card className="bg-white/5 backdrop-blur-md border-white/10">
                    <CardContent className="p-6">
                      <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/70 leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full border-4 border-black" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Let's Build Something Amazing
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your next project
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-md border-white/10">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 mb-2">Name</label>
                    <Input
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 mb-2">Email</label>
                    <Input
                      type="email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Project Type</label>
                  <Input
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    placeholder="Web App, Mobile App, AI Integration, etc."
                  />
                </div>
                <div>
                  <label className="block text-white/70 mb-2">Message</label>
                  <Textarea
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-32"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4 md:mb-0">
              Alex.dev
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-teal-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-purple-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-white/50 text-sm">© 2024 Alex.dev. Crafted with passion.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
