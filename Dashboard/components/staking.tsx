"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function Staking() {
  const { theme } = useTheme()

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Top Bar */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Staking</h1>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Bar */}
          <div className="relative hidden sm:block">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search..."
              className={`pl-10 w-48 sm:w-64 focus:border-amber-500 focus:ring-amber-500 text-sm ${
                theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-gray-300"
              }`}
            />
          </div>

          {/* Icons & Controls */}
          <Button
            variant="ghost"
            size="icon"
            className={`hidden sm:flex ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}
          >
            <Bell className="h-5 w-5" />
          </Button>

          <ThemeToggle />

          <Button
            className={`hidden sm:flex ${
              theme === "dark"
                ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
            }`}
          >
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Wallet & Staking Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* Wallet Connection */}
        <div
          className={`rounded-lg p-4 md:p-6 border ${
            theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Wallet Connection</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <span className={`font-medium ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Status:</span>
              <span className="text-red-500">Not Connected</span>
            </div>
            <Button
              className={`w-full ${
                theme === "dark"
                  ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                  : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
              }`}
            >
              Connect Wallet
            </Button>
          </div>
        </div>

        {/* Staking Panel */}
        <div
          className={`rounded-lg p-4 md:p-6 border ${
            theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Staking Panel</h2>
          <div className="space-y-4 text-sm">
            <p className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>SPA Tokens to Stake</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className={`flex-1 ${
                  theme === "dark"
                    ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                    : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
                }`}
              >
                Stake Tokens
              </Button>
              <Button
                variant="outline"
                className={`flex-1 ${
                  theme === "dark" ? "border-zinc-700 hover:bg-zinc-800" : "border-gray-300 hover:bg-gray-50"
                }`}
              >
                Unstake Tokens
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Tier */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Membership Tier</h2>

        <div
          className={`rounded-lg p-4 md:p-6 border mb-6 ${
            theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>Current Staked <br/>Amount:</span>
              <span className="ml-1 font-mono break-all">0890</span>
            </div>
            <div>
              <span className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>Your Tier:</span>
              <span className="ml-1 text-red-500">Not Staked</span>
            </div>
            <div>
              <span className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}>Max Coverage:</span>
              <span className="ml-1">$0</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Basic Tier */}
          <div className={`rounded-lg p-4 border border-green-500 ${theme === "dark" ? "bg-zinc-800" : "bg-gray-100"}`}>
            <div className="text-center">
              <h3 className="text-base font-medium text-green-500 mb-1">Basic</h3>
              <p className="text-xl font-bold mb-1">5+ SPA</p>
              <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Aircraft up to $50K</p>
            </div>
          </div>

          {/* Pro Tier */}
          <div className={`rounded-lg p-4 border border-blue-500 ${theme === "dark" ? "bg-zinc-800" : "bg-gray-100"}`}>
            <div className="text-center">
              <h3 className="text-base font-medium text-blue-500 mb-1">PRO</h3>
              <p className="text-xl font-bold mb-1">25+ SPA</p>
              <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Aircraft up to $150K</p>
            </div>
          </div>

          {/* Elite Tier */}
          <div
            className={`rounded-lg p-4 border border-amber-500 ${
              theme === "dark" ? "bg-zinc-800" : "bg-gray-100"
            }`}
          >
            <div className="text-center">
              <h3 className="text-base font-medium text-amber-500 mb-1">Elite</h3>
              <p className="text-xl font-bold mb-1">50+ SPA</p>
              <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Aircraft up to $250K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Protection & Rewards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Protection Overview */}
        <div
          className={`rounded-lg p-4 md:p-6 border ${
            theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Protection Overview</h2>
          <div className="space-y-4 text-sm">
            <div>
              <div className="flex justify-between mb-1">
                <span>Placement</span>
                <span>25%</span>
              </div>
              <Progress
                value={25}
                className={`h-3 ${theme === "dark" ? "bg-zinc-800" : "bg-gray-200"}`}
                indicatorClassName="bg-blue-500"
              />
            </div>
            <div>
              <p className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
                Current Max Coverage Eligibility:
              </p>
              <p className="text-lg font-bold">$0</p>
            </div>
            <div>
              <p className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Trust Score Status:</p>
              <p className="text-sm">-</p>
            </div>
          </div>
        </div>

        {/* Rewards & Yield */}
        <div
          className={`rounded-lg p-4 md:p-6 border ${
            theme === "dark" ? "bg-zinc-900 border-zinc-800" : "bg-white border-gray-200"
          }`}
        >
          <h2 className="text-lg font-semibold mb-4">Rewards & Yield</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full" />
              <span>Next Surplus Snapshot in:</span>
              <span className="text-blue-500">178 Days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#d1a248] rounded-full" />
              <span>Projected Surplus Reward:</span>
              <span>0.00 SPA</span>
            </div>
            <div>
              <p className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Interest/Yield from Staking:</p>
              <p className="text-amber-500">Feature under development</p>
            </div>
            <div>
              <p className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>Estimated Trust Boost:</p>
              <p>-</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
