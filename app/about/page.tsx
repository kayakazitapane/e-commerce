import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About UA</h1>
            <p className="text-lg text-gray-700 mb-8">
              We're on a mission to make all athletes better through passion, design, and the relentless pursuit of
              innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1996, UA was born out of a simple idea: to build a superior shirt that provided compression
                and wicked perspiration off your skin rather than absorb it.
              </p>
              <p className="text-gray-700 mb-4">
                The technology behind Under Armour's diverse product assortment is complex, but the program for reaping
                the benefits is simple: wear HeatGear® when it's hot, ColdGear® when it's cold, and AllSeasonGear®
                between the extremes.
              </p>
              <p className="text-gray-700">
                Today, innovation remains our lifeblood and the key to delivering performance solutions athletes never
                knew they needed and can't imagine living without.
              </p>
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/images/about-story.jpg" alt="Our story" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-square rounded-lg overflow-hidden">
              <Image src="/images/about-mission.jpg" alt="Our mission" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="mb-4">
                Under Armour's mission is to make all athletes better through passion, design, and the relentless
                pursuit of innovation.
              </p>
              <p className="mb-6">
                We believe in challenging convention, breaking barriers, and empowering athletes at every level to reach
                their full potential.
              </p>
              <Link href="/about/mission">
                <Button className="bg-white text-black hover:bg-gray-200">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-700">
                We are committed to continuous innovation in everything we do, from product design to customer
                experience.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Passion</h3>
              <p className="text-gray-700">
                We are passionate about sports and helping athletes achieve their best performance through our products.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-gray-700">
                We act with integrity in all our relationships, with our customers, partners, employees, and
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team and help us push the boundaries of
            performance apparel.
          </p>
          <Link href="/careers">
            <Button className="bg-black text-white hover:bg-gray-800">View Careers</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
