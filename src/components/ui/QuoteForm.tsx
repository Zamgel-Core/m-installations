import React, { useState, useEffect } from 'react';
import { QuoteFormData, PropertyType, Language } from '../../types';
import { siteConfig } from '../../config/site';
import { createWhatsAppQuoteLink } from '../../lib/whatsapp';
import { Dictionary } from '../../i18n';
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';

interface QuoteFormProps {
  t: Dictionary;
  language: Language;
  preselectedService?: string;
  preselectedPropertyType?: PropertyType;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  t,
  language,
  preselectedService = '',
  preselectedPropertyType = 'residential',
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceType: preselectedService,
    propertyType: preselectedPropertyType,
    areaOrZip: '',
    projectDescription: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedPropertyType) {
      setFormData((prev) => ({ ...prev, propertyType: preselectedPropertyType }));
    }
  }, [preselectedPropertyType]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = t.quote.errors.nameRequired;
    }
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = t.quote.errors.phoneRequired;
    }
    if (!formData.serviceType) {
      errs.serviceType = t.quote.errors.serviceRequired;
    }
    if (!formData.areaOrZip.trim()) {
      errs.areaOrZip = t.quote.errors.areaRequired;
    }
    if (!formData.projectDescription.trim()) {
      errs.projectDescription = t.quote.errors.descRequired;
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const whatsappUrl = createWhatsAppQuoteLink(formData, language);
    setIsSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative rounded-2xl bg-[#0C1524] border border-slate-800 p-6 sm:p-10 shadow-2xl">
      {isSubmitted ? (
        <div className="py-12 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            {language === 'es' ? '¡Consulta Enviada a WhatsApp!' : 'Inquiry Ready on WhatsApp!'}
          </h3>
          <p className="text-sm text-[#64748B] max-w-md mx-auto mb-6">
            {language === 'es'
              ? 'Tu solicitud se preparó en WhatsApp con todos los detalles. Si no se abrió la ventana, haz clic abajo.'
              : 'Your inquiry has been formatted for WhatsApp. If the chat window did not open automatically, click below.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              variant="whatsapp"
              onClick={() => window.open(createWhatsAppQuoteLink(formData, language), '_blank')}
            >
              {language === 'es' ? 'Abrir WhatsApp Nuevamente' : 'Open WhatsApp Again'}
            </Button>
            <Button variant="ghost" onClick={() => setIsSubmitted(false)}>
              {language === 'es' ? 'Editar Datos' : 'Edit Information'}
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Property Type Radio Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              {t.quote.propertyType} *
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, propertyType: 'residential' })}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  formData.propertyType === 'residential'
                    ? 'bg-[#00B9F2]/15 border-[#00B9F2] text-[#00B9F2] shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {t.quote.residential}
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, propertyType: 'commercial' })}
                className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                  formData.propertyType === 'commercial'
                    ? 'bg-[#00B9F2]/15 border-[#00B9F2] text-[#00B9F2] shadow-sm'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {t.quote.commercial}
              </button>
            </div>
          </div>

          {/* Name & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.quote.fullName} *
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={t.quote.fullNamePlaceholder}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00B9F2] ${
                  errors.fullName ? 'border-red-500' : 'border-slate-800 focus:border-[#00B9F2]'
                }`}
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.quote.phone} *
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder={t.quote.phonePlaceholder}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00B9F2] ${
                  errors.phone ? 'border-red-500' : 'border-slate-800 focus:border-[#00B9F2]'
                }`}
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email & Area Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.quote.email}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={t.quote.emailPlaceholder}
                className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#00B9F2] focus:ring-1 focus:ring-[#00B9F2]"
              />
            </div>

            <div>
              <label htmlFor="areaOrZip" className="block text-xs font-semibold text-slate-300 mb-1.5">
                {t.quote.area} *
              </label>
              <input
                type="text"
                id="areaOrZip"
                value={formData.areaOrZip}
                onChange={(e) => setFormData({ ...formData, areaOrZip: e.target.value })}
                placeholder={t.quote.areaPlaceholder}
                className={`w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00B9F2] ${
                  errors.areaOrZip ? 'border-red-500' : 'border-slate-800 focus:border-[#00B9F2]'
                }`}
              />
              {errors.areaOrZip && <p className="text-red-400 text-xs mt-1">{errors.areaOrZip}</p>}
            </div>
          </div>

          {/* Service Selector */}
          <div>
            <label htmlFor="serviceType" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.quote.serviceType} *
            </label>
            <select
              id="serviceType"
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00B9F2] ${
                errors.serviceType ? 'border-red-500' : 'border-slate-800 focus:border-[#00B9F2]'
              }`}
            >
              <option value="" disabled>
                {t.quote.servicePlaceholder}
              </option>
              <option value="Security Camera Installation">{t.services.securityCameras.title}</option>
              <option value="Network & Internet Cabling">{t.services.networkCabling.title}</option>
              <option value="Alarm Systems">{t.services.alarmSystems.title}</option>
              <option value="Access Control">{t.services.accessControl.title}</option>
              <option value="TV Wall Mounting">{t.services.tvMounting.title}</option>
              <option value="Audio Systems">{t.services.audioSystems.title}</option>
              <option value="Projectors & Digital Displays">{t.services.projectorsDigital.title}</option>
              <option value="Multiple / Custom Installation">
                {language === 'es' ? 'Múltiples Servicios / Proyecto Personalizado' : 'Multiple Services / Custom Project'}
              </option>
            </select>
            {errors.serviceType && <p className="text-red-400 text-xs mt-1">{errors.serviceType}</p>}
          </div>

          {/* Project Description */}
          <div>
            <label htmlFor="projectDescription" className="block text-xs font-semibold text-slate-300 mb-1.5">
              {t.quote.description} *
            </label>
            <textarea
              id="projectDescription"
              rows={3}
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              placeholder={t.quote.descriptionPlaceholder}
              className={`w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-[#00B9F2] ${
                errors.projectDescription ? 'border-red-500' : 'border-slate-800 focus:border-[#00B9F2]'
              }`}
            />
            {errors.projectDescription && (
              <p className="text-red-400 text-xs mt-1">{errors.projectDescription}</p>
            )}
          </div>

          {/* Privacy Notice */}
          <p className="text-[11px] text-[#64748B] leading-normal">
            {t.quote.privacyNotice}
          </p>

          {/* Submit Action */}
          <Button
            type="submit"
            variant="whatsapp"
            size="lg"
            fullWidth
            icon={<Send className="w-4 h-4" />}
          >
            {t.quote.submit}
          </Button>

          {/* Direct Contact Links */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
            <span className="font-medium text-slate-300">{t.quote.callDirect}</span>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-1.5 text-[#00B9F2] hover:underline font-bold"
              >
                <Phone className="w-3.5 h-3.5" />
                {siteConfig.phone}
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white"
              >
                <Mail className="w-3.5 h-3.5" />
                Email
              </a>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
