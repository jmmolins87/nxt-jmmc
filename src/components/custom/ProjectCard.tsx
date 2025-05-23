




"use client"

import Image from "next/image"
import { useTranslation } from "react-i18next"
import { ExternalLink, Code2 } from "lucide-react"

import { 
    Card, 
    CardContent, 
    CardFooter 
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  tags?: string[]
}


export function ProjectCard({ title, description, imageUrl, tags = [] }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Project: ${title} - ${description}`}
          width={500}
          height={300}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <ExternalLink className="h-4 w-4 mr-2" />
          {t("projects.demo")}
        </Button>
        <Button variant="outline" size="sm" className="flex-1">
          <Code2 className="h-4 w-4 mr-2" />
          {t("projects.code")}
        </Button>
      </CardFooter>
    </Card>
  )
}
