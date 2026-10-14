import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { faqData } from '../../data/faq';
import { Dictionary } from '../../i18n';
import { ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  t: Dictionary;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const getQuestion = (id: string): string => {
    switch (id) {
      case 'faq-1':
        return t.faq.q1;
      case 'faq-2':
        return t.faq.q2;
      case 'faq-3':
        return t.faq.q3;
      case 'faq-4':
        return t.faq.q4;
      case 'faq-5':
        return t.faq.q5;
      case 'faq-6':
        return t.faq.q6;
      default:
        return '';
    }
  };

  const getAnswer = (id: string): string => {
    switch (id) {
      case 'faq-1':
        return t.faq.a1;
      case 'faq-2':
        return t.faq.a2;
      case 'faq-3':
        return t.faq.a3;
      case 'faq-4':
        return t.faq.a4;
      case 'faq-5':
        return t.faq.a5;
      case 'faq-6':
        return t.faq.a6;
      default:
        return '';
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#060910] border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker={t.faq.kicker}
          title={t.faq.title}
          subtitle={t.faq.subtitle}
        />

        <div className="space-y-3">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-[#0C1524] border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-[#00B9F2] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{getQuestion(item.id)}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00B9F2] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800/50 leading-relaxed">
                    <p>{getAnswer(item.id)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
