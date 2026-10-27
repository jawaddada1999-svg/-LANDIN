import { VideoChapter, Testimonial, FaqItem } from '../types';

export const MOROCCAN_CITIES = [
  'الدار البيضاء (Casablanca)',
  'مراكش (Marrakech)',
  'طنجة (Tanger)',
  'الرباط (Rabat)',
  'أكادير (Agadir)',
  'فاس (Fès)',
  'تطوان والمضيق (Tétouan / M\'diq)',
  'القنيطرة (Kénitra)',
  'الجديدة (El Jadida)',
  'مدينة أخرى بالمغرب'
];

export const VIDEO_CHAPTERS: VideoChapter[] = [
  {
    id: 'lead-intake',
    title: '01. التقاط الرسالة من أول ثانية',
    titleFr: '01. Capture instantanée du lead',
    timestamp: '00:00',
    seconds: 0,
    description: 'التقاط فوري لرسائل الزبناء القادمة من واتساب، إعلانات فيسبوك، مو بواب، وأفيتو في أقل من ثانيتين.'
  },
  {
    id: 'darija-qualification',
    title: '02. حوار وتأهيل بالدارجة المغربية',
    titleFr: '02. Qualification en Darija et Français',
    timestamp: '00:45',
    seconds: 45,
    description: 'فهم دقيق للدارجة: استفسار ذكي عن الميزانية، نوع العقار، والتمويل (كاش أو سلف بنكي).'
  },
  {
    id: 'schedule-visit',
    title: '03. حجز موعد الزيارة ولوكاسيون GPS',
    titleFr: '03. Réservation de visite et localisation GPS',
    timestamp: '01:30',
    seconds: 90,
    description: 'عرض المواعيد المتاحة تلقائياً في أجندة الوكيل، وتثبيت الزيارة مع إرسال موقع العقار على خرائط غوغل.'
  },
  {
    id: 'agent-notification',
    title: '04. تنبيه الوكيل العقاري بالملف الكامل',
    titleFr: '04. Notification de l\'agent avec dossier qualifié',
    timestamp: '02:15',
    seconds: 135,
    description: 'الوكيل العقاري كيتوصل بملف الزبون كاملاً قبل الزيارة، مع تأكيد الحضور بنسبة 94%.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-casablanca',
    agencyName: 'أنفا بريستيج إيموبيليي (Anfa Prestige)',
    directorName: 'ياسين برادة',
    city: 'الدار البيضاء - غوتييه والمعاريف',
    quote: 'كنا كضيعو ساعات في الرد على رسائل عشوائية ف الواتساب من قبيل "ديسبو؟" بدون جدوى. اليوم السيستم كيصفي المشترين الحقيقيين وكيبرمج لينا الزيارات تلقائياً. المبيعات ديالنا تضاعفت بـ 3 أضعاف في 4 شهور.',
    metric: '+310%',
    metricLabel: 'زيادة في الزيارات المؤكدة',
    dealGrowth: '14 صفقة مغلقة إضافية'
  },
  {
    id: 't-marrakech',
    agencyName: 'أطلس بالاسي إستايتس (Atlas Palace)',
    directorName: 'فاطمة الزهراء العلمي',
    city: 'مراكش - النخيل وتاركة',
    quote: 'في سوق الفيلات والرياضات الفاخرة بمراكش، السرعة هي كل شيء. السيستم كيتواصل بالدارجة والفرنسية بكل رقي واحترافية. الوكلاء دياولنا ولاو كيمشيو غير للزيارات لي فيها زبون جاد وميزانيته جاهزة.',
    metric: '94%',
    metricLabel: 'نسبة حضور الزبائن للزيارة',
    dealGrowth: 'توفير 22 ساعة أسبوعياً لكل وكيل'
  },
  {
    id: 't-tanger',
    agencyName: 'دتروا العقارية (Détroit Immo Tanger)',
    directorName: 'كريم التازي',
    city: 'طنجة - مالاباطا والمركز',
    quote: 'الجميل فهاد السيستم أنه كيفهم الدارجة المغربية أحسن من أي بوت شفتو من قبل، وحتى الجالية المغربية بالخارج (MRE) كيتفاعلو معاه بسلاسة. كيرسل اللوكاسيون وكيذكر الزبون قبل الموعد بساعتين.',
    metric: '-85%',
    metricLabel: 'انخفاض في الزيارات الملغاة (No-Shows)',
    dealGrowth: 'تغطية 24/7 دون توظيف موظف استقبال إضافي'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'technical',
    question: 'واش السيستم كيفهم الدارجة المغربية واللغة الفرنسية بحال بنادم؟',
    answer: 'نعم تماماً! السيستم مدرب ومخصص بنسبة 100% لسوق العقار المغربي. كيفهم تعابير الدارجة الدارجة (بحال "باغي برطمة مصلوحة"، "واش كاين كراج وسانسور"، "الميزانية ديالي 120 مليون كاش") وكذلك اللغة الفرنسية لي كيتعاملو بيها زبناء العقار بالمغرب.'
  },
  {
    id: 'faq-2',
    category: 'whatsapp',
    question: 'واش كيرتبط مع نمرة الواتساب الرسمية لي خدامة بيها الوكالة حالياً؟',
    answer: 'نعم، السيستم كيرتبط مباشرة مع رقم الواتساب بيزنس (WhatsApp Business API) الخاص بوكالتك، بحيث الزبون كيشوف اسم الوكالة والشعار ديالك الرسمي بدون أي تغيير على هويتكم التجارية.'
  },
  {
    id: 'faq-3',
    category: 'setup',
    question: 'شحال كياخد السيستم ديال الوقت باش يتركب ويتبرمج على عقاراتنا؟',
    answer: 'عملية الإعداد والربط كتاخد ما بين 48 إلى 72 ساعة كأقصى تقدير. فريقنا التقني كيتكلف بإدخال معايير الوكالة، ربط الإعلانات وأجندة الوكلاء، وتجربة كل السيناريوهات قبل الإطلاق الرسمي.'
  },
  {
    id: 'faq-4',
    category: 'technical',
    question: 'كيفاش كيتأكد السيستم من جدية الزبون قبل ما يحجز الزيارة؟',
    answer: 'السيستم كيمشي ف مسار تأهيلي ذكي ومختصر: كيسول على الميزانية المحددة للشراء، طريقة الدفع (تمويل بنكي حاصل على موافقة مبدئية أو كاش)، وتاريخ الرغبة في الانتقال. إلا كان الزبون غير جاد أو بدون ميزانية مطابقة، كيتم حفظه كـ "مهتم غير مؤهل" بدون حجز موعد للوكيل.'
  },
  {
    id: 'faq-5',
    category: 'setup',
    question: 'واش الوكيل العقاري كيبقى عندو التحكم الكامل في جدول المواعيد؟',
    answer: 'بالتأكيد! السيستم كيقترح فقط الأوقات الشاغرة لي كيحددها الوكيل مسبقاً في Google Calendar أو Outlook. الوكيل عندو إمكانية تعديل، تأكيد، أو إعادة برمجة أي زيارة بنقرة زر واحدة من هاتفه.'
  }
];

export const SIMULATOR_SCENARIOS = [
  {
    id: 'villa-marrakech',
    title: 'فيلا فاخرة بمراكش (5.8 مليون درهم)',
    city: 'مراكش - طريق أوريكة',
    initialUserText: 'سلام خويا، عجباتني لافيلا لي حطيتو ف طريق أوريكة، واش باقا متوفرة وواش مسبح خاص؟',
    steps: [
      {
        botReply: 'وعليكم السلام وسي محمد! نعم، فيلا طريق أوريكة باقا متوفرة. فيها مسبح خاص وحديقة 800 متر مربع و4 غرف ماستر. واش الشراء للاستقرار الشخصي أو للاستثمار السياحي؟',
        userNext: 'للاستقرار العائلي، والميزانية ديالي موجودة كاش ف حدود 6 المليون درهم.'
      },
      {
        botReply: 'ممتاز أسي محمد، العقار مطابق تماماً لميزانيتكم ومحفظ بالكامل. الوكيل المسؤول عن العقار (سي عادل) متاح لمعاينة الفيلا حضورياً إما غداً الأربعاء مع 16:30 أو الخميس مع 11:00 صباحاً. أشنو كايناسبك؟',
        userNext: 'غداً الأربعاء مع 16:30 مزيانة بزاف.'
      },
      {
        botReply: 'تم تثبيت موعد الزيارة بنجاح ليوم غد الأربعاء الساعة 16:30! صيفطت ليك دابا موقع العقار (Localisation GPS) على الواتساب مع كود تأكيد الحضور. سي عادل غيكون كيتسناك ف عين المكان.',
        userNext: 'شكراً بزاف، بارك الله فيك.'
      }
    ]
  },
  {
    id: 'casablanca-anfa',
    title: 'شقة فاخرة بكازا أنفا (2.4 مليون درهم)',
    city: 'الدار البيضاء - أنفا سوبريور',
    initialUserText: 'Bonjour, l\'appartement à Anfa est toujours disponible? Est-ce qu\'il y a une place de parking titrée?',
    steps: [
      {
        botReply: 'Bonjour Madame Sofia ! Oui, le haut standing à Anfa (3 chambres, vue dégagée) est disponible avec 2 places de parking titrées au sous-sol. Votre projet d\'achat est-il prévu pour ce trimestre ?',
        userNext: 'Oui exactement, j\'ai déjà l\'accord de financement bancaire avec la BMCI.'
      },
      {
        botReply: 'Parfait ! L\'agent référent M. Reda organise les visites cette semaine. Êtes-vous disponible vendredi à 15h00 ou samedi matin à 10h30 pour visiter l\'appartement ?',
        userNext: 'Samedi à 10h30 ça m\'arrange parfaitement.'
      },
      {
        botReply: 'C\'est réservé et confirmé dans le planning pour samedi à 10h30. La localisation exacte vous a été envoyée. M. Reda vous accueillera à la résidence.',
        userNext: 'Super merci beaucoup pour la réactivité !'
      }
    ]
  },
  {
    id: 'tanger-malabata',
    title: 'شقة بإطلالة على البحر بطنجة مالاباطا',
    city: 'طنجة - مالاباطا',
    initialUserText: 'سلام، شفت الإعلان ف مو بواب على البرطمة لي كطل على البحر ف مالاباطا، شحال ثمنها النهائي؟',
    steps: [
      {
        botReply: 'وعليكم السلام وسي يونس! الشقة ف مالاباطا مساحتها 145 متر مربع بإطلالة بانورامية مباشرة على المضيق وثمنها 1.95 مليون درهم قابل للتفاوض البسيط مع المالك. واش بغيتو تطلعو على فيديو الزيارة الافتراضية أو تبرمجو موعد زيارة حضورية؟',
        userNext: 'باغي نشوفها حضورياً، أنا نازل لطنجة الويكاند هدا.'
      },
      {
        botReply: 'مرحباً بيك ف طنجة! الوكيلة العقارية مريم مخصصة مواعيد الزيارة ليوم السبت بين 11:00 و 13:00. واش نثبتو ليك الموعد مع 11:30 صباحاً؟',
        userNext: 'نعم، 11:30 السبت ممتازة، نكون حاضر إن شاء الله.'
      },
      {
        botReply: 'ممتاز! تم حجز موعد الزيارة رسمياً ليوم السبت مع 11:30. موقع الإقامة وصلك دابا عبر الواتساب وغانذكروك بنصف يوم قبل الموعد. نهارك مبروك!',
        userNext: 'الله يجازيك بالخير.'
      }
    ]
  }
];
