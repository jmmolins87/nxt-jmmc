


"use client"

import { useTranslation } from "react-i18next"

import { ProjectCard } from "@/components/custom/ProjectCard"
import { SectionHeading } from "@/components/custom/SectionHeading"

type Project = {
    id: number
    title: string
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
        <section id="projects" className="py-20 min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title={t("projects.title")} />
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.image}
                            tags={project.tags}
                            demo={project.demo}
                            code={project.code}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
