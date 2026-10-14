import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { QuoteForm } from '../ui/QuoteForm';
import { siteConfig } from '../../config/site';
import { Dictionary } from '../../i18n';
import { Language, PropertyType } from '../../types';
import { Phone, MessageSquare, Mail, MapPin, Facebook } from 'lucide-react';

interface ContactSectionProps {
  t: Dictionary;
  language: Language;
  preselectedService?: string;
  preselectedPropertyType?: PropertyType;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  t,
  language,
  preselectedService,
  preselectedPropertyType,
}) => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#080D16] border-t border-slate-800/80">
      <div id="quote" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="grid min-w-0 grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Social */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0C1524] border border-slate-800 space-y-6 shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">M Installations</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {t.contact.messagePrompt}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-[#00B9F2] hover:border-[#00B9F2]/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#00B9F2]/10 text-[#00B9F2] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contact.phoneLabel}</span>
                    <span className="font-bold text-white">{siteConfig.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contact.whatsappLabel}</span>
                    <span className="font-bold text-[#25D366]">{siteConfig.whatsapp}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[11px] text-slate-400 block">{t.contact.emailLabel}</span>
                    <span className="font-medium text-slate-200 truncate block">{siteConfig.email}</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300">
                  <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">{t.contact.locationLabel}</span>
                    <span className="font-semibold text-slate-200">{t.contact.locationValue}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-800">
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-white transition-colors"
                >
                  <Facebook className="w-4 h-4 text-[#00B9F2]" />
                  <span>{t.contact.facebookCta}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <QuoteForm
              t={t}
              language={language}
              preselectedService={preselectedService}
              preselectedPropertyType={preselectedPropertyType}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
