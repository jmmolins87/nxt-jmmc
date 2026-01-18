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
    <div className="flex justify-center items-center mb-2" ref={ref}>
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-2 relative inline-block">
        {title}
        <span
          className={`block absolute left-1/2 -translate-x-1/2 bottom-0 h-1 bg-primary rounded transition-all duration-700
            ${visible ? "w-2/3 opacity-100" : "w-0 opacity-0"}`}
          aria-hidden="true"
        />
      </h2>
    </div>
  )
}