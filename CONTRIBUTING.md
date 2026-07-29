# Contribuir a ToolboxMX

## Flujo recomendado

1. Crea una rama desde `main`.
2. Ejecuta `npm install` y `npm run dev`.
3. Haz cambios pequeños y verificables.
4. Ejecuta `npm run build` antes de enviar el cambio.
5. Comprueba navegación por teclado, vista móvil y mensajes de error.

## Añadir una herramienta

Ejecuta:

```bash
npm run new:tool -- calculadoras nombre-herramienta
```

Después:

1. Añade sus metadatos en `src/data/tools.ts`.
2. Implementa la interfaz y la lógica en la página creada.
3. Añade explicación, limitaciones y preguntas frecuentes.
4. Incluye un evento de resultado como `calculation_completed` o `generation_completed`.
5. Verifica título, descripción y datos estructurados.

## Criterios de calidad

- No recopilar datos sensibles sin una razón documentada.
- Evitar afirmaciones legales, médicas o fiscales sin fuentes vigentes.
- Formularios con `label`, validación y mensajes comprensibles.
- Resultados accesibles mediante `aria-live`.
- Sin dependencias nuevas cuando una API del navegador resuelva el problema.
