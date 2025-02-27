import { Badge } from "@/components/ui/badge"

export interface SectionProps {
  id: string
  className: string
  badgeText: string
  badgeVariant: "secondary"
  title: string
  subtitle?: string
  children: React.ReactNode
}

export function Section({
  id,
  className,
  badgeText,
  badgeVariant,
  title,
  subtitle,
  children
}: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-left">
          <Badge variant={badgeVariant} className="mb-4">{badgeText}</Badge>
          <h2 className="mb-3 text-3xl font-semibold">{title}</h2>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}