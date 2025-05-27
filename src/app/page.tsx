"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"

// Import i18n
import "@/lib/i18n"

import LoadingPage from "@/app/loading"

import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/layout/Footer"
import { Header } from "@/components/layout/Header"
import { HeroSection } from "@/components/sections/HeroSection"
import { StructuredData } from "@/components/seo/StructuredData"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ButtonToTop } from "@/components/custom/ButtonToTop"


export default function Portfolio() {
  const { t } = useTranslation()
  const [activeSection, setActiveSection] = useState("home")

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

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

  if (loading) return <LoadingPage />

  // Sample project data
  const projects = [
    {
      id: 1,
      title: t("projects.servegraf.title"),
      subtitle: t("projects.servegraf.subtitle"),
      description: t("projects.servegraf.description"),
      tags: ["Wordpress", "PHP", "MySQL"],
      image: "/projects/servegraf.png",
      demo: "",
      code: "https://github.com/jmmolins87/wp-servegraf"
    },
    {
      id: 2,
      title: t("projects.pmbalaguer.title"),
      subtitle: t("projects.pmbalaguer.subtitle"),
      description: t("projects.pmbalaguer.description"),
      tags: ["Wordpress", "PHP", "MySQL"],
      image: "/projects/pm_balaguer.png",
      demo: "",
      code: "https://github.com/jmmolins87/wp-pm_balaguer"
    },
    {
      id: 3,
      title: t("projects.jmmcLegacy.title"),
      subtitle: t("projects.jmmcLegacy.subtitle"),
      description: t("projects.jmmcLegacy.description"),
      tags: ["HTML5", "CSS3",  "jQuery", "PHP", "Bootstrap"],
      image: "/projects/jmmc_legacy.png",
      demo: "https://jmmolins87.github.io/jmmcDesignWeb/",
      code: "https://github.com/jmmolins87/jmmcDesignWeb"
    },
    {
      id: 4,
      title: t("projects.jazztel.title"),
      subtitle: t("projects.jazztel.subtitle"),
      description: t("projects.jazztel.description"),
      tags: ["Angular", "TypeScript",  "Sass", "Karma", "Java", "SpringBoot", "Oracle", "Sonar", "Jenkins"],
      image: "/projects/jazztel.png",
      demo: "https://www.jazztel.com/",
      code: ""
    },
    {
      id: 5,
      title: t("projects.almirall.title"),
      subtitle: t("projects.almirall.subtitle"),
      description: t("projects.almirall.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure"],
      image: "/projects/almirall.png",
      demo: "https://www.almirall.es/",
      code: ""
    },
    {
      id: 6,
      title: t("projects.fcbarcelona.title"),
      subtitle: t("projects.fcbarcelona.subtitle"),
      description: t("projects.fcbarcelona.description"),
      tags: ["ShopiFy", "AWS", "Ubiquo Sports"],
      image: "/projects/fcbarcelona.png",
      demo: "https://store.fcbarcelona.com/es/collections/home-kit?ext=SHO_811&utm_source=Google&utm_medium=CPC&utm_campaign=_PER_BLM_COMPETE_SMART_SHO_Google_IMG_ES_ES&gad_source=1&gad_campaignid=18509275335&gbraid=0AAAAACWZXZ0m3w9LRiv3SahIj3Hy0e1jP&gclid=Cj0KCQjwotDBBhCQARIsAG5pinMNUu_PK0N-7rN5isEr-YGqmw_NN9iY0B7m30JdtKiUftv160D3OhQaAriEEALw_wcB",
      code: ""
    },
    {
      id: 7,
      title: t("projects.mapfre.title"),
      subtitle: t("projects.mapfre.subtitle"),
      description: t("projects.mapfre.description"),
      tags: ["HTML5", "CSS3", "jQuery", "PHP"],
      image: "/projects/mapfre.png",
      demo: "https://www.mapfre.es/",
      code: ""
    },
    {
      id: 8,
      title: t("projects.eleia.title"),
      subtitle: t("projects.eleia.subtitle"),
      description: t("projects.eleia.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure",],
      image: "/projects/eleia.png",
      demo: "https://eleiaenergia.com/",
      code: ""
    },
    {
      id: 9,
      title: t("projects.dimatica.title"),
      subtitle: t("projects.dimatica.subtitle"),
      description: t("projects.dimatica.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure"],
      image: "/projects/dimatica.png",
      demo: "https://www.dimaticasoftware.com/",
      code: ""
    },
    {
      id: 10,
      title: t("projects.sermicro.title"),
      subtitle: t("projects.sermicro.subtitle"),
      description: t("projects.sermicro.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure"],
      image: "/projects/sermicro.png",
      demo: "https://gruposermicro.com/",
      code: ""
    },
    {
      id: 11,
      title: t("projects.api.title"),
      subtitle: t("projects.api.subtitle"),
      description: t("projects.api.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure"],
      image: "/projects/api.png",
      demo: "https://www.apimovilidad.es/",
      code: ""
    }, 
    {
      id: 12,
      title: t("projects.esmuc.title"),
      subtitle: t("projects.esmuc.subtitle"),
      description: t("projects.esmuc.description"),
      tags: ["Wordpress", "PHP", "MySQL", "Azure"],
      image: "/projects/esmuc.png",
      demo: "https://www.esmuc.cat/",
      code: ""
    }, 
    {
      id: 13,
      title: t("projects.bsantander.title"),
      subtitle: t("projects.bsantander.subtitle"),
      description: t("projects.bsantander.description"),
      tags: ["Angular", "Sass", "Storybook", "StencilJs", "PHP", "Jenkins", "Docker", "AWS", "Sonar"],
      image: "/projects/banco_santander.png",
      demo: "https://www.bancosantander.es/particulares",
      code: ""
    }, 
    {
      id: 14,
      title: t("projects.florLoto.title"),
      subtitle: t("projects.florLoto.subtitle"),
      description: t("projects.florLoto.description"),
      tags: ["Angular", "Sass", "Node.js", "Netlify"],
      image: "/projects/flordloto.png",
      demo: "https://flordlotosegovia.com/",
      code: "https://github.com/jmmolins87/ng-flor-loto"
    },
    {
      id: 15,
      title: t("projects.jmmcdev.title"),
      subtitle: t("projects.jmmcdev.subtitle"),
      description: t("projects.jmmcdev.description"),
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      image: "/projects/jmmcDev.png",
      demo: "https://jmmc.vercel.app/",
      code: "https://github.com/jmmolins87/nxt-jmmc"
    },
  ]

  // Skills data
  const skills = {
    frontend: [
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 75 },
      { name: "Angular", level: 85 },
      { name: "Storybook", level: 80 },
      { name: "StencilJs", level: 70 },
      { name: "React", level: 70 },
      { name: "Vue.js", level: 45 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 90 },
    ],
    backend: [
      { name: "Node.js", level: 35 },
      { name: "Express", level: 30 },
      { name: "MongoDB", level: 40 },
      { name: "PostgreSQL", level: 25 },
      { name: "GraphQL", level: 30 },
    ],
    tools: [
      { name: "Git & GitHub", level: 85 },
      { name: "Docker", level: 40 },
      { name: "AWS", level: 35 },
      { name: "Wordpress", level: 55 },
      { name: "Figma", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Adobe Creative", level: 75 },
    ],
  }

  // Timeline data
  const jobs = [
    {
      date: "2012 - 2014",
      title: t("about.freelance.title"),
      description: t("about.freelance.description"),
    },
    {
      date: "2014 - 2018",
      title: t("about.servegraf.title"),
      description: t("about.servegraf.description"),
    },
    {
      date: "2018 - 2019",
      title: t("about.everis.title"),
      description: t("about.everis.description"),
    },
    {
      date: "2019 - 2020",
      title: t("about.nateevo.title"),
      description: t("about.nateevo.description"),
    },
    {
      date: "2020 - 2021",
      title: t("about.dimatica.title"),
      description: t("about.dimatica.description"),
    },
    {
      date: "2021 - 2023",
      title: t("about.ibm.title"),
      description: t("about.ibm.description"),
    },
    {
      date: `2023 - ${t("about.job.actuality")}`,
      title: t("about.accenture.title"),
      description: t("about.accenture.description"),
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

      <ButtonToTop />

      <Footer />
    </div>
  )
}
