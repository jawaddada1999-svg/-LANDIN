import React from 'react';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-neutral-900">
          
          {/* Col 1: Wordmark */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-neutral-950 font-black text-sm">
                ع
              </div>
              <span className="text-lg font-black text-white">عقار فلو · AqarFlow</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              السيستم الأول بالمغرب المخصص لأتمتة وتأهيل زبائن الوكالات والمطورين العقاريين من أول رسالة حتى زيارة العقار على أرض الواقع.
            </p>
            <div className="flex items-center gap-2 text-xs text-neutral-500 mt-4">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>مكاتب الدعم والتنسيق: الدار البيضاء · مراكش · طنجة</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3 tracking-wide">روابط سريعة</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  كيفاش خدام السيستم
                </a>
              </li>
              <li>
                <a href="#video-demo" className="hover:text-amber-400 transition-colors">
                  الفيديو التوضيحي
                </a>
              </li>
              <li>
                <a href="#simulator" className="hover:text-amber-400 transition-colors">
                  تجربة محاكاة الواتساب
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  حاسبة العائد الاستثماري
                </a>
              </li>
              <li>
                <a href="#booking-section" className="hover:text-amber-400 transition-colors">
                  حجز موعد استشارة
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Compliance & Privacy */}
          <div>
            <h4 className="text-xs font-bold text-white mb-3 tracking-wide">حماية البيانات والامتثال</h4>
            <p className="text-xs text-neutral-500 leading-relaxed mb-3">
              متوافق مع معايير حماية المعطيات ذات الطابع الشخصي بالمغرب (CNDP) وبروتوكولات WhatsApp Business الرسمية.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>تشفير تام ومعطيات مشفرة 100%</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-3">
          <p>© {new Date().getFullYear()} عقار فلو (AqarFlow). جميع الحقوق محفوظة للوكالات العقارية بالمغرب.</p>
          <div className="flex items-center gap-4 text-neutral-500">
            <span>الدار البيضاء، المملكة المغربية</span>
            <span>·</span>
            <a href="#booking-section" className="hover:text-amber-400 transition-colors">حجز موعد</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
