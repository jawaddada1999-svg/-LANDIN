import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const painPoints = [
    'الرد اليدوي كيتأخر بين ساعة و 24 ساعة، والزبون كيمشي يشوف إعلانات وكالات أخرى.',
    'ضياع 3 إلى 5 ساعات يومياً في الجواب على "ديسبو؟" وأسئلة مكررة من أشخاص بدون ميزانية.',
    'مواعيد زيارة وهمية أو كيتلغاو ف آخر دقيقة (No-shows)، والوكيل كيتنقل وكيضيع وقت ثمين.',
    'رسائل كثيرة كتنسى ف الواتساب بدون متابعة أو تدوين في قاعدة بيانات الوكالة.',
    'الوكيل كيمشي للزيارة بدون معرفة قدرة الزبون المالية أو جاهزية التمويل البنكي.'
  ];

  const solutions = [
    'رد فوري في أقل من 5 ثوانٍ 24/7 بالدارجة والفرنسية بينما الزبون مازال مهتم ومتحمس.',
    'تصفية ذكية كتفرز المشترين الحقيقيين وتعرف ميزانيتهم بدقة قبل ما تبرمج أي زيارة.',
    'نسبة حضور 94% للزيارات بفضل التذكيرات الآلية وتأكيد الموقع عبر خرائط Google Maps.',
    'تسجيل وتحديث تلقائي لجميع الزبائن في الأجندة والـ CRM بنقرة زر واحدة.',
    'الوكيل كيتوصل بتقرير شامل: الاسم، الهاتف، الميزانية، والجاهزية، باش يركز على الإغلاق فقط.'
  ];

  return (
    <section className="py-20 bg-neutral-950 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <span>الفارق على أرض الواقع</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">مقارنة بالأرقام والنتائج</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            الفرق بين الوكالة التقليدية والوكالة المعتمدة على عقار فلو
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            شوف كيفاش الأتمتة كتحول يوميات الوكلاء العقاريين من الفوضى والتوتر إلى كفاءة وإنتاجية ومبيعات مضاعفة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional Agency Card */}
          <div className="bg-neutral-900/40 border border-red-950/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-bold text-neutral-200">الوكالة العقارية التقليدية</h3>
                  <p className="text-xs text-neutral-500 mt-0.5">عمل يدوي مجهد وتشتت دائم</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-red-950/60 border border-red-800/40 text-red-400 flex items-center justify-center">
                  <X className="w-5 h-5" />
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-400">
                {painPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-red-950/40 text-red-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✕
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 text-center">
              <span className="text-xs font-semibold text-neutral-500">
                النتيجة: ضياع 40% من الصفقات وإرهاق الوكلاء
              </span>
            </div>
          </div>

          {/* AqarFlow Agency Card */}
          <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950 border border-amber-500/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl ring-1 ring-amber-500/20">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>مع سيستم عقار فلو</span>
                    <span className="text-[11px] font-sans text-amber-400 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                      AqarFlow AI
                    </span>
                  </h3>
                  <p className="text-xs text-amber-400/90 mt-0.5">أتمتة كاملة من أول رسالة إلى الزيارة</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm text-neutral-200">
                {solutions.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 text-center">
              <span className="text-xs font-semibold text-amber-400">
                النتيجة: تضاعف المبيعات + توفير 20+ ساعة أسبوعياً لكل وكيل
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
