"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Eye } from "lucide-react"

interface ProductCardProps {
  name: string
  price: number
  originalPrice: number
  discount?: number
  reviewCount: number
  rating: number
  image: string
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  discount,
  reviewCount,
  rating,
  image,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Static star rendering
  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
          ★
        </span>,
      )
    }
    return stars
  }

  return (
    <div
      className="bg-white rounded-lg overflow-hidden  max-w-xs relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">

        {discount && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
            -{discount}%
          </div>
        )}

        <div className="absolute top-2 right-2 z-10">
          <button className="bg-white p-2 rounded-full shadow-md mb-2">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <div>
            <button className="bg-white p-2 rounded-full shadow-md">
              <Eye className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
        </div>

        {isHovered && (
          <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-3 font-medium transition duration-300">
            Add To Cart
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-medium text-gray-900 mb-1">{name}</h3>
        <div className="flex items-center gap-2 mb-1">
          <span className="text-red-500 font-bold">${price}</span>
          {originalPrice > price && (
            <span className="text-gray-500 line-through text-sm">${originalPrice}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex">{renderStars()}</div>
          <span className="text-gray-500 text-sm">({reviewCount})</span>
        </div>
      </div>
    </div>
  )
}
