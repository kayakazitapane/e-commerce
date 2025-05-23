"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useMobile()

  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-square md:aspect-auto md:h-[500px] overflow-hidden rounded-lg">
            <Image src="/images/hero-1.jpg" alt="Athlete in training gear" fill className="object-cover" priority />
            <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Training Collection</h2>
              <Link href="/collections/training">
                <Button className="mt-4 bg-white text-black hover:bg-gray-200">Shop Now</Button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] md:h-[300px] overflow-hidden bg-pink-500 rounded-lg">
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">Never give up</h2>
                <p className="text-white mt-2">Push your limits every day</p>
                <Link href="/collections/women">
                  <Button className="mt-4 bg-white text-pink-500 hover:bg-gray-200">Women's Collection</Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] md:h-[180px] overflow-hidden rounded-lg">
              <Image src="/images/hero-2.jpg" alt="Running shoes" fill className="object-cover" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl font-bold text-white">New Arrivals</h3>
                <Link href="/collections/new">
                  <Button variant="link" className="text-white p-0 mt-1 hover:text-gray-200">
                    Explore →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
