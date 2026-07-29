import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join } from 'node:path';

const [category, slug] = process.argv.slice(2);
const validCategories = ['calculadoras', 'generadores', 'convertidores'];
const categoryLabels = { calculadoras: 'Calculadoras', generadores: 'Generadores', convertidores: 'Convertidores' };

if (!validCategories.includes(category) || !slug) {
  console.error('Uso: npm run new:tool -- calculadoras nombre-herramienta');
  process.exit(1);
}

const target = join(process.cwd(), 'src', 'pages', category, `${slug}.astro`);
await mkdir(join(process.cwd(), 'src', 'pages', category), { recursive: true });

try {
  await access(target, constants.F_OK);
  console.error(`El archivo ya existe: ${target}`);
  process.exit(1);
} catch {}

const title = slug
  .split('-')
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');

const template = `---
import BaseLayout from '../../layouts/BaseLayout.astro';
import ToolShell from '../../components/ToolShell.astro';
---
<BaseLayout title="${title}" description="Descripción clara de la herramienta.">
  <ToolShell
    toolId="${slug}"
    title="${title}"
    description="Explica qué resuelve y qué datos necesita."
    categoryHref="/${category}/"
    categoryLabel="${categoryLabels[category]}"
  >
    <div slot="tool">
      <!-- Interfaz de la herramienta -->
    </div>
    <div slot="content">
      <h2>Cómo usarla</h2>
      <p>Documenta el proceso, la fórmula y las limitaciones.</p>
    </div>
  </ToolShell>
</BaseLayout>
`;

await writeFile(target, template, 'utf8');
console.log(`Creado: ${target}`);
console.log('Siguiente paso: agrega la herramienta a src/data/tools.ts');
