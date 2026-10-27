import React, { useState } from 'react';
import { 
  Calendar as CalendarIcon, Clock, CheckCircle2, Building, 
  User, Phone, Mail, Sparkles, Download, ArrowRight, ArrowLeft, MessageSquare 
} from 'lucide-react';
import { MOROCCAN_CITIES } from '../data/mockData';
import { AgencyBooking } from '../types';

export const BookingSection: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [bookingData, setBookingData] = useState<AgencyBooking>({
    agencyName: '',
    contactName: '',
    phone: '',
    email: '',
    city: MOROCCAN_CITIES[0],
    teamSize: '4-10 وكلاء عقاريين',
    currentMonthlyLeads: '100-300 استفسار / شهر',
    preferredDate: '',
    preferredTime: '15:30 (توقيت المغرب GMT+1)',
    notes: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Generate selectable dates (next 7 working days)
  const getUpcomingDates = () => {
    const dates: Array<{ dayName: string; formatted: string; iso: string }> = [];
    const dayNamesAr = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
    const monthsAr = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
    
    const today = new Date();
    let added = 0;
    let dayOffset = 1;

    while (added < 7) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + dayOffset);
      const dayOfWeek = nextDate.getDay();
      
      // Skip Sundays (0)
      if (dayOfWeek !== 0) {
        dates.push({
          dayName: dayNamesAr[dayOfWeek],
          formatted: `${nextDate.getDate()} ${monthsAr[nextDate.getMonth()]}`,
          iso: nextDate.toISOString().split('T')[0]
        });
        added++;
      }
      dayOffset++;
    }
    return dates;
  };

  const upcomingDates = getUpcomingDates();

  const timeSlots = [
    '10:30 صباحاً',
    '11:45 صباحاً',
    '14:15 بعد الزوال',
    '15:30 بعد الزوال',
    '17:00 مساءً',
    '18:15 مساءً'
  ];

  const handleNextStep = () => {
    setErrorMessage('');
    if (step === 1) {
      if (!bookingData.agencyName.trim()) {
        setErrorMessage('يرجى كتابة اسم الوكالة العقارية أو الشركة المطورة.');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!bookingData.preferredDate) {
        setBookingData(prev => ({ ...prev, preferredDate: upcomingDates[0].formatted }));
      }
      setStep(3);
    }
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!bookingData.contactName.trim()) {
      setErrorMessage('يرجى إدخال اسم المسؤول / مدير الوكالة.');
      return;
    }
    if (!bookingData.phone.trim() || bookingData.phone.length < 8) {
      setErrorMessage('يرجى إدخال رقم هاتف واتساب مغربي صحيح (+212).');
      return;
    }

    const randomId = 'AF-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setBookingConfirmed(true);
  };

  const downloadCalendarFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//AqarFlow Morocco//FR
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:عرض تجريبي واستشارة مجانية: سيستم عقار فلو للوكالات العقارية
DESCRIPTION:جلسة عمل واستشارة مخصصة لوكالة ${bookingData.agencyName} لاستعراض سيستم أتمتة الرسائل وحجز الزيارات العقارية بالمغرب.
LOCATION:Google Meet / WhatsApp Video Call
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `rendez-vous-aqarflow-${bookingId}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="booking-section" className="py-20 bg-neutral-900/40 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <CalendarIcon className="w-4 h-4 text-amber-400" />
            <span>حجز موعد استشارة وعرض توضيحي مباشر</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">جلسة مجانية مدتها 20 دقيقة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            احجز موعداً خاصاً لوكالتك واكتشف كيفاش تزيد مبيعاتك من أول أسبوع
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            فريقنا التقني غايوريك السيستم شغال مباشرة على عقارات حقيقية ف مدينتك، وغادي نجاوبو على كل استفساراتك.
          </p>
        </div>

        {/* Booking Card */}
        <div className="max-w-3xl mx-auto bg-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {!bookingConfirmed ? (
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-5 mb-8">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 1 ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    1
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${step >= 1 ? 'text-white' : 'text-neutral-500'}`}>
                    معلومات الوكالة
                  </span>
                </div>

                <div className="w-8 sm:w-16 h-px bg-neutral-800" />

                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 2 ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    2
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${step >= 2 ? 'text-white' : 'text-neutral-500'}`}>
                    الموعد والتوقيت
                  </span>
                </div>

                <div className="w-8 sm:w-16 h-px bg-neutral-800" />

                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                    step >= 3 ? 'bg-amber-400 text-neutral-950' : 'bg-neutral-800 text-neutral-400'
                  }`}>
                    3
                  </span>
                  <span className={`text-xs sm:text-sm font-semibold ${step >= 3 ? 'text-white' : 'text-neutral-500'}`}>
                    تأكيد الاتصال
                  </span>
                </div>
              </div>

              {/* Error prompt */}
              {errorMessage && (
                <div className="mb-6 p-3 bg-red-950/60 border border-red-800/40 rounded-xl text-red-300 text-xs text-right">
                  {errorMessage}
                </div>
              )}

              {/* STEP 1: Agency Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      اسم الوكالة العقارية أو الشركة المطورة *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                      <input
                        type="text"
                        value={bookingData.agencyName}
                        onChange={(e) => setBookingData({ ...bookingData, agencyName: e.target.value })}
                        placeholder="مثال: دار السلام للعقارات، أو Atlas Living"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pr-10 pl-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        المدينة الرئيسية للنشاط *
                      </label>
                      <select
                        value={bookingData.city}
                        onChange={(e) => setBookingData({ ...bookingData, city: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        {MOROCCAN_CITIES.map((c) => (
                          <option key={c} value={c} className="bg-neutral-900 text-white">
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        حجم فريق الوكلاء
                      </label>
                      <select
                        value={bookingData.teamSize}
                        onChange={(e) => setBookingData({ ...bookingData, teamSize: e.target.value })}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                      >
                        <option value="1-3 وكلاء عقاريين">1 إلى 3 وكلاء عقاريين</option>
                        <option value="4-10 وكلاء عقاريين">4 إلى 10 وكلاء عقاريين</option>
                        <option value="+10 وكلاء عقاريين">+10 وكلاء ومطور عقاري</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      معدل الرسائل والاستفسارات الشهرية الحالية
                    </label>
                    <select
                      value={bookingData.currentMonthlyLeads}
                      onChange={(e) => setBookingData({ ...bookingData, currentMonthlyLeads: e.target.value })}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 cursor-pointer"
                    >
                      <option value="أقل من 50 استفسار / شهر">أقل من 50 استفسار / شهر</option>
                      <option value="50 إلى 150 استفسار / شهر">50 إلى 150 استفسار / شهر</option>
                      <option value="150 إلى 400 استفسار / شهر">150 إلى 400 استفسار / شهر</option>
                      <option value="أكثر من 400 استفسار / شهر">+400 استفسار / شهر</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer"
                    >
                      <span>المتابعة لاختيار الموعد</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Date & Time Picker */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-3">
                      اختر اليوم الأنسب لك (مواعيد العمل بالمغرب)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {upcomingDates.map((d) => {
                        const isSelected = bookingData.preferredDate === d.formatted || (!bookingData.preferredDate && d === upcomingDates[0]);
                        return (
                          <button
                            key={d.iso}
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, preferredDate: d.formatted })}
                            className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-md'
                                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            <p className="text-xs">{d.dayName}</p>
                            <p className="text-xs font-mono font-bold mt-1">{d.formatted}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-3">
                      اختر التوقيت المفضل (توقيت المغرب GMT+1)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {timeSlots.map((slot) => {
                        const isSelected = bookingData.preferredTime === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingData({ ...bookingData, preferredTime: slot })}
                            className={`p-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-md'
                                : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
                            }`}
                          >
                            <Clock className="w-3.5 h-3.5 inline mr-1 opacity-70" />
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                      <span>رجوع</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all cursor-pointer"
                    >
                      <span>المتابعة لمعلومات الاتصال</span>
                      <ArrowRight className="w-4 h-4 rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Submission */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        الاسم الكامل للمسؤول أو المدير *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                        <input
                          type="text"
                          value={bookingData.contactName}
                          onChange={(e) => setBookingData({ ...bookingData, contactName: e.target.value })}
                          placeholder="مثال: يونس العلمي"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pr-10 pl-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-neutral-200 mb-2">
                        رقم هاتف الواتساب المغربي *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-emerald-400 absolute right-3.5 top-3.5" />
                        <input
                          type="tel"
                          value={bookingData.phone}
                          onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                          placeholder="06 XX XX XX XX أو +212..."
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pr-10 pl-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 dir-ltr text-right"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      البريد الإلكتروني للوكالة
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5" />
                      <input
                        type="email"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                        placeholder="contact@agence-immo.ma"
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl pr-10 pl-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 dir-ltr text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-200 mb-2">
                      ملاحظة أو تساؤل خاص (اختياري)
                    </label>
                    <textarea
                      rows={2}
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="مثلاً: بغينا نركبوه مع حملات فيسبوك أدز لعمارات قيد الإنجاز..."
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  {/* Booking Summary Box */}
                  <div className="p-4 bg-neutral-900/80 rounded-xl border border-neutral-800 text-xs space-y-1.5 text-neutral-300">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">الوكالة:</span>
                      <span className="font-bold text-white">{bookingData.agencyName} ({bookingData.city})</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">الموعد المحدد:</span>
                      <span className="font-bold text-amber-400">{bookingData.preferredDate || upcomingDates[0].formatted} - {bookingData.preferredTime}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 rotate-180" />
                      <span>تغيير الموعد</span>
                    </button>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>تأكيد حجز العرض التجريبي مجاناً</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation Success State */
            <div className="text-center py-6 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-5 border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 px-3 py-1 rounded border border-amber-800/40">
                رقم الحجز: {bookingId}
              </span>

              <h3 className="text-2xl font-bold text-white mt-4 mb-2">
                تم حجز موعد العرض التجريبي بنجاح!
              </h3>

              <p className="text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed mb-6">
                شكراً سي <strong>{bookingData.contactName}</strong>. لقد تم حجز موعد استشارة وكالة <strong>{bookingData.agencyName}</strong> ليوم <span className="text-amber-400 font-bold">{bookingData.preferredDate || upcomingDates[0].formatted}</span> على الساعة <span className="text-amber-400 font-bold">{bookingData.preferredTime}</span>.
              </p>

              <div className="max-w-md mx-auto bg-neutral-900 border border-neutral-800 rounded-xl p-4 text-xs text-right space-y-2 mb-8">
                <p className="text-neutral-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سيتواصل معك المستشار التقني عبر الواتساب لتأكيد رابط الاجتماع (Google Meet).</span>
                </p>
                <p className="text-neutral-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>سنقوم بتجهيز محاكاة خاصة بأنواع العقارات التي تسوقونها في مدينة {bookingData.city}.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={downloadCalendarFile}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>تحميل الموعد في الأجندة (.ics)</span>
                </button>

                <a
                  href={`https://wa.me/212600000000?text=${encodeURIComponent(`سلام، أنا ${bookingData.contactName} من وكالة ${bookingData.agencyName} (${bookingData.city}). حجزت موعد عرض تجريبي لسيستم عقار فلو برقم ${bookingId}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-neutral-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>مراسلتنا فوراً على الواتساب للتأكيد</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setBookingConfirmed(false);
                  setStep(1);
                }}
                className="mt-6 text-xs text-neutral-500 hover:text-neutral-400 underline cursor-pointer"
              >
                حجز موعد إضافي لوكالة أخرى
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
