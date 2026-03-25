


"use client"

import Link from "next/link"
import "@/lib/i18n.client";
import { useTranslation } from "react-i18next"
import { 
    Github, 
    Linkedin, 
    Mail,
    ArrowUpRight
} from "lucide-react"

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { BrandMark } from "@/components/custom/BrandMark"

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void
}


export function HeroSection({ scrollToSection }: HeroSectionProps) {
    const { t } = useTranslation()

    return (
        <section id="home" className="section-shell flex min-h-screen items-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="panel-surface grid items-center gap-10 overflow-hidden px-5 py-8 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-14 lg:px-14">
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3">
                            <BrandMark compact />
                            <span className="hero-signal">Portfolio Experience</span>
                        </div>
                        <h1 className="max-w-3xl text-4xl font-bold tracking-[-0.06em] sm:text-5xl md:text-7xl">
                            {t("hero.greeting")} <span className="text-primary">Juanma</span>
                        </h1>
                        <p className="max-w-2xl text-lg text-primary/90 sm:text-xl md:text-2xl">{t("hero.role")}</p>
                        <p className="max-w-[640px] text-base leading-7 text-muted-foreground md:text-lg">{t("hero.description")}</p>
                        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                            <Button onClick={() => scrollToSection("projects")} className="w-full sm:w-auto">{t("hero.viewProjects")}</Button>
                            <Button variant="outline" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">{t("hero.contact")}</Button>
                        </div>
                        <div className="brand-divider max-w-xl" />
                        <div className="flex flex-wrap gap-3 pt-2">
                            <Link 
                                href="https://github.com/jmmolins87" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub Profile" 
                                title="Github">
                                <Button variant="outline" size="icon" className="rounded-2xl">
                                    <Github className="h-5 w-5" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/juanma-molins-cortes" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn Profile"
                                title="Linkdn">
                                <Button variant="outline" size="icon" className="rounded-2xl">
                                    <Linkedin className="h-5 w-5" />
                                    <span className="sr-only">LinkedIn</span>
                                </Button>
                            </Link>
                            <Link href="mailto:jmmolins87@gmail.com" aria-label="Email Me">
                                <Button variant="outline" size="icon" className="rounded-2xl">
                                    <Mail className="h-5 w-5" />
                                    <span className="sr-only">Email</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex justify-center md:justify-end">
                        <div className="absolute inset-x-10 top-8 h-40 rounded-full bg-primary/15 blur-3xl" />
                        <div className="absolute -left-4 top-8 hidden rounded-full border border-primary/25 bg-background/65 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-xl lg:block">
                            UI / UX / Frontend
                        </div>
                        <div className="absolute -right-4 bottom-10 hidden items-center gap-2 rounded-full border border-primary/25 bg-background/65 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground backdrop-blur-xl lg:flex">
                            Build Ready <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <Avatar className="relative h-[240px] w-[240px] rounded-[32px] border border-primary/25 bg-background/15 p-3 shadow-[0_30px_80px_-35px_rgba(14,165,233,0.65)] backdrop-blur-xl sm:h-[280px] sm:w-[280px] md:h-[400px] md:w-[400px]">
                            <AvatarImage
                                src="/imgs/me.png"
                                alt="Juanma - Web Developer and Designer"
                                title="Juanma - Web Developer and Designer"
                                className="rounded-[24px] object-cover"
                            />
                            <AvatarFallback className="text-6xl text-center">Juanma MC</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </section>
    )
}
