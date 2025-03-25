"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

interface AudioPlayerProps {
  audioSrc: string
}

export default function AudioPlayer({ audioSrc }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const setAudioData = () => {
      setDuration(audio.duration)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    // Events
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)
    audio.addEventListener("ended", () => setIsPlaying(false))

    // Cleanup
    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  // Handle play/pause
  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  // Handle time change
  const handleTimeChange = (value: number[]) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = value[0]
    setCurrentTime(value[0])
  }

  // Format time in MM:SS
  const formatTime = (time: number) => {
    if (isNaN(time)) return "00:00"

    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
  }

  // Skip forward/backward
  const skip = (seconds: number) => {
    const audio = audioRef.current
    if (!audio) return

    audio.currentTime = Math.min(Math.max(audio.currentTime + seconds, 0), duration)
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-medium">{formatTime(currentTime)}</span>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={handleTimeChange}
          className="flex-1"
        />
        <span className="text-xs font-medium">{formatTime(duration)}</span>
      </div>

      <div className="flex items-center justify-center gap-4">
        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => skip(-10)}>
          <SkipBack className="h-5 w-5" />
        </Button>

        <Button
          variant="default"
          size="icon"
          className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
        </Button>

        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full" onClick={() => skip(10)}>
          <SkipForward className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

