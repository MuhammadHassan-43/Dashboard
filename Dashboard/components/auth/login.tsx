"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useRouter } from "next/navigation"

export function Login({ onForgotPassword, onSignUp }: { onForgotPassword: () => void; onSignUp: () => void }) {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Check for admin credentials
    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userRole", "admin")
      router.push("/admin")
    }
    // Check against regular user dummy credentials
    else if (username === "user" && password === "user123") {
      localStorage.setItem("isLoggedIn", "true")
      localStorage.setItem("userRole", "user")
      router.push("/dashboard")
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-lg bg-zinc-900 border border-zinc-800">
      <div className="flex justify-center mb-6">
        <Image src="/logo-light.png" alt="Splend Coin" width={150} height={75} className="h-auto" />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">Welcome back!</h1>
      <p className="text-zinc-400 text-center mb-8">Please Log in Your Account</p>

      <form onSubmit={handleLogin} className="space-y-6">
        {error && (
          <div className="p-3 bg-red-900/30 border border-red-800 text-red-400 rounded-md text-sm">{error}</div>
        )}

        <div className="space-y-2">
          <label htmlFor="username" className="block text-sm font-medium">
            User Name
          </label>
          <Input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter User Name"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked === true)}
              className="data-[state=checked]:bg-[#d1a248] data-[state=checked]:border-amber-500"
            />
            <label htmlFor="remember" className="text-sm cursor-pointer">
              Remember Me
            </label>
          </div>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-amber-500 text-sm hover:underline focus:outline-none"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" className="w-full bg-[#d1a248] hover:bg-amber-600 text-black">
          Login
        </Button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-zinc-400">
          Don&apos;t have an account?{" "}
          <button onClick={onSignUp} className="text-amber-500 hover:underline focus:outline-none">
            Sign up
          </button>
        </p>
      </div>
    </div>
  )
}
