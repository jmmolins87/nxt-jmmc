"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

// Import i18n
import "@/lib/i18n"

import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { StructuredData } from "@/components/seo/StructuredData"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"


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
      tags: ["Angular19", "Sass", "Node.js", "Netlify"],
      image: "/projects/flordloto.png",
      demo: "https://flordlotosegovia.com/",
      code: "https://github.com/jmmolins87/ng-flor-loto"
    },
    {
      id: 2,
      title: t("projects.dashboard.title"),
      description: t("projects.dashboard.description"),
      tags: ["React", "D3.js", "TypeScript", "Firebase"],
      image: "/vercel.svg?height=300&width=500&text=Dashboard",
      demo: "",
      code: ""
    },
    {
      id: 3,
      title: t("projects.fitness.title"),
      description: t("projects.fitness.description"),
      tags: ["React Native", "Redux", "Node.js", "MongoDB"],
      image: "/vercel.svg?height=300&width=500&text=Fitness+App",
      demo: "",
      code: ""
    },
    {
      id: 4,
      title: t("projects.education.title"),
      description: t("projects.education.description"),
      tags: ["Vue.js", "Express", "PostgreSQL", "AWS"],
      image: "/vercel.svg?height=300&width=500&text=Education",
      demo: "",
      code: ""
    },
    {
      id: 5,
      title: t("projects.social.title"),
      description: t("projects.social.description"),
      tags: ["React", "Socket.io", "GraphQL", "MongoDB"],
      image: "/vercel.svg?height=300&width=500&text=Social+Network",
      demo: "",
      code: ""
    },
    {
      id: 6,
      title: t("projects.weather.title"),
      description: t("projects.weather.description"),
      tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
      image: "/vercel.svg?height=300&width=500&text=Weather+App",
      demo: "",
      code: ""
    },
  ]

  // Skills data
  const skills = {
    frontend: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "Angular", level: 85 },
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

  // Timeline data
  const jobs = [
    {
      date: "2018 - 2019",
      title: t("about.job1.title"),
      description: t("about.job1.description"),
    },
    {
      date: "2019 - 2020",
      title: t("about.job2.title"),
      description: t("about.job2.description"),
    },
    {
      date: "2020 - 2021",
      title: t("about.job3.title"),
      description: t("about.job3.description"),
    },
    {
      date: "2021 - 2023",
      title: t("about.job4.title"),
      description: t("about.job4.description"),
    },
    {
      date: `2023 - ${t("about.job.actuality")}`,
      title: t("about.job5.title"),
      description: t("about.job5.description"),
    }
  ];

  return (
    <div className="min-h-screen ">
      <StructuredData
        name="Juanma MC"
        jobTitle="Web Developer & Designer"
        description="Professional web developer and designer specializing in creating attractive and functional digital experiences."
        image="https://yourwebsite.com/profile-image.jpg"
        sameAs={[
          "https://github.com/yourusername",
          "https://linkedin.com/in/yourusername",
          "https://twitter.com/yourusername",
        ]}
        url="https://yourwebsite.com"
      />

      <Header activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection scrollToSection={scrollToSection} jobs={jobs} />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
