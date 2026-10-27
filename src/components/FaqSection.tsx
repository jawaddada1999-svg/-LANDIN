import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>إجابات واضحة</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">الأسئلة المتكررة من أصحاب الوكالات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            كل ما تحتاج معرفته قبل تشغيل السيستم في وكالتك
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            إجابات دقيقة حول الربط مع الواتساب، اللغة، التكلفة، وطريقة تدريب فريق الوكلاء.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-neutral-900/40 border border-neutral-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  className="w-full p-5 text-right flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-amber-400 text-neutral-950' : 'text-neutral-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-4 bg-neutral-950/40">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 bg-neutral-900/60 border border-neutral-800 rounded-2xl text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-sm font-bold text-white">عندك سؤال تقني أو حالة خاصة بوكالتك؟</h4>
            <p className="text-xs text-neutral-400 mt-0.5">تواصل مباشرة مع المستشار المسؤول عن وكالات المغرب.</p>
          </div>
          <a
            href="https://wa.me/212600000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%B9%D9%86%D8%AF%D9%8A%20%D8%B3%D8%A4%D8%A7%D9%84%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%8A%D8%B3%D8%AA%D9%85%20%D8%B9%D9%82%D8%A7%D8%B1%20%D9%81%D9%84%D9%88"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 rounded-xl hover:bg-emerald-900/40 transition-colors whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4" />
            <span>مراسلة عبر الواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
};
