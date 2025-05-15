// app/game/[id]/page.jsx

'use client'  
// Importamos la lista de juegos estática
import games from '@/components/games/GamesList.json'
// Para mostrar imágenes optimizadas
import Image from 'next/image'
// Botón de HeroUI
import { Button } from '@heroui/button'
// Hook del contexto de carrito
import { useCart } from '../../../components/shoppingCart/cartContext'

/**
 * GamePage
 *
 * Página dinámica que muestra los detalles de un único juego.
 * - Obtiene `params.id` (viene de la URL /game/[id])
 * - Busca el juego en el JSON
 * - Calcula precio descontado si aplica
 * - Muestra todos los datos: imagen, descripción, stock, desarrollador...
 * - Permite añadir al carrito con un botón
 */
export default function GamePage({ params }) {
  // 1️⃣ Extraemos el id de la URL
  const { id } = params

  // 2️⃣ Buscamos en nuestro array el objeto cuyo `id` coincida
  //    parseInt para convertir el param (string) a number
  const game = games.find(g => g.id === parseInt(id, 10))

  // 3️⃣ Obtenemos la función para añadir al carrito
  const { addToCart } = useCart()

  // 4️⃣ Si no existe el juego, mostramos un mensaje de error
  if (!game) {
    return <p className="text-center p-8">Juego no encontrado.</p>
  }

  // 5️⃣ Calculamos precio descontado (si hay descuento)
  const original = game.price
  const discounted = game.discount > 0
    ? (original * (100 - game.discount) / 100).toFixed(2)
    : original.toFixed(2)

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Título centrado */}
      <h1 className="text-4xl font-bold text-center">{game.name}</h1>

      {/* Imagen grande */}
      <div className="relative w-full h-[400px]">
        <Image
          src={game.image}
          alt={game.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
          priority
        />
      </div>

      {/* Precio original tachado (si hay descuento) y precio final */}
      <div className="flex items-baseline justify-center space-x-4">
        {game.discount > 0 && (
          <span className="text-lg line-through text-gray-500">
            ${original.toFixed(2)}
          </span>
        )}
        <span className="text-3xl font-extrabold text-green-600">
          ${discounted}
        </span>
      </div>

      {/* Descripción */}
      <p className="text-gray-700">{game.description}</p>

      {/* Detalles en lista de dos columnas */}
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
        <li><strong>Stock:</strong> {game.stock}</li>
        <li><strong>Desarrollador:</strong> {game.developer}</li>
        <li><strong>Publicador:</strong> {game.publisher}</li>
        <li><strong>Fecha de lanzamiento:</strong> {game.release_date}</li>
        <li><strong>Plataformas:</strong> {game.platforms.join(', ')}</li>
        <li><strong>Géneros:</strong> {game.genres.join(', ')}</li>
      </ul>

      {/* Botón para añadir al carrito */}
      <div className="text-center">
        <Button
          size="lg"
          radius="full"
          onPress={() =>
            addToCart({
              id: game.id,
              name: game.name,
              price: parseFloat(discounted),
            })
          }
        >
          Añadir al carrito
        </Button>
      </div>
    </main>
  )
}
