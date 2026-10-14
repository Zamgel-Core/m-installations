import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Dictionary } from "../../i18n";
import { Sun, Moon, Info, Shield, Radio } from "lucide-react";

interface TechnologySectionProps {
  t: Dictionary;
}

export const TechnologySection: React.FC<TechnologySectionProps> = ({ t }) => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [activeHotspot, setActiveHotspot] = useState<string>("entrance");

  const hotspots = [
    {
      id: "entrance",
      label: t.techDemo.hotspotEntrance,
      x: 35,
      y: 40,
      description:
        "Wide 110° diagonal lens coverage eliminating porch package blindspots.",
    },
    {
      id: "driveway",
      label: t.techDemo.hotspotDriveway,
      x: 75,
      y: 55,
      description:
        "Long-range infrared sensor illuminator monitoring vehicle arrival and perimeter fencing.",
    },
    {
      id: "blindspot",
      label: t.techDemo.hotspotBlindspot,
      x: 20,
      y: 75,
      description:
        "Side gate optical angle angled for discreet yard transition coverage.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#060910] border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.techDemo.kicker}
          title={t.techDemo.title}
          subtitle={t.techDemo.subtitle}
        />

        {/* Mandatory Transparency Disclaimer */}
        <div className="max-w-3xl mx-auto mb-8 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3 text-xs text-slate-400">
          <Info className="w-4 h-4 text-[#00B9F2] shrink-0" />
          <span>{t.techDemo.disclaimer}</span>
        </div>

        {/* Interactive Viewport Frame */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#080D16] border border-slate-800 shadow-2xl overflow-hidden relative">
          {/* Top Camera Header HUD */}
          <div className="px-6 py-3.5 bg-[#0C1524] border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="font-mono text-slate-300">
                CAM-01 · HD LENS DEMO
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline text-slate-400">
                FOCAL ANGLE 2.8mm
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-[#00B9F2] font-semibold text-xs">
                <Radio className="w-3.5 h-3.5 animate-pulse" />
                <span>Simulated Feed</span>
              </span>
            </div>
          </div>

          {/* Interactive Screen Container */}
          <div className="relative aspect-[16/9] w-full select-none overflow-hidden bg-slate-950">
            {/* Night image: full background */}
            <img
              src="/images/technology/camera-night.png"
              alt="Vista nocturna de la entrada"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* Day image: revealed by slider */}
            <img
              src="/images/technology/camera-day.png"
              alt="Vista diurna de la entrada"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              draggable={false}
            />

            {/* Viewfinder Target Overlay Marks */}
            <div className="absolute inset-4 pointer-events-none">
              <div className="w-4 h-4 border-t-2 border-l-2 border-[#00B9F2]/70 absolute top-0 left-0" />
              <div className="w-4 h-4 border-t-2 border-r-2 border-[#00B9F2]/70 absolute top-0 right-0" />
              <div className="w-4 h-4 border-b-2 border-l-2 border-[#00B9F2]/70 absolute bottom-0 left-0" />
              <div className="w-4 h-4 border-b-2 border-r-2 border-[#00B9F2]/70 absolute bottom-0 right-0" />
            </div>

            {/* Draggable Vertical Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#00B9F2] shadow-[0_0_12px_#00B9F2] z-30 cursor-ew-resize flex items-center justify-center"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-[#080D16] border-2 border-[#00B9F2] text-[#00B9F2] flex items-center justify-center shadow-lg text-xs font-bold -translate-x-1/2">
                ⇄
              </div>
            </div>

            {/* Interactive Coverage Hotspot Markers */}
            {hotspots.map((hs) => (
              <button
                key={hs.id}
                type="button"
                onClick={() => setActiveHotspot(hs.id)}
                style={{ top: `${hs.y}%`, left: `${hs.x}%` }}
                aria-label={`Coverage point: ${hs.label}`}
                className={`absolute z-20 -translate-x-1/2 -translate-y-1/2 p-1.5 rounded-full border transition-all cursor-pointer ${
                  activeHotspot === hs.id
                    ? "bg-[#00B9F2] text-[#080D16] border-white scale-110 shadow-lg"
                    : "bg-[#080D16]/90 text-white border-[#00B9F2]/40 hover:scale-105"
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
              </button>
            ))}
          </div>

          {/* Slider Control Bar */}
          <div className="p-6 bg-[#0C1524] border-t border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Sun className="w-3.5 h-3.5" />
                {t.techDemo.dayLabel}
              </span>
              <span className="text-slate-500 font-normal">
                {t.techDemo.sliderLabel}
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Moon className="w-3.5 h-3.5" />
                {t.techDemo.nightLabel}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label={t.techDemo.sliderLabel}
              className="w-full accent-[#00B9F2] h-2 bg-slate-900 rounded-lg cursor-pointer"
            />

            {/* Active Hotspot Inspector Card */}
            <div className="pt-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                {t.techDemo.hotspotsTitle}
              </span>
              <div className="p-3.5 rounded-xl bg-[#080D16] border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#00B9F2]/10 text-[#00B9F2] flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5">
                    {hotspots.find((h) => h.id === activeHotspot)?.label}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {hotspots.find((h) => h.id === activeHotspot)?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
