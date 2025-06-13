"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { DollarSign, Bell, Search, Users, Activity, Coins, ChevronDown, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { WalletConnection } from "@/components/wallet-connection"
import { RiskMetrics } from "@/components/risk-metrics"
import { GnosisSafeStatus } from "@/components/gnosis-safe-status"
import { Staking } from "@/components/staking"
import { TierCalculator } from "@/components/tier-calculator"
import { ProtectionVisualizer } from "@/components/protection-visualizer"
import { Claims } from "@/components/claims"
import { AircraftSpecificForm } from "@/components/aircraft-specific-form"
import { PilotLogIntegration } from "@/components/pilot-log-integration"
import { AIValidationStatus } from "@/components/ai-validation-status"
import { RiskScoring } from "@/components/risk-scoring"
import { DAOMetrics } from "@/components/dao-metrics"
import { TermsConditions } from "@/components/terms-conditions"

export default function Dashboard() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState("dashboard")
  const [coreExpanded, setCoreExpanded] = useState(false)
  const [stakingExpanded, setStakingExpanded] = useState(false)
  const [claimsExpanded, setClaimsExpanded] = useState(false)
  const [analyticsExpanded, setAnalyticsExpanded] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState("dark") // Assuming dark theme by default

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
    const userRole = localStorage.getItem("userRole")

    if (!isLoggedIn) {
      router.push("/auth")
    } else if (userRole === "admin") {
      router.push("/admin")
    }
  }, [router])

  const closeSidebar = () => setSidebarOpen(false)

  const renderContent = () => {
    switch (activeSection) {
      case "wallet-connection":
        return <WalletConnection />
      case "risk-metrics":
        return <RiskMetrics />
      case "gnosis-safe-status":
        return <GnosisSafeStatus />
      case "staking":
        return <Staking />
      case "tier-calculator":
        return <TierCalculator />
      case "protection-visualizer":
        return <ProtectionVisualizer />
      case "claims":
        return <Claims />
      case "aircraft-specific-form":
        return <AircraftSpecificForm />
      case "pilot-log-integration":
        return <PilotLogIntegration />
      case "ai-validation-status":
        return <AIValidationStatus />
      case "risk-scoring":
        return <RiskScoring />
      case "dao-metrics":
        return <DAOMetrics />
      case "terms-conditions":
        return <TermsConditions />
      default:
        return <DashboardContent />
    }
  }

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeSidebar} />}

      {/* Sidebar */}
      <div
        className={`${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-50 w-64 bg-zinc-900 border-r border-zinc-800 flex flex-col transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6">
          {/* Centered Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex items-center justify-between w-full mb-4">
              <div className="flex-1"></div>
              <Button variant="ghost" size="icon" className="lg:hidden" onClick={closeSidebar}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center w-full">
              <Image
                src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
                alt="Splend Coin"
                width={120}
                height={60}
                className="h-auto"
              />
            </div>
          </div>

          <nav className="space-y-1">
            <button
              onClick={() => {
                setActiveSection("dashboard")
                closeSidebar()
              }}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                activeSection === "dashboard" ? "bg-zinc-800 text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </button>

            {/* Core Section */}
            <div>
              <button
                onClick={() => setCoreExpanded(!coreExpanded)}
                className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                  ["wallet-connection", "risk-metrics", "gnosis-safe-status"].includes(activeSection)
                    ? "text-[#be9244]"
                    : "text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
                Core
                {coreExpanded ? (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </button>

              {coreExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      setActiveSection("wallet-connection")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "wallet-connection" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Wallet Connection
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("risk-metrics")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "risk-metrics" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Risk Metrics
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("gnosis-safe-status")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "gnosis-safe-status" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Gnosis Safe Status
                  </button>
                </div>
              )}
            </div>

            {/* Staking Section */}
            <div>
              <button
                onClick={() => setStakingExpanded(!stakingExpanded)}
                className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                  ["staking", "tier-calculator", "protection-visualizer"].includes(activeSection)
                    ? "text-[#be9244]"
                    : "text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Staking
                {stakingExpanded ? (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </button>

              {stakingExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      setActiveSection("staking")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "staking" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Overview
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("tier-calculator")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "tier-calculator" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Tier Calculator
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("protection-visualizer")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "protection-visualizer" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Protection Visualizer
                  </button>
                </div>
              )}
            </div>

            {/* Claims Section */}
            <div>
              <button
                onClick={() => setClaimsExpanded(!claimsExpanded)}
                className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                  ["claims", "aircraft-specific-form", "pilot-log-integration", "ai-validation-status"].includes(
                    activeSection,
                  )
                    ? "text-[#be9244]"
                    : "text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Claims
                {claimsExpanded ? (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </button>

              {claimsExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      setActiveSection("claims")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "claims" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Overview
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("aircraft-specific-form")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "aircraft-specific-form" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Aircraft Specific Form
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("pilot-log-integration")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "pilot-log-integration" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Pilot Log Integration
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("ai-validation-status")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "ai-validation-status" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    AI Validation Status
                  </button>
                </div>
              )}
            </div>

            {/* Analytics Section */}
            <div>
              <button
                onClick={() => setAnalyticsExpanded(!analyticsExpanded)}
                className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                  ["risk-scoring", "dao-metrics"].includes(activeSection)
                    ? "text-[#be9244]"
                    : "text-zinc-400 hover:bg-zinc-800"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  />
                </svg>
                Analytics
                {analyticsExpanded ? (
                  <ChevronDown className="ml-auto h-4 w-4" />
                ) : (
                  <ChevronRight className="ml-auto h-4 w-4" />
                )}
              </button>

              {analyticsExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  <button
                    onClick={() => {
                      setActiveSection("risk-scoring")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "risk-scoring" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    Risk Scoring
                  </button>
                  <button
                    onClick={() => {
                      setActiveSection("dao-metrics")
                      closeSidebar()
                    }}
                    className={`flex items-center w-full px-4 py-2 text-sm rounded-md ${
                      activeSection === "dao-metrics" ? "text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
                    }`}
                  >
                    <div className="w-2 h-2 bg-[#be9244] rounded-full mr-3"></div>
                    DAO Metrics
                  </button>
                </div>
              )}
            </div>

            {/* Terms & Conditions */}
            <button
              onClick={() => {
                setActiveSection("terms-conditions")
                closeSidebar()
              }}
              className={`flex items-center w-full px-4 py-3 text-sm rounded-md ${
                activeSection === "terms-conditions" ? "bg-zinc-800 text-[#be9244]" : "text-zinc-400 hover:bg-zinc-800"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Terms & Conditions
            </button>
          </nav>
        </div>
        <div className="mt-auto p-4 border-t border-zinc-800">
          <button className="flex items-center w-full px-4 py-3 text-sm text-red-500 hover:bg-zinc-800 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800">
          <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <Image
            src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
            alt="Splend Coin"
            width={100}
            height={50}
            className="h-auto"
          />
          <Button className="bg-[#be9244] hover:bg-[#a67d3a] text-black text-sm px-3 py-1">Connect</Button>
        </div>
        {renderContent()}
      </div>
    </div>
  )
}

function DashboardContent() {
  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-zinc-900 border-zinc-700 w-64 focus:border-[#be9244] focus:ring-[#be9244]"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-zinc-400 hidden lg:flex">
            <Bell className="h-5 w-5" />
          </Button>
          <Button className="bg-[#be9244] hover:bg-[#a67d3a] text-black hidden lg:flex">Connect Wallet</Button>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Wallet Status */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">Wallet Status</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-zinc-400">Wallet Address:</p>
              <p className="text-sm font-mono break-all">0xabcdef1234567890ab...</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Staking Status:</p>
              <p className="text-sm text-green-500">Active</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 mt-6">
              <Button className="flex-1 bg-[#be9244] hover:bg-[#a67d3a] text-black text-xs">Switch Wallet</Button>
              <Button variant="outline" className="flex-1 border-zinc-700 hover:bg-zinc-800 text-xs">
                Disconnect
              </Button>
            </div>
          </div>
        </div>

        {/* SPA Balance & Tier */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">SPA Balance & Tier</h2>
          <div className="space-y-4">
            <div>
              <p className="text-xl font-bold">35 SPA</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Your Tier:</p>
              <p className="text-sm text-blue-400">Pro</p>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to Elite</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="h-2 bg-zinc-800" indicatorClassName="bg-blue-500" />
            </div>
          </div>
        </div>

        {/* Coverage Snapshot */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">Coverage Snapshot</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-zinc-400">Coverage Limit:</p>
              <p className="text-sm">$150K</p>
            </div>
            <div>
              <p className="text-sm text-zinc-400">Aircraft Risk Rating:</p>
              <p className="text-sm text-[#be9244]">Low</p>
            </div>
            <div className="mt-4">
              <p className="text-xs text-green-500">Protected by the Collective</p>
            </div>
          </div>
        </div>

        {/* Surplus Participation */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">Surplus Participation</h2>
          <div className="space-y-4">
            <p className="text-blue-400 font-medium">Requires 50+ SPA</p>
            <p className="text-sm">Stake more to participate</p>
            <p className="text-sm text-zinc-400">Snapshot: Dec 31 (178 days left)</p>
          </div>
        </div>

        {/* Trust Score */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">Trust Score</h2>
          <div className="space-y-4">
            <div className="flex items-baseline">
              <span className="text-xl font-bold text-[#be9244]">85</span>
              <span className="text-zinc-400 ml-1">/ 100</span>
            </div>
            <p className="text-sm">Improve by voting & participating</p>
            <Progress value={85} className="h-2 bg-zinc-800" indicatorClassName="bg-[#be9244]" />
          </div>
        </div>

        {/* Claims Status */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-lg font-medium mb-4">Claims Status</h2>
          <div className="space-y-4">
            <p className="text-sm">No active claims yet</p>
            <Button className="w-full bg-[#be9244] hover:bg-[#a67d3a] text-black mt-4">Submit New Claim</Button>
          </div>
        </div>
      </div>

      {/* DAO Metrics */}
      <div className="mt-8">
        <h2 className="text-lg font-medium mb-4">DAO Metrics (Optional)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 flex items-center">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Treasury Health</p>
              <p className="text-xl font-bold">$1.2M</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 flex items-center">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <Coins className="h-6 w-6 text-[#be9244]" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Total SPA Staked</p>
              <p className="text-xl font-bold">750,000</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 flex items-center">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Member Count</p>
              <p className="text-xl font-bold">1,234</p>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 flex items-center">
            <div className="bg-zinc-800 p-3 rounded-full mr-4">
              <Activity className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Governance Rate</p>
              <p className="text-xl font-bold">68%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
