"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { InsuranceDashboard } from "@/components/admin/insurance-dashboard"
import { AdminPanel } from "@/components/admin/admin-panel"
import { PaymentHistory } from "@/components/admin/payment-history"
import { AIVettingScore } from "@/components/admin/ai-vetting-score"
import { DAOVotingPanel } from "@/components/admin/dao-voting-panel"
import { Menu, X } from "lucide-react"

export default function AdminDashboard() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("insurance-dashboard")
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    const userRole = localStorage.getItem("userRole")
    if (!isLoggedIn || userRole !== "admin") {
      router.push("/auth")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userRole")
    router.push("/auth")
  }

  const renderContent = () => {
    switch (activeSection) {
      case "insurance-dashboard":
        return <InsuranceDashboard />
      case "admin-panel":
        return <AdminPanel />
      case "payment-history":
        return <PaymentHistory />
      case "ai-vetting-score":
        return <AIVettingScore />
      case "dao-voting-panel":
        return <DAOVotingPanel />
      default:
        return <InsuranceDashboard />
    }
  }

  const menuItems = [
    {
      id: "insurance-dashboard",
      label: "Insurance Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "admin-panel",
      label: "Admin Panel",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
    },
    {
      id: "payment-history",
      label: "Payment History",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
    {
      id: "ai-vetting-score",
      label: "AI Vetting Score",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: "dao-voting-panel",
      label: "DAO Voting Panel",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-black text-white">
      <div className="lg:hidden flex justify-between items-center px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <Image src="/logo-light.png" alt="Splend Coin" width={120} height={60} className="h-auto" />
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } lg:block w-full lg:w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col fixed lg:static z-40 h-full overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex flex-col items-center mb-8">
            <div className="flex justify-center w-full">
              <Image src="/logo-light.png" alt="Splend Coin" width={120} height={60} className="h-auto" />
            </div>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setMenuOpen(false)
                }}
                className={`flex items-center w-full px-4 py-3 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? "bg-[#be9244] text-black"
                    : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-4 border-t border-zinc-800">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm text-red-500 hover:bg-zinc-800 rounded-md transition-colors"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto pt-16 lg:pt-0">{renderContent()}</div>
    </div>
  )
}
