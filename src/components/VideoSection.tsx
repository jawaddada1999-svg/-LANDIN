import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, 
  Sparkles, CheckCircle2, MessageSquare, Calendar, MapPin, 
  Smartphone, UserCheck, ShieldCheck, ChevronRight
} from 'lucide-react';
import { VIDEO_CHAPTERS } from '../data/mockData';

interface VideoSectionProps {
  onBookClick: () => void;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ onBookClick }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(18);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [activeChapterIndex, setActiveChapterIndex] = useState<number>(0);
  const [showCaptions, setShowCaptions] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const totalDuration = 195; // 3:15

  // Simulation timer for the video
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          const next = prev + 1 * playbackSpeed;
          if (next >= totalDuration) {
            return 0;
          }
          return next;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  // Sync active chapter with current time
  useEffect(() => {
    if (currentTime < 45) {
      setActiveChapterIndex(0);
    } else if (currentTime < 90) {
      setActiveChapterIndex(1);
    } else if (currentTime < 135) {
      setActiveChapterIndex(2);
    } else {
      setActiveChapterIndex(3);
    }
  }, [currentTime]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTime(Number(e.target.value));
  };

  const jumpToChapter = (seconds: number, index: number) => {
    setCurrentTime(seconds);
    setActiveChapterIndex(index);
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    if (!playerRef.current) return;
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  return (
    <section id="video-demo" className="py-20 bg-neutral-900/60 border-y border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <span>عرض حي بالفيديو</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">مدة العرض: 3 دقائق</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            شاهد كيفاش السيستم كيتكلف بالزبون من أول «سلام» حتى يسيني على الزيارة
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            محاكاة حقيقية لردود الأتمتة بالدارجة المغربية، فرز الميزانية الحقيقية، والتكامل مع أجندة الوكيل العقاري وخريطة الموقع.
          </p>
        </div>

        {/* Video Player Container */}
        <div 
          ref={playerRef}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl transition-all"
        >
          {/* Main Simulated Screen Stage */}
          <div className="relative aspect-video w-full bg-neutral-950 flex flex-col justify-between overflow-hidden">
            
            {/* Top Video Overlay Bar */}
            <div className="relative z-20 flex items-center justify-between p-4 bg-gradient-to-b from-neutral-950/90 to-transparent">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  مباشر من داخل وكالة عقارية بالدار البيضاء (أنفا)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tabular-nums text-amber-400 bg-amber-950/50 border border-amber-800/40 px-2.5 py-1 rounded-md">
                  {VIDEO_CHAPTERS[activeChapterIndex].title}
                </span>
              </div>
            </div>

            {/* Dynamic Screen Content Based on Video Phase */}
            <div className="relative z-10 flex-1 flex items-center justify-center p-4 sm:p-8">
              
              {/* SCENE 0: Lead Intake (<45s) */}
              {activeChapterIndex === 0 && (
                <div className="w-full max-w-2xl bg-neutral-900/90 border border-neutral-800 rounded-xl p-5 shadow-2xl animate-fade-in">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">التقاط الرسائل من عدة قنوات (Omnichannel)</h4>
                        <p className="text-xs text-neutral-400">فيسبوك، أنستغرام، أفيتو، مو بواب، وواتساب</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      رد في 2 ثوانٍ
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <p className="text-xs font-medium text-white">رسالة جديدة عبر واتساب: فيلا بوسكورة</p>
                          <p className="text-[11px] text-neutral-400">"سلام، واش لافيلا ديسبو؟ شحال آخر ثمن الله يخليك؟"</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-neutral-500 font-mono">14:02</span>
                    </div>

                    <div className="p-3 bg-amber-950/30 rounded-lg border border-amber-800/30 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <div>
                          <p className="text-xs font-medium text-amber-300">رد آلي بالدارجة تم إرساله فوراً</p>
                          <p className="text-[11px] text-neutral-300">"وعليكم السلام أخي! نعم متوفرة، فيها 4 غرف ومسبح..."</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-amber-400/80 font-mono">14:02 (+1s)</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SCENE 1: Darija Qualification (45s - 90s) */}
              {activeChapterIndex === 1 && (
                <div className="w-full max-w-2xl bg-neutral-900/95 border border-neutral-800 rounded-xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-white">محادثة حية بالدارجة وتحديد الميزانية</span>
                    </div>
                    <span className="text-xs text-amber-400 font-medium">التحقق من الجدية</span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="mr-auto max-w-sm bg-neutral-800 text-neutral-200 p-3 rounded-2xl rounded-br-xs">
                      <p className="text-[11px] text-neutral-400 mb-1">الزبون (المهدي):</p>
                      <p>"عندي ميزانية ديال 4.5 إلى 5 المليون درهم، وعندي سلف بنكي مصادق عليه مع التجاري وافا بنك."</p>
                    </div>

                    <div className="ml-auto max-w-sm bg-emerald-950/80 border border-emerald-800/50 text-white p-3 rounded-2xl rounded-bl-xs">
                      <p className="text-[11px] text-emerald-400 mb-1">عقار فلو (مساعد الوكالة):</p>
                      <p>"ممتاز وسي المهدي! العقار ديال بوسكورة مطابق لميزانيتك وتتوفر فيه جميع شروط القرض البنكي. واش نبرمجو ليك موعد معاينة العقار حضورياً هاد الأسبوع؟"</p>
                    </div>

                    <div className="flex items-center gap-2 p-2 bg-neutral-950 rounded-lg border border-neutral-800 text-[11px] text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>حالة العميل: <strong>مؤهل بنسبة 100%</strong> · تمويل بنكي جاهز · قرار الشراء فوري</span>
                    </div>
                  </div>
                </div>
              )}

              {/* SCENE 2: Schedule Visit & GPS (90s - 135s) */}
              {activeChapterIndex === 2 && (
                <div className="w-full max-w-2xl bg-neutral-900/95 border border-neutral-800 rounded-xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-amber-400" />
                      <span className="text-sm font-bold text-white">حجز موعد الزيارة وخريطة الـ GPS</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-medium">تم الحجز تلقائياً</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="bg-neutral-950 p-3.5 rounded-lg border border-neutral-800">
                      <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>بطاقة الزيارة المؤكدة</span>
                      </div>
                      <p className="text-xs text-white font-semibold">غداً الأربعاء مع 16:30</p>
                      <p className="text-[11px] text-neutral-400 mt-1">الوكيل المسؤول: سي يوسف</p>
                      <p className="text-[11px] text-neutral-400">العقار: فيلا ميرامار - بوسكورة</p>
                    </div>

                    <div className="bg-neutral-950 p-3.5 rounded-lg border border-neutral-800">
                      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>موقع العقار تم إرساله</span>
                      </div>
                      <p className="text-xs text-white font-semibold">Google Maps Pin + QR Code</p>
                      <p className="text-[11px] text-neutral-400 mt-1">تذكير تلقائي عبر الواتساب قبل الموعد بـ 3 ساعات</p>
                      <p className="text-[10px] text-emerald-400 mt-1">نسبة الحضور: 94%</p>
                    </div>
                  </div>
                </div>
              )}

              {/* SCENE 3: Agent Notification & CRM (135s - 195s) */}
              {activeChapterIndex === 3 && (
                <div className="w-full max-w-2xl bg-neutral-900/95 border border-neutral-800 rounded-xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-3 mb-4">
                    <div className="flex items-center gap-2.5">
                      <UserCheck className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-white">تنبيه الوكيل العقاري بالملف الكامل</span>
                    </div>
                    <span className="text-xs text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      جاهز للإغلاق
                    </span>
                  </div>

                  <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 text-xs space-y-2">
                    <div className="flex justify-between items-center text-neutral-200">
                      <span>الزبون: <strong>المهدي العلمي</strong></span>
                      <span className="text-emerald-400 font-mono">+212 661 XX XX XX</span>
                    </div>
                    <div className="text-neutral-400 text-[11px]">
                      الميزانية: <strong className="text-white">5,000,000 درهم</strong> · التمويل: <strong className="text-white">قرض بنكي جاهز</strong>
                    </div>
                    <div className="text-neutral-400 text-[11px]">
                      ملاحظات السيستم: الزبون مستعد لتقديم عربون في حال إعجابه بالموقع وتشطيبات المطبخ والمسبح.
                    </div>
                  </div>

                  <p className="text-[11px] text-center text-amber-400 mt-3 font-medium">
                    الوكيل العقاري كيمشي للمعاينة وهو عارف كل معطيات الزبون وقوته الشرائية بدون إضاعة دقيقة واحدة.
                  </p>
                </div>
              )}

            </div>

            {/* Captions Overlay at bottom if enabled */}
            {showCaptions && (
              <div className="relative z-20 mx-auto mb-2 px-4 py-1.5 bg-neutral-950/90 border border-neutral-800 rounded-md text-xs sm:text-sm text-neutral-100 font-medium text-center max-w-xl">
                {activeChapterIndex === 0 && '«السيستم كيرد على أي استفسار ف أقل من 2 ثواني، قبل ما الزبون يمشي يقلب على إعلان آخر»'}
                {activeChapterIndex === 1 && '«حوار بالدارجة المغربية أو الفرنسية كيسول بذكاء على الميزانية والتمويل باش يصفي الزبناء الجادين»'}
                {activeChapterIndex === 2 && '«حجز الموعد أوتوماتيك ف أجندة الوكيل مع إرسال موقع الـ GPS ورابط التأكيد»'}
                {activeChapterIndex === 3 && '«الوكيل العقاري كيتوصل بإشعار فيه كاع التفاصيل، وكيضمن زيارة حقيقية بنسبة حضور تفوق 94%»'}
              </div>
            )}

            {/* Bottom Controls Bar */}
            <div className="relative z-20 p-3 sm:p-4 bg-gradient-to-t from-neutral-950 to-neutral-950/80 border-t border-neutral-800/80">
              {/* Progress Scrubber */}
              <div className="flex items-center gap-3 mb-2.5">
                <input
                  type="range"
                  min="0"
                  max={totalDuration}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
              </div>

              {/* Controls Buttons */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-8 h-8 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center hover:bg-amber-300 transition-colors cursor-pointer"
                    aria-label={isPlaying ? "إيقاف مؤقت" : "تشغيل"}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-neutral-950" /> : <Play className="w-4 h-4 fill-neutral-950 ml-0.5" />}
                  </button>

                  <button
                    onClick={() => setCurrentTime(0)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="إعادة التشغيل"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="الصوت"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-xs font-mono tabular-nums text-neutral-300">
                    {formatTime(currentTime)} / {formatTime(totalDuration)}
                  </span>
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Narration voice visualizer */}
                  {!isMuted && (
                    <div className="hidden md:flex items-center gap-1 px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-[11px] text-amber-400">
                      <span className="w-1.5 h-3 bg-amber-400 animate-pulse rounded-full" />
                      <span className="w-1.5 h-4 bg-amber-400 animate-pulse delay-75 rounded-full" />
                      <span className="w-1.5 h-2 bg-amber-400 animate-pulse delay-150 rounded-full" />
                      <span className="text-[10px] text-neutral-400 mr-1.5">تعليق صوتي بالدارجة</span>
                    </div>
                  )}

                  {/* Playback speed toggle */}
                  <button
                    onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1)}
                    className="text-xs font-mono text-neutral-300 bg-neutral-900 hover:bg-neutral-800 px-2 py-1 rounded border border-neutral-800 transition-colors cursor-pointer"
                  >
                    {playbackSpeed}x
                  </button>

                  {/* Captions toggle */}
                  <button
                    onClick={() => setShowCaptions(!showCaptions)}
                    className={`text-xs px-2 py-1 rounded border transition-colors cursor-pointer ${
                      showCaptions 
                        ? 'bg-amber-400/20 text-amber-300 border-amber-500/40' 
                        : 'bg-neutral-900 text-neutral-400 border-neutral-800'
                    }`}
                  >
                    CC
                  </button>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    title="شاشة كاملة"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Video Chapter Quick Jump Cards */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
          {VIDEO_CHAPTERS.map((chap, idx) => {
            const isActive = activeChapterIndex === idx;
            return (
              <button
                key={chap.id}
                onClick={() => jumpToChapter(chap.seconds, idx)}
                className={`text-right p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-neutral-900 border-amber-500/60 shadow-md ring-1 ring-amber-500/30' 
                    : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold ${isActive ? 'text-amber-400' : 'text-neutral-300'}`}>
                    {chap.title}
                  </span>
                  <span className="text-[10px] font-mono tabular-nums text-neutral-500">
                    {chap.timestamp}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-400 line-clamp-2 leading-relaxed">
                  {chap.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Video Call To Action */}
        <div className="mt-10 text-center">
          <button
            onClick={onBookClick}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md hover:shadow-amber-500/20 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>بغيت نركب هاد السيستم ف الوكالة ديالي (حجز موعد)</span>
          </button>
        </div>

      </div>
    </section>
  );
};
