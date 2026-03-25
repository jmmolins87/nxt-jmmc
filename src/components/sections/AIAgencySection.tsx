"use client"

import { useTranslation } from "react-i18next"
import "@/lib/i18n.client"
import Link from "next/link"
import { Sparkles, Bot, Zap, Rocket, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/custom/SectionHeading"
import { Button } from "@/components/ui/button"

export function AIAgencySection() {
    const { t } = useTranslation()

    const services = [
        {
            icon: <Bot className="h-10 w-10 text-primary" />,
            title: t("aiagency.service1.title"),
            description: t("aiagency.service1.description")
        },
        {
            icon: <Zap className="h-10 w-10 text-primary" />,
            title: t("aiagency.service2.title"),
            description: t("aiagency.service2.description")
        },
        {
            icon: <Rocket className="h-10 w-10 text-primary" />,
            title: t("aiagency.service3.title"),
            description: t("aiagency.service3.description")
        }
    ]

    return (
        <section id="aiagency" className="section-shell flex min-h-screen items-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="section-intro">
                    <span className="section-kicker">Next Layer</span>
                </div>
                <div className="mb-12 flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
                        <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                        <SectionHeading title={t("aiagency.title")} />
                    </div>
                    <Badge 
                        variant="default" 
                        className="rounded-full px-4 py-1.5 text-sm"
                    >
                        {t("aiagency.live")}
                    </Badge>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <p className="text-lg text-muted-foreground">
                        {t("aiagency.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <Card 
                            key={index} 
                            className="border-border/70 bg-card/65 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                        >
                            <CardHeader className="space-y-4">
                                <div className="flex justify-center">
                                    {service.icon}
                                </div>
                                <CardTitle className="text-center text-xl">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-center">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="panel-surface mx-auto mt-12 max-w-2xl p-5 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        {t("aiagency.status")}
                    </p>
                    <Link
                        href="https://clinvetia.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex w-full justify-center sm:w-auto"
                    >
                        <Button variant="outline" className="w-full sm:w-auto">
                            {t("aiagency.visit")}
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}
