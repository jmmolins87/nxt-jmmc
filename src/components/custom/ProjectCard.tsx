




"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react"

import { 
  Card, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card"
import "@/lib/i18n.client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

interface ProjectCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  demo: string;
  code: string;
}

export function ProjectCard({ title, subtitle, description, imageUrl, tags = [], demo, code }: ProjectCardProps) {
  const { t } = useTranslation();
  const [showFull, setShowFull] = useState(false);
  const [isLongText, setIsLongText] = useState(false);
  const [maxHeight, setMaxHeight] = useState<string>('4.2em'); // 3 lines * 1.4em (aprox line-height)
  const descRef = useRef<HTMLParagraphElement>(null);

  // Medir si el texto es largo
  useEffect(() => {
    if (descRef.current) {
      // Forzar clamp para medir si el texto es largo
      descRef.current.classList.add('line-clamp-3');
      setTimeout(() => {
        if (descRef.current) {
          setIsLongText(descRef.current.scrollHeight > descRef.current.clientHeight + 1);
        }
      }, 30);
    }
  }, [description]);

  // Transición de altura con clamping solo después de la animación al colapsar
  useEffect(() => {
    if (!descRef.current) return;
    const el = descRef.current;
    const transitionMs = 400;
    if (showFull) {
      // Expandir: quitar clamp antes de animar
      el.classList.remove('line-clamp-3');
      setTimeout(() => {
        if (el) setMaxHeight(el.scrollHeight + 'px');
      }, 10); // pequeño delay para asegurar el repaint
    } else {
      // Colapsar: animar maxHeight, luego aplicar clamp
      if (el) setMaxHeight(el.scrollHeight + 'px');
      setTimeout(() => {
        setMaxHeight('4.2em');
        // Después de la transición, aplicar clamp
        setTimeout(() => {
          if (el) el.classList.add('line-clamp-3');
        }, transitionMs);
      }, 10);
      // Quitar clamp antes de animar (por si acaso)
      el.classList.remove('line-clamp-3');
    }
  }, [showFull, description]);

  return (
    <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="relative aspect-video overflow-hidden border-b border-border/60">
        <Image
          src={imageUrl || "/vercel.svg"}
          alt={`Project: ${title}`}
          title={`Project: ${title}`}
          width={500}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-80" />
      </div>
      <CardContent className="flex flex-grow flex-col justify-between p-5 pt-5">
        <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
        <h3 className="mb-3 text-base font-medium text-primary/90">{subtitle}</h3>
        <div>
          <div className="mb-4">
            <div>
              <p
                ref={descRef}
                className="break-words text-sm leading-6 text-muted-foreground"
                style={{
                  marginBottom: 0,
                  lineHeight: '1.4em',
                  maxHeight: maxHeight,
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)',
                  WebkitTransition: 'max-height 0.4s cubic-bezier(0.4,0,0.2,1)'
                }}
              >
                {description}
              </p>
            </div>
            {isLongText && (
              <div className="flex justify-start mt-0.5 mb-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFull((v) => !v)}
                  className="rounded-full px-0 text-primary hover:bg-transparent"
                >
                  {showFull ? t("projects.showLess") : t("projects.showMore")}
                  {showFull ? <ChevronUp className="ml-1 w-4 h-4" /> : <ChevronDown className="ml-1 w-4 h-4" />}
                </Button>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-primary">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 p-5 pt-0 sm:flex-row">
        {
          demo ? (
            <Link 
              href={demo} 
              target="_blank" 
              title={title}
              className="w-full flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <ExternalLink className="h-4 w-4 mr-2" />
                {t("projects.demo")}
              </Button>
            </Link>
          )
          : 
          ("")
        }
        {
          code 
            ? (
              <Link
                href={code}
                target="_blank"
                title={title}
                className="w-full flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <Github className="h-4 w-4 mr-2" />
                  {t("projects.code")}
                </Button>
              </Link>
            )
            : ("")
        }
      </CardFooter>
    </Card>
  )
}
