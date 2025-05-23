


"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { 
    Github, 
    Linkedin,
    Mail 
} from "lucide-react"

import { Button } from "@/components/ui/button"

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="py-6 border-t">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Juanma MC. {t("footer.rights")}
                </p>
                <div className="flex gap-4">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="ghost" size="icon">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                    <Link href="mailto:your@email.com">
                        <Button variant="ghost" size="icon">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
