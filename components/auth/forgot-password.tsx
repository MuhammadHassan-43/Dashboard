"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function ForgotPassword({ onNext }: { onNext: () => void }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      onNext()
    }, 1500)
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo-light.png"
            alt="Splend Coin"
            width={150}
            height={75}
            className="h-auto w-auto max-w-[150px]"
          />
        </div>

        <h1 className="text-2xl font-bold text-center mb-2">Forgot Password</h1>

        <p className="text-zinc-400 text-center text-sm sm:text-base mb-8 leading-relaxed">
          Enter the email address registered with your account and
          <br className="hidden sm:block" />
          we'll send you instructions to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="reset-email" className="block text-sm font-medium text-zinc-200">
              Email
            </label>
            <Input
              id="reset-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#d1a248] hover:bg-amber-600 text-black font-semibold transition duration-200"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request Password Reset"}
          </Button>
        </form>
      </div>
    </div>
  )
}
