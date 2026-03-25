



"use client"


import { useTranslation } from "react-i18next"
import { ArrowRight, BriefcaseBusiness, Layers3, Sparkles } from "lucide-react"

import "@/lib/i18n.client";
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/custom/SectionHeading"
import VerticalTimeline from "@/components/custom/VerticalTimeline"

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
    const latestRole = jobs[jobs.length - 1]
    const stats = [
        { value: "13+", label: t("about.stats.years"), icon: Sparkles },
        { value: `${jobs.length}`, label: t("about.stats.roles"), icon: BriefcaseBusiness },
        { value: "Fullstack + AI", label: t("about.stats.focus"), icon: Layers3 },
    ]

    return (
        <section id="about" className="section-shell">
            <div className="container mx-auto px-4 md:px-6">
                <div className="section-intro">
                    <span className="section-kicker">Profile</span>
                </div>
                <SectionHeading title={t("about.title")} />
                <div className="mt-10 grid gap-6 md:mt-14 xl:grid-cols-[0.95fr_1.05fr]">
                    <div className="panel-surface p-5 sm:p-7 lg:p-8">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="hero-signal">{t("about.snapshot")}</span>
                            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                                {latestRole.date}
                            </span>
                        </div>

                        <div className="mt-6 space-y-4">
                            <h3 className="max-w-xl text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                                {t("about.mobileHeading")}
                            </h3>
                            <p className="text-base leading-7 text-foreground/90 sm:text-lg sm:leading-8">
                                {t("about.description1")}
                            </p>
                            <p className="leading-7 text-muted-foreground">
                                {t("about.description2")}
                            </p>
                            <p className="leading-7 text-muted-foreground">
                                {t("about.description3")}
                            </p>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-3">
                            {stats.map(({ value, label, icon: Icon }) => (
                                <div
                                    key={label}
                                    className="rounded-[22px] border border-border/60 bg-background/65 p-4 backdrop-blur-xl"
                                >
                                    <Icon className="h-4 w-4 text-primary" />
                                    <div className="mt-3 text-2xl font-bold tracking-[-0.04em]">{value}</div>
                                    <div className="mt-1 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                                        {label}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button
                            onClick={() => scrollToSection("contact")}
                            className="mt-6 w-full sm:w-auto"
                        >
                            {t("about.contactMe")}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    <div className="panel-surface p-5 sm:p-7 lg:p-8">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                                    {t("about.timelineEyebrow")}
                                </span>
                                <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                                    {t("about.timelineTitle")}
                                </h3>
                                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                                    {t("about.timelineDescription")}
                                </p>
                            </div>
                            <div className="rounded-full border border-border/60 bg-background/65 px-4 py-2 text-xs uppercase tracking-[0.24em] text-muted-foreground backdrop-blur-xl">
                                {latestRole.title}
                            </div>
                        </div>

                        <div className="mt-6 rounded-[26px] border border-border/60 bg-background/45 pl-4 pr-2 sm:pl-6 sm:pr-3">
                            <VerticalTimeline items={jobs} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
