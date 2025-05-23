import Image from "next/image"
import Link from "next/link"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params
  const title = category.charAt(0).toUpperCase() + category.slice(1)

  // Mock products based on category
  const products = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `${title} Product ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 499,
    image: `/images/${category}-${i + 1}.jpg`,
  }))

  return (
    <main className="min-h-screen">
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{title} Collection</h1>
          <p className="mt-4 text-gray-600">Discover our latest {category} products designed for peak performance.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                  <Image
                    src="/images/product-placeholder.jpg"
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
