"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function WalletConnection() {
  const { theme } = useTheme()

  return (
    <div className="p-4 md:p-8 min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8">
        <h1 className="text-2xl font-bold text-center sm:text-left">Wallet Connection</h1>
        <div className="flex flex-wrap gap-3 justify-center sm:justify-end items-center">
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
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className={theme === "dark" ? "text-zinc-400" : "text-gray-600"}
          >
            <Bell className="h-5 w-5" />
          </Button>
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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 px-4">
            <h2
              className={`text-2xl sm:text-3xl font-bold mb-2 ${
                theme === "dark" ? "text-[#d1a248]" : "text-[#143755]"
              }`}
            >
              Connect Your Wallet to Access Splend Coverage
            </h2>

          <p className={`text-base sm:text-lg ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
            Securely Access Splend Coverage
          </p>
        </div>

        {/* Wallet Buttons */}
        <div className="mb-10">
          <h3 className="text-xl font-medium mb-6 px-4 sm:px-0">Choose Wallet</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-0">
            {/* MetaMask */}
            <Button
              variant="outline"
              className={`h-20 w-full flex items-center justify-start p-6 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-700 hover:border-amber-500 hover:bg-zinc-800"
                  : "bg-white border-gray-200 hover:border-[#1a3e5d] hover:bg-gray-50"
              }`}
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <span className="text-base font-medium">Connect MetaMask</span>
            </Button>

            {/* Wallet Connect */}
            <Button
              variant="outline"
              className={`h-20 w-full flex items-center justify-start p-6 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-700 hover:border-amber-500 hover:bg-zinc-800"
                  : "bg-white border-gray-200 hover:border-[#1a3e5d] hover:bg-gray-50"
              }`}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-base font-medium">Wallet Connect</span>
            </Button>

            {/* Coinbase Wallet */}
            <Button
              variant="outline"
              className={`h-20 w-full flex items-center justify-start p-6 ${
                theme === "dark"
                  ? "bg-zinc-900 border-zinc-700 hover:border-amber-500 hover:bg-zinc-800"
                  : "bg-white border-gray-200 hover:border-[#1a3e5d] hover:bg-gray-50"
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <span className="text-base font-medium">Coinbase Wallet</span>
            </Button>
          </div>
        </div>

        {/* Status Note */}
        <div className="text-center px-4 sm:px-0 space-y-2">
          <div className="flex flex-wrap justify-center items-center gap-2">
            <span className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
              Status:
            </span>
            <span className="text-sm text-red-500">Wallet not connected</span>
          </div>
          <p className={`text-sm ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}>
            We never request private keys. Wallet use is non-custodial.
          </p>
        </div>
      </div>
    </div>
  )
}
