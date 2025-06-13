"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SignUp({ onSignIn, onNext }: { onSignIn: () => void; onNext: () => void }) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    // In a real app, you would send this data to your backend
    // For now, just proceed to the next step (OTP verification)
    onNext()
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-lg bg-zinc-900 border border-zinc-800">
      <div className="flex justify-center mb-6">
        <Image src="/logo-light.png" alt="Splend Coin" width={150} height={75} className="h-auto" />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Create New Account</h1>
      <p className="text-zinc-400 text-center mb-8">Let&apos;s Start</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-900/30 border border-red-800 text-red-400 rounded-md text-sm">{error}</div>
        )}

        <div className="space-y-2">
          <label htmlFor="signup-username" className="block text-sm font-medium">
            User Name
          </label>
          <Input
            id="signup-username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter User Name"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-email" className="block text-sm font-medium">
            Email
          </label>
          <Input
            id="signup-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-password" className="block text-sm font-medium">
            Password
          </label>
          <Input
            id="signup-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="signup-confirm-password" className="block text-sm font-medium">
            Confirm Password
          </label>
          <Input
            id="signup-confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter Confirm Password"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <Button type="submit" className="w-full bg-[#d1a248] hover:bg-amber-600 text-black">
          Next
        </Button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-zinc-400">
          Already have an account?{" "}
          <button onClick={onSignIn} className="text-amber-500 hover:underline focus:outline-none">
            Sign In
          </button>
        </p>
      </div>
    </div>
  )
}
