"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CreditCard, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CheckoutPage() {
  const [step, setStep] = useState(1)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  // Mock cart items
  const cartItems = [
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

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 99.99
  const tax = subtotal * 0.15 // 15% VAT
  const total = subtotal + shipping + tax

  const handleSubmitShipping = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
    window.scrollTo(0, 0)
  }

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
      window.scrollTo(0, 0)
    }, 2000)
  }

  if (isComplete) {
    return (
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center py-12">
            <div className="flex justify-center mb-6">
              <CheckCircle2 className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-8">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <p className="font-medium mb-8">Order #UA-12345678</p>
            <div className="flex justify-center gap-4">
              <Link href="/">
                <Button variant="outline">Continue Shopping</Button>
              </Link>
              <Link href="/account/orders">
                <Button>View Order</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? "bg-black text-white" : "bg-gray-200"
                  } mr-2`}
                >
                  1
                </div>
                <h2 className="text-xl font-semibold">Shipping Information</h2>
              </div>

              {step === 1 && (
                <form onSubmit={handleSubmitShipping} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>

                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" required />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" required />
                    </div>
                    <div>
                      <Label htmlFor="province">Province</Label>
                      <Input id="province" required />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input id="postalCode" required />
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Continue to Payment
                  </Button>
                </form>
              )}
            </div>

            {step >= 2 && (
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step >= 2 ? "bg-black text-white" : "bg-gray-200"
                    } mr-2`}
                  >
                    2
                  </div>
                  <h2 className="text-xl font-semibold">Payment Method</h2>
                </div>

                <form onSubmit={handleSubmitPayment} className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="border rounded-lg p-4 flex items-center space-x-2">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-grow cursor-pointer">
                        Credit / Debit Card
                      </Label>
                      <div className="flex gap-2">
                        <Image src="/placeholder.svg?height=30&width=40&text=Visa" alt="Visa" width={40} height={30} />
                        <Image
                          src="/placeholder.svg?height=30&width=40&text=MC"
                          alt="Mastercard"
                          width={40}
                          height={30}
                        />
                      </div>
                    </div>

                    <div className="border rounded-lg p-4 flex items-center space-x-2">
                      <RadioGroupItem value="eft" id="eft" />
                      <Label htmlFor="eft" className="flex-grow cursor-pointer">
                        EFT (Electronic Funds Transfer)
                      </Label>
                    </div>

                    <div className="border rounded-lg p-4 flex items-center space-x-2">
                      <RadioGroupItem value="snapscan" id="snapscan" />
                      <Label htmlFor="snapscan" className="flex-grow cursor-pointer">
                        SnapScan
                      </Label>
                      <Image
                        src="/placeholder.svg?height=30&width=40&text=SnapScan"
                        alt="SnapScan"
                        width={40}
                        height={30}
                      />
                    </div>
                  </RadioGroup>

                  {paymentMethod === "credit-card" && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input id="cardName" required />
                      </div>

                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <div className="relative">
                          <Input id="cardNumber" required placeholder="1234 5678 9012 3456" />
                          <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" required placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" required placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}

                  {paymentMethod === "eft" && (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="font-medium mb-2">Banking Details:</p>
                      <p>Bank: First National Bank</p>
                      <p>Account Name: UA South Africa</p>
                      <p>Account Number: 62123456789</p>
                      <p>Branch Code: 250655</p>
                      <p>Reference: Your email address</p>
                    </div>
                  )}

                  {paymentMethod === "snapscan" && (
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="mb-4">Scan the QR code with your SnapScan app to complete payment</p>
                      <div className="mx-auto w-48 h-48 bg-white p-4 relative">
                        <Image
                          src="/placeholder.svg?height=160&width=160&text=SnapScan+QR"
                          alt="SnapScan QR Code"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full" disabled={isProcessing}>
                    {isProcessing ? "Processing..." : "Complete Order"}
                  </Button>
                </form>
              </div>
            )}
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="space-y-4 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-grow">
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Size: {item.size} | Qty: {item.quantity}
                      </p>
                      <p>R {item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>R {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT (15%)</span>
                  <span>R {tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                  <span>Total</span>
                  <span>R {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
