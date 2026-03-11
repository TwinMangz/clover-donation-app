"use client"

import { useSearchParams, useRouter } from "next/navigation"

export default function PaymentPage(){

  const params = useSearchParams()
  const router = useRouter()

  const amount = params.get("amount")
  const type = params.get("type")

  const handleCancel = () => {
    router.push("/")
  }

  return(

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">

      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">

        <h2 className="text-2xl font-bold mb-6">
          Confirm Donation
        </h2>

        <p className="text-lg mb-2">
          Amount: <span className="font-semibold">${amount}</span>
        </p>

        <p className="text-lg mb-8">
          Type: <span className="font-semibold">
            {type === "monthly" ? "Monthly" : "One Time"}
          </span>
        </p>

        <div className="flex gap-4 justify-center">

          {/* Cancel */}
          <button
            onClick={handleCancel}
            className="px-6 py-3 rounded-xl border border-gray-400 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>

          {/* Proceed */}
          <button
            className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700"
          >
            Proceed to Pay
          </button>

        </div>

      </div>

    </div>
  )
}