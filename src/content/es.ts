import type { SiteContent } from './types'

export const es: SiteContent = {
  locale: 'es',
  localeName: 'Español',
  meta: {
    home: {
      title: 'Dashcam App para Coche — Cámara para Coche Gratis | DriveCam',
      description:
        'DriveCam es la app dashcam para coche que convierte tu móvil en una cámara para coche fiable. Grabación en bucle con GPS, modo privado y voz. Gratis en iPhone y Android.',
    },
    features: {
      title: 'Funciones de Dashcam — Grabación en Bucle, GPS y Voz | DriveCam',
      description:
        'Todas las funciones de tu dash camera: grabación en bucle, datos GPS, control por voz sin conexión, modo noche, protección térmica e informes de incidente.',
    },
    pricing: {
      title: 'Precios Dashcam — Gratis vs PRO de por Vida | DriveCam',
      description:
        'Empieza con la dashcam gratis o desbloquea PRO para siempre con un pago único. Máxima calidad de vídeo, almacenamiento, streaming en vivo y estadísticas. Sin cuenta.',
    },
    guide: {
      title: 'Cómo Convertir tu Móvil en una Dashcam — Guía | DriveCam',
      description:
        'Guía práctica para montar una dashcam en el coche con tu móvil: soporte, ajustes de vídeo, batería y calor — y la normativa local antes de grabar.',
    },
    legal: {
      title: 'Privacidad y Términos — DriveCam',
      description:
        'Cómo trata DriveCam tus datos: los vídeos se quedan en tu dispositivo, sin cuentas y sin subidas. Lee la política de privacidad y los términos de uso.',
    },
    notFound: {
      title: 'Página No Encontrada — DriveCam',
      description: 'La página que buscas no existe. Vuelve a la página principal de DriveCam.',
    },
  },
  header: {
    homeLabel: 'Inicio de DriveCam',
    links: [
      { label: 'Cómo funciona', to: '/guide/' },
      { label: 'Precios', to: '/pricing/' },
      { label: 'Funciones', to: '/features/' },
      { label: 'Preguntas', to: '/#faq' },
      { label: 'Contacto', to: '/#contact' },
    ],
    cta: 'Descargar app',
  },
  footer: {
    tagline:
      'La app dashcam que convierte el móvil de tu bolsillo en un testigo fiable en cada trayecto. Privada, funciona sin conexión y sin comprar hardware.',
    navTitle: 'Explora',
    links: [
      { label: 'Inicio', to: '/' },
      { label: 'Cómo configurarla', to: '/guide/' },
      { label: 'Precios', to: '/pricing/' },
      { label: 'Funciones', to: '/features/' },
      { label: 'Preguntas', to: '/#faq' },
      { label: 'Contacto', to: '/#contact' },
    ],
    legalTitle: 'Legal',
    legalLinks: [
      { label: 'Política de privacidad', href: 'https://axislabs.eu/drivecam/policy' },
      {
        label: 'Términos y condiciones',
        href: 'https://axislabs.eu/drivecam/terms-and-conditions',
      },
    ],
    contactTitle: 'Soporte',
    contactBody: 'Errores, ideas o simplemente feedback: cada mensaje se lee y se responde.',
    stores: [
      {
        label: 'Google Play',
        href: 'https://play.google.com/store/apps/details?id=com.drodriguez.drivecam',
      },
      {
        label: 'App Store',
        href: 'https://apps.apple.com/es/app/drivecam-car-camera-recorder/id6791342778',
      },
    ],
    madeByPrefix: 'Diseñado y desarrollado por',
    madeByBrand: 'Axis Labs',
    madeByHref: 'https://axislabs.eu',
    rights: 'Todos los derechos reservados.',
  },
  hero: {
    eyebrow: 'App dashcam · iPhone y Android',
    title: 'Tu móvil ya es una',
    titleAccent: 'dashcam.',
    description:
      'DriveCam es la cámara para coche que convierte tu móvil en un testigo fiable en cada trayecto. Vídeo en bucle con GPS, velocidad y hora grabados dentro — guardado en privado en tu móvil, nunca en tu galería. Sin hardware que comprar, sin cables y sin crear cuentas.',
    primaryCta: 'Descargar DriveCam gratis',
    secondaryCta: 'Ver qué desbloquea PRO',
    badges: ['Plan gratis disponible', 'Funciona sin conexión', 'Privada por diseño'],
  },
  stats: {
    eyebrow: 'Hecha para la carretera',
    items: [
      { value: '1 toque', label: 'Del soporte a grabar' },
      { value: '100%', label: 'Vídeo guardado en local, nunca subido' },
      { value: '1/2/3 min', label: 'Segmentos en bucle, los antiguos se reciclan' },
    ],
  },
  gap: {
    eyebrow: 'El problema',
    title: 'La carretera no da segundas tomas.',
    description:
      'Un golpe tonto, un accidente provocado, un frenazo buscado, un toque y fuga en el aparcamiento. En cada uno de esos momentos es tu palabra contra la suya — y sin vídeo, la conversación rara vez acaba a tu favor.',
    points: [
      {
        title: 'Los testigos siguen su camino',
        description:
          'Cuando consigues apartarte, quien lo vio todo ya no está. El parte, el seguro y la denuncia se convierten en discusiones que no puedes ganar sin pruebas.',
      },
      {
        title: 'Las dashcam de hardware cuestan más de lo que deberían',
        description:
          'Una dashcam decente significa pagar el dispositivo, conectarla al coche, comprar tarjetas de memoria y cruzar los dedos para que sobreviva otro verano al sol.',
      },
      {
        title: 'Las apps de cámara normales estorban',
        description:
          'Grabar con la app de cámara de siempre llena la galería de vídeos larguísimos, activa copias en la nube que no pediste y se detiene justo cuando necesitas el móvil.',
      },
    ],
    closing:
      'El problema nunca fue la cámara. Fue el software capaz de convertir el móvil que ya tienes en una cámara para coche fiable.',
  },
  solution: {
    eyebrow: 'La solución',
    title: 'Una cámara para coche completa, construida alrededor de tu móvil.',
    description:
      'DriveCam se diseñó para la carretera desde el primer día: coloca el móvil, pulsa grabar y conduce. La grabación en bucle, el GPS, el modo noche, el control por voz — hasta la protección térmica — van solos.',
    steps: [
      {
        number: '01',
        title: 'Coloca y abre',
        description:
          'Sirve cualquier soporte de móvil. Abre DriveCam y la vista a pantalla completa encuadra la carretera al instante: sin menús ni toqueteos en un semáforo.',
      },
      {
        number: '02',
        title: 'Pulsa grabar, conduce',
        description:
          'Un toque inicia la grabación en bucle. Los clips se cortan en segmentos de 1, 2 o 3 minutos y los más antiguos rotan automáticamente, así el almacenamiento nunca se llena sin avisar.',
      },
      {
        number: '03',
        title: 'Guarda la prueba',
        description:
          'Velocidad, GPS y hora van grabados en cada clip. Bloquea los que importan, compártelos al momento o genera un informe de incidente listo para la policía en segundos.',
      },
    ],
    note: '¿Tienes un móvil viejo en un cajón? Perfecto: se convierte en una dashcam dedicada y tu móvil de diario no sale del bolsillo.',
  },
  benefits: {
    eyebrow: 'Por qué DriveCam',
    title: 'No es solo una cámara. Es tu versión de los hechos.',
    description:
      'Cada función existe para responder una pregunta: cuando pase algo, ¿tendrás lo necesario para demostrarlo?',
    items: [
      {
        icon: 'shield',
        title: 'Pruebas cuando importan',
        description:
          'Un informe de incidente con fecha, GPS, mapa, velocidad máxima y duración — generado desde el propio vídeo y listo para entregar a la policía o al seguro.',
      },
      {
        icon: 'mic',
        title: 'Conduce sin manos',
        description:
          'Empieza a grabar, bloquea un clip, haz una foto o activa el modo noche con la voz. Totalmente sin conexión: funciona en túneles y zonas sin cobertura.',
      },
      {
        icon: 'lock',
        title: 'Tu vídeo es tuyo',
        description:
          'Los vídeos viven en una carpeta privada dentro de la app: nunca en tu galería, nunca subidos a ninguna nube, nunca escaneados por nadie más.',
      },
      {
        icon: 'thermo',
        title: 'Hecha para viajes largos',
        description:
          'La protección térmica, los avisos de batería baja y la grabación en segundo plano mantienen la cámara activa del primer al último kilómetro, con la pantalla apagada.',
      },
    ],
  },
  features: {
    eyebrow: 'Recorrido por las funciones',
    title: 'Todo lo que debería hacer una dashcam',
    description: 'Incluido lo que las dashcam de hardware olvidaron.',
    items: [
      {
        icon: 'clip',
        title: 'Grabación en bucle',
        description:
          'Segmentos de 1, 2 o 3 minutos que rotan solos. Configúralo una vez y no vuelvas a pensar en el espacio.',
      },
      {
        icon: 'gps',
        title: 'Datos GPS en el vídeo',
        description:
          'Velocidad, coordenadas y hora grabadas dentro del vídeo: prueba indiscutible de dónde y cuándo.',
      },
      {
        icon: 'gauge',
        title: 'Aviso de límite de velocidad',
        description: 'Velocidad en directo con indicador del límite y aviso sonoro al superarlo.',
      },
      {
        icon: 'moon',
        title: 'Modo noche',
        description:
          'Ilumina automáticamente los trayectos nocturnos cuando baja la luz, usando el sensor de luminosidad.',
      },
      {
        icon: 'mic',
        title: 'Control por voz sin conexión',
        description:
          'Graba, para, bloquea un clip, haz una foto, activa el modo noche o apaga la pantalla — sin internet.',
      },
      {
        icon: 'battery',
        title: 'Grabación en segundo plano',
        description:
          'Sigue grabando con la pantalla apagada, con umbrales de batería que protegen tu móvil.',
      },
      {
        icon: 'camera',
        title: 'Elección de cámara',
        description:
          'Usa la cámara frontal o trasera, la que mejor encaje con tu soporte y tu coche.',
      },
      {
        icon: 'chart',
        title: 'Estadísticas de conducción',
        description:
          'Distancia, trayectos, velocidad media y máxima, frenadas bruscas — con récords personales que batir.',
      },
      {
        icon: 'stream',
        title: 'Streaming en vivo',
        description:
          'Emite tu trayecto desde tu propio servidor privado, con control total de la señal.',
      },
      {
        icon: 'float',
        title: 'Picture-in-picture',
        description:
          'Vigila la carretera mientras usas el móvil para otra cosa, con PiP en Android.',
      },
      {
        icon: 'photo',
        title: 'Galería privada',
        description:
          'Explora, reproduce, bloquea y comparte clips desde la app — protegidos de la limpieza automática.',
      },
      {
        icon: 'mount',
        title: 'Registro de mantenimiento',
        description:
          'Apunta las revisiones y recibe avisos en el calendario antes de que se te escape el próximo cambio de aceite.',
      },
    ],
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Todo lo que ibas a preguntar',
    description: 'Respuestas cortas. Y reales.',
    items: [
      {
        question: '¿DriveCam es gratis de verdad?',
        answer:
          'Sí. El plan gratis cubre la grabación del día a día: bucle, datos GPS, modo noche, control por voz y galería privada. PRO — un único pago — desbloquea la máxima calidad de vídeo, control total del almacenamiento, streaming en vivo y estadísticas de conducción. También puedes desbloquear una prueba PRO de 7 días viendo unos cuantos anuncios cortos.',
      },
      {
        question: '¿En qué se diferencia de una dashcam de hardware?',
        answer:
          'Sin dispositivo que comprar, sin cableado y sin tarjetas de memoria. DriveCam usa el móvil que ya llevas en el soporte — o el viejo que guardas en un cajón — como una cámara completa. Las mismas pruebas, con cero hardware extra.',
      },
      {
        question: '¿Dónde se guardan mis grabaciones?',
        answer:
          'En una carpeta privada dentro de la app. Nunca aparecen en tu galería, nunca se suben a ningún sitio y están bajo tu control. Define un límite de almacenamiento y DriveCam irá reciclando los clips antiguos para que la app no engorde sin control.',
      },
      {
        question: '¿Se va a calentar o a comerse mi batería?',
        answer:
          'DriveCam vigila la temperatura del móvil y pausa la grabación con un aviso de enfriamiento antes de que sea peligroso. Los avisos de batería te permiten fijar un umbral, y la grabación en segundo plano mantiene bajo el consumo con la pantalla apagada.',
      },
      {
        question: '¿Graba con la pantalla apagada?',
        answer:
          'Sí. La grabación en segundo plano sigue capturando con la pantalla apagada: en Android mediante un servicio en primer plano y en iPhone mediante audio en segundo plano. Tu móvil puede quedarse bloqueado mientras DriveCam sigue grabando.',
      },
      {
        question: '¿Necesito conexión a internet?',
        answer:
          'No. La grabación, el sellado GPS e incluso el control por voz funcionan totalmente sin conexión. Internet solo se usa para el streaming en vivo a tu propio servidor (opcional), los anuncios del plan gratis y las compras de la tienda.',
      },
    ],
  },
  download: {
    eyebrow: 'Empieza ya',
    title: 'Conduce con un testigo a bordo.',
    description:
      'Descarga DriveCam gratis para iPhone o Android. Empezar a grabar es un toque — y puede convertirse en la app más importante de tu móvil.',
    note: 'Plan gratis disponible · Desbloquea PRO para siempre con un pago único',
  },
  contact: {
    eyebrow: 'Contacto',
    title: '¿Dudas, ideas o un error que reportar?',
    description:
      'Soy el desarrollador de DriveCam y respondo yo mismo cada mensaje. Si has encontrado un error, quieres una función nueva o simplemente saludar, escríbeme. Tu app de correo se abrirá con todo ya rellenado.',
    nameLabel: 'Tu nombre',
    namePlaceholder: 'Alex Conductor',
    emailLabel: 'Tu email',
    emailPlaceholder: 'tu@ejemplo.com',
    messageLabel: 'Tu mensaje',
    messagePlaceholder: 'Cuéntame qué ha pasado, qué te gustaría ver o qué te ha vuelto loco…',
    submitLabel: 'Abrir en mi app de correo',
    hint: 'Este formulario abre tu app de correo: no se envía nada a ningún servidor ni se guarda nada en esta web.',
    successTitle: 'Tu app de correo debería haberse abierto',
    successBody:
      'Si no ha pasado nada, escribe directamente a drodriguez.apps@gmail.com. Normalmente respondo en 1–2 días.',
  },
  pricing: {
    eyebrow: 'Precios',
    title: 'Gratis para conducir. PRO cuando tú quieras.',
    description:
      'Una app, dos formas de usarla. Empieza gratis y desbloquea todo con un único pago — tuyo para siempre. Sin cuenta, sin rastreo y sin costes ocultos.',
    trust:
      'Compras gestionadas con seguridad por App Store y Google Play · Pago único, sin suscripción · Precios con impuestos incluidos',
    plans: [
      {
        key: 'free',
        name: 'Gratis',
        badge: null,
        price: '0 €',
        period: 'para siempre',
        summary: 'Todo lo necesario para empezar a grabar tus trayectos hoy mismo.',
        features: [
          'Grabación en bucle en segmentos de 1 minuto',
          'Datos GPS — velocidad, hora y ubicación',
          'Galería y reproductor privados en la app',
          'Límite de almacenamiento con limpieza automática',
          'Modo noche',
          'Control por voz sin conexión',
          'Informe de incidente en PDF',
          'Opcional: prueba PRO de 7 días viendo anuncios',
        ],
        ctaLabel: 'Descargar gratis',
        popular: false,
      },
      {
        key: 'lifetime',
        name: 'PRO de por vida',
        badge: 'Mejor precio',
        price: '18,99 €',
        period: 'pago único',
        summary: 'Paga una vez y conserva PRO para siempre, incluidas las futuras novedades.',
        features: [
          'Calidad de vídeo Alta y Máxima',
          'Control total de la duración del bucle y del almacenamiento',
          'Streaming en vivo a tu propio servidor',
          'Estadísticas e historial completos de conducción',
          'Experiencia sin anuncios',
          'Un solo pago, tuyo para siempre — con las futuras funciones PRO',
        ],
        ctaLabel: 'Desbloquear PRO de por vida',
        popular: true,
      },
    ],
    trial: {
      eyebrow: 'Prueba antes de pagar',
      title: 'Prueba PRO con tres anuncios cortos',
      description:
        '¿Aún no lo tienes claro? Ve tres vídeos cortos en el plan gratis y desbloquea una prueba PRO de 7 días. Sin datos de pago y sin compromiso: la app completa durante una semana.',
    },
    faqTitle: 'Preguntas sobre precios',
    faq: [
      {
        question: '¿El plan gratis es usable de verdad o es una demo?',
        answer:
          'Usable de verdad. El plan gratis graba, hace bucle, sella el GPS y mantiene tus clips privados: el trabajo esencial de una dashcam. PRO añade niveles de calidad, control de almacenamiento, streaming en vivo y estadísticas de conducción.',
      },
      {
        question: '¿Tengo que volver a pagar cuando lleguen nuevas funciones PRO?',
        answer:
          'No. PRO de por vida es un único pago: desbloqueas todo ahora y cada futura función PRO queda incluida. Sin renovaciones, sin recordatorios y sin suscripciones que gestionar.',
      },
      {
        question: '¿Cómo restauro mi compra en un móvil nuevo?',
        answer:
          'Abre la pantalla PRO y pulsa Restaurar compras. Si has iniciado sesión con la misma cuenta de App Store o Google Play, tu PRO se desbloquea automáticamente: no guardamos nada por nuestra parte.',
      },
      {
        question: '¿El precio es el mismo en todos los países?',
        answer:
          'El precio sigue la tienda local de App Store o Google Play, con los impuestos aplicables incluidos, así que el importe que ves al pagar es el definitivo. El precio de esta página se adapta al país desde el que nos visitas.',
      },
    ],
  },
  guide: {
    eyebrow: 'Guía de configuración',
    title: 'Cómo convertir tu móvil en dashcam',
    description:
      'Una puesta en marcha corta y práctica: colócalo bien, configúralo una vez y consulta la normativa antes de grabar.',
    intro: [
      'Un buen vídeo de dashcam no sale por casualidad. Con el soporte adecuado, cinco minutos de configuración y algo de gestión del calor, tu móvil graba pruebas fiables en cada trayecto.',
    ],
    sections: [
      {
        id: 'mount',
        number: '01',
        title: 'Colócalo bien',
        paragraphs: [
          'Sirve cualquier iPhone o Android moderno — uno viejo en un cajón es ideal, porque puede quedarse montado y cargando en el coche. Ponlo en el centro-arriba del parabrisas o sobre el salpicadero, viendo la carretera y sin taparte la vista.',
        ],
        bullets: [
          'Cámara con GPS activado — es lo que hace útil el vídeo',
          'Lejos de los airbags y de tu campo de visión',
          'Pasa el cable de carga lejos de los mandos',
        ],
      },
      {
        id: 'settings',
        number: '02',
        title: 'Configura DriveCam en cinco minutos',
        paragraphs: [
          'Instala DriveCam, ábrela y concede los permisos que pide: cámara, micrófono, ubicación y notificaciones. Después repasa estos ajustes una vez — a partir de ahí, grabar es un solo toque.',
        ],
        bullets: [
          'Duración del bucle: 1–2 minutos mantiene clips y espacio manejables',
          'Límite de almacenamiento: 2–5 GB limpia solo',
          'Activa el sellado GPS: velocidad y coordenadas son tu mejor prueba',
        ],
      },
      {
        id: 'extras',
        number: '03',
        title: 'Voz, estadísticas y redes de seguridad',
        paragraphs: [
          'Cuando lo básico funcione, activa las funciones que hacen más fácil y seguro el día a día al volante.',
        ],
        bullets: [
          'Control por voz: graba, bloquea clips y haz fotos sin manos',
          'Velocidad en pantalla y avisos de límite',
          'Modo noche y avisos de batería baja',
        ],
      },
      {
        id: 'heat',
        number: '04',
        title: 'Vence al calor y al consumo de batería',
        paragraphs: [
          'El calor es el asesino número uno de las dashcam con móvil. DriveCam vigila la temperatura y pausa la grabación antes de causar daños — ayúdala dejando el móvil fuera del sol directo y cargando mientras graba.',
        ],
        bullets: [
          'Aparca a la sombra o aparta el móvil del sol',
          'Orienta una salida de aire hacia el móvil en días calurosos',
          'Mantén la carga mientras graba: GPS y cámara consumen rápido',
        ],
      },
      {
        id: 'incident',
        number: '05',
        title: 'Tras un incidente: bloquéalo, documéntalo',
        paragraphs: [
          'Cuando ocurre algo, solo tienes dos tareas: conservar el clip y entregar los hechos. DriveCam está hecha para las dos.',
        ],
        bullets: [
          'Bloquea el clip para que la limpieza no pueda tocarlo',
          'Genera el informe PDF con GPS, mapa y velocidad máxima',
          'Compártelo con tu seguro o la policía desde la app',
        ],
      },
    ],
    lawTitle: 'Consulta la normativa donde conduces',
    lawNote:
      'Las normas sobre dashcams cambian de un país a otro, y a veces incluso entre regiones. Antes de montar una cámara, consulta la normativa vigente que se aplica donde conduces. DriveCam es una ayuda, no asesoramiento legal.',
    ctaTitle: '¿Listo para probarla en tu propio parabrisas?',
    ctaBody: 'DriveCam se descarga gratis para iPhone y Android.',
  },
  legal: {
    eyebrow: 'Legal',
    title: 'Política de privacidad y términos de uso',
    updated: 'Última actualización: marzo de 2026',
    privacyTitle: 'Política de privacidad',
    privacy: [
      {
        id: 'who-we-are',
        title: '1. Quiénes somos',
        paragraphs: [
          'DriveCam es una aplicación móvil desarrollada por Axis Labs ("nosotros"). Esta política explica qué hace la app con tu información. La versión corta: tu vídeo y tu ubicación se quedan en tu dispositivo.',
          'Para cualquier duda de privacidad, escribe a drodriguez.apps@gmail.com.',
        ],
      },
      {
        id: 'stored-on-device',
        title: '2. Qué se queda en tu dispositivo',
        paragraphs: [
          'Las grabaciones de vídeo, las fotos, los datos GPS grabados en los vídeos, los ajustes y tu registro de mantenimiento se guardan localmente en tu dispositivo, dentro del almacenamiento privado de la app. No operamos servidores que reciban tu vídeo y no podemos acceder a él, verlo ni recuperarlo.',
        ],
      },
      {
        id: 'permissions',
        title: '3. Permisos que solicita la app',
        paragraphs: [
          'Cámara: para grabar vídeo y fotos. Micrófono: para capturar audio en los vídeos y escuchar comandos de voz (procesados sin conexión en tu dispositivo). Ubicación: para sellar velocidad, coordenadas y hora en las grabaciones y alimentar las estadísticas de conducción. Notificaciones: para avisos como batería baja o clips guardados. Modos en segundo plano: para seguir grabando con la pantalla apagada.',
        ],
      },
      {
        id: 'third-parties',
        title: '4. Servicios de terceros',
        paragraphs: [
          'Anuncios (plan gratis, Android): el plan gratis muestra anuncios de Google AdMob, que puede procesar identificadores de dispositivo y datos aproximados según la política de privacidad de Google. PRO elimina los anuncios.',
          'Compras: los pagos los procesa íntegramente la App Store o Google Play. Nunca vemos tus datos de pago.',
          'Streaming en vivo (opcional): si configuras tu propio servidor, tu dispositivo envía la señal directamente a ese servidor. No lo operamos ni lo recibimos.',
        ],
      },
      {
        id: 'website',
        title: '5. Esta web',
        paragraphs: [
          'Esta web no usa analíticas, píxeles publicitarios ni cookies de seguimiento. El único almacenamiento local es tu preferencia de idioma. El formulario de contacto abre tu app de correo: nada de lo que escribas se transmite ni se guarda en esta web.',
        ],
      },
      {
        id: 'children',
        title: '6. Menores',
        paragraphs: [
          'DriveCam no está dirigida a menores de 13 años y no recopilamos conscientemente información personal de ellos.',
        ],
      },
      {
        id: 'changes',
        title: '7. Cambios en esta política',
        paragraphs: [
          'Podemos actualizar esta política a medida que evoluciona la app. Los cambios importantes se reflejarán en esta página con una nueva fecha de actualización.',
        ],
      },
    ],
    termsTitle: 'Términos de uso',
    terms: [
      {
        id: 'license',
        title: '1. Licencia',
        paragraphs: [
          'DriveCam te concede una licencia personal e intransferible para usar la app en dispositivos de tu propiedad o bajo tu control, de acuerdo con los términos de App Store y Google Play que se apliquen a tu descarga.',
        ],
      },
      {
        id: 'not-a-substitute',
        title: '2. Conduce con seguridad',
        paragraphs: [
          'DriveCam es una ayuda. No sustituye a una conducción atenta y no puede garantizar la captura, la calidad ni la conservación de ninguna grabación. Respeta siempre las normas de tráfico y mantén la atención en la carretera. No manipules el teléfono mientras conduces.',
        ],
      },
      {
        id: 'purchases',
        title: '3. Compras',
        paragraphs: [
          'Las funciones PRO se desbloquean mediante compras dentro de la app procesadas por la App Store o Google Play. PRO de por vida es un único pago — no se renueva. Las devoluciones las gestiona la tienda que procesó el pago.',
        ],
      },
      {
        id: 'liability',
        title: '4. Limitación de responsabilidad',
        paragraphs: [
          'En la máxima medida permitida por la ley, DriveCam y Axis Labs no son responsables de daños indirectos o derivados del uso de la app, incluidas grabaciones perdidas o capturas fallidas. La app se proporciona "tal cual".',
        ],
      },
      {
        id: 'law',
        title: '5. Ley aplicable',
        paragraphs: [
          'Estos términos se rigen por las leyes de España, sin perjuicio de los derechos de consumo que otorgue la legislación de tu país de residencia.',
        ],
      },
    ],
    contactNote:
      '¿Dudas sobre estos términos o sobre cómo trata DriveCam los datos? Escribe a drodriguez.apps@gmail.com y te responderá la persona que construyó la app.',
  },
  notFound: {
    title: 'Este camino no lleva a ninguna parte.',
    description: 'La página que buscabas no existe. Te devolvemos a la parte útil.',
    cta: 'Volver a DriveCam',
  },
}
