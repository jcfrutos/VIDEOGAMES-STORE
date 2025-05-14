'use client'
import { useState } from 'react'
import games from '@/components/games/GamesList.json'
import { Card, CardFooter } from "@heroui/card"
import { Button } from "@heroui/button"
import Image from 'next/image'
import { Pagination } from "@heroui/pagination"

export const GameGrid = ({ platform }) => {
  // Filtrar si vienen plataformas
  const filtered = platform
    ? games.filter(g => g.platforms.includes(platform))
    : games

  // Paginación
  const itemsPerPage = 8
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const paged = filtered.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  // Color de fondo según prop platform
  const bgColor = {
    Nintendo: 'bg-red-300',
    PlayStation: 'bg-blue-300',
    Xbox: 'bg-green-300',
    PC: 'bg-orange-300'
  }[platform] || 'bg-white'

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {paged.map(game => {
          const discountedPrice = game.discount > 0
            ? (game.price * (100 - game.discount) / 100).toFixed(2)
            : game.price.toFixed(2)

          return (
            <Card
              key={game.id}
              isFooterBlurred
              radius="lg"
              className={`${bgColor} border-none`}
            >
              <Image
                src={game.image}
                alt={game.name}
                width={300}
                height={200}
                className="object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{game.name}</h2>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {game.description}
                </p>
              </div>
              <CardFooter className="flex justify-between items-center p-4 border-t border-default-200">
                <div className="space-x-2">
                  {game.discount > 0 && (
                    <span className="text-sm line-through text-gray-500">
                      ${game.price.toFixed(2)}
                    </span>
                  )}
                  <span className="font-bold text-lg">${discountedPrice}</span>
                </div>
                <Button as="a" href={`/cart/add/${game.id}`} size="sm" radius="full">
                  Comprar
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </section>

      {/* Separación extra antes del footer */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 mb-16">
          <Pagination
            showControls
            page={page}
            total={totalPages}
            onChange={newPage => setPage(newPage)}  // usa onChange, no onPageChange
          />
        </div>
      )}
    </>
  )
}
