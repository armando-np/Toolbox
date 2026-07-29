export type ToolCategory = 'Calculadoras' | 'Generadores' | 'Convertidores';
export type ToolStatus = 'Disponible' | 'Beta' | 'Demo';
export type ToolIcon =
  | 'scale'
  | 'receipt'
  | 'calendar'
  | 'home'
  | 'qr'
  | 'key'
  | 'fingerprint'
  | 'convert'
  | 'percent'
  | 'tag'
  | 'cake'
  | 'date-range'
  | 'proportion'
  | 'tax'
  | 'gift'
  | 'umbrella'
  | 'growth'
  | 'bank';

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
    id: 'porcentaje',
    title: 'Calculadora de porcentaje',
    shortTitle: 'Porcentaje',
    description: 'Calcula porcentajes, proporciones y cambios porcentuales con tres modos fáciles de entender.',
    href: '/calculadoras/porcentaje/',
    category: 'Calculadoras',
    icon: 'percent',
    status: 'Disponible',
    keywords: ['porcentaje', 'por ciento', 'proporcion', 'aumento', 'disminucion', 'cambio porcentual'],
    featured: true,
    popular: true
  },
  {
    id: 'descuento',
    title: 'Calculadora de descuento',
    shortTitle: 'Descuento',
    description: 'Obtén el precio final, ahorro total y descuento efectivo, incluso con una promoción adicional.',
    href: '/calculadoras/descuento/',
    category: 'Calculadoras',
    icon: 'tag',
    status: 'Disponible',
    keywords: ['descuento', 'oferta', 'precio final', 'rebaja', 'cupon', 'ahorro'],
    featured: true,
    popular: true
  },
  {
    id: 'edad',
    title: 'Calculadora de edad exacta',
    shortTitle: 'Edad exacta',
    description: 'Calcula años, meses y días, total de días vividos y tiempo restante para el próximo cumpleaños.',
    href: '/calculadoras/edad/',
    category: 'Calculadoras',
    icon: 'cake',
    status: 'Disponible',
    keywords: ['edad', 'fecha de nacimiento', 'cumpleanos', 'anos meses dias', 'edad exacta'],
    featured: true,
    popular: true
  },
  {
    id: 'dias-entre-fechas',
    title: 'Calculadora de días entre fechas',
    shortTitle: 'Días entre fechas',
    description: 'Mide días naturales, semanas y días laborales entre dos fechas, con conteo inclusivo opcional.',
    href: '/calculadoras/dias-entre-fechas/',
    category: 'Calculadoras',
    icon: 'date-range',
    status: 'Disponible',
    keywords: ['dias entre fechas', 'diferencia de fechas', 'dias laborales', 'semanas', 'calendario'],
    featured: true,
    popular: true
  },
  {
    id: 'regla-de-tres',
    title: 'Calculadora de regla de tres',
    shortTitle: 'Regla de tres',
    description: 'Resuelve proporciones directas e inversas y consulta el procedimiento aplicado paso a paso.',
    href: '/calculadoras/regla-de-tres/',
    category: 'Calculadoras',
    icon: 'proportion',
    status: 'Disponible',
    keywords: ['regla de tres', 'proporcion', 'directa', 'inversa', 'matematicas'],
    popular: true
  },
  {
    id: 'iva',
    title: 'Calculadora de IVA México',
    shortTitle: 'IVA México',
    description: 'Agrega o desglosa el IVA de una cantidad usando la tasa general o un porcentaje personalizado.',
    href: '/calculadoras/iva/',
    category: 'Calculadoras',
    icon: 'tax',
    status: 'Disponible',
    keywords: ['iva', 'impuesto', 'sat', '16 por ciento', 'desglosar iva', 'mexico'],
    featured: true,
    popular: true
  },
  {
    id: 'aguinaldo',
    title: 'Calculadora de aguinaldo',
    shortTitle: 'Aguinaldo',
    description: 'Estima el aguinaldo anual o proporcional con salario, fechas trabajadas y días de prestación.',
    href: '/calculadoras/aguinaldo/',
    category: 'Calculadoras',
    icon: 'gift',
    status: 'Disponible',
    keywords: ['aguinaldo', 'aguinaldo proporcional', '15 dias', 'salario', 'prestaciones mexico'],
    featured: true,
    popular: true
  },
  {
    id: 'prima-vacacional',
    title: 'Calculadora de prima vacacional',
    shortTitle: 'Prima vacacional',
    description: 'Estima vacaciones y prima vacacional con días sugeridos por antigüedad y parámetros editables.',
    href: '/calculadoras/prima-vacacional/',
    category: 'Calculadoras',
    icon: 'umbrella',
    status: 'Disponible',
    keywords: ['prima vacacional', 'vacaciones', '25 por ciento', 'antiguedad', 'prestaciones mexico'],
    popular: true
  },
  {
    id: 'interes-compuesto',
    title: 'Calculadora de interés compuesto',
    shortTitle: 'Interés compuesto',
    description: 'Proyecta capital, aportaciones e intereses con una tabla anual y ajuste opcional por inflación.',
    href: '/calculadoras/interes-compuesto/',
    category: 'Calculadoras',
    icon: 'growth',
    status: 'Disponible',
    keywords: ['interes compuesto', 'ahorro', 'inversion', 'rendimiento', 'aportaciones', 'inflacion'],
    featured: true,
    popular: true
  },
  {
    id: 'prestamo',
    title: 'Calculadora de préstamo',
    shortTitle: 'Préstamo',
    description: 'Estima mensualidad, intereses, costo total y efecto de abonos adicionales con tabla de amortización.',
    href: '/calculadoras/prestamo/',
    category: 'Calculadoras',
    icon: 'bank',
    status: 'Disponible',
    keywords: ['prestamo', 'credito', 'mensualidad', 'amortizacion', 'intereses', 'pago extra'],
    featured: true,
    popular: true
  },
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
  const currentKeywords = new Set(current.keywords.map((keyword) => keyword.toLowerCase()));
  const score = (tool: Tool) => {
    const sharedKeywords = tool.keywords.reduce(
      (total, keyword) => total + Number(currentKeywords.has(keyword.toLowerCase())),
      0
    );
    return sharedKeywords * 4 + Number(tool.category === current.category) * 3 + Number(tool.popular);
  };
  return tools
    .filter((tool) => tool.id !== id)
    .sort((a, b) => score(b) - score(a))
    .slice(0, limit);
};
