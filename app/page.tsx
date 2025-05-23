import HeroSection from "@/components/hero-section"
import ImageGrid from "@/components/image-grid"
import VideoSection from "@/components/video-section"
import FeatureCarousel from "@/components/feature-carousel"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <section className="py-8 md:py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Collections</h2>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/collections/men">
              <Button variant="outline">Men</Button>
            </Link>
            <Link href="/collections/women">
              <Button variant="outline">Women</Button>
            </Link>
            <Link href="/collections/accessories">
              <Button variant="outline">Accessories</Button>
            </Link>
          </div>
        </div>
      </section>

      <ImageGrid
        images={["/images/grid-1.jpg", "/images/grid-2.jpg", "/images/grid-3.jpg", "/images/grid-4.jpg"]}
        className="py-8"
      />

      <VideoSection
        title="NEVER BACK DOWN"
        description="Push your limits and achieve greatness with our performance gear designed for athletes who never back down from a challenge."
        videoUrl="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        thumbnailUrl="/images/video-thumbnail.jpg"
      />

      <ImageGrid
        images={[
          "/images/grid-5.jpg",
          "/images/grid-6.jpg",
          "/images/grid-7.jpg",
          "/images/grid-8.jpg",
          "/images/grid-9.jpg",
          "/images/grid-10.jpg",
        ]}
        className="py-8"
        columns={3}
      />

      <FeatureCarousel
        images={["/images/feature-1.jpg", "/images/feature-2.jpg", "/images/feature-3.jpg"]}
        className="py-8 bg-red-600"
      />

      <section className="py-12 md:py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Stay updated with the latest products, exclusive offers, and training tips.
        </p>
        <Link href="/contact">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800">
            Sign Up Now
          </Button>
        </Link>
      </section>
    </main>
  )
}
