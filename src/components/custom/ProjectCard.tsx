




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
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (descRef.current) {
      if (!showFull) {
        descRef.current.classList.add('line-clamp-3');
        setTimeout(() => {
          if (descRef.current) {
            setIsLongText(descRef.current.scrollHeight > descRef.current.clientHeight + 1);
          }
        }, 30);
      } else {
        descRef.current.classList.remove('line-clamp-3');
        setIsLongText(false);
      }
    }
  }, [description, showFull]);

  return (
    <Card className="overflow-hidden group h-full flex flex-col hover:shadow-lg hover:shadow-gray-300 dark:shadow-zinc-950  transition-all">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/vercel.svg"}
          alt={`Project: ${title}`}
          title={`Project: ${title}`}
          width={500}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="flex flex-col justify-between p-4 pt-0 flex-grow">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>
        <div>
          <div className="mb-4">
            <div>
              <p
                ref={descRef}
                className={`text-sm text-muted-foreground break-words`}
                style={{ marginBottom: 0, lineHeight: '1.3em', transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)' }}
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
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        {
          demo ? (
            <Link 
              href={demo} 
              target="_blank" 
              title={title}
              className="flex-1">
              <Button variant="outline" size="sm" className="w-full shadow-md">
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
                className="flex-1">
                <Button variant="outline" size="sm" className="w-full shadow-md">
                  <Github className="h-12 w-12" />
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
