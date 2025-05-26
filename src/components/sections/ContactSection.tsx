





"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Mail, Linkedin, Github } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/custom/SectionHeading"
import { ContactForm } from "@/components/forms/ContactForm"
import { Button } from "../ui/button"


export function ContactSection() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="py-20 min-h-screen flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6 mx-auto xl:w-2/3">
                <SectionHeading title={t("contact.title")} />
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="flex flex-col justify-around h-full space-y-4">
                        <div className="flex flex-col justify-between gap-8">
                            <h3 className="text-2xl font-semibold">{t("contact.subtitle")}</h3>
                            <p>{t("contact.description")}</p>
                        </div>
                        <div className=" flex justify-start items-center gap-4">
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
                    <Card>
                        <CardContent className="shadow-lg shadow-gray-300 rounded-xl dark:shadow-zinc-950 p-6">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
