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
    "nav.refunds": "Refunds",
    "footer.tagline": "Your media. Your choice. Your player.",
    "footer.independent": "An independent media player for Roku.",
    "legal.updated": "Last updated",
    "legal.date": "November 20, 2026",
    "contact.pending": "The project administrator’s support email is being configured.",
    "contact.emailLink": "Email support: {email}",
    "meta.homeTitle": "Arcan Player — Your Media. Your Choice.",
    "meta.homeDescription": "A thoughtful, easy-to-use media player for Roku. Play video, music and compatible live streams from sources you are authorized to use.",
    "meta.privacyTitle": "Privacy Policy — Arcan Player",
    "meta.privacyDescription": "Read how Arcan Player handles local playlists, external media sources, subscription verification and privacy requests.",
    "meta.termsTitle": "Terms of Use — Arcan Player",
    "meta.termsDescription": "Read the terms for Arcan Player subscriptions, including payments, renewals, cancellations and refunds.",
    "meta.refundsTitle": "Refund Policy — Arcan Player",
    "meta.refundsDescription": "Learn how to request a refund for Arcan Player subscriptions, including Paddle's minimum 14-day request period.",
    "meta.supportTitle": "Support — Arcan Player",
    "meta.supportDescription": "Get help with Arcan Player subscriptions, payments, activation and refunds.",
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
    "home.premiumBody": "Unlock premium Arcan Player features with a monthly subscription.",
    "home.premiumPointOne": "YouTube, downloads and mini player",
    "home.premiumPointTwo": "No ads or watermark",
    "home.premiumPayNote": "Choose a plan and pay securely with PayPal or card through Paddle.",
    "home.priceLabel": "Arcan Player Premium",
    "home.pricePeriod": "plans available",
    "home.priceCaption": "See current prices, trial terms and renewal details before completing your purchase.",
    "home.premiumSupport": "View subscription plans",
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
    "privacy.s1Title": "1. Who is responsible",
    "privacy.s1Body": "Arcan Player is an independently operated application and website. The project administrator handles privacy requests through the support contact listed below.",
    "privacy.s2Title": "2. Information you provide",
    "privacy.s2Body": "If you buy a subscription, the checkout provider processes your payment. After checkout, the subscription page asks for a username and email address so the purchase can be linked to your app account. The page stores the username, email, subscription reference and related status in your browser’s local storage. You may choose not to provide these details, but subscription activation or account linking may then be unavailable.",
    "privacy.s3Title": "3. Payment and subscription verification",
    "privacy.s3Body": "PayPal or Paddle processes checkout, billing and payment details under its own privacy notice. Arcan Player does not receive or store your full card number. To register and verify a purchase, the subscription page sends the subscription reference, selected payment provider, username and email to the project’s verification service. The hosting, email and verification providers may process technical connection data needed to provide their services.",
    "privacy.s4Title": "4. Website and app storage",
    "privacy.s4Body": "The subscription page uses browser local storage to remember the language, username, email and subscription reference and to display a previously issued activation code. The app may store its own preferences, user-created lists and activation status on your device. You can remove browser data through your browser settings; deleting it may remove the saved code or details from that browser.",
    "privacy.s5Title": "5. How information is used",
    "privacy.s5Body": "Information is used to process and verify a purchase, link a subscription to an app account, provide support, prevent or investigate payment errors and meet legal obligations. It is not used to sell your personal information.",
    "privacy.s6Title": "6. Retention and deletion",
    "privacy.s6Body": "Browser-stored information remains until you delete it or clear browser storage. The verification service and payment providers may retain transaction and account records for as long as needed to administer subscriptions, resolve disputes, meet accounting or legal duties, and enforce their terms. Contact support to ask about information held by the project; some transaction records may need to be retained by law.",
    "privacy.s7Title": "7. Third-party services and links",
    "privacy.s7Body": "The subscription flow uses PayPal, Paddle, website hosting, and a subscription-verification service. The app may also connect to media sources you choose. These providers receive information as needed for their services and are governed by their own terms and privacy notices. Review those notices before using a third-party checkout or source.",
    "privacy.s8Title": "8. Security",
    "privacy.s8Body": "Reasonable technical and organizational measures are used to protect information. No website, device or transmission can be guaranteed completely secure. Do not send payment-card details to support by email.",
    "privacy.s9Title": "9. Children",
    "privacy.s9Body": "The subscription service is not directed to children who cannot lawfully make purchases. A parent or guardian who believes a child has provided personal information should contact the project administrator.",
    "privacy.s10Title": "10. Your choices and policy updates",
    "privacy.s10Body": "You can decline to provide optional details, clear local browser storage, and contact support with privacy questions or requests. This policy may change as the service changes; the current version and effective date will be posted here.",
    "privacy.s11Title": "11. Contact",
    "privacy.s11Body": "For privacy questions or requests, contact the Arcan Player project administrator using the details on the Support page.",
    "terms.eyebrow": "Terms of use",
    "terms.title": "Terms and Conditions",
    "terms.lede": "These terms cover Arcan Player and its subscription service.",
    "terms.s1Title": "1. Acceptance and eligibility",
    "terms.s1Body": "By accessing or using Arcan Player, its website or subscription features, you agree to these terms. You must be legally able to enter into a purchase contract; if you are a minor, a parent or guardian must act for you where required by law.",
    "terms.s2Title": "2. Service and account details",
    "terms.s2Body": "Arcan Player provides the app and the features described in the current app and subscription offer. After checkout, you may be asked for a username and email to link a subscription to your app account. You are responsible for providing accurate information and keeping your activation code and account details secure.",
    "terms.s3Title": "3. Plans, prices and trials",
    "terms.s3Body": "The subscription page describes available plans, features, prices and any trial. The current offer is shown at checkout; the amount, currency, taxes, billing interval, trial length and renewal terms displayed by PayPal or Paddle before confirmation apply to your purchase. A trial is available only when it is expressly shown for your selected plan.",
    "terms.s4Title": "4. Billing, renewal and cancellation",
    "terms.s4Body": "Subscriptions are billed and renewed by the payment provider you select, according to the checkout terms. Unless cancelled, a recurring plan may renew automatically. Manage or cancel it with the provider before the next billing date to avoid a future charge. Cancelling stops future renewals; it does not automatically refund an earlier payment.",
    "terms.s5Title": "5. Refunds, including Paddle's 14-day period",
    "terms.s5Body": "For purchases processed by Paddle, you may request a refund for at least 14 calendar days from the date of the relevant charge. Submit the request through Paddle's support or the link in your receipt. For PayPal purchases, use PayPal's resolution/support channels or contact us for help. Applicable consumer rights or a provider's policy may give you additional rights; nothing in these terms limits them. See the Refund Policy for instructions.",
    "terms.s6Title": "6. Permitted use",
    "terms.s6Body": "Use the app and website lawfully and in accordance with the offer. Do not misuse, disrupt, reverse engineer where prohibited, or attempt to bypass subscription checks. You are responsible for ensuring you have the rights to any media or external sources you access through the app.",
    "terms.s7Title": "7. Payments and third-party services",
    "terms.s7Body": "PayPal and Paddle are independent payment providers. Their checkout, billing, cancellation, privacy and dispute rules also apply to the parts of the transaction they provide. Arcan Player does not receive your full payment-card number. Third-party apps, devices, networks and media sources are outside the project's control.",
    "terms.s8Title": "8. Availability and changes",
    "terms.s8Body": "Features may vary by device, app version, operating system and network, and may change as the service develops. We may update, suspend or discontinue a feature where reasonably necessary. We will not remove rights that cannot legally be limited.",
    "terms.s9Title": "9. Intellectual property",
    "terms.s9Body": "Arcan Player's name, logo, app and original materials belong to their respective rights holders and are protected by applicable law. A subscription gives you a limited, personal, non-transferable right to use included features during the paid period; it does not transfer ownership.",
    "terms.s10Title": "10. Disclaimer and liability",
    "terms.s10Body": "The service is provided subject to applicable consumer law and without a guarantee that every feature will always be uninterrupted or error-free. To the extent allowed by law, the project is not responsible for third-party services or sources. Nothing here excludes liability or remedies that cannot legally be excluded or limited.",
    "terms.s11Title": "11. Changes and contact",
    "terms.s11Body": "We may update these terms and will publish the current version and effective date here. For questions about subscriptions, refunds or these terms, contact Arcan Player Support. Payment-provider support may be needed for billing disputes or cancellation.",
    "refunds.eyebrow": "Payments and refunds",
    "refunds.title": "Refund Policy",
    "refunds.lede": "This policy explains how to ask for a refund for an Arcan Player subscription.",
    "refunds.s1Title": "1. Payment provider",
    "refunds.s1Body": "Subscriptions are purchased through PayPal or Paddle. The provider shown on your receipt processes the payment and may handle the refund transaction under its own procedures.",
    "refunds.s2Title": "2. Paddle's minimum 14-day request period",
    "refunds.s2Body": "For every payment processed by Paddle, including a renewal charge, you may request a refund for at least 14 calendar days from the date of that charge. We will honor this minimum request period; longer periods or additional rights under consumer law or Paddle's rules continue to apply.",
    "refunds.s3Title": "3. How to submit a request",
    "refunds.s3Body": "For Paddle, use the support/refund link in your receipt or contact Paddle Support. For PayPal, open the transaction in your PayPal account and use its Resolution Center or contact PayPal Support. If you need help identifying the purchase, email Arcan Player Support with the receipt/order reference, payment provider, purchase date, plan and the email or username used to activate it.",
    "refunds.s4Title": "4. Processing and privacy",
    "refunds.s4Body": "The payment provider may need to verify the transaction and will return approved funds to the original payment method. Processing and bank posting times vary. Never send your full card number, password or security code by email. This policy does not limit mandatory consumer rights or any more generous refund terms shown by the provider.",
    "refunds.s5Title": "5. Cancellation is separate",
    "refunds.s5Body": "A refund request does not automatically cancel a recurring subscription, and cancelling a subscription does not automatically refund an earlier charge. Cancel future renewals with the provider before the next billing date. Contact support if you need help.",
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
    "support.faq3A": "Visit the Arcan Player subscription page to compare the current offer and complete checkout with PayPal or Paddle. After payment, link the purchase to your username and email to receive the activation code.",
    "support.faq4Q": "How can I cancel or request a refund?",
    "support.faq4A": "Cancel recurring billing with the provider you used before the next renewal date. For Paddle purchases, you may request a refund for at least 14 calendar days after the charge; use the link in your receipt or Paddle support. See the Refund Policy for details.",
    "support.faq5Q": "Why won’t a file or stream play?",
    "support.faq5A": "Playback depends on Roku format support, the stream’s encoding, your network and whether the source is online and permits access. Check the URL, try again later, and confirm the source works on a compatible Roku device. Arcan Player cannot make an unsupported or unavailable source playable.",
    "support.faq6Q": "Where does Arcan Player get its channels and videos?",
    "support.faq6A": "Arcan Player is a player, not a content service. It does not include or provide third-party channels, videos, music or playlists. You add sources that you own or are authorized to access.",
    "support.legalNote": "For details about privacy, terms and refunds, read the",
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
    "nav.refunds": "Reembolsos",
    "footer.tagline": "Tu contenido. Tu decisión. Tu reproductor.",
    "footer.independent": "Un reproductor multimedia independiente para Roku.",
    "legal.updated": "Última actualización",
    "legal.date": "20 de noviembre de 2026",
    "contact.pending": "El administrador del proyecto está configurando el correo de soporte.",
    "contact.emailLink": "Escribir a soporte: {email}",
    "meta.homeTitle": "Arcan Player — Tu contenido. Tu decisión.",
    "meta.homeDescription": "Un reproductor multimedia intuitivo para Roku. Reproduce video, música y transmisiones compatibles de fuentes a las que tienes autorización de acceso.",
    "meta.privacyTitle": "Política de privacidad — Arcan Player",
    "meta.privacyDescription": "Conoce cómo Arcan Player trata las listas locales, las fuentes multimedia externas, la verificación de suscripciones y las solicitudes de privacidad.",
    "meta.termsTitle": "Términos de uso — Arcan Player",
    "meta.termsDescription": "Consulta las condiciones de las suscripciones de Arcan Player: pagos, renovaciones, cancelaciones y reembolsos.",
    "meta.supportTitle": "Soporte — Arcan Player",
    "meta.supportDescription": "Obtén ayuda con las suscripciones, pagos, activación y reembolsos de Arcan Player.",
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
    "home.premiumBody": "Desbloquea las funciones premium de Arcan Player con una suscripción mensual.",
    "home.premiumPointOne": "YouTube, descargas y mini reproductor",
    "home.premiumPointTwo": "Sin anuncios ni marca de agua",
    "home.premiumPayNote": "Elige un plan y paga de forma segura con PayPal o tarjeta mediante Paddle.",
    "home.priceLabel": "Arcan Player Premium",
    "home.pricePeriod": "planes disponibles",
    "home.priceCaption": "Consulta precios, prueba y renovaciones antes de completar la compra.",
    "home.premiumSupport": "Ver planes de suscripción",
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
    "privacy.s1Title": "1. Responsable",
    "privacy.s1Body": "Arcan Player es una aplicación y un sitio web gestionados de forma independiente. El administrador del proyecto atiende las solicitudes de privacidad mediante el contacto de soporte indicado más abajo.",
    "privacy.s2Title": "2. Datos que proporcionas",
    "privacy.s2Body": "Al comprar una suscripción, el proveedor de pago procesa el pago. Después, la página de suscripción solicita un nombre de usuario y un correo electrónico para vincular la compra con tu cuenta de la aplicación. La página guarda en el almacenamiento local del navegador el nombre, correo, referencia de suscripción y estado relacionado. Puedes no proporcionarlos, pero quizá no sea posible activar o vincular la suscripción.",
    "privacy.s3Title": "3. Pagos y verificación de suscripción",
    "privacy.s3Body": "PayPal o Paddle procesa el pago, la facturación y los datos de pago según su propio aviso de privacidad. Arcan Player no recibe ni almacena el número completo de tu tarjeta. Para registrar y verificar la compra, la página envía la referencia de suscripción, el proveedor de pago elegido, el nombre de usuario y el correo al servicio de verificación del proyecto. Los proveedores de alojamiento, correo y verificación pueden tratar datos técnicos de conexión necesarios para prestar sus servicios.",
    "privacy.s4Title": "4. Almacenamiento del sitio y la aplicación",
    "privacy.s4Body": "La página de suscripción usa el almacenamiento local del navegador para recordar el idioma, nombre de usuario, correo y referencia de suscripción, y mostrar un código de activación emitido anteriormente. La aplicación puede guardar sus propias preferencias, listas creadas por el usuario y estado de activación en el dispositivo. Puedes borrar los datos desde la configuración del navegador; al hacerlo podrías eliminar el código o los datos guardados allí.",
    "privacy.s5Title": "5. Uso de la información",
    "privacy.s5Body": "La información se usa para procesar y verificar una compra, vincular una suscripción con una cuenta de la aplicación, brindar soporte, prevenir o investigar errores de pago y cumplir obligaciones legales. No se utiliza para vender tus datos personales.",
    "privacy.s6Title": "6. Conservación y eliminación",
    "privacy.s6Body": "La información guardada en el navegador permanece hasta que la elimines o borres sus datos locales. El servicio de verificación y los proveedores de pago pueden conservar registros de transacciones y cuenta mientras sea necesario para gestionar suscripciones, resolver disputas, cumplir obligaciones legales o contables y hacer valer sus condiciones. Contacta a soporte para consultar sobre los datos que conserva el proyecto; algunos registros podrían tener que conservarse por ley.",
    "privacy.s7Title": "7. Servicios y enlaces de terceros",
    "privacy.s7Body": "El proceso de suscripción utiliza PayPal, Paddle, un proveedor de alojamiento y un servicio de verificación de suscripciones. La aplicación también puede conectarse a las fuentes multimedia que elijas. Estos proveedores reciben la información necesaria para prestar sus servicios y se rigen por sus propios términos y avisos de privacidad. Revísalos antes de usar un checkout o fuente de terceros.",
    "privacy.s8Title": "8. Seguridad",
    "privacy.s8Body": "Se aplican medidas técnicas y organizativas razonables para proteger la información. Ningún sitio, dispositivo o transmisión puede garantizar seguridad absoluta. No envíes datos de tarjetas de pago a soporte por correo electrónico.",
    "privacy.s9Title": "9. Menores de edad",
    "privacy.s9Body": "El servicio de suscripción no está dirigido a menores que no puedan realizar compras legalmente. Si un padre, madre o tutor cree que un menor proporcionó información personal, debe contactar al administrador del proyecto.",
    "privacy.s10Title": "10. Tus opciones y cambios a esta política",
    "privacy.s10Body": "Puedes no proporcionar datos opcionales, borrar el almacenamiento local del navegador y contactar a soporte con consultas o solicitudes de privacidad. Esta política puede cambiar si cambia el servicio; aquí se publicará la versión vigente y su fecha de entrada en vigor.",
    "privacy.s11Title": "11. Contacto",
    "privacy.s11Body": "Para consultas o solicitudes de privacidad, comunícate con el administrador del proyecto Arcan Player mediante los datos de la página Soporte.",
    "terms.eyebrow": "Condiciones de uso",
    "terms.title": "Términos y condiciones",
    "terms.lede": "Estas condiciones rigen el uso de Arcan Player y su servicio de suscripción.",
    "terms.s1Title": "1. Aceptación y requisitos",
    "terms.s1Body": "Al acceder o utilizar Arcan Player, su sitio web o sus funciones de suscripción, aceptas estas condiciones. Debes tener capacidad legal para contratar; si eres menor de edad, debe actuar un padre, madre o tutor cuando así lo exija la ley.",
    "terms.s2Title": "2. Servicio y datos de cuenta",
    "terms.s2Body": "Arcan Player ofrece la aplicación y las funciones descritas en la versión vigente y en la oferta de suscripción. Después del pago, es posible que se solicite un nombre de usuario y correo electrónico para vincular la suscripción con tu cuenta. Eres responsable de proporcionar información correcta y proteger tu código de activación y los datos de tu cuenta.",
    "terms.s3Title": "3. Planes, precios y pruebas",
    "terms.s3Body": "La página de suscripción describe los planes, funciones, precios y cualquier prueba disponible. La oferta vigente aparece en el checkout; el importe, moneda, impuestos, intervalo de facturación, duración de la prueba y condiciones de renovación que PayPal o Paddle muestren antes de confirmar rigen tu compra. Solo se ofrece una prueba si aparece expresamente para el plan seleccionado.",
    "terms.s4Title": "4. Facturación, renovación y cancelación",
    "terms.s4Body": "El proveedor de pago que elijas factura y renueva la suscripción conforme a las condiciones del checkout. Un plan recurrente puede renovarse automáticamente si no lo cancelas. Administra o cancela el plan con el proveedor antes de la próxima fecha de facturación para evitar un nuevo cargo. La cancelación detiene renovaciones futuras, pero no reembolsa automáticamente un pago anterior.",
    "terms.s5Title": "5. Reembolsos, incluido el plazo de 14 días de Paddle",
    "terms.s5Body": "Para compras procesadas por Paddle, puedes solicitar un reembolso durante un plazo mínimo de 14 días naturales desde la fecha del cargo correspondiente. Presenta la solicitud mediante el soporte de Paddle o el enlace de tu recibo. Para compras por PayPal, usa sus canales de resolución/soporte o contáctanos para recibir ayuda. La legislación de consumo o las políticas del proveedor pueden darte derechos adicionales; estas condiciones no los limitan. Consulta la Política de reembolsos para ver cómo solicitarlo.",
    "terms.s6Title": "6. Uso permitido",
    "terms.s6Body": "Utiliza la aplicación y el sitio web de forma legal y según las condiciones de la oferta. No hagas un uso indebido, interrumpas el servicio, realices ingeniería inversa cuando esté prohibido ni intentes eludir la verificación de suscripciones. Eres responsable de tener derechos sobre los medios o fuentes externas que utilices con la aplicación.",
    "terms.s7Title": "7. Pagos y servicios de terceros",
    "terms.s7Body": "PayPal y Paddle son proveedores de pago independientes. Sus reglas de checkout, facturación, cancelación, privacidad y disputas también se aplican a los servicios que prestan. Arcan Player no recibe el número completo de tu tarjeta. Las aplicaciones, dispositivos, redes y fuentes multimedia de terceros están fuera del control del proyecto.",
    "terms.s8Title": "8. Disponibilidad y cambios",
    "terms.s8Body": "Las funciones pueden variar según el dispositivo, la versión de la aplicación, el sistema operativo y la red, y pueden cambiar a medida que evoluciona el servicio. Podemos actualizar, suspender o retirar una función cuando sea razonablemente necesario. No se limitarán derechos que la ley no permita limitar.",
    "terms.s9Title": "9. Propiedad intelectual",
    "terms.s9Body": "El nombre, logotipo, aplicación y materiales originales de Arcan Player pertenecen a sus respectivos titulares y están protegidos por la legislación aplicable. La suscripción te concede un derecho limitado, personal e intransferible de uso de las funciones incluidas durante el período pagado; no transfiere su propiedad.",
    "terms.s10Title": "10. Disponibilidad y responsabilidad",
    "terms.s10Body": "El servicio se proporciona conforme a la legislación de consumo aplicable y sin garantizar que todas las funciones estén siempre disponibles o libres de errores. En la medida permitida por la ley, el proyecto no responde por servicios o fuentes de terceros. Nada de lo aquí dispuesto excluye responsabilidades o recursos que legalmente no puedan excluirse o limitarse.",
    "terms.s11Title": "11. Cambios y contacto",
    "terms.s11Body": "Podemos actualizar estas condiciones y publicaremos aquí la versión vigente y su fecha de entrada en vigor. Para consultas sobre suscripciones, reembolsos o estas condiciones, contacta a Soporte de Arcan Player. Para disputas de facturación o cancelaciones quizá debas comunicarte con el proveedor de pago.",
    "refunds.eyebrow": "Pagos y reembolsos",
    "refunds.title": "Política de reembolsos",
    "refunds.lede": "Aquí se explica cómo solicitar el reembolso de una suscripción de Arcan Player.",
    "refunds.s1Title": "1. Proveedor de pago",
    "refunds.s1Body": "Las suscripciones se compran mediante PayPal o Paddle. El proveedor que figure en tu recibo procesa el pago y puede gestionar la devolución conforme a sus procedimientos.",
    "refunds.s2Title": "2. Plazo mínimo de 14 días para compras con Paddle",
    "refunds.s2Body": "Para cada pago procesado por Paddle, incluidos los cargos de renovación, puedes solicitar un reembolso durante un plazo mínimo de 14 días naturales a partir de la fecha de ese cargo. Respetaremos este plazo mínimo; se mantienen los plazos mayores y otros derechos que otorguen la legislación de consumo o las reglas de Paddle.",
    "refunds.s3Title": "3. Cómo enviar una solicitud",
    "refunds.s3Body": "Para Paddle, usa el enlace de soporte/reembolso de tu recibo o contacta al soporte de Paddle. Para PayPal, abre la transacción en tu cuenta y utiliza el Centro de resoluciones o el soporte de PayPal. Si necesitas ayuda para identificar la compra, escribe al soporte de Arcan Player e incluye la referencia del recibo/pedido, proveedor de pago, fecha, plan y el correo o nombre de usuario utilizado para activarlo.",
    "refunds.s4Title": "4. Tramitación y privacidad",
    "refunds.s4Body": "El proveedor de pago puede verificar la transacción y devolver los fondos aprobados al método de pago original. Los plazos de procesamiento y acreditación varían según el proveedor y el banco. Nunca envíes por correo el número completo de tu tarjeta, contraseña o código de seguridad. Esta política no limita los derechos obligatorios de consumo ni condiciones de reembolso más favorables del proveedor.",
    "refunds.s5Title": "5. La cancelación es independiente",
    "refunds.s5Body": "Solicitar un reembolso no cancela automáticamente una suscripción recurrente, y cancelar la suscripción no reembolsa automáticamente un cargo anterior. Cancela futuras renovaciones con el proveedor antes de la próxima fecha de facturación. Contacta a soporte si necesitas ayuda.",
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
    "support.faq3A": "Visita la página de suscripción de Arcan Player para comparar la oferta vigente y completar el pago con PayPal o Paddle. Después del pago, vincula la compra con tu nombre de usuario y correo para recibir el código de activación.",
    "support.faq4Q": "¿Cómo cancelo o solicito un reembolso?",
    "support.faq4A": "Cancela la facturación recurrente con el proveedor utilizado antes de la próxima fecha de renovación. Para compras con Paddle, puedes solicitar el reembolso durante al menos 14 días naturales desde el cargo; utiliza el enlace de tu recibo o el soporte de Paddle. Consulta la Política de reembolsos para más información.",
    "support.faq5Q": "¿Por qué no se reproduce un archivo o una transmisión?",
    "support.faq5A": "La reproducción depende de los formatos admitidos por Roku, la codificación de la transmisión, tu red y de que la fuente esté disponible y permita el acceso. Comprueba la URL, vuelve a intentarlo más tarde y confirma que la fuente funcione en un dispositivo Roku compatible. Arcan Player no puede reproducir una fuente incompatible o no disponible.",
    "support.faq6Q": "¿De dónde obtiene Arcan Player sus canales y videos?",
    "support.faq6A": "Arcan Player es un reproductor, no un servicio de contenido. No incluye ni proporciona canales, videos, música o listas de terceros. Tú agregas fuentes propias o a las que tienes autorización de acceso.",
    "support.legalNote": "Para conocer cómo se trata la información, las condiciones y los reembolsos, consulta",
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
