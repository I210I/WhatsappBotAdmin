# Whatsapp Bot Admin

App minimalista en React + Vite para administrar bots de WhatsApp mediante flujos visuales.

## Características principales
- Login por celular y código de país (dummy de usuarios en `src/dummy/users.ts`).
- Dashboard de proyectos y bots.
- Editor visual de flujos de bots usando React Flow.
- Estilos modernos con Tailwind CSS v3.

## Instalación y uso

1. Clona el repositorio y entra a la carpeta:
   ```sh
   git clone <repo-url>
   cd WhatsappBotAdmin
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```
3. Si tienes problemas con Tailwind 4, instala Tailwind 3:
   ```sh
   npm install -D tailwindcss@3
   ```
4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```
5. Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto
- `src/components/` — Componentes reutilizables (Login, etc)
- `src/pages/` — Páginas principales (LoginPage, DashboardPage, ProjectPage)
- `src/context/` — Contextos de React (AuthContext)
- `src/dummy/` — Datos de prueba (usuarios dummy)

## Dependencias principales
- React 19, ReactDOM 19
- Vite
- TypeScript
- React Flow (`reactflow`, `@reactflow/core`, `@reactflow/minimap`, `@reactflow/node-resizer`)
- Tailwind CSS v3
- Autoprefixer, PostCSS
- ESLint

## Configuración relevante
- `tailwind.config.js` — Configuración de Tailwind
- `postcss.config.cjs` — Configuración de PostCSS
- `.gitignore` — Archivos ignorados

---

### Créditos y comunidad
- UI minimalista y moderna con Tailwind CSS
- Flujos visuales con React Flow
- Inspirado en las mejores prácticas de la comunidad React

---

¿Dudas? Revisa `CONFIGURACION.md` para detalles técnicos y dependencias.
# WhatsappBotAdmin
Repository for admin of chatbots with UI node interactive
