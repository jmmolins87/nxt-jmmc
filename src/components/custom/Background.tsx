'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import "@/lib/i18n.client";

export function Background() {
    const { theme, systemTheme } = useTheme()
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const effectiveTheme = theme === 'system' ? systemTheme : theme
        setIsDark(effectiveTheme === 'dark')
    }, [theme, systemTheme])

    const gradients = [
        {
            color: isDark ? 'bg-cyan-400' : 'bg-cyan-300',
            size: 'h-[700px] w-[700px]',
            animate: {
                x: [0, 150, -150, 0],
                y: [0, 100, -100, 0],
            },
            duration: 50,
        },
        {
            color: isDark ? 'bg-sky-500' : 'bg-sky-300',
            size: 'h-[500px] w-[500px]',
            animate: {
                x: [0, -120, 120, 0],
                y: [0, -80, 80, 0],
            },
            duration: 60,
        },
        {
            color: isDark ? 'bg-emerald-400' : 'bg-emerald-300',
            size: 'h-[600px] w-[600px]',
            animate: {
                x: [0, 100, -100, 0],
                y: [0, 90, -90, 0],
            },
            duration: 45,
        },
    ]

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-1000">
            <div
                className={`absolute inset-0 transition-colors duration-1000 ${
                    isDark
                        ? 'bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.16),_transparent_22%),linear-gradient(180deg,_#050b16_0%,_#07111f_45%,_#0b1526_100%)]'
                        : 'bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.12),_transparent_22%),linear-gradient(180deg,_#f7fbff_0%,_#edf4fb_55%,_#f8fafc_100%)]'
                }`}
            />

            <svg
                className="absolute inset-0 h-full w-full opacity-40 pointer-events-none"
                style={{ zIndex: 1 }}
                width="100%"
                height="100%"
            >
                <defs>
                    <pattern
                        id="grid"
                        width="72"
                        height="72"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 72 0 L 0 0 0 72"
                            fill="none"
                            stroke={isDark ? "rgba(148, 163, 184, 0.22)" : "rgba(71, 85, 105, 0.12)"}
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(2,6,23,0.06)_100%)] dark:bg-[linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.35)_100%)]" />

            {gradients.map((g, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full opacity-20 blur-3xl ${g.color} ${g.size}`}
                    style={{
                        top: `${10 + i * 20}%`,
                        left: `${15 + i * 25}%`,
                    }}
                    animate={g.animate}
                    transition={{
                        duration: g.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    )
}
