import { Bell, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AIVettingScore() {
  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">AI Vetting Score</h1>
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

      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-medium mb-8">AI Analysis</h2>

        {/* Bar Chart */}
        <div className="mb-8">
          <div className="flex items-end justify-center space-x-8 h-64 mb-4">
            {/* Aircraft Risk */}
            <div className="flex flex-col items-center">
              <div className="bg-red-500 w-16 rounded-t" style={{ height: "35%" }}></div>
              <span className="text-sm mt-2">Aircraft Risk</span>
            </div>

            {/* Pilot Log Score */}
            <div className="flex flex-col items-center">
              <div className="bg-green-500 w-16 rounded-t" style={{ height: "45%" }}></div>
              <span className="text-sm mt-2">Pilot Log Score</span>
            </div>

            {/* Past Claim Behavior */}
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 w-16 rounded-t" style={{ height: "30%" }}></div>
              <span className="text-sm mt-2">Past Claim Behavior</span>
            </div>
          </div>

          {/* Y-axis labels */}
          <div className="flex justify-center mb-4">
            <div className="text-xs text-zinc-400 space-y-4">
              <div>50</div>
              <div>40</div>
              <div>30</div>
              <div>20</div>
              <div>10</div>
              <div>0</div>
            </div>
          </div>
        </div>

        {/* Risk Band */}
        <div className="bg-amber-600/20 border border-amber-600 rounded-lg p-4 mb-8">
          <span className="text-amber-500 font-medium">Risk Band: Medium-High</span>
        </div>

        {/* AI Notes */}
        <div>
          <h3 className="text-lg font-medium mb-4">AI Notes</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              High risk insured due to recent claims activity.
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-2">•</span>
              Consider higher premiums or coverage limits
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
