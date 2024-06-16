


export interface OfertDataPost {
  id: string;
  slug: string;
  body: string;
  collection: string;
  title: string;
  description: string;
  pubDate: Date;
  heroImage: string;

}

export const dummyData: OfertDataPost[] = [
  {
    id: 'cambiar-pantalla',
    slug: 'cambiar-pantalla',
    body: '',
    collection: 'Servicios',
  
      title: '¡Cambiamos la pantalla de tu celular!',
      description:
        '¿Pantalla rota? ¡No te preocupes! Ofrecemos servicio de cambio de pantallas para todo tipo de celulares.',
      pubDate: new Date('2022-07-01T04:00:00.000Z'),
      heroImage: '/dummServices/screens.png',
    
  },
  {
    id: 'cambiar-cristal',
    slug: 'cambiar-cristal',
    body: '',
    collection: 'Servicios',
   
      title: '¡Cambiamos el cristal de tu celular!',
      description:
        '¿Pantalla rota? ¡No te preocupes! Ofrecemos servicio de cambio de cristals para todo tipo de celulares.',
      pubDate: new Date("2022-07-01T04:00:00.000Z"),
      heroImage: '/dummServices/changeCristal.png',
    
  },
  {
    id: 'data-recovery',
    slug: 'data-recovery',
    body: '',
    collection: 'Servicios',
      title: '¡Recuperamos tus datos de tu celular!',
      description:
        '¿Información perdida? ¡No te preocupes! Ofrecemos servicio mas avanzado de recuperación de datos.',
      pubDate: new Date('2022-07-01T04:00:00.000Z'),
      heroImage: '/dummServices/dataRecovery.png',
  
  },
  {
    id: 'upgrade-space',
    slug: 'upgrade-space',
    body: '',
    collection: 'Servicios',
 
      title: '¡Mejoramos el espacio de tu celular!',
      description:
        '¿Necesitas espacio extra? ¡No te preocupes! Nuevamente ofrecemos servicio de mejora de espacio.',
      pubDate: new Date('2022-07-01T04:00:00.000Z'),
      heroImage: '/dummServices/upGradeMemory.png',

  },
]