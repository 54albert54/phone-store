
export interface dataShowItems {
  id: string;
  slug: string;
  collection: "celulares" | "accesorios";

  data: {
    title: string;
    description: string;
    pubDate: Date;
    heroImage: [string];
    precio: number;
    oferta: boolean;
    brand: string;
    typeAccesorio?: "audifonos" | "cover" | "cargadores" | "pantallas";
  };
}

export const AllCelulares: dataShowItems[] = [
  {
    id: "1",
    slug: "iphone-13",
    collection: "celulares",
    data: {
      title: "iPhone 13",
      description: "El iPhone 13 cuenta con un sistema de cámaras avanzado, chip A15 Bionic y una duración de batería mejorada.",
      pubDate: new Date("2023-01-15"),
      heroImage: ["https://example.com/images/iphone-13.jpg"],
      precio: 999,
      oferta: true,
      brand: "Apple"
    }
  },
  {
    id: "2",
    slug: "lg-wing",
    collection: "celulares",
    data: {
      title: "LG Wing",
      description: "El LG Wing es un teléfono innovador con una pantalla giratoria para multitareas y cámaras de alta calidad.",
      pubDate: new Date("2023-02-10"),
      heroImage: ["https://example.com/images/lg-wing.jpg"],
      precio: 899,
      oferta: false,
      brand: "LG"
    }
  },
  {
    id: "3",
    slug: "iphone-se",
    collection: "celulares",
    data: {
      title: "iPhone SE",
      description: "El iPhone SE combina el diseño clásico con un rendimiento potente gracias al chip A13 Bionic.",
      pubDate: new Date("2023-03-05"),
      heroImage: ["https://example.com/images/iphone-se.jpg"],
      precio: 499,
      oferta: true,
      brand: "Apple"
    }
  },
  {
    id: "4",
    slug: "lg-velvet",
    collection: "celulares",
    data: {
      title: "LG Velvet",
      description: "El LG Velvet ofrece una experiencia multimedia inmersiva con su pantalla OLED y sonido estéreo.",
      pubDate: new Date("2023-04-20"),
      heroImage: ["https://example.com/images/lg-velvet.jpg"],
      precio: 799,
      oferta: false,
      brand: "LG"
    }
  },


    {
      id: "5",
      slug: "samsung-galaxy-s21",
      collection: "celulares",
      data: {
        title: "Samsung Galaxy S21",
        description: "El Samsung Galaxy S21 cuenta con una pantalla AMOLED, cámara de alta resolución y el potente chip Exynos 2100.",
        pubDate: new Date("2023-05-10"),
        heroImage: ["https://example.com/images/samsung-galaxy-s21.jpg"],
        precio: 799,
        oferta: true,
        brand: "Samsung"
      }
    },
    {
      id: "6",
      slug: "google-pixel-6",
      collection: "celulares",
      data: {
        title: "Google Pixel 6",
        description: "El Google Pixel 6 ofrece una cámara excepcional, pantalla fluida y el chip Google Tensor.",
        pubDate: new Date("2023-05-15"),
        heroImage: ["https://example.com/images/google-pixel-6.jpg"],
        precio: 699,
        oferta: false,
        brand: "Google"
      }
    },
    {
      id: "7",
      slug: "oneplus-9",
      collection: "celulares",
      data: {
        title: "OnePlus 9",
        description: "El OnePlus 9 cuenta con una cámara Hasselblad, pantalla AMOLED de 120Hz y el chip Snapdragon 888.",
        pubDate: new Date("2023-06-01"),
        heroImage: ["https://example.com/images/oneplus-9.jpg"],
        precio: 729,
        oferta: true,
        brand: "OnePlus"
      }
    },
    {
      id: "8",
      slug: "xiaomi-mi-11",
      collection: "celulares",
      data: {
        title: "Xiaomi Mi 11",
        description: "El Xiaomi Mi 11 tiene una pantalla AMOLED WQHD+, cámara de 108MP y el procesador Snapdragon 888.",
        pubDate: new Date("2023-06-10"),
        heroImage: ["https://example.com/images/xiaomi-mi-11.jpg"],
        precio: 749,
        oferta: false,
        brand: "Xiaomi"
      }
    },
    {
      id: "9",
      slug: "sony-xperia-1-iii",
      collection: "celulares",
      data: {
        title: "Sony Xperia 1 III",
        description: "El Sony Xperia 1 III ofrece una pantalla 4K OLED, cámara con óptica Zeiss y el chip Snapdragon 888.",
        pubDate: new Date("2023-06-20"),
        heroImage: ["https://example.com/images/sony-xperia-1-iii.jpg"],
        precio: 1299,
        oferta: true,
        brand: "Sony"
      }
    },
    {
      id: "10",
      slug: "huawei-p40-pro",
      collection: "celulares",
      data: {
        title: "Huawei P40 Pro",
        description: "El Huawei P40 Pro tiene una cámara Leica, pantalla OLED curva y el chip Kirin 990.",
        pubDate: new Date("2023-07-01"),
        heroImage: ["https://example.com/images/huawei-p40-pro.jpg"],
        precio: 999,
        oferta: false,
        brand: "Huawei"
      }
    },
    {
      id: "11",
      slug: "asus-rog-phone-5",
      collection: "celulares",
      data: {
        title: "ASUS ROG Phone 5",
        description: "El ASUS ROG Phone 5 está diseñado para gamers con una pantalla AMOLED de 144Hz y batería de 6000mAh.",
        pubDate: new Date("2023-07-10"),
        heroImage: ["https://example.com/images/asus-rog-phone-5.jpg"],
        precio: 999,
        oferta: true,
        brand: "ASUS"
      }
    },
    {
      id: "12",
      slug: "oppo-find-x3-pro",
      collection: "celulares",
      data: {
        title: "Oppo Find X3 Pro",
        description: "El Oppo Find X3 Pro tiene una pantalla AMOLED QHD+, cámara de 50MP y el chip Snapdragon 888.",
        pubDate: new Date("2023-07-15"),
        heroImage: ["https://example.com/images/oppo-find-x3-pro.jpg"],
        precio: 1099,
        oferta: false,
        brand: "Oppo"
      }
    },
    {
      id: "13",
      slug: "motorola-edge-plus",
      collection: "celulares",
      data: {
        title: "Motorola Edge+",
        description: "El Motorola Edge+ ofrece una pantalla OLED de 90Hz, cámara de 108MP y el chip Snapdragon 865.",
        pubDate: new Date("2023-07-20"),
        heroImage: ["https://example.com/images/motorola-edge-plus.jpg"],
        precio: 999,
        oferta: true,
        brand: "Motorola"
      }
    },
    {
      id: "14",
      slug: "nokia-8-3-5g",
      collection: "celulares",
      data: {
        title: "Nokia 8.3 5G",
        description: "El Nokia 8.3 5G tiene una cámara cuádruple con óptica Zeiss, pantalla PureDisplay y conectividad 5G.",
        pubDate: new Date("2023-08-01"),
        heroImage: ["https://example.com/images/nokia-8-3-5g.jpg"],
        precio: 699,
        oferta: false,
        brand: "Nokia"
      }
    },
    {
      id: "15",
      slug: "realme-gt",
      collection: "celulares",
      data: {
        title: "Realme GT",
        description: "El Realme GT ofrece una pantalla Super AMOLED de 120Hz, cámara de 64MP y el chip Snapdragon 888.",
        pubDate: new Date("2023-08-10"),
        heroImage: ["https://example.com/images/realme-gt.jpg"],
        precio: 599,
        oferta: true,
        brand: "Realme"
      }
    },
    {
      id: "16",
      slug: "vivo-x60-pro",
      collection: "celulares",
      data: {
        title: "Vivo X60 Pro",
        description: "El Vivo X60 Pro cuenta con una cámara estabilizada gimbal, pantalla AMOLED de 120Hz y el chip Snapdragon 870.",
        pubDate: new Date("2023-08-15"),
        heroImage: ["https://example.com/images/vivo-x60-pro.jpg"],
        precio: 799,
        oferta: false,
        brand: "Vivo"
      }
    },
    {
      id: "17",
      slug: "lenovo-legion-phone-duel-2",
      collection: "celulares",
      data: {
        title: "Lenovo Legion Phone Duel 2",
        description: "El Lenovo Legion Phone Duel 2 está diseñado para juegos con una pantalla AMOLED de 144Hz y refrigeración activa.",
        pubDate: new Date("2023-08-20"),
        heroImage: ["https://example.com/images/lenovo-legion-phone-duel-2.jpg"],
        precio: 999,
        oferta: true,
        brand: "Lenovo"
      }
    },
    {
      id: "18",
      slug: "zte-axon-30-ultra",
      collection: "celulares",
      data: {
        title: "ZTE Axon 30 Ultra",
        description: "El ZTE Axon 30 Ultra ofrece una pantalla AMOLED de 144Hz, cámara de 64MP y el chip Snapdragon 888.",
        pubDate: new Date("2023-08-25"),
        heroImage: ["https://example.com/images/zte-axon-30-ultra.jpg"],
        precio: 749,
        oferta: false,
        brand: "ZTE"
      }
    },
    {
      id: "19",
      slug: "tcl-20-pro-5g",
      collection: "celulares",
      data: {
        title: "TCL 20 Pro 5G",
        description: "El TCL 20 Pro 5G cuenta con una pantalla AMOLED curva, cámara de 48MP y conectividad 5G.",
        pubDate: new Date("2023-09-01"),
        heroImage: ["https://example.com/images/tcl-20-pro-5g.jpg"],
        precio: 529,
        oferta: true,
        brand: "TCL"
      }
    },
    {
      id: "20",
      slug: "honor-50",
      collection: "celulares",
      data: {
        title: "Honor 50",
        description: "El Honor 50 tiene una cámara de 108MP, pantalla OLED de 120Hz y el chip Snapdragon 778G.",
        pubDate: new Date("2023-09-10"),
        heroImage: ["https://example.com/images/honor-50.jpg"],
        precio: 499,
        oferta: false,
        brand: "Honor"
      }
    },
    {
      id: "21",
      slug: "meizu-18",
      collection: "celulares",
      data: {
        title: "Meizu 18",
        description: "El Meizu 18 cuenta con una pantalla Super AMOLED de 120Hz, cámara de 64MP y el chip Snapdragon 888.",
        pubDate: new Date("2023-09-15"),
        heroImage: ["https://example.com/images/meizu-18.jpg"],
        precio: 729,
        oferta: true,
        brand: "Meizu"
      }
    },
    {
      id: "22",
      slug: "redmi-note-10-pro",
      collection: "celulares",
      data: {
        title: "Redmi Note 10 Pro",
        description: "El Redmi Note 10 Pro tiene una pantalla AMOLED de 120Hz, cámara de 108MP y una batería de 5020mAh.",
        pubDate: new Date("2023-09-20"),
        heroImage: ["https://example.com/images/redmi-note-10-pro.jpg"],
        precio: 299,
        oferta: false,
        brand: "Xiaomi"
      }
    },
    {
      id: "23",
      slug: "nubia-red-magic-6",
      collection: "celulares",
      data: {
        title: "Nubia Red Magic 6",
        description: "El Nubia Red Magic 6 está diseñado para juegos con una pantalla AMOLED de 165Hz y el chip Snapdragon 888.",
        pubDate: new Date("2023-09-25"),
        heroImage: ["https://example.com/images/nubia-red-magic-6.jpg"],
        precio: 599,
        oferta: true,
        brand: "Nubia"
      }
    },
    {
      id: "24",
      slug: "alcatel-3l",
      collection: "celulares",
      data: {
        title: "Alcatel 3L",
        description: "El Alcatel 3L ofrece una pantalla HD+, cámara de 48MP y una batería de 4000mAh a un precio asequible.",
        pubDate: new Date("2023-10-01"),
        heroImage: ["https://example.com/images/alcatel-3l.jpg"],
        precio: 179,
        oferta: false,
        brand: "Alcatel"
      }
    },
    {
      id: "25",
      slug: "fairphone-3",
      collection: "celulares",
      data: {
        title: "Fairphone 3",
        description: "El Fairphone 3 es un teléfono modular y sostenible con una pantalla Full HD+ y cámara de 48MP.",
        pubDate: new Date("2023-10-05"),
        heroImage: ["https://example.com/images/fairphone-3.jpg"],
        precio: 499,
        oferta: true,
        brand: "Fairphone"
      }
    }
  
  
];

export const allAccessories = [
  {
    "id": "XIOEJBVGCY",
    "slug": "OpcionAleatoria14-pantallas",
    "collection": "accesorios",
    "data": {
      "title": "Accesorio 1 - pantallas",
      "description": "Reemplaza tu pantalla rota por una nueva y brillante.",
      "pubDate": "2024-02-14T08:52:31.732Z",
      "heroImage": ["https://placeimg.com/640/480/tech"],
      "precio": 724,
      "oferta": false,
      "brand": "YUTYCPZYX",
      "typeAccesorio": "pantallas"
    }
  },
  {
    "id": "ZXCVBNMLIU",
    "slug": "OpcionAleatoria8-cargadores",
    "collection": "accesorios",
    "data": {
      "title": "Accesorio 2 - cargadores",
      "description": "Mantén tu celular siempre con carga con este cargador confiable.",
      "pubDate": "2023-05-22T03:14:12.340Z",
      "heroImage": ["https://placeimg.com/640/480/tech"],
      "precio": 217,
      "oferta": true,
      "brand": "QWEPOIUYTRES",
      "typeAccesorio": "cargadores"
    }
  },
  {
    "id": "ZXCVBNMLKJH",
    "slug": "OpcionAleatoria12-audifonos",
    "collection": "accesorios",
    "data": {
      "title": "Accesorio 3 - audifonos",
      "description": "Disfruta de tu música con la mejor calidad de sonido.",
      "pubDate": "2024-03-11T19:25:47.123Z",
      "heroImage": ["https://placeimg.com/640/480/tech"],
      "precio": 981,
      "oferta": false,
      "brand": "ASDFGHJKL",
      "typeAccesorio": "audifonos"
    }
  },
  {
    "id": "IUYTRESWQXCV",
    "slug": "OpcionAleatoria3-cover",
    "collection": "accesorios",
    "data": {
      "title": "Accesorio 4 - cover",
      "description": "Protege tu celular con estilo con este cover resistente.",
      "pubDate": "2023-09-19T07:42:01.872Z",
      "heroImage": ["https://placeimg.com/640/480/tech"],
      "precio": 349,
      "oferta": true,
      "brand": "ZXCVBNMLKJH",
      "typeAccesorio": "cover"
    }
  },
  {
    "id": "MNBVCXZLKJH",
    "slug": "OpcionAleatoria10-audifonos",
    "collection": "accesorios",
    "data": {
      "title": "Accesorio 5 - audifonos",
      "description": "Disfruta de tu música con la mejor calidad de sonido.",
      "pubDate": "2024-01-27T14:09:53.456Z",
      "heroImage": ["https://placeimg.com/640/480/tech"],
      "precio": 428,
      "oferta": false,
      "brand": "ASDFGHJKL Premium",
      "typeAccesorio": "audifonos"
    }
  },

]