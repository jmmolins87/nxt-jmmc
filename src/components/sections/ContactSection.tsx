





"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Mail, Linkedin, Github } from "lucide-react"

import "@/lib/i18n.client"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/custom/SectionHeading"
import { ContactForm } from "@/components/forms/ContactForm"
import { Button } from "../ui/button"


export function ContactSection() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="section-shell flex min-h-screen items-center">
            <div className="container px-4 md:px-6 mx-auto xl:w-2/3">
                <div className="section-intro">
                    <span className="section-kicker">Contact</span>
                </div>
                <SectionHeading title={t("contact.title")} />
                <div className="panel-surface mt-14 grid items-start gap-8 p-6 md:grid-cols-2 md:p-10">
                    <div className="flex h-full flex-col justify-around space-y-6">
                        <div className="flex flex-col justify-between gap-8">
                            <h3 className="text-2xl font-semibold">{t("contact.subtitle")}</h3>
                            <p className="leading-7 text-muted-foreground">{t("contact.description")}</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
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
                    <Card className="border-primary/15 bg-background/45">
                        <CardContent className="p-6">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
