"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, Pause } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface VideoSectionProps {
  title: string
  description: string
  videoUrl: string
  thumbnailUrl: string
  className?: string
}

export default function VideoSection({ title, description, videoUrl, thumbnailUrl, className }: VideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className={cn("w-full bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold uppercase">{title}</h2>
            <p className="mt-4">{description}</p>
            <Link href="/collections/performance">
              <Button variant="outline" className="mt-6 border-white text-white hover:bg-white hover:text-gray-900">
                Shop Performance Gear
              </Button>
            </Link>
          </div>
          <div className="relative aspect-video order-1 md:order-2 rounded-lg overflow-hidden">
            {!isPlaying && (
              <Image src={thumbnailUrl || "/placeholder.svg"} alt="Video thumbnail" fill className="object-cover" />
            )}
            <video
              ref={videoRef}
              className={cn("absolute inset-0 w-full h-full object-cover", !isPlaying && "hidden")}
              src={videoUrl}
              onEnded={() => setIsPlaying(false)}
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute inset-0 m-auto bg-black/30 rounded-full w-16 h-16 hover:bg-black/50"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-8 w-8 text-white" /> : <Play className="h-8 w-8 text-white" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
