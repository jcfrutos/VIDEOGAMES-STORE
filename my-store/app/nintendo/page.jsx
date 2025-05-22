// Importamos el componente GameGrid,
// que es el encargado de mostrar un grid (rejilla)
// de juegos, con soporte de paginación, filtros por plataforma, etc.
import { GameGrid } from "@/components/games/gameGrid";

// Definición del componente de página para la ruta /nintendo
// Next.js interpreta este archivo como una página estática
// (sirve el HTML generado en build time, con hidración en cliente)
export default function Nintendo() {
  return (
    // Contenedor principal de la página
    <div>
      {/*
        Título de la sección:
        - text-2xl: tamaño de fuente grande (2xl)
        - font-bold: texto negrita
        - mb-4: margen inferior de 1rem (4)
        - mt-4: margen superior de 1rem (4)
        - text-center: centrado horizontal
      */}
      <h1 className="text-2xl font-bold mb-4 mt-4 text-center">
        Juegos para Nintendo
      </h1>

      {/*
        Aquí renderizamos el componente <GameGrid>,
        pasándole la prop `platform="Nintendo"`.
        - GameGrid leerá esta prop y filtrará su lista interna
          para mostrar solo los juegos que incluyan "Nintendo"
          en su array `platforms`.
        - Además, aplicará paginación (8 por página), estilos
          de tarjetas, botones de detalle y añadir al carrito.
      */}
      <GameGrid platform="Nintendo" />
    </div>
  );
}
