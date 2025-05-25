

"use client"
import { Languages } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

interface LanguageToggleProps {
    onLanguageChange?: () => void
}

export function LanguageToggle({ onLanguageChange }: LanguageToggleProps) {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        onLanguageChange?.()
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Languages className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">Change language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => changeLanguage("es")} className="cursor-pointer">Español</DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLanguage("en")} className="cursor-pointer">English</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
