export type Tool = {
  title: string;
  description: string;
  href: string;
  category: 'Calculadoras' | 'Generadores' | 'Convertidores';
  status?: 'Disponible' | 'Demo';
};

export const tools: Tool[] = [
  {
    title: 'Calculadora de IMC',
    description: 'Calcula tu indice de masa corporal con peso y estatura.',
    href: '/calculadoras/imc/',
    category: 'Calculadoras',
    status: 'Disponible'
  },
  {
    title: 'Estimador de ISR',
    description: 'Demo educativa para experimentar con una tarifa progresiva editable.',
    href: '/calculadoras/isr/',
    category: 'Calculadoras',
    status: 'Demo'
  },
  {
    title: 'Calculadora de vacaciones',
    description: 'Estima dias, prima vacacional y pago con parametros configurables.',
    href: '/calculadoras/vacaciones/',
    category: 'Calculadoras',
    status: 'Disponible'
  },
  {
    title: 'Calculadora de hipoteca',
    description: 'Estima mensualidad, intereses y costo total de un credito.',
    href: '/calculadoras/hipoteca/',
    category: 'Calculadoras',
    status: 'Disponible'
  },
  {
    title: 'Generador de QR',
    description: 'Crea un codigo QR para textos o enlaces y descargalo como PNG.',
    href: '/generadores/qr/',
    category: 'Generadores',
    status: 'Disponible'
  },
  {
    title: 'Generador de contrasenas',
    description: 'Crea contrasenas aleatorias desde tu navegador.',
    href: '/generadores/password/',
    category: 'Generadores',
    status: 'Disponible'
  },
  {
    title: 'Generador de UUID',
    description: 'Genera identificadores UUID v4 con Web Crypto.',
    href: '/generadores/uuid/',
    category: 'Generadores',
    status: 'Disponible'
  },
  {
    title: 'Convertidores',
    description: 'Convierte longitud, peso y temperatura.',
    href: '/convertidores/',
    category: 'Convertidores',
    status: 'Disponible'
  }
];
