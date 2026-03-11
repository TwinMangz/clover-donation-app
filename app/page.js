"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  const items = [
    { name: "Temple", id: "temple", img:"https://picsum.photos/200?1" },
    { name: "Food", id: "food", img:"https://picsum.photos/200?2" },
    { name: "Festival", id: "festival", img:"https://picsum.photos/200?3" },
    { name: "Maintenance", id: "maintenance", img:"https://picsum.photos/200?4" },
    { name: "Charity", id: "charity", img:"https://picsum.photos/200?5" }
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      {/* Logo */}
      <img
        src="https://picsum.photos/120"
        className="mb-10 rounded-xl"
      />

      <div className="grid grid-cols-2 gap-6 w-full max-w-xl">

        {items.map((item) => (

          <button
            key={item.id}
            onClick={() => router.push(`/donate/${item.id}`)}
            className="bg-white rounded-2xl shadow-md aspect-square p-3 hover:shadow-xl transition flex flex-col"
          >

            <div className="h-[80%] overflow-hidden rounded-xl">
              <img
                src={item.img}
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-lg font-semibold mt-2">
              {item.name}
            </span>

          </button>

        ))}

      </div>

    </div>
  )
}