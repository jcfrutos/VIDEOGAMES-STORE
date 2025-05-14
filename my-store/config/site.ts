import { FiShoppingCart } from "react-icons/fi";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "GameStore",
  description: "Tu tienda de videojuegos al mejor precio",
  navItems: [
    { label: "PC", href: "/pc" },
    { label: "Nintendo", href: "/nintendo" },
    { label: "Xbox", href: "/xbox" },
    { label: "PlayStation", href: "/playstation" },
  ],
  navMenuItems: [
    // aquí puedes mantener perfil, dashboard, etc. o adaptarlos
    { label: "Perfil", href: "/profile" },
    { label: "Pedidos", href: "/orders" },
    { label: "Ajustes", href: "/settings" },
    { label: "Cerrar sesión", href: "/logout" },
  ],
  links: {
    github: "https://github.com/tu-org/tu-repo",
    docs: "/docs",
    cart: "/cart",
  },
  // opcionalmente, puedes exponer un icono de carrito en el navbar
  icons: {
    cart: FiShoppingCart,
  },
};
