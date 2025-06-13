import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"

export function GnosisSafeStatus() {

  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-black min-h-screen">
      {/* Header */}
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Gnosis Safe Status</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-gray-100 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 w-64 focus:border-amber-500 focus:ring-amber-500 text-gray-800 dark:text-white"
              />
            </div>
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

      {/* Content Section */}
      <div className="py-10 px-4">
        <div className="w-full max-w-xl mx-auto rounded-xl p-6 space-y-5 shadow-md bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800">
          {/* Inner Box 1 */}
          <div className="flex justify-between items-center rounded-md px-6 py-5 bg-zinc-100 dark:bg-zinc-800">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Treasury Balance</h2>
            <span
              className={`text-lg font-bold ${
                theme === "dark" ? "text-[#d1a248]" : "text-[#143755]"
              }`}
            >
              1234.56 ETH
            </span>
          </div>

          {/* Inner Box 2 */}
          <div className="flex justify-between items-center rounded-md px-6 py-5 bg-zinc-100 dark:bg-zinc-800">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Required Signatures</h2>
            <span className="text-lg font-medium text-gray-800 dark:text-white">3 of 5</span>
          </div>

          {/* Inner Box 3 */}
          <div className="flex justify-between items-center rounded-md px-6 py-5 bg-zinc-100 dark:bg-zinc-800">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Wallet Address</h2>
            <span className="text-lg font-mono text-gray-800 dark:text-white">0x1234...5678</span>
          </div>
        </div>
      </div>
    </div>
  )
}
