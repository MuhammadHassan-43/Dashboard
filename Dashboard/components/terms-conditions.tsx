"use client"

import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function TermsConditions() {
  const { theme } = useTheme()

  return (
    <div className="p-4 lg:p-8 bg-gray-50 dark:bg-black min-h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">Terms & Conditions</h1>
        <div className="flex items-center space-x-4">
          <div className="relative hidden lg:block">
            <Search
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 ${
                theme === "dark" ? "text-zinc-400" : "text-gray-500"
              }`}
            />
            <Input
              placeholder="Search..."
              className={`pl-10 w-64 focus:border-amber-500 focus:ring-amber-500 ${
                theme === "dark" ? "bg-zinc-900 border-zinc-700" : "bg-white border-gray-300"
              }`}
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className={`hidden lg:flex ${theme === "dark" ? "text-zinc-400" : "text-gray-600"}`}
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

      <div className={`max-w-4xl mx-auto space-y-8 ${theme === "dark" ? "text-zinc-300" : "text-black"}`}>
        {/* Introduction */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            Welcome to our website. By accessing or using our website, you agree to be bound by these Terms and
            Conditions and our Privacy Policy. If you disagree with any part of these terms, please do not use our
            website.
          </p>
        </section>

        {/* Definitions */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            2. Definitions
          </h2>
          <div className="space-y-3">
            <p>
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Terms"</strong> means these Terms and
              Conditions.
            </p>
            <p>
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Service"</strong> refers to the
              website.
            </p>
            <p>
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"User", "You"</strong> and{" "}
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Your"</strong> refers to the
              individual accessing or using the Service, or the company, or other legal entity on behalf.
            </p>
            <p>
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Company", "We", "Us"</strong> and{" "}
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Our"</strong> refers to the owner of
              this website.
            </p>
            <p>
              <strong className={theme === "dark" ? "text-white" : "text-black"}>"Content"</strong> means all content
              such as text, images, graphics, logos, audio clips, digital downloads, data, and software.
            </p>
          </div>
        </section>

        {/* Use License */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            3. Use License
          </h2>
          <p className="mb-4 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials on our website for personal,
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under
            this license you may not:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start">
              <span className={`mr-2 ${theme === "dark" ? "text-amber-500" : "text-[#1a3e5d]"}`}>•</span>
              Modify or copy the materials;
            </li>
            <li className="flex items-start">
              <span className={`mr-2 ${theme === "dark" ? "text-amber-500" : "text-[#1a3e5d]"}`}>•</span>
              Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);
            </li>
            <li className="flex items-start">
              <span className={`mr-2 ${theme === "dark" ? "text-amber-500" : "text-[#1a3e5d]"}`}>•</span>
              Attempt to decompile or reverse engineer any software contained on the website;
            </li>
            <li className="flex items-start">
              <span className={`mr-2 ${theme === "dark" ? "text-amber-500" : "text-[#1a3e5d]"}`}>•</span>
              Remove any copyright or other proprietary notations from the materials; or
            </li>
            <li className="flex items-start">
              <span className={`mr-2 ${theme === "dark" ? "text-amber-500" : "text-[#1a3e5d]"}`}>•</span>
              Transfer the materials to another person or "mirror" the materials on any other server.
            </li>
          </ul>
          <p className="mt-4 leading-relaxed">
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by
            us at any time. Upon terminating your viewing of these materials or upon the termination of this license,
            you must destroy any downloaded materials in your possession whether in electronic or printed format.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            4. Governing Law
          </h2>
          <p className="leading-relaxed">
            These terms and conditions are governed by and construed in accordance with the laws and you irrevocably
            submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        {/* Cryptocurrency and DeFi Specific Terms */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            5. Cryptocurrency and DeFi Services
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Risk Disclosure:</strong>{" "}
              Cryptocurrency and decentralized finance (DeFi) activities involve substantial risk. The value of digital
              assets can be extremely volatile and may result in significant losses.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>No Financial Advice:</strong> The
              information provided on this platform does not constitute financial, investment, trading, or other types
              of advice and you should not treat any of the platform's content as such.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Smart Contract Risks:</strong> Our
              services may involve smart contracts on various blockchain networks. Smart contracts are subject to
              various risks including but not limited to coding errors, network congestion, and potential exploits.
            </p>
          </div>
        </section>

        {/* Insurance Coverage Terms */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            6. Insurance Coverage
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Coverage Limitations:</strong>{" "}
              Insurance coverage is subject to the terms and conditions of the specific policy and may have limitations,
              exclusions, and deductibles.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Claims Process:</strong> All insurance
              claims must be submitted through the designated process and are subject to verification and approval by
              the DAO governance mechanism.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Premium Payments:</strong> Continued
              coverage requires timely payment of premiums. Failure to pay premiums may result in coverage termination.
            </p>
          </div>
        </section>

        {/* Staking and Governance */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            7. Staking and Governance
          </h2>
          <div className="space-y-4">
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Staking Requirements:</strong>{" "}
              Participation in governance and certain platform features requires staking of SPA tokens. Staked tokens
              may be subject to lock-up periods.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Voting Rights:</strong> Token holders
              may participate in governance decisions through the DAO voting mechanism. Voting power is typically
              proportional to the number of tokens staked.
            </p>
            <p className="leading-relaxed">
              <strong className={theme === "dark" ? "text-white" : "text-black"}>Slashing Risks:</strong> In certain
              circumstances, staked tokens may be subject to slashing penalties for malicious behavior or protocol
              violations.
            </p>
          </div>
        </section>

        {/* Privacy and Data */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            8. Privacy and Data Protection
          </h2>
          <p className="leading-relaxed">
            Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
            information when you use our Service. By using our Service, you agree to the collection and use of
            information in accordance with our Privacy Policy.
          </p>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            9. Limitation of Liability
          </h2>
          <p className="leading-relaxed">
            In no event shall Splend Coin, nor its directors, employees, partners, agents, suppliers, or affiliates, be
            liable for any indirect, incidental, special, consequential, or punitive damages, including without
            limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the
            Service.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            10. Changes to Terms
          </h2>
          <p className="leading-relaxed">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
            material, we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className={`text-xl font-semibold mb-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
            11. Contact Information
          </h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at legal@splendcoin.com or
            through our official communication channels.
          </p>
        </section>

        {/* Effective Date */}
        <section className="border-t border-zinc-800 pt-6">
          <p className="text-sm text-zinc-500">
            <strong>Last Updated:</strong> December 2024
          </p>
          <p className="text-sm text-zinc-500 mt-2">
            <strong>Effective Date:</strong> January 1, 2025
          </p>
        </section>
      </div>
    </div>
  )
}
