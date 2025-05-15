// Importamos el componente Banner, que muestra el carrusel destacado
// de los 5 juegos con mayor descuento (o más recientes, según configuración).
import { Banner } from '../components/ui/banner'

// Importamos GameGrid, nuestra cuadrícula genérica de juegos.
// Sin prop `platform`, mostrará *todos* los juegos con paginación y botones
// para ver detalles o añadirlos al carrito.
import { GameGrid } from '@/components/games/gameGrid'

// Importamos GameSearch, el buscador/filtro dinámico.
// Combina un filtro horizontal (búsqueda por nombre) y un filtro vertical
// (por género, plataforma, precio, fecha, descuento, etc.) y renderiza
// los resultados en tarjetas de juego personalizadas.
import GameSearch from '@/components/games/gameSearch'

// Componente principal de la página de inicio: Home.
// Al estar en `app/page.jsx`, Next.js lo renderiza en la ruta "/".
export default function Home() {
  return (
    <>
      {/*
        1) <Banner />:
           - Muestra un slider de fondo completo con los 5 juegos destacados.
           - Cada 5 segundos avanza al siguiente.
           - Incluye título, descripción y botón "Ver detalles".

        2) <GameGrid />:
           - Renderiza los primeros 8 juegos (o todos, paginados).
           - Muestra imagen, nombre, descripción corta, precio
             (con descuento si aplica) y botones “Ver detalles”
             y “Añadir al carrito”.
           - Incluye controles de paginación en el footer.

        3) <GameSearch />:
           - Despliega un buscador completo de juegos bajo el grid,
             con:
             • Barra de búsqueda por nombre (HorizontalFilter).
             • Panel de filtros vertical (VerticalFilter) para
               precio, fecha, géneros, plataformas y más.
             • Resultados renderizados con <CardGame /> (tarjetas
               personalizadas de juego).
      */}
      <Banner />
      <GameGrid />
      <GameSearch />
    </>
  )
}
