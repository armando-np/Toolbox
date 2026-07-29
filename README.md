# ToolboxMX

Sitio de calculadoras, generadores y convertidores construido con Astro y desplegado como archivos estáticos en Cloudflare Workers.

## Funciones incluidas

- Interfaz adaptable con tema claro y oscuro.
- Buscador global con teclado (`Ctrl/⌘ + K` o `/`).
- Catálogo centralizado en `src/data/tools.ts`.
- Calculadoras de IMC, hipoteca, vacaciones y demo educativa de ISR.
- Generadores de QR, contraseñas y UUID v4.
- Convertidor de longitud, masa y temperatura.
- Blog escalable con Content Collections de Astro.
- Sitemap, robots.txt, RSS, canonical, Open Graph y JSON-LD.
- Páginas de privacidad, términos, contacto y error 404.
- Eventos opcionales para Google Analytics y Microsoft Clarity con consentimiento previo.
- Configuración explícita para Cloudflare Workers Static Assets.

## Requisitos

- Node.js 22.12 o posterior.
- npm.

## Desarrollo local

```bash
npm install
npm run dev
```

Astro mostrará la dirección local, normalmente `http://localhost:4321`.

## Verificación antes de publicar

```bash
npm run build
npm run preview
```

## Variables de entorno

Copia `.env.example` a `.env` para desarrollo local:

```env
PUBLIC_SITE_URL=https://toolbox.armando-nupa.workers.dev
PUBLIC_GA_ID=
PUBLIC_CLARITY_ID=
PUBLIC_CONTACT_EMAIL=
```

`PUBLIC_SITE_URL` debe coincidir con la URL pública. Cuando conectes un dominio propio, cambia esa variable y vuelve a desplegar.

## Despliegue en Cloudflare Workers

El repositorio incluye `wrangler.jsonc` con `dist` como directorio de archivos estáticos.

Configuración de Cloudflare Builds:

| Campo | Valor |
|---|---|
| Rama de producción | `main` |
| Comando de compilación | `npm run build` |
| Comando de despliegue | `npx wrangler deploy` |

También puedes desplegar desde terminal:

```bash
npm run deploy
```

## Actualizar el repositorio existente

Sustituye el contenido del repositorio por esta versión, sin subir `node_modules` ni `dist`:

```bash
git add .
git commit -m "Rediseño profesional y arquitectura escalable"
git push origin main
```

Cloudflare debe iniciar un nuevo build automáticamente.

## Arquitectura

```text
src/
├── components/        Componentes reutilizables
├── config/            Nombre, navegación y enlaces del sitio
├── data/
│   ├── tools.ts       Catálogo central de herramientas
│   └── blog/          Artículos Markdown
├── layouts/           Plantillas generales y de artículos
├── pages/             Rutas y herramientas
├── styles/            Sistema visual global
└── content.config.ts  Esquema del blog
```

## Añadir una herramienta

```bash
npm run new:tool -- calculadoras calculadora-porcentaje
```

El script crea la página base. Luego añade la entrada correspondiente a `src/data/tools.ts`.

## SEO y medición

Tras publicar, comprueba:

- `/robots.txt`
- `/sitemap-index.xml`
- `/rss.xml`
- títulos y descripciones únicas
- URL canonical correcta
- eventos en GA4 y Clarity, si están configurados

Eventos principales implementados:

- `tool_submit`
- `calculation_completed`
- `generation_completed`
- `conversion_completed`
- `search_open`
- `search_results_viewed`
- `copy_completed`
- `download_completed`

## Consideraciones

La página de ISR permanece marcada como demostración y tiene `noindex`. No utiliza tablas oficiales ni debe presentarse como cálculo fiscal real.
