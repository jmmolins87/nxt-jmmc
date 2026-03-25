

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
  Sparkles,
  Contact
} from "lucide-react"

import { Button } from "@/components/ui/button"
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
import { BrandMark } from "@/components/custom/BrandMark"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export function Header({ activeSection, scrollToSection }: HeaderProps) {
  const { t } = useTranslation()
  const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
    <header className="sticky top-0 left-0 right-0 z-50 px-3 pt-3 md:px-6">
      <div className="container mx-auto flex h-16 items-center justify-between rounded-full border border-border/60 bg-background/72 px-4 shadow-[0_20px_60px_-35px_rgba(14,165,233,0.55)] backdrop-blur-xl md:px-6">
        <Link
          href="#home"
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 text-xl font-bold"
        >
          <BrandMark compact className="lg:hidden" />
          <BrandMark className="hidden lg:flex" />
        </Link>

        <nav className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-background/40 p-1">
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
            icon={<Sparkles className="h-4 w-4 mr-1" />}
            active={activeSection === "aiagency"}
            onClick={() => scrollToSection("aiagency")}
          >
            {t("nav.aiagency")}
          </NavLink>
          <NavLink
            icon={<Contact className="h-4 w-4 mr-1" />}
            active={activeSection === "contact"}
            onClick={() => scrollToSection("contact")}
          >
            {t("nav.contact")}
          </NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">{t("nav.menu")}</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-border/60 bg-background/95 backdrop-blur-2xl">
            <SheetHeader>
              <SheetTitle>{t("nav.menu")}</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-4">
              <BrandMark compact className="mb-2" />
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
                icon={<Sparkles className="h-5 w-5 mr-2" />}
                active={activeSection === "aiagency"}
                onClick={() => {
                  scrollToSection("aiagency")
                  setIsSheetOpen(false)
                }}
              >
                {t("nav.aiagency")}
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
                <ThemeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
