// components/ui/footer.jsx

import NextLink from 'next/link';           // 🔗 Para navegación interna sin recargar la página
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';  
                                            // 🌐 Iconos de redes sociales

/**
 * Footer de la aplicación.
 * Contiene secciones informativas, enlaces de navegación,
 * y redes sociales, además del aviso de copyright.
 */
export const Footer = () => (
  <footer className="bg-gray-900 text-gray-300 py-12">
    {/* 📦 Contenedor principal con una grid responsive de 2 columnas en móvil y 4 en desktop */}
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      
      {/* Sección “Acerca de” */}
      <div>
        <h4 className="text-white font-semibold mb-4">Acerca de</h4>
        <ul className="space-y-2 text-sm">
          {/* NextLink gestiona rutas internas de Next.js */}
          <li><NextLink href="/about">Quiénes somos</NextLink></li>
          <li><NextLink href="/contact">Contacto</NextLink></li>
          <li><NextLink href="/jobs">Trabaja con nosotros</NextLink></li>
        </ul>
      </div>

      {/* Sección “Plataformas” */}
      <div>
        <h4 className="text-white font-semibold mb-4">Plataformas</h4>
        <ul className="space-y-2 text-sm">
          <li><NextLink href="/platform/pc">PC</NextLink></li>
          <li><NextLink href="/platform/playstation">PlayStation</NextLink></li>
          <li><NextLink href="/platform/xbox">Xbox</NextLink></li>
          <li><NextLink href="/platform/nintendo">Nintendo</NextLink></li>
        </ul>
      </div>

      {/* Sección “Ayuda” */}
      <div>
        <h4 className="text-white font-semibold mb-4">Ayuda</h4>
        <ul className="space-y-2 text-sm">
          <li><NextLink href="/faq">Preguntas frecuentes</NextLink></li>
          <li><NextLink href="/support">Soporte</NextLink></li>
          <li><NextLink href="/terms">Términos y condiciones</NextLink></li>
        </ul>
      </div>

      {/* Sección “Síguenos” con iconos de redes sociales */}
      <div>
        <h4 className="text-white font-semibold mb-4">Síguenos</h4>
        <div className="flex space-x-4 text-xl">
          {/* <a> externo abre la URL en la misma pestaña; añadir target="_blank" si se desea nueva pestaña */}
          <a href="https://facebook.com" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

    {/* Pie de página con texto de derechos reservados */}
    <div className="mt-8 text-center text-xs text-gray-500">
      © 2025 GameStore. Todos los derechos reservados.
    </div>
  </footer>
);
