





"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Mail, Linkedin, Github } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/custom/SectionHeading"
import { ContactForm } from "@/components/forms/ContactForm"


export function ContactSection() {
    const { t } = useTranslation()

    return (
        <section id="contact" className="py-20 min-h-screen flex flex-col justify-center items-center">
            <div className="container px-4 md:px-6 mx-auto xl:w-2/3">
                <SectionHeading title={t("contact.title")} />
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{t("contact.subtitle")}</h3>
                        <p>{t("contact.description")}</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                <span>jmmolins87@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Linkedin className="h-5 w-5 text-primary" />
                                <Link
                                    href="https://www.linkedin.com/in/juanma-molins-cortes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                    aria-label="LinkedIn Profile"
                                >
                                    www.linkedin.com/in/juanma-molins-cortes
                                </Link>
                            </div>
                            <div className="flex items-center gap-2">
                                <Github className="h-5 w-5 text-primary" />
                                <Link
                                    href="https://github.com/jmmolins87"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                    aria-label="GitHub Profile"
                                >
                                    https://github.com/jmmolins87
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Card>
                        <CardContent className="p-6">
                            <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
