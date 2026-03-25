


"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { 
    Github, 
    Linkedin,
    Mail 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { BrandMark } from "@/components/custom/BrandMark"

export function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="px-4 pb-8 pt-2 md:px-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 rounded-[28px] border border-border/60 bg-background/60 px-6 py-5 text-center backdrop-blur-xl md:flex-row md:text-left">
                <div className="flex items-center gap-4">
                    <BrandMark compact />
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Juanma MC. {t("footer.rights")}
                    </p>
                </div>
                <div className="flex gap-3">
                    <Link href="https://github.com/jmmolins87" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-2xl">
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                        </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/juanma-molins-cortes" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-2xl">
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </Link>
                    <Link href="mailto:jmmolins87@gmail.com">
                        <Button variant="outline" size="icon" className="rounded-2xl">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                        </Button>
                    </Link>
                </div>
            </div>
        </footer>
    )
}
