import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'uz' | 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  // Navigation
  'nav.home': { uz: 'Bosh sahifa', ru: 'Главная', en: 'Home' },
  'nav.about': { uz: 'Biz haqimizda', ru: 'О нас', en: 'About Us' },
  'nav.services': { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
  'nav.pests': { uz: 'Zararkunandalar', ru: 'Вредители', en: 'Pests & Threats' },
  'nav.faq': { uz: 'Savol-javob', ru: 'Вопросы', en: 'FAQ' },
  'nav.contact': { uz: 'Aloqa', ru: 'Контакты', en: 'Contact' },
  
  // Hero Section
  'hero.title': { 
    uz: 'SamDez – Ishonchli va ekologik xavfsiz dezinfeksiya', 
    ru: 'SamDez – Надежная и экологически безопасная дезинфекция', 
    en: 'SamDez – Trusted & Eco-Friendly Disinfection' 
  },
  'hero.subtitle': { 
    uz: 'Professional zararkunandalar nazorati va dezinfeksiya xizmatlari sizning xavfsizligingiz uchun', 
    ru: 'Профессиональные услуги по борьбе с вредителями и дезинфекции для вашей безопасности', 
    en: 'Professional pest control and disinfection services for your safety and peace of mind' 
  },
  'hero.cta': { uz: 'Bepul maslahat', ru: 'Бесплатная консультация', en: 'Free Consultation' },
  'hero.emergency': { uz: 'Favqulodda aloqa: +998 90 123 45 67', ru: 'Экстренная связь: +998 90 123 45 67', en: 'Emergency Contact: +998 90 123 45 67' },
  'hero.learn_more': { uz: 'Batafsil', ru: 'Узнать больше', en: 'Learn More' },
  'hero.certified': { uz: 'Sertifikatlangan', ru: 'Сертифицировано', en: 'Certified' },
  'hero.eco_safe': { uz: 'Ekologik xavfsiz', ru: 'Экологично', en: 'Eco-Safe' },
  'hero.support_24_7': { uz: '24/7 yordam', ru: 'Поддержка 24/7', en: '24/7 Support' },
  'hero.emergency_service': { uz: '24/7 Favqulodda xizmat', ru: 'Экстренная служба 24/7', en: '24/7 Emergency Service' },
  'hero.happy_clients': { uz: 'Mamnun mijozlar', ru: 'Довольных клиентов', en: 'Happy Clients' },
  'hero.eco_safe_percent': { uz: 'Ekologik xavfsiz', ru: 'Экологично', en: 'Eco-Safe' },
  
  // Services
  'services.title': { uz: 'Bizning xizmatlarimiz', ru: 'Наши услуги', en: 'Our Services' },
  'services.subtitle': { 
    uz: 'Professional va xavfsiz xizmatlar turli ehtiyojlar uchun',
    ru: 'Профессиональные и безопасные услуги для различных потребностей',
    en: 'Professional and safe services for various needs'
  },
  'services.home': { uz: 'Uy dezinfeksiyasi', ru: 'Дезинфекция домов', en: 'Home Disinfection' },
  'services.home_desc': { 
    uz: 'Sizning uyingizni bakteriya va viruslardan himoya qiling',
    ru: 'Защитите свой дом от бактерий и вирусов',
    en: 'Protect your home from bacteria and viruses'
  },
  'services.office': { uz: 'Ofis va sanoat dezinfeksiyasi', ru: 'Дезинфекция офисов и предприятий', en: 'Office & Industrial Disinfection' },
  'services.office_desc': { 
    uz: 'Ish joyingizni xavfsiz va toza saqlang',
    ru: 'Поддерживайте безопасность и чистоту рабочего места',
    en: 'Keep your workplace safe and clean'
  },
  'services.transport': { uz: 'Transport dezinfeksiyasi', ru: 'Дезинфекция транспорта', en: 'Transport Disinfection' },
  'services.transport_desc': { 
    uz: 'Avtomobil va jamoat transportini tozalash',
    ru: 'Очистка автомобилей и общественного транспорта',
    en: 'Cleaning cars and public transport'
  },
  'services.antivirus': { uz: 'Anti-virus sterilizatsiya', ru: 'Антивирусная стерилизация', en: 'Anti-virus Sterilization' },
  'services.antivirus_desc': { 
    uz: 'Maxsus virusga qarshi tozalash',
    ru: 'Специальная антивирусная обработка',
    en: 'Special anti-virus treatment'
  },
  'services.pest': { uz: 'Zararkunandalar nazorati', ru: 'Борьба с вредителями', en: 'Pest Control' },
  'services.pest_desc': { 
    uz: 'Hasharotlar va kemiruvchilardan himoya',
    ru: 'Защита от насекомых и грызунов',
    en: 'Protection from insects and rodents'
  },
  'services.garden': { uz: 'Bog\' va qishloq xo\'jaligi himoyasi', ru: 'Защита садов и сельского хозяйства', en: 'Garden & Agriculture Protection' },
  'services.garden_desc': { 
    uz: 'O\'simlik va ekinlarni himoya qilish',
    ru: 'Защита растений и урожая',
    en: 'Plant and crop protection'
  },
  
  // Trust Section
  'trust.title': { uz: 'Nega SamDez?', ru: 'Почему SamDez?', en: 'Why SamDez?' },
  'trust.experience': { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years Experience' },
  'trust.projects': { uz: 'Muvaffaqiyatli loyihalar', ru: 'Успешных проектов', en: 'Successful Projects' },
  'trust.satisfaction': { uz: 'Mijozlar mamnunligi', ru: 'Удовлетворенность клиентов', en: 'Client Satisfaction' },
  'trust.certified_title': { uz: 'Sertifikatlangan xizmat', ru: 'Сертифицированный сервис', en: 'Certified Service' },
  'trust.certified_desc': { 
    uz: 'Barcha xalqaro standartlarga javob beruvchi sifatli xizmat',
    ru: 'Качественное обслуживание, соответствующее всем международным стандартам',
    en: 'Quality service meeting all international standards'
  },
  'trust.eco_title': { uz: 'Ekologik mahsulotlar', ru: 'Экологические продукты', en: 'Eco-Friendly Products' },
  'trust.eco_desc': { 
    uz: 'Inson va atrof-muhit uchun xavfsiz kimyoviy moddalar',
    ru: 'Безопасные для человека и окружающей среды химические вещества',
    en: 'Chemicals safe for humans and the environment'
  },
  'trust.support_title': { uz: '24/7 qo\'llab-quvvatlash', ru: 'Поддержка 24/7', en: '24/7 Support' },
  'trust.support_desc': { 
    uz: 'Favqulodda vaziyatlarda har doim tayyormiz',
    ru: 'Всегда готовы помочь в экстренных ситуациях',
    en: 'Always ready to help in emergency situations'
  },
  
  // Contact Form
  'form.title': { uz: 'Bepul maslahat oling', ru: 'Получите бесплатную консультацию', en: 'Get Free Consultation' },
  'form.subtitle': { 
    uz: 'Bizning mutaxassislarimiz sizga yordam berishga tayyor',
    ru: 'Наши специалисты готовы вам помочь',
    en: 'Our specialists are ready to help you'
  },
  'form.name': { uz: 'Ismingiz', ru: 'Ваше имя', en: 'Your Name' },
  'form.phone': { uz: 'Telefon raqamingiz', ru: 'Ваш телефон', en: 'Your Phone' },
  'form.service': { uz: 'Xizmat turini tanlang', ru: 'Выберите тип услуги', en: 'Select Service Type' },
  'form.message': { uz: 'Xabaringiz', ru: 'Ваше сообщение', en: 'Your Message' },
  'form.submit': { uz: 'Yuborish', ru: 'Отправить', en: 'Submit' },
  'form.success': { uz: 'Xabaringiz yuborildi!', ru: 'Ваше сообщение отправлено!', en: 'Your message has been sent!' },
  
  // About
  'about.title': { uz: 'SamDez haqida', ru: 'О компании SamDez', en: 'About SamDez' },
  'about.story': { 
    uz: 'Biz 2020 yildan beri professional dezinfeksiya va zararkunandalar nazorati sohasida faoliyat yuritamiz. Bizning missiyamiz - odamlar va atrof-muhit uchun xavfsiz muhit yaratish.',
    ru: 'Мы работаем в сфере профессиональной дезинфекции и борьбы с вредителями с 2020 года. Наша миссия - создание безопасной среды для людей и окружающей среды.',
    en: 'We have been operating in professional disinfection and pest control since 2020. Our mission is to create a safe environment for people and the environment.'
  },
  
  // Contact
  'contact.title': { uz: 'Biz bilan bog\'laning', ru: 'Свяжитесь с нами', en: 'Contact Us' },
  'contact.phone': { uz: 'Telefon', ru: 'Телефон', en: 'Phone' },
  'contact.email': { uz: 'Email', ru: 'Email', en: 'Email' },
  'contact.address': { uz: 'Manzil', ru: 'Адрес', en: 'Address' },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    return translation ? translation[language] || translation.en : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};