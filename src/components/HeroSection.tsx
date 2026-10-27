import React from 'react';
import { Calendar, Play, CheckCircle2, MessageSquare, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onBookClick: () => void;
  onWatchVideoClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookClick, onWatchVideoClick }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Pill-Free Subhead / Kicker */}
        <div className="flex items-center justify-center gap-2 text-xs md:text-sm font-medium text-amber-400 mb-6 text-center">
          <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
          <span>السيستم المؤتمت رقم 1 للوكالات والمطورين العقاريين بالمغرب</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-400">كازا · مراكش · طنجة · الرباط</span>
        </div>

        {/* Main Headline with text-wrap: balance */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] text-balance">
            من <span className="text-amber-400 underline decoration-amber-500/40 underline-offset-8">أول رسالة</span> على الواتساب حتى <span className="text-white">زيارة العقار</span> على أرض الواقع
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto font-normal text-balance">
            سيستم ذكي ومتكامل مخصص للسوق العقاري المغربي: يتكلف بالرد الفوري في 3 ثوانٍ بالدارجة المغربية والفرنسية، يصفي المشترين الحقيقيين حسب الميزانية والتمويل، ويحجز موعد المعاينة مباشرة في أجندة الوكيل العقاري.
          </p>
        </div>

        {/* Primary & Secondary Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-base font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-98"
          >
            <Calendar className="w-5 h-5" />
            <span>حجز موعد استشارة وعرض تجريبي</span>
          </button>

          <button
            onClick={onWatchVideoClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all cursor-pointer active:scale-98"
          >
            <Play className="w-5 h-5 text-amber-400 fill-amber-400" />
            <span>شاهد كيفاش خدام (فيديو 3 دقائق)</span>
          </button>
        </div>

        {/* Visual Focal Carrier: Luxury Villa + Live Qualification Overlay */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 shadow-2xl">
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src="/src/assets/images/hero_morocco_villa_1793123810950.jpg"
              alt="فيلا فاخرة بمراكش مسوقة عبر سيستم عقار فلو"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
            />
            {/* Measured scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Quick Play Trigger Overlay */}
            <button
              onClick={onWatchVideoClick}
              className="absolute inset-0 flex items-center justify-center group cursor-pointer focus:outline-none"
              aria-label="مشاهدة الفيديو التوضيحي"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-400/95 text-neutral-950 flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-amber-300 transition-all">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-neutral-950 mr-1" />
              </div>
            </button>

            {/* Live Flow Simulator Floating Mockup Card */}
            <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-6 sm:bottom-6 max-w-sm bg-neutral-950/90 backdrop-blur-md border border-neutral-700/70 rounded-xl p-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">واتساب وكالتك العقارية</p>
                    <p className="text-[10px] text-emerald-400 font-medium">رد فوري بالدارجة المغربية</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono tabular-nums text-neutral-400">الآن</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="bg-neutral-900/90 p-2 rounded-lg text-neutral-200">
                  <p className="font-semibold text-amber-300 text-[11px]">زبون مهتم: شقة كاليفورنيا كازا</p>
                  <p className="text-neutral-400 text-[11px] mt-0.5">الميزانية: 3.8 مليون درهم (كاش متوفر)</p>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold bg-emerald-950/50 p-2 rounded-lg border border-emerald-800/40">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>تم حجز الزيارة: غداً 16:30 + GPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Metric Proof Strip Below Hero (Tabular Numerals) */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400 font-mono tabular-nums">&lt; 5 ثوانٍ</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">سرعة الرد الآلي 24/7</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">واتساب، أفيتو، مو بواب، وفيسبوك</p>
          </div>

          <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">94%</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">نسبة حضور الزبائن للزيارة</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">بفضل التذكيرات وتأكيد الـ GPS</p>
          </div>

          <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono tabular-nums">+310%</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">نمو في الزيارات المؤكدة</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">بدون ضياع وقت الوكلاء العقاريين</p>
          </div>

          <div className="bg-neutral-900/70 border border-neutral-800/80 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-black text-white font-mono tabular-nums">100%</p>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">دارجة مغربية + فرنسية</p>
            <p className="text-[11px] text-neutral-500 mt-0.5">فهم دقيق للخصوصية المغربية</p>
          </div>
        </div>
      </div>
    </section>
  );
};
