import { QuoteFormData } from '../types';
import { siteConfig } from '../config/site';

export function createWhatsAppQuoteLink(
  data: QuoteFormData,
  lang: 'en' | 'es' = 'en'
): string {
  const isEs = lang === 'es';
  const lines = isEs
    ? [
        '*Solicitud de cotización - M Installations*',
        '',
        `*Nombre:* ${data.fullName.trim()}`,
        `*Teléfono:* ${data.phone.trim()}`,
        ...(data.email.trim() ? [`*Correo electrónico:* ${data.email.trim()}`] : []),
        `*Tipo de propiedad:* ${data.propertyType === 'residential' ? 'Residencial (Hogar)' : 'Comercial (Negocio)'}`,
        `*Servicio requerido:* ${data.serviceType}`,
        `*Ubicación / Código postal:* ${data.areaOrZip.trim()}`,
        '',
        '*Detalles del proyecto:*',
        data.projectDescription.trim(),
      ]
    : [
        '*Quote Request - M Installations*',
        '',
        `*Full name:* ${data.fullName.trim()}`,
        `*Phone:* ${data.phone.trim()}`,
        ...(data.email.trim() ? [`*Email:* ${data.email.trim()}`] : []),
        `*Property type:* ${data.propertyType === 'residential' ? 'Residential (Home)' : 'Commercial (Business)'}`,
        `*Service required:* ${data.serviceType}`,
        `*Location / ZIP code:* ${data.areaOrZip.trim()}`,
        '',
        '*Project details:*',
        data.projectDescription.trim(),
      ];

  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export function createDirectWhatsAppLink(
  message = 'Hello M Installations, I have an inquiry regarding your installation services.'
): string {
  return `https://wa.me/${siteConfig.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
