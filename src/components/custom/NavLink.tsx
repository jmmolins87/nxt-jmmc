


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
            className={`py-2 px-3 text-sm font-medium transition-colors rounded-md hover:bg-muted flex items-center ${active ? "text-primary bg-muted" : "text-muted-foreground"
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
            className={`py-2 px-3 text-sm font-medium transition-colors rounded-md hover:bg-muted flex items-center w-full ${active ? "text-primary bg-muted" : "text-muted-foreground"
                }`}
        >
            {icon}
            {children}
        </button>
    )
}
