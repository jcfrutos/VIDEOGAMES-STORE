// Importamos el componente GameGrid desde su ubicación en nuestro proyecto.
// GameGrid es el “grid” genérico que sabe:
//   • Filtrar juegos por plataforma (o mostrarlos todos si no recibe prop).
//   • Dividirlos en páginas (8 por página) y renderizar controles de paginación.
//   • Dibujar cada juego en una tarjeta con imagen, nombre, precio y botones.
import { GameGrid } from '@/components/games/gameGrid'

// Exportamos por defecto la página de Next.js para la ruta `/playstation`.
// Al colocarse en `app/playstation/page.jsx`, Next.js la asocia automáticamente
// a la URL `https://<tu-dominio>/playstation`.
export default function Playstation() {
  return (
    // Contenedor principal de la sección
    <div>
      {/*
        Título:
        - text-2xl      => letra grande (2xl).
        - font-bold     => texto en negrita.
        - mb-4          => margen inferior de 1rem.
        - text-center   => centra el texto horizontalmente.
      */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        Juegos para PlayStation
      </h1>

      {/*
        Aquí invocamos <GameGrid platform="PlayStation" />:
        1) Le pasamos la prop `platform` con el valor "PlayStation".
        2) Dentro de GameGrid:
           • Se filtra el array de juegos para incluir solo
             aquellos cuya propiedad `platforms` contenga "PlayStation".
           • Se calcula paginación: 8 juegos por página.
           • Se renderiza cada juego en una tarjeta (HeroUI Card)
             con:
             - Imagen del juego.
             - Nombre y fragmento de descripción.
             - Precio original y descontado (si aplica).
             - Botones “Ver detalles” y “Añadir al carrito” con icono.
      */}
      <GameGrid platform="PlayStation" />
    </div>
  )
}
