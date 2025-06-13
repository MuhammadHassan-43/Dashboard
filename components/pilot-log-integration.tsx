"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function PilotLogIntegration() {
  const { theme } = useTheme()

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 dark:bg-black min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-8">
        <h1 className="text-2xl font-bold">Pilot Log Integration</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500 w-full"
            />
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center justify-end gap-3">
            <Button variant="ghost" size="icon" className="text-zinc-400">
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

      {/* Main Form Container */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-6 md:p-8 border border-gray-200 dark:border-zinc-800 shadow-sm">
          <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6 text-center md:text-left">
            Verify Pilot-In-Command (PIC) status by matching incident details with Flight Circle logs.
          </p>

          <div className="space-y-6">
            {/* Incident Date */}
            <div>
              <label className="block text-sm font-medium mb-2">Incident Date</label>
              <Input
                placeholder="mm/dd/yyyy"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500 w-full"
              />
            </div>

            {/* PIC Name */}
            <div>
              <label className="block text-sm font-medium mb-2">Pilot-In-Command Name</label>
              <Input
                placeholder="Enter Pilot-In-Command Name"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500 w-full"
              />
            </div>

            {/* Submit Button */}
            <Button
              className={`w-full ${
                theme === "dark"
                  ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                  : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
              }`}
            >
              Verify PIC
            </Button>

            <p className="text-xs text-gray-500 dark:text-zinc-500 text-center">
              Note: Data is sourced from a mock Flight Circle API for demonstration.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
