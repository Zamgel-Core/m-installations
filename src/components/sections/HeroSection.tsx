import React from 'react';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/utils';
import { Dictionary } from '../../i18n';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';

interface HeroSectionProps {
  t: Dictionary;
  onRequestQuote: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  t,
  onRequestQuote,
}) => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center overflow-hidden pt-8 pb-12 sm:pt-12 sm:pb-16 lg:py-24 tech-grid-pattern"
    >
      {/* Ambient Radial Blue Lighting */}
      <div className="absolute inset-0 tech-radial-glow pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00B9F2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-9 sm:gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Unboxed editorial location kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#00B9F2]">
              <MapPin className="w-3.5 h-3.5" />
              <span>{t.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              {t.hero.headline}
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-xl font-medium text-slate-200 [text-wrap:balance]">
              {t.hero.supporting}
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed [text-wrap:balance]">
              {t.hero.description}
            </p>

            {/* Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onRequestQuote}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {t.hero.primaryCta}
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="w-full sm:w-auto"
              >
                {t.hero.secondaryCta}
              </Button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00B9F2]" />
                <span className="font-semibold text-slate-300">{t.hero.badgeExp}</span>
              </div>
              <span className="hidden sm:inline text-slate-700" aria-hidden="true">·</span>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00B9F2]" />
                <span className="font-semibold text-slate-300">{t.hero.badgeLocal}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Security Camera Asset Presentation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient cyan backlight glow behind frame */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#00B9F2]/20 via-[#142B49]/40 to-[#00B9F2]/10 blur-xl opacity-75 pointer-events-none" />

            {/* Premium framed image container */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#00B9F2]/30 bg-[#0C1524] shadow-2xl shadow-[#00B9F2]/10 group">
              <img
                src="/images/hero/hero-security-camera.jpg"
                alt={t.hero.imageAlt}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto aspect-[3/2] object-cover object-center transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Subtle top & bottom vignette overlay scrim for seamless tech integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080D16]/60 via-transparent to-transparent pointer-events-none" />

              {/* Sleek bottom status pill */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#080D16]/85 backdrop-blur-md border border-slate-700/60 text-xs">
                <span className="font-semibold text-white tracking-wide">
                  M INSTALLATIONS
                </span>
                <span className="text-[11px] font-bold text-[#00B9F2] uppercase tracking-wider">
                  Houston, TX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
