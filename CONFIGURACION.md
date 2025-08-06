# Configuración y dependencias necesarias

Este proyecto utiliza las siguientes herramientas y librerías principales:

## Dependencias principales
- **React 19** y **ReactDOM 19**: Librería base para la UI.
- **Vite**: Bundler y servidor de desarrollo rápido.
- **TypeScript**: Tipado estático para JavaScript.
- **React Flow (reactflow, @reactflow/core, @reactflow/minimap, @reactflow/node-resizer)**: Para diagramas de nodos y flujos visuales.
- **Tailwind CSS v3**: Utilidades de estilos modernas y ampliamente usadas en la comunidad React.
- **Autoprefixer** y **PostCSS**: Para procesar los estilos de Tailwind.
- **ESLint**: Linter para mantener la calidad del código.

## Instalación de dependencias

```sh
npm install
```

Si tienes problemas con Tailwind 4, instala Tailwind 3:
```sh
npm install -D tailwindcss@3
```

## Archivos de configuración relevantes
- `tailwind.config.js`: Configuración de Tailwind CSS.
- `postcss.config.cjs`: Configuración de PostCSS para usar Tailwind y Autoprefixer.
- `.gitignore`: Ignora archivos de sistema, dependencias y configuraciones locales.

## Estructura recomendada
- `src/components/`: Componentes reutilizables (ej: Login).
- `src/pages/`: Páginas principales (LoginPage, DashboardPage, ProjectPage).
- `src/context/`: Contextos de React (ej: AuthContext).
- `src/dummy/`: Datos de prueba para integración (usuarios dummy).

---

Para más detalles, revisa el README.md.
