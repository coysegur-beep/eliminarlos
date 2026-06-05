/**
 * Configuración central del sitio eliminarlos.com
 * Edita aquí y se propaga a todo el proyecto.
 */

export const SITE = {
  name: 'Eliminarlos',
  shortName: 'Eliminarlos',
  domain: 'eliminarlos.com',
  url: 'https://eliminarlos.org',
  description: 'Eliminamos tu información de Google e internet. Derecho al olvido, gestión de reputación online y borrado de datos personales con métodos 100% legales.',
  locale: 'es-ES',
  language: 'es',
  founded: 2020,

  contact: {
    phone: '+57 302 868 0235',
    phoneHref: 'tel:+573028680235',
    whatsapp: '+57 302 868 0235',
    whatsappLink: 'https://wa.me/573028680235',
    email: 'hola@eliminarlos.com',
  },

  social: {
    instagram: 'https://www.instagram.com/eliminarlos',
    whatsapp: 'https://wa.me/34600000000',
  },
};

export const NAV_LINKS = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Casos de éxito', href: '/casos-de-exito' },
  { label: 'Blog', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contacto', href: '/contacto' },
];

export const SERVICIOS = [
  // Eliminación
  { slug: 'eliminar-url-google',             nombre: 'Eliminar URL de Google',               descripcionCorta: 'Retiramos enlaces concretos de los resultados de búsqueda usando la vía legal más efectiva.',                                          keyword: 'eliminar url de google',                    grupo: 'eliminacion' },
  { slug: 'derecho-al-olvido',               nombre: 'Derecho al Olvido',                    descripcionCorta: 'Ejercemos el derecho al olvido bajo el RGPD para borrar información personal irrelevante o desactualizada.',                             keyword: 'derecho al olvido',                         grupo: 'eliminacion' },
  { slug: 'borrar-datos-internet',           nombre: 'Borrar Datos Personales',              descripcionCorta: 'Eliminamos nombre, DNI, dirección, teléfono y cualquier dato personal expuesto sin tu consentimiento.',                                  keyword: 'borrar datos de internet',                  grupo: 'eliminacion' },
  { slug: 'eliminar-noticias-google',        nombre: 'Eliminar Noticias de Google',          descripcionCorta: 'Gestionamos la retirada de artículos periodísticos desactualizados o que vulneran tu privacidad.',                                       keyword: 'eliminar noticias de google',               grupo: 'eliminacion' },
  { slug: 'eliminar-fotos-internet',         nombre: 'Eliminar Fotos de Internet',           descripcionCorta: 'Retiramos imágenes personales o íntimas publicadas sin consentimiento en Google Imágenes, redes sociales y webs.',                       keyword: 'eliminar fotos de internet',                grupo: 'eliminacion' },
  { slug: 'eliminar-videos-internet',        nombre: 'Eliminar Videos de Internet',          descripcionCorta: 'Gestionamos la retirada de vídeos íntimos o no autorizados en YouTube, redes sociales y otras plataformas.',                            keyword: 'eliminar videos de internet',               grupo: 'eliminacion' },
  { slug: 'eliminar-resenas-negativas',      nombre: 'Eliminar Reseñas Negativas',           descripcionCorta: 'Combatimos reseñas falsas o injustas en Google Maps, Trustpilot y otras plataformas que dañan tu negocio.',                             keyword: 'eliminar reseñas negativas google',         grupo: 'eliminacion' },
  { slug: 'eliminar-perfil-falso',           nombre: 'Eliminar Perfil Falso',                descripcionCorta: 'Actuamos contra perfiles falsos, suplantaciones de identidad y cuentas creadas para perjudicarte.',                                      keyword: 'eliminar perfil falso internet',            grupo: 'eliminacion' },
  { slug: 'borrar-huella-digital',           nombre: 'Borrar Huella Digital',                descripcionCorta: 'Análisis completo de tu presencia digital y eliminación sistemática de todos los rastros innecesarios o perjudiciales.',                  keyword: 'borrar huella digital',                     grupo: 'eliminacion' },
  { slug: 'eliminar-foros-google',           nombre: 'Eliminar Publicaciones en Foros',      descripcionCorta: 'Retiramos hilos, comentarios y publicaciones en foros con información falsa, privada o perjudicial sobre ti.',                           keyword: 'eliminar publicación foro google',          grupo: 'eliminacion' },
  { slug: 'eliminar-documentos-google',      nombre: 'Eliminar Documentos y Sentencias',     descripcionCorta: 'Gestionamos la retirada o desindexación de documentos judiciales, BOE, sanciones y archivos oficiales.',                                keyword: 'eliminar sentencia google boe',             grupo: 'eliminacion' },
  // Reputación
  { slug: 'limpiar-reputacion-online',       nombre: 'Limpiar Reputación Online',            descripcionCorta: 'Estrategia integral para desplazar contenido negativo y fortalecer tu presencia digital con resultados positivos.',                       keyword: 'limpiar reputacion online',                 grupo: 'reputacion' },
  { slug: 'crisis-reputacion-online',        nombre: 'Crisis de Reputación Online',          descripcionCorta: 'Protocolos urgentes para contener y recuperar tu reputación cuando una situación negativa empieza a escalar.',                           keyword: 'crisis reputacion online',                  grupo: 'reputacion' },
  { slug: 'reputacion-directivos',           nombre: 'Reputación para Directivos',           descripcionCorta: 'Gestión especializada de la presencia digital de ejecutivos, fundadores y personas con alta exposición profesional.',                     keyword: 'reputacion online directivos',              grupo: 'reputacion' },
  { slug: 'reputacion-inteligencia-artificial', nombre: 'Reputación en IA',                 descripcionCorta: 'Analizamos y corregimos lo que ChatGPT, Gemini y otras IAs dicen sobre ti o tu empresa.',                                                keyword: 'reputacion chatgpt inteligencia artificial',grupo: 'reputacion' },
  { slug: 'desposicionamiento-web',          nombre: 'Desposicionamiento Web',               descripcionCorta: 'Cuando no es posible eliminar un contenido, lo desplazamos de los primeros resultados con estrategia SEO reputacional.',                  keyword: 'desposicionamiento web contenido negativo', grupo: 'reputacion' },
];
