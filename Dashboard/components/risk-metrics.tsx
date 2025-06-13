"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function RiskMetrics() {
  const { theme } = useTheme()

  const boxBg = theme === "dark" ? "bg-zinc-900" : "bg-white"
  const boxBorder = theme === "dark" ? "border-zinc-800" : "border-gray-200"
  const lightBoxBg = theme === "dark" ? "bg-zinc-800" : "bg-gray-100"
  const textColor = theme === "dark" ? "text-white" : "text-black"
  const secondaryText = theme === "dark" ? "text-zinc-400" : "text-gray-600"
  const progressColor = theme === "dark" ? "bg-emerald-500" : "bg-green-600"

  return (
    
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Risk Metrics</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search..."
              className={`pl-10 w-64 focus:border-amber-500 focus:ring-amber-500 ${
                theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-gray-300"
              }`}
            />
          </div>
          <Button variant="ghost" size="icon" className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button
            className={
              theme === "dark"
                ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
            }
          >
            Connect Wallet
          </Button>
        </div>
      </div>

<div className="w-full min-h-screen px-4 py-10 flex flex-col items-center">
    <div className={`w-full max-w-xl rounded-lg border p-6 ${boxBg} ${boxBorder}`}>
        {/* SPA Tokens Staked */}
        <div className="flex justify-between items-center mb-2">
          <span className={`text-lg font-bold ${textColor}`}>12,500</span>
          <span className={`text-lg font-medium ${textColor}`}>SPA Tokens Staked</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-300 dark:bg-zinc-700 h-2 rounded mb-6">
          <div className={`${progressColor} h-full rounded`} style={{ width: "62%" }}></div>
        </div>

        {/* Coverage Tier + Cap */}
        <div className={`rounded-md p-4 mb-6 ${lightBoxBg}`}>
          <div className="flex justify-between items-center mb-4">
            <span className={`font-bold ${textColor}`}>Medium</span>
            <span className={`font-medium ${textColor}`}>Coverage Tier</span>
          </div>
          <div className="flex justify-between items-center">
            <span className={`font-bold ${textColor}`}>$150K</span>
            <span className={`font-medium ${textColor}`}>Coverage Cap</span>
          </div>
        </div>

        {/* Aircraft Risk Band */}
        <div className={`rounded-md p-4 ${lightBoxBg}`}>
          <div className="flex items-center mb-3">
            <svg
              className={`w-5 h-5 mr-2 ${secondaryText}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
            <h2 className={`text-lg font-medium ${textColor}`}>Aircraft Risk Band</h2>
          </div>
          <div className="flex items-center pl-7">
            <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-amber-500 font-medium">Medium Risk</span>
            </div>
          </div>
        </div>
      </div>  

  </div>  
  )
}
