"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function AdminPanel() {
  const [activeTab, setActiveTab] = useState("all")

  const users = [
    {
      wallet: "0x1234...5678",
      tier: "Pro",
      aiStatus: "Approved",
      daoApproval: true,
      lastPayment: "08-04-2024",
      statusColor: "text-blue-500",
    },
    {
      wallet: "0x4785...4321",
      tier: "Basic",
      aiStatus: "Flagged",
      daoApproval: true,
      lastPayment: "06-04-2024",
      statusColor: "text-green-500",
    },
    {
      wallet: "0x1234...5678",
      tier: "Pro",
      aiStatus: "Pending",
      daoApproval: false,
      lastPayment: "05-04-2024",
      statusColor: "text-blue-500",
    },
    {
      wallet: "0x4785...4321",
      tier: "Elite",
      aiStatus: "Flagged",
      daoApproval: true,
      lastPayment: "02-04-2024",
      statusColor: "text-amber-500",
    },
    {
      wallet: "0x1234...5678",
      tier: "Pro",
      aiStatus: "Approved",
      daoApproval: false,
      lastPayment: "08-04-2024",
      statusColor: "text-blue-500",
    },
    {
      wallet: "0x4785...4321",
      tier: "Basic",
      aiStatus: "Flagged",
      daoApproval: true,
      lastPayment: "06-04-2024",
      statusColor: "text-green-500",
    },
    {
      wallet: "0x1234...5678",
      tier: "Pro",
      aiStatus: "Pending",
      daoApproval: false,
      lastPayment: "05-04-2024",
      statusColor: "text-blue-500",
    },
    {
      wallet: "0x4785...4321",
      tier: "Elite",
      aiStatus: "Flagged",
      daoApproval: true,
      lastPayment: "02-04-2024",
      statusColor: "text-amber-500",
    },
  ]

  const tabs = [
    { id: "all", label: "All users", color: "bg-amber-500" },
    { id: "flagged", label: "Flagged", color: "bg-red-500" },
    { id: "unpaid", label: "Unpaid", color: "bg-orange-500" },
    { id: "pending", label: "Pending Approval", color: "bg-blue-500" },
  ]

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-zinc-900 border-zinc-700 w-64 focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-zinc-400 hidden lg:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black text-sm font-medium">EC</span>
            </div>
            <span className="text-sm hidden lg:block">Eastern Cox</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl">
        <h2 className="text-xl font-medium mb-6">Manage Users</h2>

        {/* Tabs */}
        <div className="flex space-x-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded text-sm font-medium ${
                activeTab === tab.id ? `${tab.color} text-white` : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Wallet Address</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Tier</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">AI Status</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">DAO Approval</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Last Payment</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className="border-t border-zinc-800">
                    <td className="p-4 text-sm font-mono">{user.wallet}</td>
                    <td className="p-4">
                      <span className={`text-sm ${user.statusColor}`}>{user.tier}</span>
                    </td>
                    <td className="p-4 text-sm">{user.aiStatus}</td>
                    <td className="p-4">
                      {user.daoApproval ? (
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                      ) : (
                        <div className="w-4 h-4 bg-zinc-600 rounded"></div>
                      )}
                    </td>
                    <td className="p-4 text-sm text-zinc-400">{user.lastPayment}</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs">
                          Force Approve
                        </Button>
                        <Button size="sm" variant="destructive" className="text-xs">
                          Revoke
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
