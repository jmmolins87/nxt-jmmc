



"use client"

import { useEffect, useState } from "react"


export function ButtonToTop() {

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 100)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-5 right-4 z-50 rounded-2xl border border-primary/30 bg-background/75 p-3 text-primary shadow-[0_20px_50px_-30px_rgba(14,165,233,0.9)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-accent md:hidden focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="Subir al inicio"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
