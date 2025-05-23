"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

// Initial cart items
const initialCartItems = [
  {
    id: 1,
    name: "Men's Training Shirt",
    price: 799,
    quantity: 1,
    image: "/images/grid-1.jpg",
    size: "M",
    color: "Black",
  },
  {
    id: 2,
    name: "Women's Running Shoes",
    price: 2199,
    quantity: 1,
    image: "/images/grid-3.jpg",
    size: "8",
    color: "Gray/Pink",
  },
]

export default function CartPage() {
  const router = useRouter()
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const [isApplyingPromo, setIsApplyingPromo] = useState(false)

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = cartItems.length > 0 ? 99.99 : 0
  const tax = subtotal * 0.15 // 15% VAT
  const total = subtotal + shipping + tax - discount

  // Handle quantity changes
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  // Apply promo code
  const applyPromoCode = () => {
    setIsApplyingPromo(true)

    // Simulate API call
    setTimeout(() => {
      if (promoCode.toLowerCase() === "discount20") {
        const discountAmount = subtotal * 0.2 // 20% discount
        setDiscount(discountAmount)
        toast({
          title: "Promo code applied",
          description: "20% discount has been applied to your order.",
        })
      } else {
        toast({
          title: "Invalid promo code",
          description: "The promo code you entered is invalid or expired.",
          variant: "destructive",
        })
      }
      setIsApplyingPromo(false)
    }, 1000)
  }

  // Proceed to checkout
  const proceedToCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before proceeding to checkout.",
        variant: "destructive",
      })
      return
    }

    // In a real app, you would save the cart state and redirect to checkout
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure checkout page...",
    })

    // Simulate redirect
    setTimeout(() => {
      router.push("/checkout")
    }, 1500)
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items ({cartItems.length})</h2>

                  <div className="divide-y">
                    {cartItems.map((item) => (
                      <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>

                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="font-medium">R {item.price.toFixed(2)}</p>
                          </div>

                          <div className="mt-1 text-sm text-gray-500">
                            <p>
                              Size: {item.size} | Color: {item.color}
                            </p>
                          </div>

                          <div className="mt-4 flex justify-between items-center">
                            <div className="flex items-center border rounded-md">
                              <button
                                className="p-2"
                                aria-label="Decrease quantity"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-4">{item.quantity}</span>
                              <button
                                className="p-2"
                                aria-label="Increase quantity"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>

                            <button
                              className="text-gray-500 hover:text-gray-700"
                              aria-label="Remove item"
                              onClick={() => removeItem(item.id)}
                            >
                              <X className="h-5 w-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Have a promo code?</h2>
                <div className="flex">
                  <Input
                    placeholder="Enter promo code"
                    className="rounded-r-none"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <Button className="rounded-l-none" onClick={applyPromoCode} disabled={!promoCode || isApplyingPromo}>
                    {isApplyingPromo ? "Applying..." : "Apply"}
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-2">Try "DISCOUNT20" for 20% off your order</p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>R {subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>- R {discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>R {shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VAT (15%)</span>
                    <span>R {tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R {total.toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6" onClick={proceedToCheckout}>
                  Proceed to Checkout
                </Button>

                <div className="mt-6 text-center">
                  <Link href="/" className="text-sm text-black hover:underline">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link href="/">
              <Button>Start Shopping</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
