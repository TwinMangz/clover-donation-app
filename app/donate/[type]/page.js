"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function DonatePage() {

  const router = useRouter()

  const [amount, setAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one")

  const amounts = [10,20,30,40,50,60,70]

  const handlePayment = () => {

    const finalAmount = amount === "custom" ? customAmount : amount

    if(!finalAmount){
      alert("Please select or enter amount")
      return
    }

    router.push(`/payment?amount=${finalAmount}&type=${donationType}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-xl mx-auto">

      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 mb-8 text-gray-700 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50"
      >
        ← Back
      </button>

      <h2 className="text-2xl font-bold mb-6">
        How much would you like to donate?
      </h2>

      {/* Amount Buttons */}
      <div className="grid grid-cols-4 gap-3 mb-6">

        {amounts.map((a) => (

          <button
            key={a}
            onClick={() => setAmount(a)}
            className={`p-3 rounded-xl border text-lg font-medium
            ${amount === a
            ? "bg-green-500 text-white border-green-500"
            : "bg-white"}
            `}
          >
            ${a}
          </button>

        ))}

        {/* Custom button */}
        <button
          onClick={() => setAmount("custom")}
          className={`p-3 rounded-xl border
          ${amount === "custom" ? "bg-green-500 text-white" : "bg-white"}
          `}
        >
          Custom
        </button>

      </div>

      {/* Custom Amount Field */}
      {amount === "custom" && (

        <div className="mb-8">

          <label className="block mb-2 font-medium">
            Enter Amount
          </label>

          <div className="flex items-center border rounded-xl bg-white px-4">

            <span className="text-xl font-semibold mr-2">
              $
            </span>

            <input
              type="number"
              placeholder="Enter amount"
              value={customAmount}
              onChange={(e)=>setCustomAmount(e.target.value)}
              className="w-full p-3 outline-none"
            />

          </div>

        </div>

      )}

      {/* Recurring */}
      <h3 className="text-xl font-semibold mb-4">
        Recurring or One Time?
      </h3>

      <div className="flex gap-4 mb-8">

        <button
          onClick={() => setDonationType("one")}
          className={`px-6 py-3 rounded-xl border
          ${donationType==="one"
          ? "bg-green-500 text-white"
          : "bg-white"}`}
        >
          One Time
        </button>

        <button
          onClick={() => setDonationType("monthly")}
          className={`px-6 py-3 rounded-xl border
          ${donationType==="monthly"
          ? "bg-green-500 text-white"
          : "bg-white"}`}
        >
          Monthly
        </button>

      </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full border rounded-xl p-4 mb-8"
      />

      {/* Payment Button */}
      <div className="flex justify-center">

        <button
          onClick={handlePayment}
          className="bg-green-600 text-white px-10 py-4 rounded-xl text-lg hover:bg-green-700"
        >
          Make Payment
        </button>

      </div>

    </div>
  )
}