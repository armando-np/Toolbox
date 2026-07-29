# ToolboxMX

Proyecto Astro estatico preparado para desplegarse en Cloudflare Pages con la direccion:

`https://toolboxmx.pages.dev`

## Contenido

- Inicio
- Calculadoras
  - IMC
  - ISR (demo educativa)
  - Vacaciones
  - Hipoteca
- Generadores
  - QR
  - Contrasenas
  - UUID
- Convertidores
- Blog
- Acerca
- Contacto
- Sitemap, robots.txt, metadatos SEO y pagina 404
- Integracion opcional con Google Analytics 4 y Microsoft Clarity

## Requisitos

- Node.js 22.12 o superior
- Git
- Una cuenta de GitHub
- Una cuenta de Cloudflare

Comprueba Node:

```bash
node -v
npm -v
```

## 1. Ejecutar localmente

Descomprime el proyecto, abre una terminal dentro de la carpeta y ejecuta:

```bash
npm install
npm run dev
```

Astro mostrara una direccion local, normalmente:

`http://localhost:4321`

## 2. Probar el build

```bash
npm run build
npm run preview
```

El resultado de produccion se genera en `dist/`.

## 3. Subir a GitHub

Crea un repositorio vacio, por ejemplo `toolboxmx`, y ejecuta dentro de esta carpeta:

```bash
git init
git add .
git commit -m "Proyecto inicial ToolboxMX"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/toolboxmx.git
git push -u origin main
```

Sustituye `TU-USUARIO` por tu usuario real de GitHub.

## 4. Desplegar en Cloudflare Pages

1. En Cloudflare, abre **Workers & Pages**.
2. Selecciona **Create application**.
3. Abre la pestana **Pages**.
4. Selecciona **Import an existing Git repository**.
5. Conecta GitHub y elige el repositorio `toolboxmx`.
6. Configura:
   - Production branch: `main`
   - Framework preset: `Astro`
   - Build command: `npm run build`
   - Build directory: `dist`
   - Root directory: dejar vacio
7. En **Project name**, escribe `toolboxmx`.
8. Selecciona **Save and Deploy**.

Si el nombre esta disponible, Cloudflare publicara:

`https://toolboxmx.pages.dev`

Cada `git push` a `main` iniciara un nuevo despliegue automaticamente.

## 5. Activar Google Analytics y Clarity

Copia `.env.example` como `.env` para desarrollo local:

```bash
cp .env.example .env
```

Edita los valores:

```env
PUBLIC_GA_ID=G-XXXXXXXXXX
PUBLIC_CLARITY_ID=xxxxxxxxxx
```

En Cloudflare Pages agrega las mismas variables en:

**Settings > Environment variables**

Haz un nuevo despliegue despues de guardarlas.

## Eventos preparados para analitica

Cuando configuras GA4 o Clarity, la plantilla registra:

- `tool_submit` con el parametro `tool_name`
- `password_copy`
- `uuid_copy`
- `qr_download`

Puedes agregar mas eventos con el atributo `data-track="nombre_del_evento"`.

## 6. Cambios importantes antes de publicar

- Cambia `tu-correo@ejemplo.com` en `src/pages/contacto.astro`.
- Revisa los textos legales y avisos.
- La calculadora ISR es una demo; no contiene automaticamente la tarifa oficial.
- Cambia `site` en `astro.config.mjs` si Cloudflare asigna otro subdominio.
- Sustituye `public/og-default.svg` por una imagen social propia si lo deseas.

## Estructura principal

```text
toolboxmx-astro/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   │   ├── calculadoras/
│   │   ├── generadores/
│   │   ├── convertidores/
│   │   └── blog/
│   └── styles/
├── astro.config.mjs
├── package.json
└── README.md
```

## Flujo normal de actualizacion

```bash
git add .
git commit -m "Describe el cambio"
git push
```

Cloudflare Pages detectara el cambio, ejecutara `npm run build` y publicara la nueva version.
