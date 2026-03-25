




"use client"

import { useTranslation } from "react-i18next"

import "@/lib/i18n.client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CircularSkillCard } from "@/components/custom/CircularSkillsCard"
import { SectionHeading } from "@/components/custom/SectionHeading"

type Skill = { name: string; level: number };
type Skills = {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
};

interface SkillsSectionProps {
  skills: Skills;
}


export function SkillsSection({ skills }: SkillsSectionProps) {
    
    const { t } = useTranslation()

    return (
        <section id="skills" className="section-shell flex min-h-screen items-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="section-intro">
                    <span className="section-kicker">Capability Map</span>
                </div>
                <SectionHeading title={t("skills.title")} />

                <Tabs defaultValue="frontend" className="mt-10 w-full sm:mt-14">
                    <TabsList className="mb-6 grid w-full grid-cols-3 sm:mb-8">
                        <TabsTrigger value="frontend">{t("skills.frontend")}</TabsTrigger>
                        <TabsTrigger value="backend">{t("skills.backend")}</TabsTrigger>
                        <TabsTrigger value="tools">{t("skills.tools")}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="frontend" className="space-y-4">
                        <div className="panel-surface grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4 md:grid-cols-3 md:p-6 lg:grid-cols-5">
                            {skills.frontend.map((skill, index) => (
                                <CircularSkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 150} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="backend" className="space-y-4">
                        <div className="panel-surface grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4 md:grid-cols-3 md:p-6 lg:grid-cols-5">
                            {skills.backend.map((skill, index) => (
                                <CircularSkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 150} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tools" className="space-y-4">
                        <div className="panel-surface grid grid-cols-2 gap-3 p-3 sm:gap-4 sm:p-4 md:grid-cols-3 md:p-6 lg:grid-cols-5">
                            {skills.tools.map((skill, index) => (
                                <CircularSkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 150} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
