



"use client"


import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/custom/SectionHeading"
import VerticalTimeline from "@/components/custom/VerticalTimeline"
import { Separator } from "@/components/ui/separator"

interface AboutSectionProps {
    scrollToSection: (sectionId: string) => void
    jobs: JobsProps[]
}

type JobsProps = {
    date: string
    title: string
    description: string
}


export function AboutSection({ scrollToSection, jobs }: AboutSectionProps) {

    const { t } = useTranslation()

    return (
        <section id="about" className="py-20 bg-muted/50 min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title={t("about.title")} />
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <VerticalTimeline items={jobs} />
                    </div>
                    <Separator className="block md:hidden" />
                    <div className="space-y-4">
                        <p className="text-lg">{t("about.description1")}</p>
                        <p>{t("about.description2")}</p>
                        <p>{t("about.description3")}</p>
                    </div>
                </div>
            </div>
            <Button onClick={() => scrollToSection("contact")} className="mt-10">{t("about.contactMe")}</Button>
        </section>
    )
}
