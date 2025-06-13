import { Bell, Search, BarChart3, FileText, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function DAOVotingPanel() {
  const proposals = [
    { id: "0x1234...5678", approved: true, denied: false },
    { id: "0x1234...5678", approved: true, denied: false },
    { id: "0x1234...5678", approved: true, denied: false },
    { id: "0x1234...5678", approved: true, denied: false },
    { id: "0x1234...5678", approved: true, denied: false },
  ]

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">DAO Voting Panel</h1>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Proposals Lists */}
        <div>
          <h2 className="text-xl font-medium mb-6">Proposals Lists</h2>
          <div className="space-y-4">
            {proposals.map((proposal, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <span className="font-mono text-sm">{proposal.id}</span>
                <div className="flex space-x-2">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    Deny
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div>
          <h2 className="text-xl font-medium mb-6">Metrics</h2>
          <div className="space-y-6">
            {/* Total Votes */}
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5 text-blue-500" />
                <span>Total Votes</span>
              </div>
              <span className="text-2xl font-bold">44</span>
            </div>

            {/* Active Proposals */}
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="flex items-center space-x-3">
                <FileText className="h-5 w-5 text-green-500" />
                <span>Active Proposals</span>
              </div>
              <span className="text-2xl font-bold">05</span>
            </div>

            {/* Past Voting */}
            <div className="flex items-center justify-between p-4 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-amber-500" />
                <span>Past Voting</span>
              </div>
              <span className="text-2xl font-bold">40</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
