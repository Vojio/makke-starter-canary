import { Card } from "./card"
import { Loader2 } from "lucide-react"

interface LoadingProps {
  height?: string
  text?: string
}

export function Loading({ height = "h-[400px]", text = "Loading..." }: LoadingProps) {
  return (
    <Card className={`${height} flex items-center justify-center`}>
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </Card>
  )
}