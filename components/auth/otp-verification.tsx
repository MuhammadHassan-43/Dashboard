"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export function OtpVerification({ email = "test34@gmail.com" }: { email?: string }) {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""))
  const [timeLeft, setTimeLeft] = useState(129)
  const [isResending, setIsResending] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000)
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [timeLeft])

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input if current one is filled
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleResend = () => {
    setIsResending(true)
    // Simulate API call
    setTimeout(() => {
      setTimeLeft(129)
      setIsResending(false)
    }, 1000)
  }

  const handleVerify = () => {
    // In a real app, you would verify the OTP with your backend
    // For now, just redirect to dashboard
    localStorage.setItem("isLoggedIn", "true")
    router.push("/dashboard")
  }

  const formatTime = (seconds: number) => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, "0")}`
  }

  return (
    <div className="w-full max-w-md mx-auto p-8 rounded-lg bg-zinc-900 border border-zinc-800">
      <div className="flex justify-center mb-6">
        <Image src="/logo-light.png" alt="Splend Coin" width={150} height={75} className="h-auto" />
      </div>
      <h1 className="text-2xl font-bold text-center mb-2">OTP Verification</h1>
      <p className="text-zinc-400 text-center mb-8">
        An authentication code has been sent to
        <br />
        <span className="font-medium text-white">{email}</span>
      </p>

      <div className="flex justify-center gap-2 mb-8">
        {otp.map((digit, index) => (
          <Input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl bg-zinc-800 border-zinc-700 focus:border-amber-500 focus:ring-amber-500"
          />
        ))}
      </div>

      <div className="text-center mb-6">
        <p className="text-sm text-zinc-400 mb-1">
          I didn&apos;t receive code:{" "}
          <button
            onClick={handleResend}
            disabled={timeLeft > 0 || isResending}
            className="text-amber-500 hover:underline focus:outline-none disabled:opacity-50 disabled:no-underline"
          >
            {isResending ? "Sending..." : "Resend Code"}
          </button>
        </p>
        {timeLeft > 0 && <p className="text-xs text-zinc-500">{formatTime(timeLeft)} sec left</p>}
      </div>

      <Button
        onClick={handleVerify}
        className="w-full bg-amber-500 hover:bg-amber-600 text-black"
        disabled={otp.some((digit) => !digit)}
      >
        Verify
      </Button>
    </div>
  )
}
