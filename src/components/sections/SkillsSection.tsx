




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
        <section id="skills" className="py-20 bg-muted/50 min-h-screen flex flex-col justify-center items-baseline">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title={t("skills.title")} />

                <Tabs defaultValue="frontend" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="frontend">{t("skills.frontend")}</TabsTrigger>
                        <TabsTrigger value="backend">{t("skills.backend")}</TabsTrigger>
                        <TabsTrigger value="tools">{t("skills.tools")}</TabsTrigger>
                    </TabsList>

                    <TabsContent value="frontend" className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {skills.frontend.map((skill, index) => (
                                <CircularSkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 150} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="backend" className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            {skills.backend.map((skill, index) => (
                                <CircularSkillCard key={skill.name} name={skill.name} level={skill.level} delay={index * 150} />
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="tools" className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
