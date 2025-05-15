// components/navbar.tsx

'use client'  
// ✅ Indica a Next.js que este componente utiliza hooks de React y debe renderizarse en el cliente.

import NextLink from "next/link";  
// 🔗 Componente de Next.js para navegación entre páginas sin recargar.

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";  
// 🛠️ Componentes de navegación de la librería HeroUI:
// - HeroUINavbar: contenedor principal de la barra de navegación.
// - NavbarContent: secciones alineadas dentro de la barra.
// - NavbarBrand: zona para el logo o marca.
// - NavbarItem: elementos individuales de navegación.

import { Badge } from "@heroui/badge";  
// 🔔 Componente para mostrar notificaciones o conteos (aquí, la cantidad de items en el carrito).

import { FiShoppingCart } from "react-icons/fi";  
// 🛒 Icono de carrito de compras de la librería React Icons.

import Image from "next/image";  
// 📷 Componente optimizado de Next.js para imágenes (lazy loading, optimización automática).

import { useCart } from "@/components/shoppingCart/cartContext";  
// 🛍️ Hook personalizado que expone el estado del carrito (items, funciones add/remove, itemCount…).

import { siteConfig } from "@/config/site";  
// ⚙️ Configuración global del sitio (nombre, enlaces de menú…).

// 🎛️ Componente Navbar de la aplicación
export const Navbar = () => {
  // Extraemos la cantidad total de items en el carrito desde el contexto
  const { itemCount } = useCart();

  return (
    // HeroUINavbar renderiza la estructura de la barra superior
    <HeroUINavbar
      className="bg-white shadow-sm z-50" // Estilos Tailwind: fondo blanco, sombra sutil, z-index alto
      maxWidth="xl"                        // Ancho máximo del contenedor
      position="sticky"                    // Se queda fijo al desplazar la página
    >
      {/* 1️⃣ Sección izquierda: logo y enlaces de plataforma */}
      <NavbarContent className="px-4" justify="start">
        <NavbarBrand>
          {/* Logo + nombre de la tienda que enlaza a la home */}
          <NextLink href="/" className="flex items-center gap-2">
            <Image
              alt="GameStore"
              src="/logo.png"
              width={32}
              height={32}
              className="object-contain"
            />
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </NextLink>
        </NavbarBrand>

        {/* Enlaces a secciones (PC, PlayStation, Nintendo, etc.), solo visibles en pantallas grandes */}
        <div className="hidden lg:flex gap-6 ml-8">
          {siteConfig.navItems.map(item => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className="text-gray-800 hover:text-primary"
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* 2️⃣ Sección derecha: icono de carrito con badge */}
      <NavbarContent className="px-4" justify="end">
        <NavbarItem>
          <NextLink
            href="/cart"
            className="relative flex items-center text-gray-800 hover:text-primary"
          >
            {/* Icono de carrito */}
            <FiShoppingCart size={24} />

            {/* Badge que muestra la cantidad de items sólo si > 0 */}
            {itemCount > 0 && (
              <Badge
                content={itemCount}
                shape="circle"           // Badge redondo
                size="sm"                // Tamaño pequeño
                color="danger"           // Color rojo (peligro/alerta)
                className="absolute -top-1 -right-1" // Posicionarlo encima del icono
              />
            )}
          </NextLink>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
};
