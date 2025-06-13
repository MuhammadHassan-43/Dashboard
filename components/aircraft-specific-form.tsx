"use client"

import type React from "react"
import { Bell, Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function AircraftSpecificForm() {
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
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
        <h1 className="text-xl sm:text-2xl font-bold">Aircraft Specific Form</h1>
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3">
          {/* Search */}
          <div className="relative hidden md:block w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 w-full focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
            />
          </div>

          {/* Bell Icon */}
          <Button variant="ghost" size="icon" className="text-zinc-400 hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Connect Wallet */}
          <Button
            className={`hidden md:flex ${
              theme === "dark"
                ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
            }`}
          >
            Connect Wallet
          </Button>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-zinc-800">
          <h2 className="text-lg sm:text-xl font-semibold mb-1">Aircraft Incident Report</h2>
          <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6">
            Please provide detailed information about the incident.
          </p>

          <div className="space-y-6">
            {/* Tail Number */}
            <div>
              <label className="block text-sm font-medium mb-2">Tail Number</label>
              <Input
                defaultValue="N123AB"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500 focus:ring-[#1a3e5d] dark:focus:ring-amber-500"
              />
            </div>

            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Incident Date</label>
                <Input type="date" className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Incident Time</label>
                <Input type="time" className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500" />
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium mb-2">Incident Location</label>
              <Input
                placeholder="Enter Incident Location"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 focus:border-[#1a3e5d] dark:focus:border-amber-500"
              />
            </div>

            {/* Pilot Name & License */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Pilot Name</label>
                <Input placeholder="Enter Pilot Name" className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">License Number</label>
                <Input placeholder="License Number" className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700" />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">Incident Description</label>
              <Textarea
                placeholder="Enter Incident Description"
                className="bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700 min-h-[120px]"
              />
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">Supporting Documents</label>
              <div
                className={`border-2 border-dashed rounded-lg p-6 sm:p-8 text-center transition-colors ${
                  dragActive
                    ? "border-amber-500 bg-[#d1a248]/10"
                    : "border-gray-300 hover:border-gray-400 dark:border-zinc-700 dark:hover:border-zinc-600"
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload className="h-10 w-10 sm:h-12 sm:w-12 text-amber-500 mx-auto mb-4" />
                <p className="text-sm text-gray-600 dark:text-zinc-400 mb-2">
                  Drag and drop files here (PDF, Image or Logbook)
                </p>
                <Button
                  className={
                    theme === "dark"
                      ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                      : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
                  }
                >
                  Upload File
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              className={`w-full ${
                theme === "dark"
                  ? "bg-[#d1a248] hover:bg-[#b58b39] text-black"
                  : "bg-[#1a3e5d] hover:bg-[#143755] text-white"
              }`}
            >
              Submit Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
