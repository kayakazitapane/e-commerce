"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Minus, Plus, Heart, Share2 } from "lucide-react"
import Link from "next/link"

// Mock product database - same as in search page
const allProducts = [
  {
    id: 1,
    name: "Men's Training Shirt",
    category: "men",
    price: 799,
    image: "/images/grid-1.jpg",
    tags: ["training", "shirt", "men", "top"],
    description:
      "Engineered with sweat-wicking technology, this training shirt keeps you cool and dry during your most intense workouts. The lightweight, breathable fabric moves with you for unrestricted performance.",
    features: [
      "HeatGear® fabric is ultra-soft & smooth for extreme comfort with very little weight",
      "UPF 30+ protects your skin from the sun's harmful rays",
      "4-way stretch construction moves better in every direction",
      "Material wicks sweat & dries really fast",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Blue", "Red"],
    rating: 4.8,
    reviews: 124,
    images: ["/images/grid-1.jpg", "/images/grid-2.jpg", "/images/grid-3.jpg", "/images/grid-4.jpg"],
  },
  {
    id: 2,
    name: "Men's Running Shoes",
    category: "men",
    price: 2199,
    image: "/images/grid-2.jpg",
    tags: ["running", "shoes", "men", "footwear"],
    description:
      "Lightweight, breathable running shoes designed for maximum comfort and performance. The responsive cushioning and durable outsole provide excellent energy return and traction on various surfaces.",
    features: [
      "Engineered mesh upper for breathability and support",
      "Foam cushioning for responsive comfort",
      "Durable rubber outsole for excellent traction",
      "Reflective details for visibility in low light",
    ],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    colors: ["Black/White", "Gray/Blue", "Red/Black"],
    rating: 4.6,
    reviews: 89,
    images: ["/images/grid-2.jpg", "/images/grid-5.jpg", "/images/grid-6.jpg", "/images/grid-7.jpg"],
  },
  {
    id: 3,
    name: "Women's Performance Leggings",
    category: "women",
    price: 1199,
    image: "/images/grid-3.jpg",
    tags: ["performance", "leggings", "women", "bottom"],
    description:
      "High-performance leggings with a second-skin feel for unrestricted movement. The high-rise waistband provides core support, while the moisture-wicking fabric keeps you dry during intense workouts.",
    features: [
      "Super-light HeatGear® fabric delivers superior coverage without weighing you down",
      "4-way stretch construction moves better in every direction",
      "High-rise waistband with interior drawcord",
      "Hidden waistband pocket for small essentials",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray", "Purple"],
    rating: 4.9,
    reviews: 203,
    images: ["/images/grid-3.jpg", "/images/grid-8.jpg", "/images/grid-9.jpg", "/images/grid-10.jpg"],
  },
  {
    id: 4,
    name: "Women's Sports Bra",
    category: "women",
    price: 649,
    image: "/images/grid-4.jpg",
    tags: ["sports", "bra", "women", "top"],
    description:
      "Medium-support sports bra with a compression fit for a locked-in feel. The moisture-wicking fabric and mesh panels keep you cool and comfortable during your workout.",
    features: [
      "HeatGear® fabric is ultra-soft & smooth for extreme comfort with very little weight",
      "Medium support for a wide range of activities",
      "Removable cups for customizable coverage",
      "Racerback design for enhanced mobility",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "White", "Pink", "Blue"],
    rating: 4.7,
    reviews: 156,
    images: ["/images/grid-4.jpg", "/images/grid-3.jpg", "/images/grid-8.jpg", "/images/grid-9.jpg"],
  },
  {
    id: 5,
    name: "Training Backpack",
    category: "accessories",
    price: 999,
    image: "/images/grid-5.jpg",
    tags: ["backpack", "accessories", "bag"],
    description:
      "Durable, water-resistant backpack with multiple compartments for organized storage. The padded laptop sleeve and ergonomic shoulder straps provide comfort and functionality for everyday use.",
    features: [
      "Water-resistant material protects your gear from the elements",
      'Padded laptop sleeve fits up to 15" laptop',
      "Adjustable, padded shoulder straps for comfortable carry",
      "Multiple pockets for organized storage",
    ],
    sizes: ["One Size"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.5,
    reviews: 78,
    images: ["/images/grid-5.jpg", "/images/grid-6.jpg", "/images/grid-7.jpg", "/images/grid-8.jpg"],
  },
  {
    id: 6,
    name: "Performance Socks",
    category: "accessories",
    price: 329,
    image: "/images/grid-6.jpg",
    tags: ["socks", "accessories", "footwear"],
    description:
      "Engineered with strategic cushioning and arch support for enhanced comfort and performance. The moisture-wicking fabric keeps your feet dry, while the seamless toe reduces irritation.",
    features: [
      "Dynamic arch support helps reduce fatigue",
      "Strategic cushioning reduces bulk and delivers flexibility",
      "Embedded arch support helps reduce fatigue",
      "Material wicks sweat and dries fast",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray", "Mixed"],
    rating: 4.4,
    reviews: 112,
    images: ["/images/grid-6.jpg", "/images/grid-5.jpg", "/images/grid-7.jpg", "/images/grid-8.jpg"],
  },
  {
    id: 7,
    name: "Men's Basketball Shorts",
    category: "men",
    price: 749,
    image: "/images/grid-7.jpg",
    tags: ["basketball", "shorts", "men", "bottom"],
    description:
      "Lightweight, breathable basketball shorts with a loose fit for unrestricted movement. The moisture-wicking fabric and mesh panels keep you cool during intense games.",
    features: [
      "Lightweight woven fabric delivers superior comfort & durability",
      "4-way stretch construction moves better in every direction",
      "Material wicks sweat & dries really fast",
      "Encased elastic waistband with internal drawcord",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Red", "Blue", "Gray"],
    rating: 4.6,
    reviews: 95,
    images: ["/images/grid-7.jpg", "/images/grid-1.jpg", "/images/grid-2.jpg", "/images/grid-5.jpg"],
  },
  {
    id: 8,
    name: "Women's Running Jacket",
    category: "women",
    price: 1599,
    image: "/images/grid-8.jpg",
    tags: ["running", "jacket", "women", "outerwear"],
    description:
      "Lightweight, water-resistant running jacket that protects you from the elements without weighing you down. The reflective details enhance visibility in low-light conditions.",
    features: [
      "Lightweight, durable fabric is water-resistant & wind-resistant",
      "3-piece hood construction for superior fit & visibility",
      "Secure hand pockets with hidden media pocket",
      "Reflective details for visibility in low light",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Pink", "Blue", "Gray"],
    rating: 4.7,
    reviews: 87,
    images: ["/images/grid-8.jpg", "/images/grid-3.jpg", "/images/grid-4.jpg", "/images/grid-9.jpg"],
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const productId = Number.parseInt(params.id)
  const product = allProducts.find((p) => p.id === productId) || allProducts[0]

  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const addToCart = () => {
    alert(`Added to cart: ${product.name} (${selectedSize}, ${selectedColor}, Qty: ${quantity})`)
  }

  // Get related products (excluding current product)
  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.id !== product.id && (p.category === product.category || p.tags.some((tag) => product.tags.includes(tag))),
    )
    .slice(0, 4)

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
              <Image
                src={product.images[activeImage] || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative aspect-square overflow-hidden rounded-md ${
                    activeImage === index ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <Link href={`/collections/${product.category}`} className="text-sm text-gray-500 hover:underline">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
              <h1 className="text-3xl font-bold mt-1">{product.name}</h1>
              <div className="flex items-center mt-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              <p className="text-2xl font-semibold mt-4">R {product.price}</p>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`px-4 py-2 border rounded-md ${
                      selectedColor === color
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Quantity</h3>
              <div className="flex items-center border rounded-md w-32">
                <button className="p-2" onClick={decrementQuantity}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="flex-1 text-center">{quantity}</span>
                <button className="p-2" onClick={incrementQuantity}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="flex-1" size="lg" onClick={addToCart} disabled={!selectedSize || !selectedColor}>
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <div className="border-t pt-6">
              <Tabs defaultValue="features">
                <TabsList className="w-full grid grid-cols-3">
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="features" className="pt-4">
                  <ul className="list-disc pl-5 space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="details" className="pt-4">
                  <p className="text-gray-700 mb-4">
                    Product ID: {product.id}
                    <br />
                    Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    <br />
                    Material: 92% Polyester, 8% Elastane
                    <br />
                    Care: Machine wash cold with like colors, tumble dry low
                  </p>
                </TabsContent>
                <TabsContent value="shipping" className="pt-4">
                  <p className="text-gray-700 mb-4">
                    Free standard shipping on orders over $50.
                    <br />
                    Standard shipping: 3-5 business days
                    <br />
                    Express shipping: 2-3 business days
                    <br />
                    Next-day shipping: Order by 2pm for delivery the next business day
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group">
                <div className="relative aspect-square overflow-hidden rounded-lg mb-2">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium">{relatedProduct.name}</h3>
                <p className="text-gray-700">R {relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
