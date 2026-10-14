import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Dictionary } from '../../i18n';
import { MessageSquare, ClipboardList, FileCheck, CheckCircle } from 'lucide-react';

interface ProcessSectionProps {
  t: Dictionary;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ t }) => {
  const steps = [
    {
      number: '01',
      title: t.process.step1Title,
      description: t.process.step1Desc,
      icon: MessageSquare,
    },
    {
      number: '02',
      title: t.process.step2Title,
      description: t.process.step2Desc,
      icon: ClipboardList,
    },
    {
      number: '03',
      title: t.process.step3Title,
      description: t.process.step3Desc,
      icon: FileCheck,
    },
    {
      number: '04',
      title: t.process.step4Title,
      description: t.process.step4Desc,
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#060912] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.process.kicker}
          title={t.process.title}
          subtitle={t.process.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#0C1524] border border-slate-800 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#00B9F2]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-extrabold text-[#00B9F2]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00B9F2]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
