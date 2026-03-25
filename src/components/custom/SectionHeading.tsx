import { useRef, useEffect, useState } from "react"

interface SectionHeadingProps {
  title: string
}

export function SectionHeading({ title }: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mb-3 flex justify-center" ref={ref}>
      <h2 className="relative inline-block text-center text-3xl font-bold tracking-tighter md:text-5xl">
        {title}
        <span
          className={`absolute -bottom-3 left-1/2 block h-1.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-700 ${
            visible ? "w-2/3 opacity-100" : "w-0 opacity-0"
          }`}
          aria-hidden="true"
        />
      </h2>
    </div>
  )
}
