# Historial de cambios

## 1.0.0 — 2026-07-29

### Interfaz

- Nuevo sistema visual adaptable con tema claro y oscuro.
- Encabezado, navegación móvil, buscador global, tarjetas, formularios, resultados y pie de página unificados.
- Identidad visual, favicon e imagen Open Graph de 1200 × 630.
- Estados de foco, navegación por teclado y preferencias de movimiento reducido.

### Arquitectura

- Catálogo central de herramientas en `src/data/tools.ts`.
- Componentes reutilizables para páginas, herramientas, tarjetas, FAQ, iconos y breadcrumbs.
- Blog con Content Collections, esquema validado y rutas dinámicas.
- Script para crear nuevas herramientas con una estructura consistente.
- Configuración explícita para Cloudflare Workers Static Assets.

### SEO

- Títulos, descripciones, canonical, hreflang, Open Graph y Twitter Cards.
- JSON-LD para WebSite, Organization, WebApplication, Article, FAQ, BreadcrumbList e ItemList.
- Sitemap filtrado, robots.txt, RSS y página 404.
- La demo de ISR se excluye de indexación y del sitemap.

### Producto y medición

- Calculadoras y generadores revisados con explicaciones, límites y FAQ.
- Contraseñas con Web Crypto y selección aleatoria sin sesgo de módulo.
- QR descargable, UUID con fallback criptográfico y convertidor multigategoría.
- Eventos de producto para GA4 y Clarity.
- Consentimiento previo para analítica opcional.

### Proyecto

- README, guía de actualización, contribución, plantillas de issues, Dependabot y verificación de build en GitHub Actions.
