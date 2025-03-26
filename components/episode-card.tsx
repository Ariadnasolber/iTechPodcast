import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface EpisodeCardProps {
  title: string
  description: string
  duration: string
  number: string
  imageSrc: string
}

export default function EpisodeCard({ title, description, duration, number, imageSrc }: EpisodeCardProps) {
  return (
    <div className="flex gap-5 p-5 bg-card rounded-2xl shadow-sm hover:shadow-apple transition-all duration-300 border border-border">
      <div className="relative w-24 h-24 flex-shrink-0">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={`Episodio ${number}`}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] rounded-xl">
          <Button
            size="sm"
            className="w-8 h-8 rounded-full p-0 bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50"
          >
            <Play className="h-3 w-3 ml-0.5" />
          </Button>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-xs font-medium text-apple-zinc">Episodio {number}</span>
            <h3 className="font-medium line-clamp-1">{title}</h3>
          </div>
          <span className="text-xs text-muted-foreground">{duration}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
      </div>
    </div>
  )
}

