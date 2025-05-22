# My Store

**My Store** es una aplicación de e-commerce de videojuegos construida con **Next.js 13**, **Tailwind CSS** y **HeroUI**. Permite explorar, filtrar y buscar juegos, ver detalles y agregar productos a un carrito de compras gestionado con Context API.

---

## 📂 Estructura de ficheros
```bash
my-store/
├── .next/
├── .vscode/
├── app/
│ ├── cart/
│ ├── games/
│ ├── nintendo/, pc/, …
│ ├── error.tsx
│ ├── layout.tsx
│ ├── page.jsx
│ └── providers.tsx
├── components/
│ ├── filters/
│ ├── games/
│ ├── shoppingCart/
│ └── ui/
├── config/
│ ├── fonts.ts
│ └── site.ts
├── node_modules/
├── public/
├── styles/
│ └── globals.css
├── types/
│ └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

---

## 🚀 Primeros pasos
1. Clonar el repositorio
```bash
git clone https://github.com/jonarosero/VIDEOGAMES-STORE.git
cd VIDEOGAMES-STORE
cd my-store
```
2. Instalar dependencias
```bash
npm install
```
3. Levanta el servidor local con recarga en caliente
```bash
npm run dev
# visit http://localhost:3000
```
4. Build & Producción
```bash
npm run build
npm start
# o bien:
npm run start
```
5. Instalar nuevas librerías
```bash
npm install nombre-paquete
# o, para dependencias de desarrollo:
npm install -D nombre-paquete
```
---

## 📌 Scripts importantes (`package.json`)

- **dev**: ejecuta Next.js en modo desarrollo (`npm run dev`).
- **build**: genera la carpeta `.next` con la versión optimizada (`npm run build`).
- **start**: arranca el servidor con el build de producción (`npm run start`).
- **lint**: corre ESLint en el código (`npm run lint`).

---

## 🗂️ Ficheros clave

- **app/layout.tsx**  
  Define el layout global: `<Navbar />`, `<Providers />`, `<Footer />`.

- **app/page.jsx**  
  Página de inicio con `<Banner />`, `<GameGrid />` y `<GameSearch />`.

- **components/games/GameGrid.jsx**  
  Grid paginado de juegos, filtra por `platform`, usa `useCart()` y `<Pagination />`.

- **components/games/GameSearch.jsx**  
  Búsqueda avanzada con `useState` y `useMemo`, integra `<VerticalFilter />`, `<HorizontalFilter />` y `<CardGame />`.

- **components/shoppingCart/CartContext.jsx**  
  React Context para carrito: `CartProvider` + hook `useCart()`.

- **components/ui/Banner.jsx**  
  Carrusel de juegos con mayor descuento.

- **next.config.js**  
  Configuración de Next.js (optimización de imágenes).

- **tailwind.config.js**  
  Tema y paths de Tailwind CSS.

---

## 🎯 Actividades extra

- **Sistema de Rating**  
  - Añade un campo `rating` en `GamesList.json`.  
  - Extiende filtros para rating (1–5 estrellas).

- **Persistencia con `localStorage`**  
  - Haz que el carrito sobreviva a recargas de página usando `localStorage`.

- **Autenticación**  
  - Integra NextAuth.js o Auth0.  
  - Protege la ruta `/cart` y muestra el usuario logueado.

- **SSR / SSG**  
  - Convierte `/games/[id]` a prerenderizado estático o SSR.  
  - Compara tiempos de carga y documenta pros/contras.

---

¡Feliz coding! 🚀  
Revisa la [documentación oficial de Next.js](https://nextjs.org/docs) para más detalles.  