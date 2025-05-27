


"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { 
    Github, 
    Linkedin, 
    Mail 
} from "lucide-react"

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
    scrollToSection: (sectionId: string) => void
}


export function HeroSection({ scrollToSection }: HeroSectionProps) {
    const { t } = useTranslation()

    return (
        <section id="home" className="py-20 md:py-32 min-h-screen flex flex-col justify-center items-center">
            <div className="container mx-auto px-4 md:px-6 md:w-2/3 lg:w-4/6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                            {t("hero.greeting")} <span className="text-primary">Juanma</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground">{t("hero.role")}</p>
                        <p className="text-muted-foreground max-w-[600px]">{t("hero.description")}</p>
                        <div className="flex justify-start items-center flex-wrap gap-4">
                            <Button onClick={() => scrollToSection("projects")} className="h-[42px]">{t("hero.viewProjects")}</Button>
                            <Button variant="secondary" onClick={() => scrollToSection("contact")} className="h-[42px]">{t("hero.contact")}</Button>
                        </div>
                        <div className="flex gap-6">
                            <Link 
                                href="https://github.com/jmmolins87" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="GitHub Profile" 
                                title="Github">
                                <Button variant="ghost" size="icon">
                                    <Github className="h-12 w-12" />
                                    <span className="sr-only">GitHub</span>
                                </Button>
                            </Link>
                            <Link 
                                href="https://www.linkedin.com/in/juanma-molins-cortes" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="LinkedIn Profile"
                                title="Linkdn">
                                <Button variant="ghost" size="icon">
                                    <Linkedin className="h-8 w-8" />
                                    <span className="sr-only">LinkedIn</span>
                                </Button>
                            </Link>
                            <Link href="mailto:jmmolins87@gmail.com" aria-label="Email Me">
                                <Button variant="ghost" size="icon">
                                    <Mail className="h-8 w-8" />
                                    <span className="sr-only">Email</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end">
                        <Avatar className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border-4 border-primary/20 bg-background/10 backdrop-blur-sm">
                            <AvatarImage
                                src="/imgs/me.png"
                                alt="Juanma - Web Developer and Designer"
                                title="Juanma - Web Developer and Designer"
                                className="object-cover"
                            />
                            <AvatarFallback className="text-6xl">Juanma MC</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </section>
    )
}
