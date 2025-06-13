"use client"

import {
  Bell,
  Search,
  TrendingUp,
  TrendingDown,
  Building,
  Users,
  FileCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function DAOMetrics() {
  const { theme } = useTheme()

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 dark:bg-black min-h-screen">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 gap-4">
        <h1 className="text-2xl font-bold">DAO Metrics</h1>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search..."
              className={`pl-10 w-full focus:border-amber-500 focus:ring-amber-500 ${
                theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-gray-300"
              }`}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 justify-end">
            <Button
              variant="ghost"
              size="icon"
              className={`${theme === "dark" ? "text-zinc-400" : "text-gray-600"} hidden lg:flex`}
            >
              <Bell className="h-5 w-5" />
            </Button>
            <ThemeToggle />
            <Button
              className={`hidden lg:flex ${
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

      {/* Content */}
      <div className="max-w-6xl mx-auto w-full">
        <p
          className={`text-sm mb-8 ${
            theme === "dark" ? "text-zinc-400" : "text-gray-600"
          }`}
        >
          Overview of key performance indicators for the DAO ecosystem.
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* CARD TEMPLATE FUNCTION */}
          {[
            {
              title: "Treasury Total",
              icon: <Building className="h-5 w-5 text-green-500" />,
              change: "+5% vs Last Period",
              changeIcon: <TrendingUp className="h-3 w-3" />,
              changeColor: "text-green-500",
              value: "$1,250,000",
            },
            {
              title: "Member Count",
              icon: <Users className="h-5 w-5 text-blue-500" />,
              change: "+10 this vs Last Period",
              changeIcon: <TrendingUp className="h-3 w-3" />,
              changeColor: "text-green-500",
              value: "1,530",
            },
            {
              title: "Proposal Voting",
              icon: (
                <svg
                  className="h-5 w-5 text-amber-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              change: "-12% vs Last Period",
              changeIcon: <TrendingDown className="h-3 w-3" />,
              changeColor: "text-red-500",
              value: "78%",
            },
            {
              title: "Claims Processed",
              icon: <FileCheck className="h-5 w-5 text-blue-500" />,
              change: "+300 this week vs Last Period",
              changeIcon: <TrendingUp className="h-3 w-3" />,
              changeColor: "text-green-500",
              value: "8,240",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`rounded-lg p-6 border ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-full ${
                      theme === "dark" ? "bg-zinc-800" : "bg-gray-100"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-sm ${
                      theme === "dark" ? "text-zinc-400" : "text-gray-600"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <div
                  className={`flex items-center space-x-1 text-xs ${item.changeColor}`}
                >
                  {item.changeIcon}
                  <span>{item.change}</span>
                </div>
              </div>
              <div className="text-2xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p
          className={`text-xs text-center ${
            theme === "dark" ? "text-zinc-500" : "text-gray-500"
          }`}
        >
          Note: Data shown is illustrative. For live data, integration with Gnosis Safe SDK and Snapshot API would be
          required.
        </p>
      </div>
    </div>
  )
}
