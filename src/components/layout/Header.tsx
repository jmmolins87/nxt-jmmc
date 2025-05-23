

"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import { 
  Menu, 
  Home, 
  User, 
  Briefcase, 
  Cpu, 
  Contact 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "@/components/ui/avatar"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { NavLink, MobileNavLink } from "@/components/custom/NavLink"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const { t } = useTranslation()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="#home"
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold flex items-center gap-2"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Logo" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
          <span className="hidden lg:inline">My Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            icon={<Home className="h-4 w-4 mr-1" />}
            active={activeSection === "home"}
            onClick={() => scrollToSection("home")}
          >
            {t("nav.home")}
          </NavLink>
          <NavLink
            icon={<User className="h-4 w-4 mr-1" />}
            active={activeSection === "about"}
            onClick={() => scrollToSection("about")}
          >
            {t("nav.about")}
          </NavLink>
          <NavLink
            icon={<Briefcase className="h-4 w-4 mr-1" />}
            active={activeSection === "projects"}
            onClick={() => scrollToSection("projects")}
          >
            {t("nav.projects")}
          </NavLink>
          <NavLink
            icon={<Cpu className="h-4 w-4 mr-1" />}
            active={activeSection === "skills"}
            onClick={() => scrollToSection("skills")}
          >
            {t("nav.skills")}
          </NavLink>
          <NavLink
            icon={<Contact className="h-4 w-4 mr-1" />}
            active={activeSection === "contact"}
            onClick={() => scrollToSection("contact")}
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        {/* Theme and Language toggles */}
        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t("nav.menu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{t("nav.menu")}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-4 mt-6">
              <MobileNavLink
                icon={<Home className="h-5 w-5 mr-2" />}
                active={activeSection === "home"}
                onClick={() => {
                  scrollToSection("home")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.home")}
              </MobileNavLink>
              <MobileNavLink
                icon={<User className="h-5 w-5 mr-2" />}
                active={activeSection === "about"}
                onClick={() => {
                  scrollToSection("about")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.about")}
              </MobileNavLink>
              <MobileNavLink
                icon={<Briefcase className="h-5 w-5 mr-2" />}
                active={activeSection === "projects"}
                onClick={() => {
                  scrollToSection("projects")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.projects")}
              </MobileNavLink>
              <MobileNavLink
                icon={<Cpu className="h-5 w-5 mr-2" />}
                active={activeSection === "skills"}
                onClick={() => {
                  scrollToSection("skills")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.skills")}
              </MobileNavLink>
              <MobileNavLink
                icon={<Contact className="h-5 w-5 mr-2" />}
                active={activeSection === "contact"}
                onClick={() => {
                  scrollToSection("contact")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.contact")}
              </MobileNavLink>
              <Separator className="my-4" />
              <div className="flex items-center gap-2">
                <LanguageToggle onLanguageChange={() => setIsSheetOpen(false)} />
                <ThemeToggle onThemeChange={() => setIsSheetOpen(false)} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
