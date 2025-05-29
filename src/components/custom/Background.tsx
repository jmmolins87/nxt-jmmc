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
            color: isDark ? 'bg-purple-500' : 'bg-purple-300',
            size: 'h-[700px] w-[700px]',
            animate: {
                x: [0, 150, -150, 0],
                y: [0, 100, -100, 0],
            },
            duration: 50,
        },
        {
            color: isDark ? 'bg-cyan-500' : 'bg-cyan-300',
            size: 'h-[500px] w-[500px]',
            animate: {
                x: [0, -120, 120, 0],
                y: [0, -80, 80, 0],
            },
            duration: 60,
        },
        {
            color: isDark ? 'bg-pink-500' : 'bg-pink-300',
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
            <div className={`absolute inset-0 ${isDark ? 'bg-black' : 'bg-white'} transition-colors duration-1000`} />

            {/* Grid overlay */}
            <svg
                className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
                style={{ zIndex: 1 }}
                width="100%"
                height="100%"
            >
                <defs>
                    {/* Cuadrícula simple */}
                    <pattern
                        id="grid"
                        width="100"
                        height="100"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 100 0 L 0 0 0 100"
                            fill="none"
                            stroke={isDark ? "#fff5" : "#ccc"}
                            strokeWidth="1"
                        />
                    </pattern>
                </defs>
                {/* Cuadrícula */}
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {gradients.map((g, i) => (
                <motion.div
                    key={i}
                    className={`absolute rounded-full opacity-25 blur-3xl ${g.color} ${g.size}`}
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
