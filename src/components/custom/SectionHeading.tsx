



interface SectionHeadingProps {
  title: string
}
  
export function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">{ title }</h2>
}
  