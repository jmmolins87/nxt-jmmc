"use client"

import { useTranslation } from "react-i18next"
import "@/lib/i18n.client"
import { Sparkles, Bot, Zap, Rocket } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeading } from "@/components/custom/SectionHeading"

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
        <section id="aiagency" className="py-20 min-h-screen flex flex-col justify-center items-baseline bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center gap-2 mb-12">
                    <div className="flex items-start gap-3">
                        <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                        <SectionHeading title={t("aiagency.title")} />
                    </div>
                    <Badge 
                        variant="default" 
                        className="text-sm px-4 py-1.5 animate-pulse bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg"
                    >
                        {t("aiagency.comingSoon")}
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
                            className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
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

                <div className="mt-12 text-center">
                    <p className="text-sm text-muted-foreground italic">
                        {t("aiagency.stayTuned")}
                    </p>
                </div>
            </div>
        </section>
    )
}
