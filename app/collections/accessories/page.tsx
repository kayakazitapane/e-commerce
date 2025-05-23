import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AccessoriesPage() {
  // Mock products
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Accessory ${i + 1}`,
    price: Math.floor(Math.random() * 800) + 299,
    image: `/images/grid-${i + 5}.jpg`,
  }))

  return (
    <main className="min-h-screen">
      <section className="relative h-[300px] md:h-[400px]">
        <Image src="/images/grid-5.jpg" alt="Accessories Collection" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Accessories Collection</h1>
            <p className="text-white text-lg max-w-md">Complete your look with our performance accessories.</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8">
            <Button variant="outline">All Accessories</Button>
            <Button variant="outline">Bags</Button>
            <Button variant="outline">Headwear</Button>
            <Button variant="outline">Socks</Button>
            <Button variant="outline">Equipment</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-700">R {product.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
