


import Script from "next/script"

interface StructuredDataProps {
  name: string
  jobTitle: string
  description: string
  image: string
  sameAs: string[]
  url: string
}


export function StructuredData({ name, jobTitle, description, image, sameAs, url }: StructuredDataProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    image,
    sameAs,
    url,
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${name} Portfolio`,
    url,
    description,
    author: {
      "@type": "Person",
      name,
    },
  }

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
