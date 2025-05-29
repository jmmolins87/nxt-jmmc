import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { ThemeProvider } from "@/components/ThemeProvider"
import { Toaster } from "@/components/ui/sonner"
import Background from "@/components/custom/Background"
import { DynamicFavicon } from "@/components/custom/DynamicFavicon"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Juanma MC | Web Developer & Designer Portfolio",
    template: "%s | Juanma MC Portfolio",
  },
  description:
    "Professional web developer and designer specializing in creating attractive and functional digital experiences.",
  keywords: ["web developer", "frontend developer", "designer", "portfolio", "angular", "adobe", "react", "next.js", "javascript"],
  authors: [{ name: "Juanma MC", url: "https://jmmc.vercel.app" }],
  creator: "Juanma MC",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jmmc.vercel.app",
    title: "Juanma MC | Web Developer & Designer Portfolio",
    description:
      "Professional web developer and designer specializing in creating attractive and functional digital experiences.",
    siteName: "Juanma MC Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juanma MC Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juanma MC | Web Developer & Designer Portfolio",
    description:
      "Professional web developer and designer specializing in creating attractive and functional digital experiences.",
    creator: "@Juanma MC",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon_light.ico",
    shortcut: "/favicon_light.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://jmmc.vercel.app"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // const { t } = useTranslation()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Background />
          <DynamicFavicon />
          {children}
        </ThemeProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
