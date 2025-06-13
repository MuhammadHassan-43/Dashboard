import { Bell, Search, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AIValidationStatus() {
  const claims = [
    {
      id: "Policy #P7890-A",
      submitted: "2025-04-28",
      status: "Approved",
      amount: "$1,250.00",
      statusColor: "text-green-500 bg-green-500/20",
    },
    {
      id: "Policy #P1234-B",
      submitted: "2025-05-01",
      status: "Flagged",
      amount: "$300.50",
      statusColor: "text-red-500 bg-red-500/20",
    },
    {
      id: "Policy #P5678-C",
      submitted: "2025-05-03",
      status: "In Review",
      amount: "$5,800.00",
      statusColor: "text-amber-500 bg-[#d1a248]/20",
    },
    {
      id: "Policy #P7890-A",
      submitted: "2025-04-28",
      status: "Approved",
      amount: "$1,250.00",
      statusColor: "text-green-500 bg-green-500/20",
    },
    {
      id: "Policy #P1234-B",
      submitted: "2025-05-01",
      status: "Flagged",
      amount: "$300.50",
      statusColor: "text-red-500 bg-red-500/20",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-50 dark:bg-black min-h-screen">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center mb-8">
        <h1 className="text-xl md:text-2xl font-bold">AI Validation Status</h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3">
          {/* Search (only visible on md+) */}
          <div className="relative hidden md:block w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search..."
              className="pl-10 bg-zinc-900 border-zinc-700 w-full focus:border-amber-500 focus:ring-amber-500"
            />
          </div>

          <div className="flex gap-2 justify-end">
            <Button variant="ghost" size="icon" className="text-zinc-400 hidden md:flex">
              <Bell className="h-5 w-5" />
            </Button>
            <Button className="bg-[#d1a248] hover:bg-[#b58b39] text-black hidden md:flex">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-600 dark:text-zinc-400 mb-6">
          Real-time status of claims processed by the AI validation Status.
        </p>

        {/* Claim Cards */}
        <div className="space-y-4">
          {claims.map((claim, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-zinc-900 rounded-lg p-4 sm:p-6 border border-gray-200 dark:border-zinc-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                {/* Claim Info */}
                <div>
                  <h3 className="font-medium text-sm sm:text-base">{claim.id}</h3>
                  <p className="text-sm text-gray-500 dark:text-zinc-400">
                    Submitted: {claim.submitted}
                  </p>
                </div>

                {/* Claim Status */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm whitespace-nowrap ${claim.statusColor}`}
                  >
                    {claim.status}
                  </span>
                  <span className="font-medium text-sm sm:text-base">{claim.amount}</span>
                  <Info className="h-4 w-4 text-zinc-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 dark:text-zinc-500 mt-6 text-center">
          Note: Claim data is illustrative. AI validation results are typically sourced from an
          off-chain service.
        </p>
      </div>
    </div>
  );
}
