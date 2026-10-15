import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { siteConfig } from "../../config/site";
import { Dictionary } from "../../i18n";
import { ShieldCheck, MapPin, Wrench } from "lucide-react";

interface AboutSectionProps {
  t: Dictionary;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ t }) => {
  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#080D16] border-t border-slate-800/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.about.kicker}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Narrative Prose */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="[text-wrap:balance]">{t.about.p1}</p>
            <p className="[text-wrap:balance]">{t.about.p2}</p>
            <p className="[text-wrap:balance]">{t.about.p3}</p>

            <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-[#00B9F2]">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00B9F2]/10 border border-[#00B9F2]/25">
                <MapPin className="w-3.5 h-3.5" />
                {siteConfig.location}
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00B9F2]/10 border border-[#00B9F2]/25">
                <Wrench className="w-3.5 h-3.5" />
                Clean Craftsmanship
              </span>
            </div>
          </div>

          {/* Right Verified Metric Cards (Strictly Accurate) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-6 rounded-2xl bg-[#0C1524] border border-slate-800 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#00B9F2]/10 border border-[#00B9F2]/25 text-[#00B9F2] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
                  ~{siteConfig.experienceYears}
                </span>
                <span className="text-sm font-bold text-slate-300 block mt-1">
                  {t.about.statExperience}
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Hands-on installation background in cameras, cabling & audio.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0C1524] border border-slate-800 flex items-start gap-4 shadow-lg">
              <div className="w-12 h-12 rounded-xl bg-[#00B9F2]/10 border border-[#00B9F2]/25 text-[#00B9F2] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-3xl font-extrabold text-white tabular-nums">
                  Houston
                </span>
                <span className="text-sm font-bold text-slate-300 block mt-1">
                  {t.about.statLocal}
                </span>
                <p className="text-xs text-slate-500 mt-1">
                  Serving the Greater Houston metropolitan area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
