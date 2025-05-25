



interface SectionHeadingProps {
  title: string
  subtitle?: string
}
  
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {

  return (
    <div className="mb-10">
      <h2 className="text-3xl font-bold tracking-tighter text-center">{ title }</h2>
      { subtitle && <h3 className="text-xl font-semibold tracking-tight mt-4 mb-8">{ subtitle }</h3> }
    </div>
  )
}
  