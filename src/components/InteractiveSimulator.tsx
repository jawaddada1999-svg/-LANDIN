import React, { useState } from 'react';
import { MessageSquare, Send, Check, CheckCheck, Sparkles, Building, Phone, MapPin, RefreshCw } from 'lucide-react';
import { SIMULATOR_SCENARIOS } from '../data/mockData';

export const InteractiveSimulator: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const scenario = SIMULATOR_SCENARIOS[selectedScenarioIndex];
  
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'bot'; text: string; time: string }>>([
    { sender: 'user', text: scenario.initialUserText, time: '14:30' },
    { sender: 'bot', text: scenario.steps[0].botReply, time: '14:30' }
  ]);
  const [customInput, setCustomInput] = useState<string>('');

  const resetScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    setCurrentStep(0);
    setIsTyping(false);
    const chosen = SIMULATOR_SCENARIOS[index];
    setChatHistory([
      { sender: 'user', text: chosen.initialUserText, time: '14:30' },
      { sender: 'bot', text: chosen.steps[0].botReply, time: '14:30' }
    ]);
  };

  const handleNextStep = () => {
    if (currentStep >= scenario.steps.length - 1) return;
    
    const userMsg = scenario.steps[currentStep].userNext;
    const botReply = scenario.steps[currentStep + 1].botReply;

    // Add user message
    setChatHistory(prev => [...prev, { sender: 'user', text: userMsg, time: '14:31' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatHistory(prev => [...prev, { sender: 'bot', text: botReply, time: '14:31' }]);
      setCurrentStep(prev => prev + 1);
    }, 700);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const userText = customInput;
    setCustomInput('');
    setChatHistory(prev => [...prev, { sender: 'user', text: userText, time: '14:32' }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      // Contextual Moroccan Darija smart reply
      let reply = 'وعليكم السلام أخي الكريم! شكراً على استفسارك. العقار متوفر، والوكيل المعتمد للوكالة يقدر ينظم معاك زيارة حضورية هاد الأسبوع. واش الميزانية ديالك محددة وطريقة الشراء كاش أو بتمويل بنكي؟';
      if (userText.includes('ثمن') || userText.includes('prix') || userText.includes('بشحال')) {
        reply = 'الثمن معلن مع إمكانية تفاوض مرنة مع المالك مباشرة أثناء المعاينة. واش نبرمجو ليك موعد مع الوكيل المسؤول باش تشوف العقار والوثائق المحفظة؟';
      } else if (userText.includes('زيارة') || userText.includes('visite') || userText.includes('نشوف')) {
        reply = 'بكل سرور! الوكيل متوفر غداً بين 15:00 و 18:00. واش كايناسبك موعد مع 16:00؟ نصيفط ليك لوكاسيون ف البلاصة.';
      }

      setChatHistory(prev => [...prev, { sender: 'bot', text: reply, time: '14:32' }]);
    }, 800);
  };

  return (
    <section id="simulator" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 mb-3 tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>تجربة تفاعلية مباشرة</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">جرب السيستم بنفسك كأنك زبون</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            اختبر ذكاء السيستم في فهم الدارجة المغربية وتأهيل المشترين
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-400 text-balance">
            اختر نوع العقار والمدينة أدناه، وشاهد كيفاش السيستم كيجري المحادثة، كيسول على الميزانية الحقيقية، وكيوصل لحجز الزيارة.
          </p>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SIMULATOR_SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => resetScenario(idx)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedScenarioIndex === idx
                  ? 'bg-amber-400 text-neutral-950 shadow-md'
                  : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {sc.title}
            </button>
          ))}
          
          <button
            onClick={() => resetScenario(selectedScenarioIndex)}
            className="p-2 text-neutral-400 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition-colors cursor-pointer"
            title="إعادة ضبط المحادثة"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>

        {/* WhatsApp Phone Mockup Container */}
        <div className="max-w-md mx-auto rounded-3xl border border-neutral-800 bg-[#0b141a] shadow-2xl overflow-hidden flex flex-col h-[540px]">
          
          {/* WhatsApp Header */}
          <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-neutral-800 text-white">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                ع
              </div>
              <div className="text-right">
                <h4 className="text-xs font-bold text-white leading-tight">وكالتك العقارية بالمغرب</h4>
                <p className="text-[10px] text-emerald-400 font-medium">مساعد ذكي متصل الآن 24/7</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-[10px] bg-neutral-800/80 px-2 py-0.5 rounded text-neutral-300 font-mono">
                {scenario.city}
              </span>
            </div>
          </div>

          {/* Messages Flow Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] bg-[#0b141a]">
            {chatHistory.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#005c4b] text-white rounded-br-xs text-right'
                      : 'bg-[#202c33] text-neutral-100 rounded-bl-xs text-right border border-neutral-700/40'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1 text-[9px] text-neutral-400">
                    <span>{msg.time}</span>
                    {msg.sender === 'user' && <CheckCheck className="w-3 h-3 text-emerald-300" />}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-[#202c33] px-3 py-2 rounded-2xl rounded-bl-xs w-20 border border-neutral-700/40">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce" />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
          </div>

          {/* Prompt to Advance Scenario or Type */}
          <div className="bg-[#1f2c34] p-3 border-t border-neutral-800 space-y-2">
            {currentStep < scenario.steps.length - 1 && (
              <div className="bg-neutral-900/90 p-2 rounded-lg border border-neutral-700 flex items-center justify-between">
                <span className="text-[11px] text-neutral-300">رد الزبون التالي في السيناريو:</span>
                <button
                  onClick={handleNextStep}
                  disabled={isTyping}
                  className="px-2.5 py-1 text-[11px] font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer disabled:opacity-50"
                >
                  متابعة الحوار &larr;
                </button>
              </div>
            )}

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} className="flex items-center gap-2">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="كتب سؤال بالدارجة (مثلاً: شحال الثمن؟ واش كاين كراج؟)..."
                className="flex-1 bg-[#2a3942] text-xs text-white placeholder-neutral-400 px-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-400"
              />
              <button
                type="submit"
                disabled={!customInput.trim() || isTyping}
                className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5 rotate-180" />
              </button>
            </form>
          </div>

        </div>

        {/* Feature footnote */}
        <div className="mt-8 text-center text-xs text-neutral-400 max-w-xl mx-auto">
          <p>
            * السيستم كيرتبط بنمرة الواتساب الرسمية لوكالتك (API)، وكيتكامل مع أجندة Google Calendar وتطبيقات الـ CRM العقارية.
          </p>
        </div>

      </div>
    </section>
  );
};
