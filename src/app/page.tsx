"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

// Import i18n
import "@/lib/i18n"

import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
// import { HeroSection } from "@/components/sections/hero-section"
// import { AboutSection } from "@/components/sections/about-section"
// import { ProjectsSection } from "@/components/sections/projects-section"
// import { SkillsSection } from "@/components/sections/skills-section"
// import { ContactSection } from "@/components/sections/contact-section"
// import { StructuredData } from "@/components/seo/structured-data"

export default function Portfolio() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("home")

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Sample project data
  const projects = [
    {
      id: 1,
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      tags: ["Next.js", "Tailwind CSS", "Stripe", "Supabase"],
      image: "/placeholder.svg?height=300&width=500&text=E-commerce",
    },
    {
      id: 2,
      title: t("projects.dashboard.title"),
      description: t("projects.dashboard.description"),
      tags: ["React", "D3.js", "TypeScript", "Firebase"],
      image: "/placeholder.svg?height=300&width=500&text=Dashboard",
    },
    {
      id: 3,
      title: t("projects.fitness.title"),
      description: t("projects.fitness.description"),
      tags: ["React Native", "Redux", "Node.js", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500&text=Fitness+App",
    },
    {
      id: 4,
      title: t("projects.education.title"),
      description: t("projects.education.description"),
      tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      image: "/placeholder.svg?height=300&width=500&text=Education",
    },
    {
      id: 5,
      title: t("projects.social.title"),
      description: t("projects.social.description"),
      tags: ["React", "Socket.io", "GraphQL", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500&text=Social+Network",
    },
    {
      id: 6,
      title: t("projects.weather.title"),
      description: t("projects.weather.description"),
      tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      image: "/placeholder.svg?height=300&width=500&text=Weather+App",
    },
  ]

  // Skills data
  const skills = {
    frontend: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 75 },
      { name: "Express", level: 80 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "GraphQL", level: 60 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 90 },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      {/* <StructuredData
        name="Your Name"
        jobTitle="Web Developer & Designer"
        description="Professional web developer and designer specializing in creating attractive and functional digital experiences."
        image="https://yourwebsite.com/profile-image.jpg"
        sameAs={[
          "https://github.com/yourusername",
          "https://linkedin.com/in/yourusername",
          "https://twitter.com/yourusername",
        ]}
        url="https://yourwebsite.com"
      /> */}

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* <main className="pt-16">
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection scrollToSection={scrollToSection} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main> */}

      <Footer />
    </div>
  )
}
