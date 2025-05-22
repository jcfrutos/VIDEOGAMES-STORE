// components/ui/banner.tsx

'use client'  
// 📌 Indica a Next.js que este componente debe ejecutarse en el cliente (usa hooks de React).

import { useState, useEffect } from 'react';  
// 🔧 Hooks de React para estado local y efectos secundarios.

import Image from 'next/image';  
// 📷 Componente de Next.js optimizado para imágenes (lazy loading, optimización automática).

import games from '@/components/games/GamesList.json';  
// 🎮 Importa la lista de juegos estática (JSON) con sus datos: id, nombre, imagen, precio, descuento, etc.

import { Button } from '@heroui/button';  
// 🛠️ Componente de botón de la librería HeroUI.

export const Banner = () => {
  // ⭐ Construimos un array 'featured' con los juegos que tienen descuento, 
  //   ordenados de mayor a menor descuento, y nos quedamos con los 5 primeros.
  const featured = games
    .filter(game => game.discount > 0)
    .sort((a, b) => b.discount - a.discount)
    .slice(0, 5);

  // 📊 Índice en el slideshow: indica qué juego de 'featured' se muestra.
  const [idx, setIdx] = useState(0);

  // ⏲️ Efecto: cada 5 segundos avanzamos al siguiente juego (circularmente).
  useEffect(() => {
    const t = setInterval(
      () => setIdx(i => (i + 1) % featured.length),
      5000
    );
    return () => clearInterval(t); // Limpieza al desmontar
  }, [featured.length]);

  // 🚩 Juego actual a mostrar en el banner
  const game = featured[idx];

  // 💲 Cálculo de precio con descuento
  const original = game.price;
  const discounted = ((original * (100 - game.discount)) / 100).toFixed(2);

  return (
    // 📐 Contenedor principal del banner: relativo, con altura fija y overflow hidden
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* 📸 Imagen de fondo (full cover) */}
      <Image
        src={game.image}
        alt={game.name}
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      {/* 🎨 Capa superpuesta semitransparente para texto y botón */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-8 space-y-4">
        {/* 🏷️ Título grande del juego */}
        <h1 className="text-5xl font-bold text-white">{game.name}</h1>

        {/* 📝 Descripción breve */}
        <p className="max-w-xl text-white/90">{game.description}</p>

        {/* 💰 Precios: destacado el precio con descuento y tachado el original */}
        <div className="flex items-baseline space-x-4">
          <span className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
            ${discounted}
          </span>
          <span className="text-xl line-through text-white/70">
            ${original.toFixed(2)}
          </span>
        </div>

        {/* 🔘 Botón para ir a la página de detalles del juego */}
        <Button as="a" href={`/game/${game.id}`} size="lg" radius="full">
          Ver detalles
        </Button>
      </div>
    </section>
  );
};
