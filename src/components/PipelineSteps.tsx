import React from 'react';
import { MessageSquare, Filter, CalendarCheck2, Briefcase, ArrowLeft } from 'lucide-react';

export const PipelineSteps: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'الالتقاط الفوري 24/7',
      subtitle: 'Multi-Channel Inbound',
      desc: 'دمج تلقائي لجميع قنوات الإعلانات: فيسبوك، أنستغرام، أفيتو، مو بواب، وواتساب في منصة واحدة. الرد فوري ف أقل من ثانيتين بلا ما يبقى الزبون كيتسنى.',
      icon: MessageSquare,
      highlight: 'سرعة رد < 5 ثوانٍ'
    },
    {
      num: '02',
      title: 'التأهيل الذكي بالدارجة',
      subtitle: 'Smart Qualification',
      desc: 'حوار ذكي بالدارجة المغربية أو الفرنسية كيتأكد من معايير الشراء: الميزانية، الموقع المطلوب، الجدية، وتوفر التمويل (كاش أو موافقة بنكية).',
      icon: Filter,
      highlight: 'تصفية 80% من الفضوليين'
    },
    {
      num: '03',
      title: 'حجز موعد الزيارة مع GPS',
      subtitle: 'Visit Calendar & Location',
      desc: 'عرض المواعيد الشاغرة ف أجندة الوكيل تلقائياً. تأكيد الزيارة وإرسال موقع العقار عبر خرائط غوغل (GPS) مع كود تأكيد الحضور.',
      icon: CalendarCheck2,
      highlight: 'حجز مباشر ف Google Calendar'
    },
    {
      num: '04',
      title: 'تسليم الملف جاهز للوكيل',
      subtitle: 'Agent Brief & Closing',
      desc: 'إرسال تذكيرات أوتوماتيكية للزبون تمنع الغياب (No-shows). الوكيل العقاري كيمشي للمعاينة وهو عارف ملف الزبون وقوته الشرائية كاملة.',
      icon: Briefcase,
      highlight: 'نسبة حضور 94% للزيارات'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-900/40 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <span>مسار الأتمتة الكامل</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">من الشاشة إلى أرض الواقع</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            كيفاش السيستم كيحول رسالة عشوائية إلى عقد بيع مغلق فـ 4 خطوات
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            هندسة رقمية مخصصة للوكالات العقارية ف المغرب تريح فريقك من الرد اليدوي الروتيني وتضاعف عدد الزيارات الجادة.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <div
                key={st.num}
                className="relative bg-neutral-950/70 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-700 transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black font-mono text-amber-400/80 group-hover:text-amber-400 transition-colors">
                      {st.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1">{st.title}</h3>
                  <p className="text-xs font-sans text-neutral-500 mb-3">{st.subtitle}</p>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-amber-300/90 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-800/30">
                    {st.highlight}
                  </span>
                  {i < 3 && (
                    <ArrowLeft className="w-4 h-4 text-neutral-600 hidden lg:block -mr-2" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
