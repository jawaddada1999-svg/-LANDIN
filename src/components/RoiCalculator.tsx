import React, { useState } from 'react';
import { Calculator, ArrowRight, TrendingUp, Clock, Calendar, CheckCircle } from 'lucide-react';

interface RoiCalculatorProps {
  onBookClick: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onBookClick }) => {
  const [monthlyLeads, setMonthlyLeads] = useState<number>(200);
  const [avgPrice, setAvgPrice] = useState<number>(1800000); // 1.8M DH
  const commissionRate = 0.025; // 2.5% standard in Morocco

  // Math models
  // Time saved: ~15 mins per lead handled and vetted = 0.25 hrs * monthlyLeads
  const hoursSaved = Math.round(monthlyLeads * 0.25);
  
  // Extra qualified visits: currently ~10% make it to visit, with instant response & qualification that jumps to ~28%
  const regularVisits = Math.round(monthlyLeads * 0.10);
  const aqarFlowVisits = Math.round(monthlyLeads * 0.28);
  const additionalVisits = Math.max(0, aqarFlowVisits - regularVisits);

  // Extra closed deals: ~5% closing rate on qualified visits
  const extraDeals = Math.max(1, Math.round(additionalVisits * 0.06));

  // Additional revenue generated in Dirhams (DH)
  const additionalCommission = extraDeals * avgPrice * commissionRate;

  const formatDh = (num: number) => {
    return new Intl.NumberFormat('fr-MA', { maximumFractionDigits: 0 }).format(num) + ' درهم';
  };

  return (
    <section id="calculator" className="py-20 bg-neutral-900/60 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>حاسبة العائد الاستثماري (ROI)</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">حسب معايير السوق العقاري المغربي</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            شحال غادي توفر وكالتك وشحال من صفقة جديدة غادي تغلق شهرياً؟
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            حرك المؤشرات أدناه حسب حجم رسائل إعلاناتكم ومتوسط أثمنة العقارات المعروضة لديكم.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Slider 1: Monthly Leads */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold text-white">
                    عدد الرسائل والاستفسارات الشهرية
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded">
                    {monthlyLeads} رسالة / شهر
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={monthlyLeads}
                  onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                  <span>30</span>
                  <span>500</span>
                  <span>1,000+</span>
                </div>
              </div>

              {/* Slider 2: Average Property Price */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label className="text-sm font-bold text-white">
                    متوسط ثمن العقارات التي تسوقونها
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/40 px-3 py-1 rounded">
                    {formatDh(avgPrice)}
                  </span>
                </div>
                <input
                  type="range"
                  min="600000"
                  max="8000000"
                  step="100000"
                  value={avgPrice}
                  onChange={(e) => setAvgPrice(Number(e.target.value))}
                  className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-neutral-500 mt-1 font-mono">
                  <span>600,000 DH</span>
                  <span>4,000,000 DH</span>
                  <span>8,000,000+ DH</span>
                </div>
              </div>

              {/* Note on Commission */}
              <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                <span>العمولة المعتمدة في الحساب:</span>
                <span className="font-mono text-white font-bold">2.5% (العمولة المعتادة بالمغرب)</span>
              </div>

            </div>

            <p className="text-[11px] text-neutral-500 mt-6">
              * التقديرات مبنية على نتائج حقيقية لـ 18 وكالة عقارية مغربية تستخدم النظام في الدار البيضاء ومراكش وطنجة.
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 p-6 sm:p-8 rounded-2xl border border-amber-500/40 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
                <span className="text-xs font-semibold text-neutral-400">العائد الشهري التقديري للوكالة</span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/40">
                  ROI إيجابي من أول شهر
                </span>
              </div>

              {/* Big Highlight: Extra Commission */}
              <div className="mb-6 bg-neutral-950/80 p-5 rounded-xl border border-neutral-800 text-center">
                <p className="text-xs font-medium text-neutral-400 mb-1">أرباح عمولات إضافية متوقعة شهرياً</p>
                <p className="text-3xl sm:text-4xl font-black text-amber-400 font-mono tabular-nums">
                  +{formatDh(additionalCommission)}
                </p>
                <p className="text-xs text-neutral-400 mt-1">
                  ناتجة عن حوالي <strong className="text-white font-mono">{extraDeals}</strong> صفقات بيع إضافية مسترجعة
                </p>
              </div>

              {/* Metrics mini grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>ساعات موفرة</span>
                  </div>
                  <p className="text-2xl font-black text-white font-mono tabular-nums">
                    {hoursSaved} ساعة
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">شهرياً على فريق الوكلاء</p>
                </div>

                <div className="bg-neutral-950/60 p-4 rounded-xl border border-neutral-800 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-neutral-400 text-xs mb-1">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    <span>زيارات مؤكدة</span>
                  </div>
                  <p className="text-2xl font-black text-emerald-400 font-mono tabular-nums">
                    +{additionalVisits} زيارة
                  </p>
                  <p className="text-[10px] text-neutral-500 mt-0.5">مع مشترين مؤهلين مسبقاً</p>
                </div>
              </div>
            </div>

            <button
              onClick={onBookClick}
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
            >
              <span>حجز موعد لمناقشة تفعيل النظام في وكالتك</span>
              <ArrowRight className="w-4 h-4 rotate-180" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
