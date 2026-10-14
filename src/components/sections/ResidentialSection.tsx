import React from 'react';
import { Home, ShieldCheck, Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Dictionary } from '../../i18n';
import { scrollToSection } from '../../lib/utils';
import { PropertyType } from '../../types';

interface ResidentialSectionProps {
  t: Dictionary;
  onSelectPropertyType: (type: PropertyType) => void;
}

export const ResidentialSection: React.FC<ResidentialSectionProps> = ({
  t,
  onSelectPropertyType,
}) => {
  const handleCta = () => {
    onSelectPropertyType('residential');
    scrollToSection('#quote');
  };

  return (
    <section id="residential" className="py-16 sm:py-24 bg-[#0A101C] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-[#0F1D33] to-[#0A1220] border border-[#00B9F2]/20 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle light glow accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B9F2]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00B9F2]">
                <Home className="w-4 h-4" />
                <span>{t.sectors.residential.tagline}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
                {t.sectors.residential.title}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed [text-wrap:balance]">
                {t.sectors.residential.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {t.sectors.residential.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <Check className="w-4 h-4 text-[#00B9F2] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCta}
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  {t.sectors.residential.cta}
                </Button>
              </div>
            </div>

            {/* Right Graphic Feature Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#080D16]/90 border border-slate-700/60 p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#00B9F2]" />
                    <span>Residential Safeguards</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Houston Homes</span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span>Front Entrance / Porch Surveillance</span>
                    <span className="text-[#00B9F2] font-semibold">HD / 2K+</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span>Driveway & Vehicle Perimeter</span>
                    <span className="text-[#00B9F2] font-semibold">Night Vision</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex justify-between items-center">
                    <span>Living Room Flush TV Wall Mount</span>
                    <span className="text-[#00B9F2] font-semibold">Hidden Wires</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-800 text-center">
                  Custom installations mapped directly to your home layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
