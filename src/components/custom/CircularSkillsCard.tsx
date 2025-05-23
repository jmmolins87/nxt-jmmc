



"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface CircularSkillCardProps {
  name: string
  level: number
  delay?: number
}


export function CircularSkillCard({ name, level, delay = 0 }: CircularSkillCardProps) {
  const [progress, setProgress] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (inView) {
      timeout = setTimeout(() => {
        setProgress(level)
      }, delay)
    }

    return () => {
      if (timeout) clearTimeout(timeout)
    }
  }, [inView, level, delay])

  // SVG parameters
  const size = 120
  const strokeWidth = 8
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-4">
      <div className="relative w-[120px] h-[120px]">
        {/* Background circle */}
        <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-muted opacity-20"
          />
          {/* Foreground circle with animation */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-primary transition-all duration-1000 ease-out"
            style={{ strokeDashoffset, transition: "stroke-dashoffset 1.5s ease-out" }}
          />
        </svg>
        {/* Percentage text in the middle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold">{Math.round(progress)}%</span>
        </div>
      </div>
      <h3 className="mt-4 text-center font-medium">{name}</h3>
    </div>
  )
}
