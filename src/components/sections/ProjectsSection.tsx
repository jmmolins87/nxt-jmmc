


"use client"

import { useTranslation } from "react-i18next"

import "@/lib/i18n.client"
import { ProjectCard } from "@/components/custom/ProjectCard"
import { SectionHeading } from "@/components/custom/SectionHeading"

type Project = {
    id: number
    title: string
    subtitle: string
    description: string
    tags: string[]
    image: string
    demo: string
    code: string
}
  
interface ProjectsSectionProps {
    projects: Project[]
}


export function ProjectsSection({ projects }: ProjectsSectionProps) {
    
    const { t } = useTranslation()

    return (
        <section id="projects" className="section-shell flex min-h-screen items-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="section-intro">
                    <span className="section-kicker">Selected Work</span>
                </div>
                <SectionHeading title={t("projects.title")} />
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            imageUrl={project.image}
                            tags={project.tags}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
                <div className="panel-surface mt-10 p-6">
                    <p className="text-sm text-muted-foreground">{t("projects.moreInfo1")}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{t("projects.moreInfo2")}</p>
                </div>
            </div>
        </section>
    )
}
