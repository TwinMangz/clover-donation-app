"use client"

import { Suspense } from "react"
import PaymentContent from "./payment-content"

export default function PaymentPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentContent />
    </Suspense>
  )
}