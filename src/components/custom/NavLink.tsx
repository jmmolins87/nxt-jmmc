


"use client"

import type React from "react"

import "@/lib/i18n.client"

interface NavLinkProps {
    children: React.ReactNode
    active: boolean
    onClick: () => void
    icon?: React.ReactNode
}

export function NavLink({ children, active, onClick, icon }: NavLinkProps) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${active ? "bg-primary text-primary-foreground shadow-[0_16px_40px_-24px_hsl(var(--primary)/0.85)]" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
                }`}
        >
            {icon}
            {children}
        </button>
    )
}

export function MobileNavLink({ children, active, onClick, icon }: NavLinkProps) {
    return (
        <button
            onClick={onClick}
            className={`flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${active ? "bg-primary text-primary-foreground shadow-[0_16px_40px_-24px_hsl(var(--primary)/0.85)]" : "text-muted-foreground hover:bg-accent/70 hover:text-foreground"
                }`}
        >
            {icon}
            {children}
        </button>
    )
}
