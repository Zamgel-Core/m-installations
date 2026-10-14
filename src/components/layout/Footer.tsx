import React, { useEffect, useState } from 'react';
import { Logo } from '../ui/Logo';
import { siteConfig } from '../../config/site';
import { navLinks } from '../../config/navigation';
import { scrollToSection } from '../../lib/utils';
import { Dictionary } from '../../i18n';
import { Phone, Mail, MapPin, MessageSquare, Facebook, X } from 'lucide-react';


type LegalKey = 'terms' | 'privacy' | 'communications' | 'cookies';

const legalContent: Record<'es' | 'en', Record<LegalKey, { title: string; sections: { heading: string; body: string }[] }>> = {
  es: {
    terms: { title: 'Términos y condiciones', sections: [
      { heading: 'Uso del sitio', body: 'Este sitio presenta información general sobre los servicios de M Installations en Houston, Texas. La información puede cambiar sin previo aviso.' },
      { heading: 'Cotizaciones y servicios', body: 'Enviar una solicitud no constituye un contrato ni garantiza disponibilidad, precio o fecha de instalación. Los detalles, materiales, precios y condiciones se confirmarán directamente antes de realizar un trabajo.' },
      { heading: 'Contenido del sitio', body: 'Los textos, fotografías y otros materiales se proporcionan con fines informativos. No deben reproducirse sin la autorización correspondiente.' },
      { heading: 'Contacto', body: 'Para consultas sobre los servicios o este sitio, comuníquese mediante los datos publicados en la sección de Contacto.' }
    ] },
    privacy: { title: 'Política de privacidad', sections: [
      { heading: 'Datos que recibimos', body: 'Cuando solicita una cotización o se comunica con nosotros, podemos recibir su nombre, teléfono, correo electrónico, dirección o zona de servicio y los detalles que decida compartir sobre su proyecto.' },
      { heading: 'Cómo los utilizamos', body: 'Utilizamos estos datos para responder consultas, preparar cotizaciones, coordinar citas, prestar servicios y dar seguimiento a solicitudes o trabajos.' },
      { heading: 'Servicios de terceros', body: 'Las comunicaciones pueden realizarse mediante servicios externos, como WhatsApp, proveedores de correo electrónico o telefonía, sujetos a sus propias políticas. No vendemos sus datos personales.' },
      { heading: 'Conservación y seguridad', body: 'Conservamos la información durante el tiempo razonablemente necesario para gestionar solicitudes, servicios y obligaciones aplicables. Adoptamos medidas razonables de protección, aunque ningún sistema es completamente seguro.' },
      { heading: 'Sus solicitudes', body: 'Puede escribirnos para consultar, corregir o solicitar la eliminación de información personal, sujeto a las obligaciones legales aplicables.' }
    ] },
    communications: { title: 'Política de comunicaciones', sections: [
      { heading: 'Comunicaciones relacionadas con su solicitud', body: 'Si nos contacta o solicita una cotización, podremos responder por los medios que proporcione o utilice, como llamadas, WhatsApp, correo electrónico o mensajes de texto, según corresponda, para atender su consulta, coordinar citas y dar seguimiento al servicio.' },
      { heading: 'Mensajes promocionales', body: 'No interpretamos una solicitud de cotización como consentimiento automático para recibir publicidad. Las comunicaciones promocionales por SMS u otros canales que requieran autorización se enviarán únicamente con el consentimiento correspondiente.' },
      { heading: 'Preferencias y cancelación', body: 'Puede pedir que dejemos de enviarle mensajes promocionales comunicándose directamente con nosotros. Si en el futuro ofrecemos una suscripción de SMS, informaremos las condiciones y el mecanismo para darse de baja antes de activarla.' },
      { heading: 'Costos', body: 'Su proveedor de telefonía podría aplicar cargos por mensajes o datos.' }
    ] },
    cookies: { title: 'Política de cookies', sections: [
      { heading: 'Cookies y almacenamiento', body: 'Este sitio puede utilizar almacenamiento local o tecnologías necesarias para recordar preferencias, como el idioma, y permitir el funcionamiento de sus características.' },
      { heading: 'Herramientas adicionales', body: 'Si en el futuro incorporamos analíticas, publicidad o tecnologías de seguimiento no esenciales, esta política deberá actualizarse y se implementarán los controles de consentimiento que correspondan.' },
      { heading: 'Sus opciones', body: 'Puede gestionar o eliminar cookies desde la configuración de su navegador. Algunas funciones podrían verse afectadas.' }
    ] }
  },
  en: {
    terms: { title: 'Terms and Conditions', sections: [
      { heading: 'Website use', body: 'This website provides general information about M Installations services in Houston, Texas. Information may change without notice.' },
      { heading: 'Quotes and services', body: 'Submitting a request does not create a contract or guarantee availability, pricing, or installation dates. Project details, materials, prices, and terms will be confirmed directly before work begins.' },
      { heading: 'Website content', body: 'Text, photographs, and other materials are provided for informational purposes and may not be reproduced without appropriate permission.' },
      { heading: 'Contact', body: 'For questions about our services or this website, use the contact information listed on this page.' }
    ] },
    privacy: { title: 'Privacy Policy', sections: [
      { heading: 'Information we receive', body: 'When you request a quote or contact us, we may receive your name, phone number, email, service address or area, and details you choose to share about your project.' },
      { heading: 'How we use information', body: 'We use this information to respond to inquiries, prepare quotes, schedule appointments, provide services, and follow up on requests or completed work.' },
      { heading: 'Third-party services', body: 'Communications may use third-party services such as WhatsApp, email, or telephone providers, which have their own privacy practices. We do not sell your personal information.' },
      { heading: 'Retention and security', body: 'We retain information as reasonably necessary to manage inquiries, services, and applicable obligations. We take reasonable security measures, but no system is completely secure.' },
      { heading: 'Your requests', body: 'You may contact us to ask about, correct, or request deletion of personal information, subject to applicable legal obligations.' }
    ] },
    communications: { title: 'Communications Policy', sections: [
      { heading: 'Service-related communications', body: 'If you contact us or request a quote, we may respond using the channels you provide or use, including phone calls, WhatsApp, email, or text messages as appropriate, to address your request, schedule visits, and follow up on services.' },
      { heading: 'Promotional messages', body: 'A quote request is not automatic consent to receive advertising. Promotional SMS or other communications requiring permission will only be sent with the appropriate consent.' },
      { heading: 'Preferences and opt-out', body: 'You may ask us to stop promotional communications by contacting us. If we later introduce an SMS subscription, we will disclose the terms and opt-out instructions before enrollment.' },
      { heading: 'Charges', body: 'Your wireless carrier may charge message or data rates.' }
    ] },
    cookies: { title: 'Cookie Policy', sections: [
      { heading: 'Cookies and storage', body: 'This website may use local storage or technologies necessary to remember preferences, such as language, and support website features.' },
      { heading: 'Additional tools', body: 'If analytics, advertising, or nonessential tracking technologies are added later, this policy must be updated and applicable consent controls implemented.' },
      { heading: 'Your choices', body: 'You can manage or delete cookies through your browser settings. Some website features may be affected.' }
    ] }
  }
};

interface FooterProps {
  t: Dictionary;
}

export const Footer: React.FC<FooterProps> = ({ t }) => {
  const currentYear = new Date().getFullYear();
  const [activeLegal, setActiveLegal] = useState<LegalKey | null>(null);
  const isSpanish = /inicio|nosotros|servicios/i.test(JSON.stringify(t.nav));
  const lang: 'es' | 'en' = isSpanish ? 'es' : 'en';
  useEffect(() => {
    if (!activeLegal) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setActiveLegal(null); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeLegal]);

  const getNavLabel = (key: string): string => {
    const parts = key.split('.');
    if (parts[0] === 'nav') {
      const field = parts[1] as keyof typeof t.nav;
      return t.nav[field] || parts[1];
    }
    return key;
  };

  return (
    <footer className="bg-[#05080E] border-t border-slate-800 text-slate-400 text-xs sm:text-sm">
      <style>{`
        @keyframes zc-glow {
          0%, 74%, 100% { box-shadow: 0 0 12px rgba(0,185,242,.08); border-color: rgba(0,185,242,.35); }
          85% { box-shadow: 0 0 26px rgba(0,185,242,.42), inset 0 0 8px rgba(0,185,242,.12); border-color: rgba(0,185,242,.9); }
        }
        .zc-powered { animation: zc-glow 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .zc-powered { animation: none; transition: none; } }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center md:text-left">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex justify-center md:justify-start"><Logo size="md" /></div>
            <p className="text-xs text-slate-400 leading-relaxed md:pr-2">
              {t.footer.description}
            </p>
            <div className="pt-2">
              <a
                href={siteConfig.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-[#00B9F2] hover:border-[#00B9F2]/40 transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="hover:text-[#00B9F2] transition-colors"
                  >
                    {getNavLabel(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>{t.services.securityCameras.title}</li>
              <li>{t.services.networkCabling.title}</li>
              <li>{t.services.alarmSystems.title}</li>
              <li>{t.services.accessControl.title}</li>
              <li>{t.services.tvMounting.title}</li>
              <li>{t.services.audioSystems.title}</li>
              <li>{t.services.projectorsDigital.title}</li>
            </ul>
          </div>

          {/* Column 4: Contact & Area */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t.footer.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#00B9F2] shrink-0" />
                <span>{siteConfig.location}</span>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-center md:justify-start gap-2.5 text-slate-300 hover:text-[#00B9F2] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#00B9F2] shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center md:justify-start gap-2.5 text-[#25D366] hover:underline"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center justify-center md:justify-start gap-2.5 text-slate-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#00B9F2] shrink-0" />
                  <span className="truncate">{siteConfig.email}</span>
                </a>
              </li>
            </ul>
            {/* Developer signature under contact */}
            <div className="mt-7 flex justify-center md:justify-start">
          <a
            href="https://zamgelcore.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Zamgel Core (opens in a new tab)"
            className="zc-powered group relative inline-flex items-center gap-3 sm:gap-4 rounded-2xl border border-[#00B9F2]/35 bg-[#00B9F2]/[0.06] px-4 py-3 shadow-[0_0_35px_rgba(0,185,242,0.09)] transition-all duration-300 hover:scale-[1.02] hover:border-[#00B9F2]/70 hover:bg-[#00B9F2]/[0.10] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9F2]"
          >
            <img
              src="/images/logo/zamgelcore-zc-logo.png"
              alt="Zamgel Core ZC logo"
              loading="lazy"
              className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="text-left">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-slate-400">
                Powered by
              </p>
              <p className="mt-0.5 text-base sm:text-lg font-black leading-tight">
                <span className="text-slate-100">Zamgel</span>{' '}
                <span className="text-[#FF8C00]">Core</span>
              </p>
            </div>
          </a>
            </div>
          </div>
        </div>

        {/* Legal documents */}
        <nav aria-label={isSpanish ? 'Documentos legales' : 'Legal documents'} className="mt-10 border-t border-slate-800/70 pt-8 flex flex-wrap justify-center gap-2.5">
          {(['terms', 'privacy', 'communications', 'cookies'] as LegalKey[]).map((key) => (
            <button key={key} type="button" onClick={() => setActiveLegal(key)} className="rounded-full border border-slate-700/80 bg-slate-900/50 px-4 py-2 text-xs text-slate-300 transition-colors hover:border-[#00B9F2]/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9F2]">
              {legalContent[lang][key].title}
            </button>
          ))}
        </nav>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <p>© {currentYear} {siteConfig.name}. {t.footer.rights}</p>
          <p>{t.footer.houstonNotice}</p>
        </div>
      </div>
      {activeLegal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) setActiveLegal(null); }}>
          <section role="dialog" aria-modal="true" aria-labelledby="m-legal-title" className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-[#00B9F2]/35 bg-[#091321] text-slate-200 shadow-[0_0_60px_rgba(0,185,242,0.12)]">
            <header className="flex items-center justify-between gap-4 border-b border-slate-700/60 px-5 py-4 sm:px-7">
              <h2 id="m-legal-title" className="text-lg font-bold text-white">{legalContent[lang][activeLegal].title}</h2>
              <button type="button" aria-label={isSpanish ? 'Cerrar' : 'Close'} onClick={() => setActiveLegal(null)} className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B9F2]"><X className="h-5 w-5" /></button>
            </header>
            <div className="space-y-6 overflow-y-auto px-5 py-6 sm:px-7">
              <p className="text-xs text-slate-400">M Installations · Houston, Texas · {isSpanish ? 'Última actualización: octubre de 2026' : 'Last updated: October 2026'}</p>
              {legalContent[lang][activeLegal].sections.map((section) => (
                <div key={section.heading} className="space-y-2">
                  <h3 className="text-sm font-bold text-[#00B9F2]">{section.heading}</h3>
                  <p className="text-sm leading-7 text-slate-300">{section.body}</p>
                </div>
              ))}
              <p className="border-t border-slate-700/60 pt-4 text-xs text-slate-400">{isSpanish ? 'Contacto' : 'Contact'}: <a className="text-[#00B9F2] hover:underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
            </div>
          </section>
        </div>
      )}
    </footer>
  );
};
