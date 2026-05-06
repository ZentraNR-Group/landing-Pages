export const COMPANY = {
  name: 'ZENTRANR',
  legalName: 'ZENTRANR Corporate',
  ruc: '20615150607',
  foundedYear: 2025,
  website: 'https://zentranr.com',

  contact: {
    phone: '+51 930 120 687',
    phoneHref: 'tel:+51930120687',
    email: 'contacto@zentranr.com',
    emailHref: 'mailto:contacto@zentranr.com',
  },

  address: {
    street: 'Jr. Pallka 1177',
    district: 'Mangomarca, San Juan de Lurigancho',
    city: 'Lima',
    postalCode: '15434',
    country: 'Perú',
    coordinates: {
      lat: -12.0048,
      lng: -76.9870,
    },
  },

  hours: [
    { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
    { day: 'Domingo', hours: 'Cerrado' },
  ],

  social: {
    // TODO: Agregar URLs reales cuando estén disponibles
    // linkedin: '',
    // facebook: '',
    // instagram: '',
  },
} as const;
