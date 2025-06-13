import { Bell, Search, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function PaymentHistory() {
  const payments = [
    { date: "14-04-2025", amount: "25 SPA", status: "Success", nextDue: "", statusColor: "text-green-500" },
    { date: "10-04-2025", amount: "25 USDC", status: "Missed", nextDue: "10-07-2025", statusColor: "text-red-500" },
    { date: "08-04-2025", amount: "25 SPA", status: "Upcoming", nextDue: "", statusColor: "text-blue-500" },
    { date: "14-04-2025", amount: "25 USDC", status: "Success", nextDue: "", statusColor: "text-green-500" },
    { date: "10-04-2025", amount: "25 SPA", status: "Missed", nextDue: "10-07-2025", statusColor: "text-red-500" },
    { date: "08-04-2025", amount: "25 SPA", status: "Upcoming", nextDue: "", statusColor: "text-blue-500" },
  ]

  return (
    <div className="p-4 lg:p-8">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8 space-y-4 lg:space-y-0">
        <h1 className="text-2xl font-bold">Payment History</h1>
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

      <div className="max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Payment History Lists</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Download className="h-4 w-4 mr-2" />
            Export CSV
          </Button>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Date</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-zinc-400">Next Due Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={index} className="border-t border-zinc-800">
                    <td className="p-4 text-sm">{payment.date}</td>
                    <td className="p-4 text-sm">{payment.amount}</td>
                    <td className="p-4">
                      <span className={`text-sm ${payment.statusColor}`}>{payment.status}</span>
                    </td>
                    <td className="p-4 text-sm text-zinc-400">{payment.nextDue}</td>
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
