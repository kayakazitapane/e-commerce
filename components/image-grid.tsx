import Image from "next/image"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface ImageGridProps {
  images: string[]
  className?: string
  columns?: number
}

export default function ImageGrid({ images, className, columns = 2 }: ImageGridProps) {
  return (
    <section className={cn("w-full", className)}>
      <div className="container mx-auto px-4">
        <div
          className={cn(
            "grid gap-4",
            columns === 2 && "grid-cols-1 md:grid-cols-2",
            columns === 3 && "grid-cols-2 md:grid-cols-3",
          )}
        >
          {images.map((image, index) => (
            <Link key={index} href={`/products/category-${index + 1}`} className="group">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Product category ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
