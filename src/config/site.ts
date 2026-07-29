export const SITE = {
  name: 'ToolboxMX',
  shortName: 'ToolboxMX',
  description: 'Calculadoras, generadores y convertidores gratuitos para resolver tareas cotidianas desde tu navegador.',
  locale: 'es-MX',
  language: 'es',
  author: 'ToolboxMX',
  github: 'https://github.com/armando-np/Toolbox'
} as const;

export const NAV_LINKS = [
  { href: '/calculadoras/', label: 'Calculadoras' },
  { href: '/generadores/', label: 'Generadores' },
  { href: '/convertidores/', label: 'Convertidores' },
  { href: '/blog/', label: 'Blog' }
] as const;
