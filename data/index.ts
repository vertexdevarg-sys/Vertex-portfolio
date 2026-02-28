// data/index.ts

export const navItems = [
  { name: "Sobre nosotros", link: "#about" },
  { name: "Proyectos", link: "#projects" },
  { name: "Testimonios", link: "#testimonials" },
  { name: "Contacto", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizamos la colaboración con el cliente y una comunicación clara",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/vertex-mockup.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Nos adaptamos a tus horarios y respondemos rápido (Argentina / remoto)",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Nuestro stack",
    description: "Siempre mejorando y sumando herramientas",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
  id: 4,
  title: "Vertex Dev",
  description:
    "Creamos sistemas y experiencias digitales premium. Equipo chico, rápido y obsesionado con la calidad.",
  className: "lg:col-span-2 md:col-span-3 md:row-span-1",
  imgClassName: "",
  titleClassName: "justify-start",
  img: "/grid.svg",
  spareImg: "/b4.svg",

  // ✅ NUEVO: equipo
  team: [
    {
      name: "Alejo Chiaretta",
      role: "Full-Stack",
      age: 21,
      ig: "https://www.instagram.com/alejochiaretta/?hl=es-la",
    },
    {
      name: "Naza Garrone",
      role: "Frontend",
      age: 23,
      ig: "https://www.instagram.com/naza.garrone/?hl=es-la",
    },
    {
      name: "Santiago Giustolisi",
      role: "Backend",
      age: 21,
      ig: "https://www.instagram.com/santyy.__/?hl=es-la",
    },
    {
      name: "Joaquin Dopazp",
      role: "QA / DevOps",
      age: 21,
      ig: "https://www.instagram.com/joaquin_dopazo/?hl=es-la",
    },
  ],
},
  {
    id: 5,
    title: "Actualmente construyendo productos y automatizaciones para negocios",
    description: "Lo que estamos haciendo ahora",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "¿Empezamos un proyecto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  // ✅ SIN SITIO WEB -> mostrar "Ver caso" (modal/descripcion) y NO mostrar fotos
  {
    id: 1,
    title: "Hotel Ansenuza — Pedidos & Cocina",
    des: "Sistema de pedidos con estados, tickets para cocina y organización por sectores. Hecho a medida para agilizar el servicio.",
    img: "/1.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/sql.svg"],
    type: "case",
    showMedia: false,
    cta: "consult",
    caseStudy: {
      problem:
        "El hotel recibía pedidos de forma desordenada (mensajes, papel, mozos), generando demoras y errores entre recepción y cocina.",
      solution:
        "Creamos un sistema a medida con panel de recepción + cocina, estados por pedido y tickets por sector para organizar el flujo completo.",
      result:
        "Pedidos más rápidos, menos errores, mejor coordinación y control total por mesa/cliente en tiempo real.",
    },
  },

  // ✅ CON SITIO WEB -> mostrar "Ver sitio"
  {
    id: 2,
    title: "Hattrick — E-commerce de camisetas",
    des: "Tienda online con catálogo, filtros, página de producto y checkout por WhatsApp. Diseño mobile-first y rápido.",
    img: "/3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    type: "live",
    link: "https://hattrick.website/",
    showMedia: false,
    cta: "visit",
    caseStudy: {
      problem:
        "El negocio necesitaba vender online de forma profesional, pero sin un ecommerce pesado ni complejo de mantener.",
      solution:
        "Diseñamos una tienda rápida, mobile-first, con catálogo, búsqueda, filtros y cierre de compra por WhatsApp para maximizar conversiones.",
      result:
        "Mejor experiencia de compra, más ventas organizadas y un proceso de pedido simple para el cliente y para el dueño.",
    },
  },

  // ✅ SIN SITIO WEB -> mostrar "Ver caso"
  {
    id: 3,
    title: "Kiosco POS — Ventas Offline",
    des: "Ventas rápidas con lector, tickets, control de productos y caja. Hecho para kioscos y almacenes.",
    img: "/kiosco.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    type: "case",
    showMedia: false,
    cta: "consult",
    caseStudy: {
      problem:
        "Se necesitaba cobrar rápido, controlar productos y registrar ventas sin depender de internet, evitando pérdidas de tiempo y errores.",
      solution:
        "Desarrollamos un POS offline con lector de códigos, carga rápida, caja, control de stock y emisión de tickets.",
      result:
        "Cobros más ágiles, mejor control diario y un sistema simple que cualquier empleado puede usar sin fricción.",
    },
  },

  // ✅ SIN SITIO WEB -> mostrar "Ver caso"
  {
    id: 4,
    title: "PediMaster — Pedidos desde el celular",
    des: "Pedido rápido desde el celular, confirmación instantánea y seguimiento. Ideal para restaurantes y delivery.",
    img: "/4.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/sql.svg"],
    type: "case",
    showMedia: false,
    cta: "consult",
    caseStudy: {
      problem:
        "Los restaurantes necesitaban digitalizar pedidos sin depender de llamadas/mensajes, evitando confusiones y tiempos muertos.",
      solution:
        "Creamos una app mobile-first con navegación simple, confirmación instantánea y seguimiento del pedido.",
      result:
        "Pedidos más rápidos, menos errores y una experiencia más moderna para el cliente final.",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Desde que implementamos el sistema en el Hotel Ansenuza, el servicio cambió completamente. Cocina y recepción trabajan más ordenados, los pedidos salen más rápido y tenemos un control total de cada mesa.",
    name: "Dueño · Hotel Ansenuza",
    title: "",
    img: "/33.jpg",
  },
  {
    quote:
      "Hattrick pasó de ser una idea a una tienda profesional. El catálogo es rápido, el diseño es moderno y el cierre por WhatsApp nos simplificó muchísimo las ventas. Hoy vendemos mucho más organizados.",
    name: "Founder · Hattrick Store",
    title: "",
    img: "/44.jpg",
  },
  {
    quote:
      "Pedí desde el celular y fue rapidísimo. La confirmación llegó al instante y el pedido salió sin errores. Se nota cuando hay un sistema bien hecho detrás.",
    name: "Cliente · PediMaster",
    title: "",
    img: "/55.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Hotel Ansenuza",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Clientes",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Partners",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrollo Web & Landing Pages",
    desc: "Creamos sitios rápidos, modernos y orientados a conversión (formularios, SEO, performance).",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "E-commerce & Catálogos",
    desc: "Tiendas con catálogo, filtros, producto, carrito y checkout. Integraciones y mantenimiento.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Sistemas a medida",
    desc: "Control de stock, turnos, reportes, panel admin, usuarios/roles y automatizaciones según el negocio.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Soporte & Mejora continua",
    desc: "Seguimos mejorando tu producto con nuevas funciones, ajustes, backups y optimizaciones.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/vertexdevarg-sys/",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://www.instagram.com/alejochiaretta/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vertexdevarg/",
  },
];