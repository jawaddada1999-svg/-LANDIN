import React from 'react';
import { Calendar, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
  onWatchVideoClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick, onWatchVideoClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Element) */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-neutral-950 font-black text-lg shadow-sm group-hover:scale-105 transition-transform">
            ع
          </div>
          <div className="flex flex-col text-right leading-none">
            <span className="text-lg font-black text-white">عقار فلو</span>
            <span className="text-[11px] font-sans font-medium text-amber-400 tracking-wider">AQARFLOW</span>
          </div>
        </a>

        {/* Zone 2: 4-5 single-line clean navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          <a href="#how-it-works" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            كيفاش خدام
          </a>
          <button 
            onClick={onWatchVideoClick}
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            فيديو توضيحي
          </button>
          <a href="#simulator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            تجربة تفاعلية
          </a>
          <a href="#calculator" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            حاسبة الأرباح
          </a>
          <a href="#testimonials" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            تجارب الوكالات
          </a>
          <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
            الأسئلة الشائعة
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a 
            href="https://wa.me/212600000000?text=%D8%B3%D9%84%D8%A7%D9%85%D8%8C%20%D8%A8%D8%BA%D9%8A%D8%AA%20%D9%86%D8%B9%D8%B1%D9%81%20%D9%83%D8%AB%D8%B1%20%D8%B9%D9%84%D9%89%20%D8%B3%D9%8A%D8%B3%D8%AA%D9%85%20%D8%B9%D9%82%D8%A7%D8%B1%20%D9%81%D9%84%D9%88%20%D9%84%D9%84%D9%88%D9%83%D8%A7%D9%84%D8%A7%D8%AA"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 rounded-lg hover:bg-emerald-900/30 transition-colors whitespace-nowrap shrink-0"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>واتساب مباشر</span>
          </a>
          
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow-amber-500/20 transition-all whitespace-nowrap shrink-0 cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>حجز موعد استشارة</span>
          </button>
        </div>
      </div>
    </header>
  );
};
