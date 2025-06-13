"use client"

import type React from "react"
import { Bell, Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export function Claims() {
  const [dragActive, setDragActive] = useState(false)
  const { theme } = useTheme()

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    // Handle file drop logic here
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-black min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-2xl font-bold">Claims</h1>
        <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4 dark:text-zinc-500" />
            <Input
              placeholder="Search..."
              className="w-full pl-10 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-zinc-400 hidden sm:inline-flex dark:text-zinc-500">
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

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Panel: Submit a Claim + Claim Status */}
        <div className="md:col-span-2 space-y-6">
          {/* Submit a Claim */}
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <h2 className="text-lg font-medium mb-2">Submit a Claim</h2>
            <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6">
              Upload documentation and track the status of your claim
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Aircraft ID</label>
                <Input
                  placeholder="Enter Aircraft ID"
                  className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Date of Incident</label>
                <Input
                  type="date"
                  className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Location of Incident</label>
                <Input
                  placeholder="Enter Location of Incident"
                  className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pilot on Duty</label>
                <Input
                  placeholder="Enter Pilot's Full Name"
                  className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Claim Description</label>
              <Textarea
                placeholder="Enter Claim Description"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500 min-h-[100px]"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Upload Documentation</label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive
                    ? "border-amber-500 bg-[#d1a248]/10"
                    : "border-gray-300 hover:border-gray-400 dark:border-zinc-700 dark:hover:border-zinc-600"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <p className="text-sm text-gray-600 dark:text-zinc-400 mb-2">
                  Drag and Drop Files here (PDF, Image or Logbook)
                </p>
                <Button
                  className={`w-full ${
                    theme === "dark"
                      ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                      : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
                  }`}
                >
                  Upload File
                </Button>
              </div>
            </div>

            <Button
              className={`w-full ${
                theme === "dark"
                  ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                  : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
              }`}
            >
              Submit Claim
            </Button>
          </div>

          {/* Claim Status Panel */}
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <h2 className="text-lg font-medium mb-4">Claim Status Panel</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-zinc-700">
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      Claim ID
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      Aircraft
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      Date
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      AI Status Badge
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      AI Score
                    </th>
                    <th className="text-left py-3 px-2 text-sm font-medium text-gray-600 dark:text-zinc-500">
                      Documents
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 dark:border-zinc-700">
                    <td className="py-3 px-2 text-sm">M001</td>
                    <td className="py-3 px-2 text-sm">N123AB</td>
                    <td className="py-3 px-2 text-sm">2025-04-15</td>
                    <td className="py-3 px-2">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          theme === "dark" ? "bg-[#d1a248]/20 text-amber-500" : "bg-[#1a3e5d] text-white"
                        }`}
                      >
                        Pending
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-zinc-800 rounded-full h-2 dark:bg-zinc-700">
                          <div className="bg-[#d1a248] h-2 rounded-full" style={{ width: "72%" }}></div>
                        </div>
                        <span className="text-sm">72%</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <Button variant="link" className="text-blue-500 p-0 h-auto">
                        View
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Panel: Member Snapshot */}
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-800">
            <h2 className="text-lg font-medium mb-4">Member Snapshot</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-zinc-500">Tier Level:</p>
                <p className="text-sm text-blue-500">Pro Tier</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2 dark:text-zinc-500">Trust Score</p>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-lg font-bold">75</span>
                  <span className="text-zinc-400 dark:text-zinc-500">/100</span>
                </div>
                <Progress value={75} className="h-2 bg-zinc-800 dark:bg-zinc-700" indicatorClassName="bg-blue-500" />
              </div>
              <Button variant="link" className="text-amber-500 p-0 h-auto">
                View Full Claim History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
