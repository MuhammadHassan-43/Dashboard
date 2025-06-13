"use client"

import { Bell, Search, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function TierCalculator() {
  const [stakeAmount, setStakeAmount] = useState([0])
  const { theme } = useTheme()

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-zinc-900 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">Tier Calculator</h1>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 h-4 w-4 dark:text-zinc-500" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-gray-50 border-gray-300 w-64 focus:border-[#1a3e5d] focus:ring-[#1a3e5d] dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-zinc-400 hidden lg:flex dark:text-zinc-500">
            <Bell className="h-5 w-5" />
          </Button>
          <ThemeToggle />
          <Button
            className={`w-full sm:w-auto ${
              theme === "dark"
                ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
            }`}
          >
            Connect Wallet
          </Button>

        </div>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Stake SPA Section */}
        <div className="space-y-6">
          {/* Stake Input */}
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
            <h2 className="text-lg font-medium">Stake Your SPA</h2>
            <p className="text-sm text-gray-600 mb-4 dark:text-zinc-500">Enter the amount of SPA you want to stake</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Enter SPA Amount"
                className="flex-1 bg-gray-50 border-gray-300 focus:border-[#1a3e5d] focus:ring-[#1a3e5d] dark:bg-zinc-700 dark:border-zinc-600 dark:text-zinc-100"
              />
              <Button
                className={
                  theme === "dark"
                    ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                    : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
                }
              >
                Stake
              </Button>
            </div>
          </div>

          {/* Slider */}
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
            <h3 className="text-md font-medium mb-4">Adjust stake amount</h3>
            <div className="space-y-4">
              <Slider value={stakeAmount} onValueChange={setStakeAmount} max={100} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600 dark:text-zinc-500">
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>
          </div>

          {/* Current Stake */}
          <div className="bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200 dark:bg-zinc-800 dark:border-zinc-700">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-medium">Current Stake</h3>
              <Button
                variant="outline"
                className="border-zinc-700 hover:bg-zinc-800 dark:border-zinc-600 dark:hover:bg-zinc-700"
              >
                Unstake
              </Button>
            </div>
            <p className="text-xl font-bold">0 SPA</p>
          </div>
        </div>

        {/* Tiers Section */}
        <div className="space-y-6">
          <h2 className="text-lg font-medium">Available Tiers</h2>

          {/* Tier Cards (Repeatable Component) */}
          {[
            { label: "Basic Tier", badge: "B", color: "green-500", required: 5 },
            { label: "Pro Tier", badge: "P", color: "blue-500", required: 25 },
            { label: "Elite Tier", badge: "E", color: "[#d1a248]", required: 50, text: "black" },
          ].map((tier) => (
            <div
              key={tier.label}
              className="bg-gray-100 rounded-lg p-4 sm:p-6 border border-gray-200 dark:bg-zinc-800 dark:border-zinc-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 bg-${tier.color} rounded-full flex items-center justify-center`}
                    style={{ backgroundColor: tier.color.startsWith("#") ? tier.color : undefined }}
                  >
                    <span
                      className={`font-bold text-sm ${
                        tier.text ? `text-${tier.text}` : "text-white"
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium">{tier.label}</h3>
                </div>
                <Info className="h-5 w-5 text-zinc-400 dark:text-zinc-500" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-zinc-500">Required Stake</span>
                  <span className="text-sm font-medium">{tier.required} SPA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 dark:text-zinc-500">Need {tier.required} more SPA</span>
                  <span className="text-sm">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
