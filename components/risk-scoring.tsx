"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

export function RiskScoring() {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-8">
        <h1 className="text-2xl font-bold">Risk Scoring</h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-zinc-900 border-zinc-700 w-full focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          {/* Notification + Wallet */}
          <div className="flex items-center gap-3 justify-end">
            <Button variant="ghost" size="icon" className="text-zinc-400">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="bg-[#d1a248] hover:bg-[#b58b39] text-black w-full sm:w-auto">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Score Chart */}
      <div className="max-w-3xl mx-auto">
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
                className="text-zinc-800"
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
                <div className="text-sm text-zinc-400">Progress</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Score Summary */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-medium">Trust Score</h2>
          <p className="text-sm text-amber-500">Moderate Warning - Good Standing</p>
        </div>

        {/* Scoring Factors */}
        <div className="space-y-8">
          {[
            { label: "Staking Uptime", value: 80 },
            { label: "Voting Participation", value: 60 },
            { label: "Claim Reliability", value: 70 },
          ].map(({ label, value }) => (
            <div key={label} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium">{label}</label>
                <span className="text-sm font-medium">{value}%</span>
              </div>
              <div className="relative">
                <div className="h-2 bg-zinc-800 rounded-full">
                  <div className="h-2 bg-blue-500 rounded-full" style={{ width: `${value}%` }} />
                </div>
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full border-2 border-blue-500"
                  style={{ right: `${100 - value}%` }}
                />
              </div>
            </div>
          ))}

          {/* Health DAO Member */}
          <div className="flex items-start space-x-3 pt-4">
            <Checkbox
              id="health-dao"
              className="mt-1 data-[state=checked]:bg-[#d1a248] data-[state=checked]:border-amber-500"
            />
            <div>
              <label htmlFor="health-dao" className="text-sm font-medium cursor-pointer">
                Health DAO Member
              </label>
              <p className="text-xs text-zinc-400">Synergy boost applied to your trust score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
