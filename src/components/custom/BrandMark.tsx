"use client"

import { cn } from "@/lib/utils"

interface BrandMarkProps {
  compact?: boolean
  className?: string
}

export function BrandMark({ compact = false, className }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="brand-mark-frame">
        <span className="brand-mark-core">JM</span>
        <span className="brand-mark-accent" aria-hidden="true">MC</span>
      </div>
      {!compact && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-base uppercase tracking-[0.32em] text-foreground">
            Juanma MC
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.38em] text-muted-foreground">
            Frontend Systems
          </span>
        </div>
      )}
    </div>
  )
}
