// components/filters/HorizontalFilter.jsx

'use client'

import React, { useState } from 'react'
// HeroUI Card & Input
import { Card } from '@heroui/card'
import { Input } from '@heroui/input'
// Icono de lupa
import { FaSearch } from 'react-icons/fa'

/**
 * HorizontalFilter
 *
 * Este componente muestra:
 *  - A la izquierda: un contador de cuántos juegos se están mostrando.
 *  - A la derecha: un campo de búsqueda por nombre.
 *
 * Props:
 *  - productsShows (number): cantidad de juegos filtrados.
 *  - onSearch (string => void): callback que recibe el término de búsqueda.
 *
 * Flujo de datos:
 *  1) El usuario escribe en el Input.
 *  2) handle() actualiza el estado local `term` y llama a onSearch(term).
 *  3) GameSearch recibe el nuevo término y recalcula `filteredGames`.
 *  4) Se vuelven a renderizar las GameCards en función de la lista filtrada.
 */
export default function HorizontalFilter({ productsShows, onSearch }) {
  // Estado local para controlar lo que se ve en el Input
  const [term, setTerm] = useState('')

  /** 
   * handle: 
   *  - e.target.value => texto ingresado
   *  - setTerm: actualiza el Input controlado
   *  - onSearch: comunica al padre (GameSearch) el nuevo filtro
   */
  const handle = e => {
    const value = e.target.value
    setTerm(value)
    onSearch(value)
  }

  return (
    <Card className="
      w-full      /* ancho completo del contenedor */
      px-4        /* padding horizontal: 1rem */
      mb-4        /* margin bottom: 1rem */
    ">
      {/** No usamos CardBody para simplificar; direct div flex **/}
      <div className="
        flex                /* display: flex */
        items-center        /* alinea verticalmente en centro */
        justify-between     /* separa los hijos a los extremos */
        py-3                /* padding vertical: 0.75rem */
      ">
        {/** ——————————————
            1) Contador
            —————————————— */}
        <p className="text-sm">
          Juegos mostrados:{' '}
          <span className="font-bold">
            {productsShows}
          </span>
        </p>

        {/** ——————————————
            2) Campo de búsqueda
            —————————————— */}
        <div className="
          relative   /* contenedor para posicionar el ícono absolute */
          w-64       /* ancho fijo de 16rem */
        ">
          {/** Ícono posicionado dentro del input **/}
          <FaSearch className="
            absolute           /* posición absolute respecto al padre */
            left-3 top-1/2      /* 0.75rem desde la izquierda, verticalmente al medio */
            transform -translate-y-1/2  /* centra vertical el icono */
            text-gray-400      /* color gris claro */
          " aria-hidden="true" />

          <Input
            className="
              pl-10     /* padding-left: 2.5rem (dejar espacio para el ícono) */
              w-full    /* ocupa todo el ancho del contenedor padre */
            "
            placeholder="Buscar por nombre..."
            size="sm"
            value={term}
            onChange={handle}
            aria-label="Buscar juegos por nombre"
          />
        </div>
      </div>
    </Card>
  )
}
