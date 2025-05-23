"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, User, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            UA
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Home
            </Link>
            <Link href="/collections/men" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Men
            </Link>
            <Link href="/collections/women" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Women
            </Link>
            <Link href="/collections/accessories" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Accessories
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => (window.location.href = "/search")}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => (window.location.href = "/account")}>
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => (window.location.href = "/cart")}>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </div>

          <div className="flex items-center md:hidden space-x-4">
            <Button variant="ghost" size="icon" onClick={() => (window.location.href = "/cart")}>
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="font-bold text-xl" onClick={() => setIsMenuOpen(false)}>
                UA
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>

            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/collections/men" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Men
              </Link>
              <Link href="/collections/women" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Women
              </Link>
              <Link
                href="/collections/accessories"
                className="text-lg font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
              <Link href="/about" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Link href="/search" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Search
              </Link>
              <Link href="/account" className="text-lg font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Account
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
