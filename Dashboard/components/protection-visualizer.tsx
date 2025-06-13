"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function ProtectionVisualizer() {
  const { theme } = useTheme()

  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Top Header Section */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-8">
        <h1 className="text-2xl font-bold">Protection Visualizer</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4 dark:text-zinc-500" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-zinc-900 border-zinc-700 w-full focus:border-amber-500 focus:ring-amber-500 dark:bg-zinc-800 dark:border-zinc-700"
            />
          </div>

          {/* Notification & Wallet */}
          <div className="flex items-center gap-3 justify-end">
            <Button variant="ghost" size="icon" className="text-zinc-400 dark:text-zinc-500">
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
      </div>

      {/* Protection Amount Display */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium mb-2">Protection Coverage</h2>
          <div className="text-3xl font-bold text-blue-500 mb-2">$150,000</div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">Current Protection Cap</p>
        </div>

        {/* Circular Progress Chart */}
        <div className="flex justify-center mb-8">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                className="text-zinc-800 dark:text-zinc-700"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="currentColor"
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={`${65 * 2.51} ${100 * 2.51}`}
                className="text-amber-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500">65%</div>
                <div className="text-sm text-zinc-400 dark:text-zinc-500">Progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Current */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Current</span>
              <span className="text-blue-500">$150.00</span>
            </div>
            <Progress
              value={65}
              className="h-3 bg-zinc-800 dark:bg-zinc-700"
              indicatorClassName="bg-blue-500"
            />
          </div>

          {/* Next Tier */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Next Tier</span>
              <span>$250,000</span>
            </div>
            <Progress
              value={0}
              className="h-3 bg-zinc-800 dark:bg-zinc-700"
              indicatorClassName="bg-zinc-600 dark:bg-zinc-600"
            />
          </div>
        </div>

        {/* Remaining to Next Tier */}
        <div className="text-center mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-center max-w-md mx-auto gap-2">
            <span className="text-sm text-zinc-400 dark:text-zinc-500">Remaining to next tier</span>
            <span className="text-lg font-bold text-blue-500">$100,000</span>
          </div>
        </div>

        {/* Tier Info */}
        <div className="text-center">
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            Current Tier: <span className="text-white dark:text-white">Basic</span> {">"} Next Tier:{" "}
            <span className="text-blue-500">Pro</span>
          </p>
        </div>
      </div>
    </div>
  )
}
