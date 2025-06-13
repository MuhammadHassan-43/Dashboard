"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Login } from "@/components/auth/login"
import { SignUp } from "@/components/auth/signup"
import { ForgotPassword } from "@/components/auth/forgot-password"
import { OtpVerification } from "@/components/auth/otp-verification"

type AuthView = "login" | "signup" | "forgot-password" | "otp-verification"

export default function AuthPage() {
  const router = useRouter()
  const [view, setView] = useState<AuthView>("login")

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    if (isLoggedIn) {
      router.push("/dashboard")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      {view === "login" && (
        <Login onForgotPassword={() => setView("forgot-password")} onSignUp={() => setView("signup")} />
      )}

      {view === "signup" && <SignUp onSignIn={() => setView("login")} onNext={() => setView("otp-verification")} />}

      {view === "forgot-password" && <ForgotPassword onNext={() => setView("otp-verification")} />}

      {view === "otp-verification" && <OtpVerification />}
    </div>
  )
}
