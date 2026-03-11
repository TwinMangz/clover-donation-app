"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function PaymentContent() {
  const params = useSearchParams();
  const router = useRouter();

  const amount = params.get("amount");
  const type = params.get("type");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Confirm Donation</h2>

        <p className="text-lg mb-2">Amount: ${amount}</p>

        <p className="text-lg mb-6">
          Type: {type === "monthly" ? "Monthly" : "One Time"}
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 rounded-xl border"
          >
            Cancel
          </button>

          <button className="px-6 py-3 rounded-xl bg-green-600 text-white">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
