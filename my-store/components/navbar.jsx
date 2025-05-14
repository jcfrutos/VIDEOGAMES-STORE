import NextLink from "next/link";
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@heroui/navbar";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export const Navbar = () => (
  <HeroUINavbar
    className="bg-white shadow-sm z-50"
    maxWidth="xl"
    position="sticky"
  >
    {/* Logo + Plataforma links */}
    <NavbarContent className="px-4" justify="start">
      <NavbarBrand>
        <NextLink className="flex items-center gap-2" href="/">
          {/* Pon aquí tu logo */}
          <Image
            alt="GameStore"
            width={32}
            height={32}
            className="object-contain"
            src="/logo.png"
          />
          <span className="font-bold text-xl">{siteConfig.name}</span>
        </NextLink>
      </NavbarBrand>
      <div className="hidden lg:flex gap-6 ml-8">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink
              className="text-gray-800 hover:text-primary"
              href={item.href}
            >
              {item.label}
            </NextLink>
          </NavbarItem>
        ))}
      </div>
    </NavbarContent>

    {/* Carrito */}
    <NavbarContent className="px-4" justify="end">
      <NavbarItem>
        <NextLink
          className="flex items-center text-gray-800 hover:text-primary"
          href={siteConfig.links.cart}
        >
          <FiShoppingCart size={24} />
        </NextLink>
      </NavbarItem>
    </NavbarContent>
  </HeroUINavbar>
);
