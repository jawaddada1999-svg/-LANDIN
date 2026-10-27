import React from 'react';
import { Quote, Building2, MapPin, CheckCircle2, TrendingUp } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const CaseStudiesSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <span>وكالات تثق بنا في المغرب</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">نتائج مثبتة بالأرقام</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            ماذا يقول مدراء الوكالات العقارية بعد تشغيل عقار فلو؟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            وكالات عقارية في الدار البيضاء ومراكش وطنجة استعادت وقت وكلائها وضاعفت مبيعاتها بفضل السيستم.
          </p>
        </div>

        {/* Featured Case Study with Interior Photo */}
        <div className="mb-12 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/60 grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative aspect-4/3 lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src="/src/assets/images/morocco_property_visit_1793123811065.jpg"
              alt="شقة فاخرة بكازا أنفا تم تأهيل زبونها وبرمجة زيارتها"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>الدار البيضاء · أنفا المعاريف</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                دراسة حالة: أنفا بريستيج إيموبيليي (Anfa Prestige)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                «كنا نتلقى أكثر من 300 استفسار شهرياً عبر إعلانات إنستغرام ومو بواب. كان فريق الوكلاء يغرق في الردود ويصل إلى مواعيد المعاينة ليجد أن 40% من الزبائن لم يحضروا. بعد دمج عقار فلو، ارتفعت نسبة حضور الزيارات المؤكدة إلى 95% وأغلقنا 14 صفقة إضافية في 4 أشهر فقط.»
              </p>
            </div>

            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-bold text-white">ياسين برادة</p>
                <p className="text-[11px] text-neutral-500">المدير العام والمؤسس · أنفا بريستيج</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-left">
                  <p className="text-xl font-black text-amber-400 font-mono tabular-nums">+310%</p>
                  <p className="text-[10px] text-neutral-400">زيارات مؤكدة</p>
                </div>
                <div className="text-left">
                  <p className="text-xl font-black text-emerald-400 font-mono tabular-nums">14 صفقة</p>
                  <p className="text-[10px] text-neutral-400">إضافية مغلقة</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {TESTIMONIALS.slice(1).map((t) => (
            <div
              key={t.id}
              className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
                    <Building2 className="w-4 h-4 text-amber-400" />
                    <span>{t.agencyName}</span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-sans">{t.city}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  «{t.quote}»
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">{t.directorName}</p>
                  <p className="text-[10px] text-neutral-500">{t.dealGrowth}</p>
                </div>
                <div className="text-left">
                  <span className="text-lg font-black text-amber-400 font-mono tabular-nums">
                    {t.metric}
                  </span>
                  <p className="text-[10px] text-neutral-400">{t.metricLabel}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
