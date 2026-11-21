/* Public, static-site settings. Configure these before publishing; no secrets belong here. */
const SITE_CONFIG = Object.freeze({
  supportEmail: "arcanplayer@proyectoja.com",
  rokuStoreUrl: ""
});

const translations = {
  en: {
    "a11y.skip": "Skip to content",
    "a11y.openMenu": "Open navigation menu",
    "a11y.primaryNav": "Primary navigation",
    "a11y.footerNav": "Footer navigation",
    "a11y.language": "Language",
    "a11y.brandHome": "Arcan Player home",
    "a11y.summaryLabel": "Product summary",
    "a11y.splashAlt": "The original Arcan Player startup screen shown on Roku",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.premium": "Premium",
    "nav.support": "Support",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "footer.tagline": "Your media. Your choice. Your player.",
    "footer.independent": "An independent media player for Roku.",
    "legal.updated": "Last updated",
    "legal.date": "October 15, 2026",
    "contact.pending": "The project administrator’s support email is being configured.",
    "contact.emailLink": "Email support: {email}",
    "meta.homeTitle": "Arcan Player — Your Media. Your Choice.",
    "meta.homeDescription": "A thoughtful, easy-to-use media player for Roku. Play video, music and compatible live streams from sources you are authorized to use.",
    "meta.privacyTitle": "Privacy Policy — Arcan Player",
    "meta.privacyDescription": "Read how Arcan Player handles local playlists, external media sources, subscription verification and privacy requests.",
    "meta.termsTitle": "Terms of Use — Arcan Player",
    "meta.termsDescription": "Read the terms for using Arcan Player, including authorized content, free and Premium features, Roku Pay subscriptions and compatibility.",
    "meta.supportTitle": "Support — Arcan Player",
    "meta.supportDescription": "Get help with Arcan Player for Roku, including playlists, playback, Premium subscriptions and compatibility.",
    "home.eyebrow": "A media player for Roku",
    "home.heroTitle": "Your Media. Your Choice. Your Player.",
    "home.heroBody": "Discover a smarter way to enjoy your entertainment. Play videos, music, and live streams from compatible sources with a smooth, intuitive experience designed for Roku.",
    "home.exploreFeatures": "Explore features",
    "home.availabilityLink": "Availability",
    "home.heroNote": "A player for sources you choose and are authorized to access.",
    "home.artCaption": "Original startup artwork from the Roku app",
    "home.introOne": "Made for the Roku remote",
    "home.introTwo": "Your playlists, your sources",
    "home.introThree": "Free to get started",
    "home.featuresEyebrow": "A clear, capable player",
    "home.featuresTitle": "Your library, simply in reach.",
    "home.featuresIntro": "Bring compatible sources together in one Roku experience. Arcan Player plays the content you select; it does not supply third-party media.",
    "feature.videoTitle": "Video and music",
    "feature.videoBody": "Play compatible video and audio from sources you choose.",
    "feature.hlsTitle": "Compatible live streams",
    "feature.hlsBody": "Play supported HLS and M3U8 streams, subject to the format, source and Roku device.",
    "feature.playlistsTitle": "M3U playlists",
    "feature.playlistsBody": "Add M3U playlists that you own or are legally authorized to access.",
    "feature.fullscreenTitle": "Full screen, included",
    "feature.fullscreenBody": "Enjoy full-screen playback in the free experience.",
    "feature.libraryTitle": "A more organized library",
    "feature.libraryBody": "Keep playlists and favorites organized on your Roku.",
    "feature.storageTitle": "Free, persistent cache",
    "feature.storageBody": "Your saved lists, favorites and preferences stay on your Roku; compatible playlist data can be reused from a local cache.",
    "feature.rokuTitle": "Designed around Roku",
    "feature.rokuBody": "A straightforward interface made for the Roku remote, with content and playback kept easy to reach.",
    "home.premiumEyebrow": "For the way you manage media",
    "home.premiumTitle": "More room for your library.",
    "home.premiumBody": "Premium adds advanced library management and tools to back up and restore lists and favorites.",
    "home.premiumPointOne": "Expanded playlist library management",
    "home.premiumPointTwo": "Backup and restore for lists and favorites",
    "home.premiumPayNote": "Subscriptions are purchased and managed through Roku Pay. This website does not take payments.",
    "home.priceLabel": "Monthly plan",
    "home.pricePeriod": "USD / month",
    "home.priceCaption": "Planned price. Roku Pay shows the final price, renewal details and applicable terms before purchase.",
    "home.premiumSupport": "Premium questions",
    "home.availabilityEyebrow": "Coming to the Roku Store",
    "home.availabilityTitle": "Arcan Player for Roku.",
    "home.availabilityBody": "The public Roku Streaming Store listing is not available yet. Check back for the official link.",
    "home.availableBody": "Arcan Player is listed in the Roku Streaming Store. Use the official link to view availability for your region.",
    "home.storeLink": "View in Roku Streaming Store",
    "home.comingSoon": "Public listing coming soon",
    "home.storePublished": "Official Roku Streaming Store listing",
    "home.availableEyebrow": "Available on Roku",
    "privacy.eyebrow": "Your privacy",
    "privacy.title": "Privacy Policy",
    "privacy.lede": "This policy explains what information Arcan Player may handle, how it is used, and the choices available to you.",
    "privacy.s1Title": "1. App and responsible contact",
    "privacy.s1Body": "Arcan Player is an independent media-player application for Roku. The Arcan Player project administrator is responsible for this policy and for responding to privacy questions through the support contact listed below.",
    "privacy.s2Title": "2. Information the app handles",
    "privacy.s2Body": "Depending on the features you use, the app handles playlist names and URLs, media-source addresses, favorites, app preferences, playback selections and subscription status. The app also contacts ChatBro, an external audience-count provider, using a random app-generated identifier stored on the Roku to estimate connected users; that provider may receive standard connection data, but playlist and favorite contents are not sent to that counter. When Premium status is checked, information needed to identify or validate a purchase—such as a Roku transaction reference, an email you provide or a device-related identifier—may be processed by Roku and the subscription-verification service. This static website has no account or contact form. If you email support, the project administrator and the email providers involved receive the address and message you choose to send.",
    "privacy.s3Title": "3. Local storage, lists and backups",
    "privacy.s3Body": "Playlist details, favorites and app preferences are stored on your Roku device. The website language choice is saved in local storage in your browser. Some playback or guide data may also be cached on the device, subject to Roku storage and app behavior. Premium backup and restore tools let you export or restore supported list and favorite data. A backup you export is under your control; protect it as you would other personal files.",
    "privacy.s4Title": "4. Connections to media sources",
    "privacy.s4Body": "When you add or play an external playlist, stream, video, audio item or guide, the Roku device connects to the source you selected. That source and its hosting provider may receive connection information such as your IP address, request details and other technical information needed to deliver the content. Those providers control their own data practices. Use only sources you are authorized to access.",
    "privacy.s5Title": "5. Subscriptions and Roku Pay",
    "privacy.s5Body": "Purchases, billing, renewal options and cancellation are handled through Roku Pay under the terms shown by Roku. The app may check subscription status with Roku and the app provider’s verification service so that purchased features can be made available. The official website is informational only: it does not connect to Roku Pay, process subscriptions or collect payment details.",
    "privacy.s6Title": "6. Security",
    "privacy.s6Body": "Reasonable measures are used to protect information handled by the app and website. No device, network connection or storage method can be guaranteed completely secure. Keep your Roku software updated and use trusted media sources and networks.",
    "privacy.s7Title": "7. Retention and deletion",
    "privacy.s7Body": "Information saved by the app generally remains on the Roku device until you remove it in the app, reset app data, or remove the app, subject to Roku’s storage behavior. You can delete exported backup files from the place where you saved them. Roku, media sources and subscription-verification providers may retain information under their own policies.",
    "privacy.s8Title": "8. Children",
    "privacy.s8Body": "Arcan Player is a general-purpose media player and is not designed to request personal information from children. Parents or guardians should supervise a child’s use of external sources and subscription features. If you believe a child has provided personal information in connection with the app, contact the project administrator.",
    "privacy.s9Title": "9. Third-party services",
    "privacy.s9Body": "Third parties include Roku and Roku Pay, the hosting provider that serves this static website, media and playlist providers you choose, ChatBro’s audience-count service, the service used to verify subscriptions, and email providers involved when you contact support. Their terms and privacy notices apply to their services. Arcan Player does not control how those third parties handle information.",
    "privacy.s10Title": "10. Policy updates",
    "privacy.s10Body": "This policy may be updated as the app or its practices change. The current version and its effective date will be published on this page. Review it periodically.",
    "privacy.s11Title": "11. Contact",
    "privacy.s11Body": "For privacy questions or requests, contact the Arcan Player project administrator using the support details on the Support page.",
    "terms.eyebrow": "Terms of use",
    "terms.title": "Terms and Conditions",
    "terms.lede": "These terms cover use of the Arcan Player Roku application and its informational website.",
    "terms.s1Title": "1. Acceptance",
    "terms.s1Body": "By installing or using Arcan Player, you agree to these terms. If you do not agree, do not use the app. Additional terms from Roku or a third-party provider may also apply to their services.",
    "terms.s2Title": "2. What Arcan Player does",
    "terms.s2Body": "Arcan Player is an independent media player for Roku. It lets you organize and play compatible media from sources that you select. Arcan Player does not provide, host, recommend or license third-party audiovisual content, playlists or streams.",
    "terms.s3Title": "3. Lawful and authorized content",
    "terms.s3Body": "You are responsible for the playlists, links and media you add, and for ensuring that you own or have permission to access and use them. Do not use the app to infringe copyright, bypass access controls, or violate a source provider’s terms or applicable law.",
    "terms.s4Title": "4. Free and Premium features",
    "terms.s4Body": "The free experience includes supported playback, full-screen playback, locally saved lists and favorites, and app preferences. Premium may provide expanded library management and backup or restore tools. Features may change as the app develops; only features made available in the current app are included.",
    "terms.s5Title": "5. Roku Pay subscriptions",
    "terms.s5Body": "Premium subscriptions are offered and processed through Roku Pay. The planned monthly price is USD $2.99. The price, currency, taxes, offer, renewal interval and other purchase terms shown by Roku at checkout are the final terms for your transaction. This website does not sell subscriptions or accept payments.",
    "terms.s6Title": "6. Trials, renewal and cancellation",
    "terms.s6Body": "A free trial is available only when Roku displays one for your offer. If an offer includes a trial or recurring subscription, billing and renewal follow the details presented by Roku Pay. Cancel through Roku’s subscription-management settings before the next renewal date to prevent a future charge. Check Roku’s account or device settings for the current cancellation steps.",
    "terms.s7Title": "7. Refunds",
    "terms.s7Body": "Roku’s refund and billing policies apply to purchases made through Roku Pay, together with any rights you have under applicable law. For a Roku-billed charge or refund request, use Roku’s official support channels. Nothing in these terms limits non-waivable consumer rights.",
    "terms.s8Title": "8. Compatibility and availability",
    "terms.s8Body": "Playback depends on the Roku model, supported codecs and formats, network conditions, source availability and the source provider’s configuration. A file or stream may fail, change or become unavailable. Compatibility with every file, playlist or transmission is not guaranteed.",
    "terms.s9Title": "9. Local storage and backups",
    "terms.s9Body": "Lists, favorites and preferences are stored on the Roku device. Backup and restore tools, when available with Premium, are intended for supported app data. You are responsible for keeping exported backup files secure and for maintaining your own copy if needed.",
    "terms.s10Title": "10. Intellectual property",
    "terms.s10Body": "Arcan Player’s name, logo, app and original materials are protected by applicable intellectual-property laws. These terms do not transfer ownership to you. Third-party content and marks remain the property of their respective owners.",
    "terms.s11Title": "11. Liability",
    "terms.s11Body": "To the extent permitted by applicable law, the app is provided as available, without a promise that every source or format will work continuously or without error. The project is not responsible for third-party content, networks or services. Nothing here excludes liability or remedies that cannot legally be excluded or limited.",
    "terms.s12Title": "12. Changes and support",
    "terms.s12Body": "The app and these terms may change over time. Updated terms will be posted on this page with a revised date. For questions about Arcan Player, visit the Support page. Roku handles Roku Pay billing and account-level subscription management.",
    "terms.s13Title": "13. Contact",
    "terms.s13Body": "Questions about these terms can be sent to the Arcan Player project administrator through the Support page.",
    "support.eyebrow": "Here to help",
    "support.title": "Arcan Player Support",
    "support.lede": "Find quick answers to common questions about playlists, playback and Premium on Roku.",
    "support.contactTitle": "Contact the project",
    "support.contactBody": "For help that is not covered below, email the Arcan Player support team.",
    "support.faqEyebrow": "Help center",
    "support.faqTitle": "Frequently asked questions",
    "support.faq1Q": "How do I add an M3U or M3U8 playlist?",
    "support.faq1A": "In Arcan Player, open the live-playlist area, choose the add option, enter a name and the playlist URL, then confirm. You can also use the app’s Web option from a phone or computer on the same local network while the Roku app is open, then save an authorized M3U/M3U8 source.",
    "support.faq2Q": "How do I play a video, song or stream?",
    "support.faq2A": "Choose a playlist, select an item from its contents and press OK to open the preview. Use the Play control or the Roku remote’s Play button for full-screen playback. Audio and video controls depend on the selected content.",
    "support.faq3Q": "How do I manage Premium?",
    "support.faq3A": "Open Premium in Arcan Player to review the offer and start or restore a Roku Pay purchase. Billing and subscription status are managed by Roku. The final price and any offer terms appear in Roku Pay before you confirm.",
    "support.faq4Q": "How can I cancel a Roku subscription?",
    "support.faq4A": "Cancel through your Roku account’s subscription-management settings or from the Roku device’s subscription settings. Follow Roku’s current instructions and cancel before the next renewal date to prevent a future charge. Roku controls billing and refund requests for Roku Pay purchases.",
    "support.faq5Q": "Why won’t a file or stream play?",
    "support.faq5A": "Playback depends on Roku format support, the stream’s encoding, your network and whether the source is online and permits access. Check the URL, try again later, and confirm the source works on a compatible Roku device. Arcan Player cannot make an unsupported or unavailable source playable.",
    "support.faq6Q": "Where does Arcan Player get its channels and videos?",
    "support.faq6A": "Arcan Player is a player, not a content service. It does not include or provide third-party channels, videos, music or playlists. You add sources that you own or are authorized to access.",
    "support.legalNote": "For details about information handling and app use, read the",
    "support.and": "and"
  },
  es: {
    "a11y.skip": "Saltar al contenido",
    "a11y.openMenu": "Abrir menú de navegación",
    "a11y.primaryNav": "Navegación principal",
    "a11y.footerNav": "Navegación del pie de página",
    "a11y.language": "Idioma",
    "a11y.brandHome": "Inicio de Arcan Player",
    "a11y.summaryLabel": "Resumen del producto",
    "a11y.splashAlt": "Pantalla de inicio original de Arcan Player en Roku",
    "nav.home": "Inicio",
    "nav.features": "Funciones",
    "nav.premium": "Premium",
    "nav.support": "Soporte",
    "nav.privacy": "Privacidad",
    "nav.terms": "Términos",
    "footer.tagline": "Tu contenido. Tu decisión. Tu reproductor.",
    "footer.independent": "Un reproductor multimedia independiente para Roku.",
    "legal.updated": "Última actualización",
    "legal.date": "15 de octubre de 2026",
    "contact.pending": "El administrador del proyecto está configurando el correo de soporte.",
    "contact.emailLink": "Escribir a soporte: {email}",
    "meta.homeTitle": "Arcan Player — Tu contenido. Tu decisión.",
    "meta.homeDescription": "Un reproductor multimedia intuitivo para Roku. Reproduce video, música y transmisiones compatibles de fuentes a las que tienes autorización de acceso.",
    "meta.privacyTitle": "Política de privacidad — Arcan Player",
    "meta.privacyDescription": "Conoce cómo Arcan Player trata las listas locales, las fuentes multimedia externas, la verificación de suscripciones y las solicitudes de privacidad.",
    "meta.termsTitle": "Términos de uso — Arcan Player",
    "meta.termsDescription": "Consulta las condiciones de uso de Arcan Player: contenido autorizado, funciones gratuitas y Premium, suscripciones Roku Pay y compatibilidad.",
    "meta.supportTitle": "Soporte — Arcan Player",
    "meta.supportDescription": "Obtén ayuda con Arcan Player para Roku: listas, reproducción, suscripciones Premium y compatibilidad.",
    "home.eyebrow": "Un reproductor multimedia para Roku",
    "home.heroTitle": "Tu contenido. Tu decisión. Tu reproductor.",
    "home.heroBody": "Descubre una forma más sencilla de disfrutar tu entretenimiento. Reproduce videos, música y transmisiones en vivo de fuentes compatibles con una experiencia intuitiva y fluida, diseñada para Roku.",
    "home.exploreFeatures": "Explorar funciones",
    "home.availabilityLink": "Disponibilidad",
    "home.heroNote": "Un reproductor para las fuentes que eliges y tienes autorización para usar.",
    "home.artCaption": "Imagen original de inicio de la aplicación Roku",
    "home.introOne": "Diseñado para el control Roku",
    "home.introTwo": "Tus listas, tus fuentes",
    "home.introThree": "Empieza gratis",
    "home.featuresEyebrow": "Un reproductor claro y completo",
    "home.featuresTitle": "Tu biblioteca, siempre a mano.",
    "home.featuresIntro": "Reúne fuentes compatibles en una sola experiencia Roku. Arcan Player reproduce el contenido que seleccionas; no proporciona contenido multimedia de terceros.",
    "feature.videoTitle": "Video y música",
    "feature.videoBody": "Reproduce video y audio compatibles desde las fuentes que elijas.",
    "feature.hlsTitle": "Transmisiones compatibles",
    "feature.hlsBody": "Reproduce transmisiones HLS y M3U8 compatibles, según el formato, la fuente y el dispositivo Roku.",
    "feature.playlistsTitle": "Listas M3U",
    "feature.playlistsBody": "Agrega listas M3U propias o cuyo acceso tengas legalmente autorizado.",
    "feature.fullscreenTitle": "Pantalla completa incluida",
    "feature.fullscreenBody": "Disfruta la reproducción en pantalla completa con la versión gratuita.",
    "feature.libraryTitle": "Una biblioteca más ordenada",
    "feature.libraryBody": "Organiza listas y favoritos en tu Roku.",
    "feature.storageTitle": "Caché persistente gratuita",
    "feature.storageBody": "Tus listas, favoritos y preferencias guardados permanecen en tu Roku; los datos compatibles de las listas pueden reutilizarse desde la caché local.",
    "feature.rokuTitle": "Diseñado para Roku",
    "feature.rokuBody": "Una interfaz sencilla, pensada para el control Roku y para que acceder al contenido y reproducirlo sea fácil.",
    "home.premiumEyebrow": "Para organizar tus medios",
    "home.premiumTitle": "Más espacio para tu biblioteca.",
    "home.premiumBody": "Premium incorpora gestión avanzada de la biblioteca y herramientas para respaldar y restaurar listas y favoritos.",
    "home.premiumPointOne": "Gestión ampliada de la biblioteca de listas",
    "home.premiumPointTwo": "Respaldo y restauración de listas y favoritos",
    "home.premiumPayNote": "Las suscripciones se compran y gestionan mediante Roku Pay. Este sitio web no procesa pagos.",
    "home.priceLabel": "Plan mensual",
    "home.pricePeriod": "USD / mes",
    "home.priceCaption": "Precio previsto. Roku Pay muestra el precio final, la renovación y las condiciones aplicables antes de la compra.",
    "home.premiumSupport": "Ayuda sobre Premium",
    "home.availabilityEyebrow": "Próximamente en Roku Store",
    "home.availabilityTitle": "Arcan Player para Roku.",
    "home.availabilityBody": "La ficha pública de Arcan Player en Roku Streaming Store aún no está disponible. Vuelve más adelante para encontrar el enlace oficial.",
    "home.availableBody": "Arcan Player está disponible en Roku Streaming Store. Consulta el enlace oficial para ver la disponibilidad en tu región.",
    "home.storeLink": "Ver en Roku Streaming Store",
    "home.comingSoon": "Próximamente estará disponible la ficha pública",
    "home.storePublished": "Ficha oficial en Roku Streaming Store",
    "home.availableEyebrow": "Disponible en Roku",
    "privacy.eyebrow": "Tu privacidad",
    "privacy.title": "Política de privacidad",
    "privacy.lede": "Esta política explica qué información puede tratar Arcan Player, cómo se utiliza y qué opciones tienes.",
    "privacy.s1Title": "1. Aplicación y responsable",
    "privacy.s1Body": "Arcan Player es una aplicación independiente de reproducción multimedia para Roku. El administrador del proyecto Arcan Player es responsable de esta política y de atender las consultas de privacidad mediante el contacto de soporte indicado más abajo.",
    "privacy.s2Title": "2. Información que trata la aplicación",
    "privacy.s2Body": "Según las funciones que utilices, la aplicación trata nombres y direcciones URL de listas, direcciones de fuentes multimedia, favoritos, preferencias, selecciones de reproducción y el estado de la suscripción. La aplicación también se comunica con ChatBro, un proveedor externo de conteo de usuarios, mediante un identificador aleatorio generado por la app y guardado en Roku para estimar usuarios conectados; ese proveedor puede recibir datos habituales de conexión, pero no recibe el contenido de tus listas ni favoritos. Cuando se verifica Premium, Roku y el servicio de verificación pueden tratar datos necesarios para identificar o validar la compra, como una referencia de transacción de Roku, el correo que proporciones o un identificador del dispositivo. Este sitio estático no tiene cuentas ni formulario de contacto. Si escribes a soporte, el administrador del proyecto y los proveedores de correo involucrados reciben la dirección y el mensaje que decidas enviar.",
    "privacy.s3Title": "3. Almacenamiento local, listas y respaldos",
    "privacy.s3Body": "Los datos de listas, favoritos y preferencias de la aplicación se almacenan en tu dispositivo Roku. La preferencia de idioma del sitio se guarda en el almacenamiento local de tu navegador. Algunos datos de reproducción o guía también pueden guardarse en la caché del dispositivo, según el almacenamiento de Roku y el funcionamiento de la aplicación. Las herramientas Premium de respaldo y restauración permiten exportar o restaurar datos compatibles de listas y favoritos. Tú controlas los respaldos exportados; protégelos como cualquier otro archivo personal.",
    "privacy.s4Title": "4. Conexiones a fuentes multimedia",
    "privacy.s4Body": "Cuando agregas o reproduces una lista, transmisión, video, audio o guía externos, el dispositivo Roku se conecta a la fuente que seleccionaste. Esa fuente y su proveedor de alojamiento pueden recibir información de conexión, como tu dirección IP, detalles de la solicitud y otros datos técnicos necesarios para entregar el contenido. Cada proveedor controla sus propias prácticas de datos. Utiliza únicamente fuentes a las que tengas autorización de acceso.",
    "privacy.s5Title": "5. Suscripciones y Roku Pay",
    "privacy.s5Body": "Las compras, la facturación, las opciones de renovación y la cancelación se gestionan mediante Roku Pay conforme a las condiciones que muestra Roku. La aplicación puede verificar el estado de la suscripción con Roku y con el servicio de verificación del proveedor de la aplicación para habilitar las funciones compradas. El sitio oficial es únicamente informativo: no se conecta con Roku Pay, no procesa suscripciones ni recopila datos de pago.",
    "privacy.s6Title": "6. Seguridad",
    "privacy.s6Body": "Se aplican medidas razonables para proteger la información que trata la aplicación y el sitio web. Ningún dispositivo, conexión de red ni método de almacenamiento puede garantizar seguridad absoluta. Mantén actualizado el software Roku y utiliza fuentes multimedia y redes de confianza.",
    "privacy.s7Title": "7. Conservación y eliminación",
    "privacy.s7Body": "La información guardada por la aplicación normalmente permanece en el dispositivo Roku hasta que la elimines desde la aplicación, restablezcas sus datos o la desinstales, sujeto al funcionamiento del almacenamiento Roku. Puedes borrar los archivos de respaldo exportados desde el lugar donde los guardaste. Roku, las fuentes multimedia y los proveedores de verificación de suscripciones pueden conservar información según sus propias políticas.",
    "privacy.s8Title": "8. Menores de edad",
    "privacy.s8Body": "Arcan Player es un reproductor multimedia de uso general y no está diseñado para solicitar información personal a menores. Los padres o tutores deben supervisar el uso de fuentes externas y de las funciones de suscripción. Si crees que un menor proporcionó información personal relacionada con la aplicación, contacta al administrador del proyecto.",
    "privacy.s9Title": "9. Servicios de terceros",
    "privacy.s9Body": "Los terceros incluyen Roku y Roku Pay, el proveedor de alojamiento de este sitio estático, los proveedores de listas y contenido que elijas, el servicio de conteo de usuarios de ChatBro, el servicio de verificación de suscripciones y los proveedores de correo que intervengan cuando contactes a soporte. Sus condiciones y avisos de privacidad rigen sus propios servicios. Arcan Player no controla cómo esos terceros tratan la información.",
    "privacy.s10Title": "10. Cambios en esta política",
    "privacy.s10Body": "Esta política puede actualizarse cuando cambie la aplicación o sus prácticas. La versión vigente y su fecha de entrada en vigor se publicarán en esta página. Revísala periódicamente.",
    "privacy.s11Title": "11. Contacto",
    "privacy.s11Body": "Para consultas o solicitudes de privacidad, comunícate con el administrador del proyecto Arcan Player mediante los datos de soporte de la página Soporte.",
    "terms.eyebrow": "Condiciones de uso",
    "terms.title": "Términos y condiciones",
    "terms.lede": "Estas condiciones rigen el uso de la aplicación Arcan Player para Roku y de su sitio web informativo.",
    "terms.s1Title": "1. Aceptación",
    "terms.s1Body": "Al instalar o utilizar Arcan Player, aceptas estas condiciones. Si no estás de acuerdo, no utilices la aplicación. Los servicios de Roku o de proveedores externos también pueden estar sujetos a sus propias condiciones.",
    "terms.s2Title": "2. Qué hace Arcan Player",
    "terms.s2Body": "Arcan Player es un reproductor multimedia independiente para Roku. Permite organizar y reproducir contenido compatible desde las fuentes que elijas. Arcan Player no proporciona, aloja, recomienda ni licencia contenido audiovisual, listas o transmisiones de terceros.",
    "terms.s3Title": "3. Contenido legal y autorizado",
    "terms.s3Body": "Eres responsable de las listas, enlaces y contenido que agregues, y de asegurarte de que sean tuyos o de que tengas permiso para acceder a ellos y utilizarlos. No utilices la aplicación para infringir derechos de autor, eludir controles de acceso ni vulnerar las condiciones de una fuente o la legislación aplicable.",
    "terms.s4Title": "4. Funciones gratuitas y Premium",
    "terms.s4Body": "La experiencia gratuita incluye reproducción compatible, pantalla completa, listas y favoritos guardados localmente y preferencias de la aplicación. Premium puede ofrecer gestión ampliada de la biblioteca y herramientas de respaldo o restauración. Las funciones pueden cambiar a medida que evolucione la aplicación; solo se incluyen las funciones disponibles en la versión actual.",
    "terms.s5Title": "5. Suscripciones mediante Roku Pay",
    "terms.s5Body": "Las suscripciones Premium se ofrecen y procesan mediante Roku Pay. El precio mensual previsto es de USD $2.99. El precio, la moneda, los impuestos, la oferta, el período de renovación y las demás condiciones que Roku muestre al pagar serán las condiciones finales de tu transacción. Este sitio web no vende suscripciones ni acepta pagos.",
    "terms.s6Title": "6. Pruebas, renovaciones y cancelaciones",
    "terms.s6Body": "Solo habrá una prueba gratuita si Roku la muestra para tu oferta. Si la oferta incluye una prueba o una suscripción recurrente, la facturación y renovación se regirán por los detalles presentados en Roku Pay. Cancela desde la configuración de suscripciones de Roku antes de la próxima fecha de renovación para evitar un cargo futuro. Consulta la cuenta o la configuración del dispositivo Roku para conocer los pasos vigentes.",
    "terms.s7Title": "7. Reembolsos",
    "terms.s7Body": "Las compras mediante Roku Pay están sujetas a las políticas de facturación y reembolso de Roku, además de los derechos que te otorgue la legislación aplicable. Para cargos facturados por Roku o solicitudes de reembolso, utiliza los canales oficiales de soporte de Roku. Estas condiciones no limitan derechos del consumidor que no puedan excluirse.",
    "terms.s8Title": "8. Compatibilidad y disponibilidad",
    "terms.s8Body": "La reproducción depende del modelo Roku, los códecs y formatos compatibles, la red, la disponibilidad de la fuente y la configuración del proveedor. Un archivo o una transmisión puede fallar, cambiar o dejar de estar disponible. No se garantiza la compatibilidad con todos los archivos, listas o transmisiones.",
    "terms.s9Title": "9. Almacenamiento local y respaldos",
    "terms.s9Body": "Las listas, los favoritos y las preferencias se guardan en el dispositivo Roku. Las herramientas de respaldo y restauración, cuando estén disponibles con Premium, están destinadas a los datos compatibles de la aplicación. Te corresponde mantener seguros los respaldos exportados y conservar una copia propia si la necesitas.",
    "terms.s10Title": "10. Propiedad intelectual",
    "terms.s10Body": "El nombre, el logotipo, la aplicación y los materiales originales de Arcan Player están protegidos por las leyes de propiedad intelectual aplicables. Estas condiciones no te transfieren su titularidad. El contenido y las marcas de terceros pertenecen a sus respectivos titulares.",
    "terms.s11Title": "11. Responsabilidad",
    "terms.s11Body": "En la medida permitida por la legislación aplicable, la aplicación se ofrece según su disponibilidad, sin prometer que todas las fuentes o formatos funcionarán de forma continua o sin errores. El proyecto no es responsable del contenido, las redes ni los servicios de terceros. Nada de lo aquí dispuesto excluye responsabilidades o recursos que legalmente no puedan excluirse o limitarse.",
    "terms.s12Title": "12. Cambios y soporte",
    "terms.s12Body": "La aplicación y estas condiciones pueden cambiar. Las condiciones actualizadas se publicarán en esta página con una nueva fecha. Para consultas sobre Arcan Player, visita la página Soporte. Roku gestiona la facturación de Roku Pay y la administración de suscripciones en la cuenta.",
    "terms.s13Title": "13. Contacto",
    "terms.s13Body": "Puedes enviar tus consultas sobre estas condiciones al administrador del proyecto Arcan Player mediante la página Soporte.",
    "support.eyebrow": "Estamos para ayudarte",
    "support.title": "Soporte de Arcan Player",
    "support.lede": "Encuentra respuestas rápidas a preguntas frecuentes sobre listas, reproducción y Premium en Roku.",
    "support.contactTitle": "Contactar al proyecto",
    "support.contactBody": "Si no encuentras aquí la respuesta que necesitas, escribe al equipo de soporte de Arcan Player.",
    "support.faqEyebrow": "Centro de ayuda",
    "support.faqTitle": "Preguntas frecuentes",
    "support.faq1Q": "¿Cómo agrego una lista M3U o M3U8?",
    "support.faq1A": "En Arcan Player, abre la sección de listas en vivo, elige la opción para agregar, escribe un nombre y la URL de la lista y confirma. También puedes abrir la opción Web desde un teléfono o computadora conectados a la misma red local mientras la aplicación Roku está abierta y guardar una fuente M3U/M3U8 autorizada.",
    "support.faq2Q": "¿Cómo reproduzco un video, una canción o una transmisión?",
    "support.faq2A": "Elige una lista, selecciona un elemento de su contenido y pulsa OK para abrir la vista previa. Usa el control Play o el botón Play del control Roku para reproducir en pantalla completa. Los controles de audio y video dependen del contenido seleccionado.",
    "support.faq3Q": "¿Cómo gestiono Premium?",
    "support.faq3A": "Abre Premium en Arcan Player para consultar la oferta e iniciar o restaurar una compra de Roku Pay. Roku gestiona la facturación y el estado de la suscripción. El precio final y las condiciones de la oferta aparecen en Roku Pay antes de confirmar.",
    "support.faq4Q": "¿Cómo cancelo una suscripción de Roku?",
    "support.faq4A": "Cancela desde la configuración de suscripciones de tu cuenta Roku o desde la configuración de suscripciones del dispositivo Roku. Sigue las instrucciones vigentes de Roku y cancela antes de la próxima renovación para evitar un cargo futuro. Roku controla la facturación y las solicitudes de reembolso de compras hechas con Roku Pay.",
    "support.faq5Q": "¿Por qué no se reproduce un archivo o una transmisión?",
    "support.faq5A": "La reproducción depende de los formatos admitidos por Roku, la codificación de la transmisión, tu red y de que la fuente esté disponible y permita el acceso. Comprueba la URL, vuelve a intentarlo más tarde y confirma que la fuente funcione en un dispositivo Roku compatible. Arcan Player no puede reproducir una fuente incompatible o no disponible.",
    "support.faq6Q": "¿De dónde obtiene Arcan Player sus canales y videos?",
    "support.faq6A": "Arcan Player es un reproductor, no un servicio de contenido. No incluye ni proporciona canales, videos, música o listas de terceros. Tú agregas fuentes propias o a las que tienes autorización de acceso.",
    "support.legalNote": "Para conocer cómo se trata la información y las condiciones de uso, consulta",
    "support.and": "y"
  }
};

function setLanguage(language) {
  const selected = translations[language] ? language : "en";
  const dictionary = translations[selected];
  document.documentElement.lang = selected;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const value = dictionary[element.dataset.i18nContent];
    if (value !== undefined) element.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const [attribute, key] = element.dataset.i18nAttr.split(":");
    if (attribute && dictionary[key] !== undefined) element.setAttribute(attribute, dictionary[key]);
  });

  document.querySelectorAll(".language-switcher").forEach((select) => {
    select.value = selected;
    select.setAttribute("aria-label", dictionary["a11y.language"]);
  });

  document.querySelectorAll("[data-contact-email]").forEach((link) => {
    const email = SITE_CONFIG.supportEmail.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    link.hidden = !valid;
    if (valid) {
      link.href = `mailto:${email}`;
      link.textContent = dictionary["contact.emailLink"].replace("{email}", email);
    }
  });
  document.querySelectorAll("[data-contact-pending]").forEach((message) => {
    message.hidden = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(SITE_CONFIG.supportEmail.trim());
  });

  const storeLink = document.querySelector(".store-link");
  if (storeLink) {
    let validStoreUrl = false;
    try {
      const parsed = new URL(SITE_CONFIG.rokuStoreUrl);
      validStoreUrl = parsed.protocol === "https:" && /(^|\.)roku\.com$/i.test(parsed.hostname);
      if (validStoreUrl) storeLink.href = parsed.href;
    } catch (_) {
      validStoreUrl = false;
    }
    storeLink.hidden = !validStoreUrl;
    const status = document.querySelector(".availability-status");
    const message = document.querySelector("[data-store-message]");
    const eyebrow = document.querySelector("[data-store-eyebrow]");
    if (status) {
      status.textContent = dictionary[validStoreUrl ? "home.storePublished" : "home.comingSoon"];
      status.hidden = validStoreUrl;
    }
    if (message) message.textContent = dictionary[validStoreUrl ? "home.availableBody" : "home.availabilityBody"];
    if (eyebrow) eyebrow.textContent = dictionary[validStoreUrl ? "home.availableEyebrow" : "home.availabilityEyebrow"];
  }
}

document.querySelectorAll(".language-switcher").forEach((select) => {
  select.addEventListener("change", () => {
    const language = select.value;
    setLanguage(language);
    try { localStorage.setItem("arcan-player-site-language", language); } catch (_) { /* Storage is optional. */ }
  });
});

const menuButton = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector(".primary-nav");
if (menuButton && primaryNavigation) {
  const closeMenu = () => {
    primaryNavigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  };
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(open));
    primaryNavigation.classList.toggle("is-open", open);
  });
  primaryNavigation.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

let initialLanguage = "en";
try {
  const savedLanguage = localStorage.getItem("arcan-player-site-language");
  if (savedLanguage && translations[savedLanguage]) initialLanguage = savedLanguage;
} catch (_) { /* English remains the default when storage is unavailable. */ }
setLanguage(initialLanguage);
