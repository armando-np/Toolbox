export type ToolCategory = 'Calculadoras' | 'Generadores' | 'Convertidores';
export type ToolStatus = 'Disponible' | 'Beta' | 'Demo';
export type ToolIcon = 'scale' | 'receipt' | 'calendar' | 'home' | 'qr' | 'key' | 'fingerprint' | 'convert';

export type Tool = {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  category: ToolCategory;
  icon: ToolIcon;
  status: ToolStatus;
  keywords: string[];
  featured?: boolean;
  popular?: boolean;
};

export const tools: Tool[] = [
  {
    id: 'imc',
    title: 'Calculadora de IMC',
    shortTitle: 'IMC',
    description: 'Calcula tu índice de masa corporal con peso y estatura, y consulta una clasificación orientativa.',
    href: '/calculadoras/imc/',
    category: 'Calculadoras',
    icon: 'scale',
    status: 'Disponible',
    keywords: ['imc', 'peso', 'estatura', 'salud', 'masa corporal'],
    featured: true,
    popular: true
  },
  {
    id: 'isr',
    title: 'Estimador educativo de ISR',
    shortTitle: 'ISR',
    description: 'Comprende una tarifa progresiva con parámetros editables. No sustituye una calculadora fiscal oficial.',
    href: '/calculadoras/isr/',
    category: 'Calculadoras',
    icon: 'receipt',
    status: 'Demo',
    keywords: ['isr', 'impuestos', 'sat', 'ingreso', 'tasa'],
    popular: true
  },
  {
    id: 'vacaciones',
    title: 'Calculadora de vacaciones',
    shortTitle: 'Vacaciones',
    description: 'Estima pago de vacaciones y prima vacacional usando salario, días y porcentaje configurables.',
    href: '/calculadoras/vacaciones/',
    category: 'Calculadoras',
    icon: 'calendar',
    status: 'Disponible',
    keywords: ['vacaciones', 'prima vacacional', 'salario', 'laboral', 'mexico'],
    featured: true
  },
  {
    id: 'hipoteca',
    title: 'Calculadora de hipoteca',
    shortTitle: 'Hipoteca',
    description: 'Estima mensualidad, intereses y costo total de un crédito hipotecario con pagos fijos.',
    href: '/calculadoras/hipoteca/',
    category: 'Calculadoras',
    icon: 'home',
    status: 'Disponible',
    keywords: ['hipoteca', 'credito', 'mensualidad', 'intereses', 'casa'],
    featured: true,
    popular: true
  },
  {
    id: 'qr',
    title: 'Generador de código QR',
    shortTitle: 'Código QR',
    description: 'Crea un QR para un enlace o texto y descárgalo como imagen PNG.',
    href: '/generadores/qr/',
    category: 'Generadores',
    icon: 'qr',
    status: 'Disponible',
    keywords: ['qr', 'codigo', 'enlace', 'url', 'png'],
    featured: true,
    popular: true
  },
  {
    id: 'password',
    title: 'Generador de contraseñas',
    shortTitle: 'Contraseñas',
    description: 'Genera contraseñas aleatorias con Web Crypto sin enviar el resultado a un servidor.',
    href: '/generadores/password/',
    category: 'Generadores',
    icon: 'key',
    status: 'Disponible',
    keywords: ['password', 'contrasena', 'seguridad', 'aleatoria', 'web crypto'],
    featured: true,
    popular: true
  },
  {
    id: 'uuid',
    title: 'Generador de UUID v4',
    shortTitle: 'UUID v4',
    description: 'Genera uno o varios identificadores UUID v4 y cópialos en un clic.',
    href: '/generadores/uuid/',
    category: 'Generadores',
    icon: 'fingerprint',
    status: 'Disponible',
    keywords: ['uuid', 'guid', 'identificador', 'desarrollo', 'crypto'],
    featured: true
  },
  {
    id: 'convertidores',
    title: 'Convertidor de unidades',
    shortTitle: 'Convertidores',
    description: 'Convierte longitud, masa y temperatura con resultados instantáneos.',
    href: '/convertidores/',
    category: 'Convertidores',
    icon: 'convert',
    status: 'Disponible',
    keywords: ['convertidor', 'unidades', 'longitud', 'peso', 'temperatura'],
    featured: true,
    popular: true
  }
];

export const getToolsByCategory = (category: ToolCategory) =>
  tools.filter((tool) => tool.category === category);

export const getToolById = (id: string) => tools.find((tool) => tool.id === id);

export const getRelatedTools = (id: string, limit = 3) => {
  const current = getToolById(id);
  if (!current) return tools.slice(0, limit);
  return tools
    .filter((tool) => tool.id !== id)
    .sort((a, b) => Number(b.category === current.category) - Number(a.category === current.category))
    .slice(0, limit);
};
