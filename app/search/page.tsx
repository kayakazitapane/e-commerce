"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock product database
const allProducts = [
  {
    id: 1,
    name: "Men's Training Shirt",
    category: "men",
    price: 799,
    image: "/images/grid-1.jpg",
    tags: ["training", "shirt", "men", "top"],
  },
  {
    id: 2,
    name: "Men's Running Shoes",
    category: "men",
    price: 2199,
    image: "/images/grid-2.jpg",
    tags: ["running", "shoes", "men", "footwear"],
  },
  {
    id: 3,
    name: "Women's Performance Leggings",
    category: "women",
    price: 1199,
    image: "/images/grid-3.jpg",
    tags: ["performance", "leggings", "women", "bottom"],
  },
  {
    id: 4,
    name: "Women's Sports Bra",
    category: "women",
    price: 649,
    image: "/images/grid-4.jpg",
    tags: ["sports", "bra", "women", "top"],
  },
  {
    id: 5,
    name: "Training Backpack",
    category: "accessories",
    price: 999,
    image: "/images/grid-5.jpg",
    tags: ["backpack", "accessories", "bag"],
  },
  {
    id: 6,
    name: "Performance Socks",
    category: "accessories",
    price: 329,
    image: "/images/grid-6.jpg",
    tags: ["socks", "accessories", "footwear"],
  },
  {
    id: 7,
    name: "Men's Basketball Shorts",
    category: "men",
    price: 749,
    image: "/images/grid-7.jpg",
    tags: ["basketball", "shorts", "men", "bottom"],
  },
  {
    id: 8,
    name: "Women's Running Jacket",
    category: "women",
    price: 1599,
    image: "/images/grid-8.jpg",
    tags: ["running", "jacket", "women", "outerwear"],
  },
]

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof allProducts>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      setHasSearched(false)
      return
    }

    const query = searchQuery.toLowerCase().trim()

    // Search through products
    const results = allProducts.filter((product) => {
      return (
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    })

    setSearchResults(results)
    setHasSearched(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handlePopularSearch = (term: string) => {
    setSearchQuery(term)
    // Simulate a slight delay to show the term in the input before searching
    setTimeout(() => {
      handleSearch()
    }, 100)
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Search Products</h1>

        <div className="flex w-full max-w-2xl mx-auto mb-12">
          <Input
            type="text"
            placeholder="Search for products..."
            className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button className="rounded-l-none" onClick={handleSearch}>
            <SearchIcon className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>

        {hasSearched && (
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-4">
              {searchResults.length > 0 ? `Search Results (${searchResults.length})` : "No results found"}
            </h2>

            {searchResults.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {searchResults.map((product) => (
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
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <p className="text-gray-600 mb-4">No products found matching "{searchQuery}".</p>
                <p className="text-gray-500">Try using different keywords or browse our categories below.</p>
              </div>
            )}
          </div>
        )}

        {(!hasSearched || searchResults.length === 0) && (
          <>
            <div className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Popular Searches</h2>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Running Shoes")}>
                  Running Shoes
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Training")}>
                  Training Tops
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Compression")}>
                  Compression
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Jacket")}>
                  Jackets
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Shorts")}>
                  Shorts
                </Button>
                <Button variant="outline" size="sm" onClick={() => handlePopularSearch("Accessories")}>
                  Accessories
                </Button>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Men")}
                >
                  Men
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Women")}
                >
                  Women
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Footwear")}
                >
                  Footwear
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Accessories")}
                >
                  Accessories
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Training")}
                >
                  Training
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Running")}
                >
                  Running
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Basketball")}
                >
                  Basketball
                </Button>
                <Button
                  variant="outline"
                  className="h-auto py-4 justify-start"
                  onClick={() => handlePopularSearch("Golf")}
                >
                  Golf
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
