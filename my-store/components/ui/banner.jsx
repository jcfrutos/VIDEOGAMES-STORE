'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import games from '@/components/games/GamesList.json'
import { Button } from '@heroui/button'

export const Banner = () => {
  // Ordena por mayor descuento y coge los 5 primeros con descuento
  const featured = games
    .filter(game => game.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5)

  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % featured.length), 5000)
    return () => clearInterval(t)
  }, [featured.length])

  const game = featured[idx]
  const original = game.price
  const discounted = (original * (100 - game.discount) / 100).toFixed(2)

  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={game.image}
        alt={game.name}
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-8 space-y-4">
        <h1 className="text-5xl font-bold text-white">{game.name}</h1>
        <p className="max-w-xl text-white/90">{game.description}</p>
        <div className="flex items-baseline space-x-4">
          <span className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            ${discounted}
          </span>
          <span className="text-xl line-through text-white/70">
            ${original.toFixed(2)}
          </span>
        </div>
        <Button as="a" href={`/game/${game.id}`} size="lg" radius="full">
          Ver detalles
        </Button>
      </div>
    </section>
  )
}
