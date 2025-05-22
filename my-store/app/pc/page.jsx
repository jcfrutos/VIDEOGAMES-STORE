// Importamos el componente GameGrid, que contiene toda la lógica
// de renderizado de tarjetas de juego, paginación y manejo de "añadir al carrito".
import { GameGrid } from "@/components/games/gameGrid";

// Exportamos por defecto la página de Next.js para la ruta `/pc`.
// Next.js detecta este export y lo usa como renderer de la página.
export default function PC() {
  return (
    // Contenedor principal de la página entera
    <div>
      {/*
        Título de la sección:
        - text-2xl : tamaño de fuente extra-grande
        - font-bold: peso de fuente en negrita
        - mb-4     : margen inferior de 1rem (4)
        - text-center: centra el texto horizontalmente
      */}
      <h1 className="text-2xl font-bold mb-4 text-center">
        Juegos para PC
      </h1>

      {/*
        Aquí invocamos <GameGrid> pasándole la prop `platform="PC"`.
        - `GameGrid` recibe esta prop (un string) y:
          1. Filtra la lista completa de juegos para quedarse
             solo con aquellos que en su array `platforms`
             incluyan exactamente el valor `"PC"`.
          2. Aplica paginación: muestra 8 juegos por página,
             con controles de página al final.
          3. Renderiza cada juego como una tarjeta (HeroUI Card):
             • Imagen de cabecera.
             • Nombre, descripción recortada.
             • Precio original y con descuento (si aplica).
             • Botones: “Ver detalles” y “Añadir al carrito”.
      */}
      <GameGrid platform="PC" />
    </div>
  );
}
