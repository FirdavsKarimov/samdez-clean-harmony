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
  
  // Services
  'services.title': { uz: 'Bizning xizmatlarimiz', ru: 'Наши услуги', en: 'Our Services' },
  'services.home': { uz: 'Uy dezinfeksiyasi', ru: 'Дезинфекция домов', en: 'Home Disinfection' },
  'services.office': { uz: 'Ofis va sanoat dezinfeksiyasi', ru: 'Дезинфекция офисов и предприятий', en: 'Office & Industrial Disinfection' },
  'services.transport': { uz: 'Transport dezinfeksiyasi', ru: 'Дезинфекция транспорта', en: 'Transport Disinfection' },
  'services.antivirus': { uz: 'Anti-virus sterilizatsiya', ru: 'Антивирусная стерилизация', en: 'Anti-virus Sterilization' },
  'services.pest': { uz: 'Zararkunandalar nazorati', ru: 'Борьба с вредителями', en: 'Pest Control' },
  'services.garden': { uz: 'Bog\' va qishloq xo\'jaligi himoyasi', ru: 'Защита садов и сельского хозяйства', en: 'Garden & Agriculture Protection' },
  
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