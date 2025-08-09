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
  'nav.get_quote': { uz: 'Bepul maslahat', ru: 'Бесплатная консультация', en: 'Get Free Quote' },
  
  // Hero Section
  'hero.title': { 
    uz: 'SamDezin – Ishonchli va ekologik xavfsiz dezinfeksiya', 
    ru: 'SamDezin – Надежная и экологически безопасная дезинфекция', 
    en: 'SamDezin – Trusted & Eco-Friendly Disinfection' 
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
  
  // Service Descriptions
  'services.home_description': { 
    uz: 'Uylar va kvartiralar uchun to\'liq uy-joy dezinfeksiyasi va zararkunandalar nazorati. Oila, bolalar va uy hayvonlari uchun xavfsiz.',
    ru: 'Полная дезинфекция жилых помещений и борьба с вредителями для домов и квартир. Безопасно для семей, детей и домашних животных.',
    en: 'Complete residential disinfection and pest control for homes and apartments. Safe for families, children, and pets.'
  },
  'services.office_description': { 
    uz: 'Ofis va sanoat binolari uchun professional dezinfeksiya xizmatlari. Sog\'lom ish muhitini saqlang.',
    ru: 'Профессиональные услуги по дезинфекции офисов и промышленных объектов. Поддерживайте здоровую рабочую среду.',
    en: 'Professional office and industrial facility disinfection services. Maintain healthy work environments.'
  },
  'services.transport_description': { 
    uz: 'Avtomobillar, avtobuslar, yuk mashinalari va jamoat transporti uchun transport dezinfeksiyasi.',
    ru: 'Дезинфекция транспорта для автомобилей, автобусов, грузовиков и общественного транспорта.',
    en: 'Vehicle and transport disinfection for cars, buses, trucks, and public transportation.'
  },
  'services.antivirus_description': { 
    uz: 'Zamonaviy jihozlarni ishlatadigan va kasalxona darajasidagi dezinfektantlar bilan rivojlangan anti-virus sterilizatsiya.',
    ru: 'Продвинутая антивирусная стерилизация с использованием современного оборудования и дезинфицирующих средств больничного уровня.',
    en: 'Advanced anti-virus sterilization using modern equipment and hospital-grade disinfectants.'
  },
  'services.pest_description': { 
    uz: 'Ekologik xavfsiz usullar bilan mutaxassis zararkunandalar va kemiruvchilar nazorati. Barcha keng tarqalgan zararkunandalarga qarshi samarali.',
    ru: 'Экспертная борьба с вредителями и грызунами экологически безопасными методами. Эффективно против всех распространенных вредителей.',
    en: 'Expert pest and rodent control with eco-friendly methods. Effective against all common pests.'
  },
  'services.garden_description': { 
    uz: 'Sog\'lom ekinlar va chiroyli landshaftlar uchun bog\' va qishloq xo\'jaligi himoya xizmatlari.',
    ru: 'Услуги по защите садов и сельского хозяйства для здоровых культур и красивых ландшафтов.',
    en: 'Garden and agricultural protection services for healthy crops and beautiful landscapes.'
  },
  
  // Process Steps
  'process.free_consultation': { uz: 'Bepul maslahat', ru: 'Бесплатная консультация', en: 'Free Consultation' },
  'process.free_consultation_desc': { uz: 'Dastlabki baholash va narx', ru: 'Первоначальная оценка и расценка', en: 'Initial assessment and quote' },
  'process.service_planning': { uz: 'Xizmat rejalashtirish', ru: 'Планирование услуг', en: 'Service Planning' },
  'process.service_planning_desc': { uz: 'Maxsus davolash rejasi', ru: 'Индивидуальный план лечения', en: 'Customized treatment plan' },
  'process.professional_treatment': { uz: 'Professional davolash', ru: 'Профессиональное лечение', en: 'Professional Treatment' },
  'process.professional_treatment_desc': { uz: 'Ertiruvchilarning malakali qo\'llash', ru: 'Экспертное применение решений', en: 'Expert application of solutions' },
  'process.follow_up_support': { uz: 'Kuzatuv qo\'llab-quvvatlash', ru: 'Поддержка последующего наблюдения', en: 'Follow-up Support' },
  'process.follow_up_support_desc': { uz: 'Monitoring va texnik xizmat', ru: 'Мониторинг и техническое обслуживание', en: 'Monitoring and maintenance' },
  
  // Trust Section
  'trust.title': { uz: 'Nega SamDezin?', ru: 'Почему SamDezin?', en: 'Why SamDezin?' },
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
  'about.title': { uz: 'SamDezin haqida', ru: 'О компании SamDezin', en: 'About SamDezin' },
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
  
  // About Page
  'about.mission': { uz: 'Bizning missiyamiz', ru: 'Наша миссия', en: 'Our Mission' },
  'about.mission_desc': { 
    uz: 'Odamlar va atrof-muhit uchun xavfsiz muhit yaratish orqali jamiyatga xizmat qilish',
    ru: 'Служить обществу, создавая безопасную среду для людей и окружающей среды',
    en: 'To serve society by creating a safe environment for people and the environment'
  },
  'about.vision': { uz: 'Bizning ko\'rinishimiz', ru: 'Наше видение', en: 'Our Vision' },
  'about.vision_desc': { 
    uz: 'Professional va ekologik xavfsiz xizmatlar bo\'yicha yetakchi kompaniya bo\'lish',
    ru: 'Стать ведущей компанией в области профессиональных и экологически безопасных услуг',
    en: 'To become a leading company in professional and eco-friendly services'
  },
  'about.values': { uz: 'Bizning qadriyatlarimiz', ru: 'Наши ценности', en: 'Our Values' },
  'about.values_desc': { 
    uz: 'Sifat, ishonchlilik va atrof-muhitga g\'amxo\'rlik',
    ru: 'Качество, надежность и забота об окружающей среде',
    en: 'Quality, reliability and environmental care'
  },
  'about.experience': { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years Experience' },
  'about.certified': { uz: 'Sertifikatlangan', ru: 'Сертифицировано', en: 'Certified' },
  'about.expert_team': { uz: 'Mutaxassis jamoasi', ru: 'Команда экспертов', en: 'Expert Team' },
  'about.service_24_7': { uz: '24/7 xizmat', ru: 'Служба 24/7', en: '24/7 Service' },
  'about.industry_experience': { uz: 'Sanoat tajribasi', ru: 'Опыт в отрасли', en: 'Industry Experience' },
  'about.industry_experience_desc': { 
    uz: '5+ yillik professional zararkunandalar nazorati va dezinfeksiya xizmatlari',
    ru: '5+ лет профессиональных услуг по борьбе с вредителями и дезинфекции',
    en: '5+ years of professional pest control and disinfection services'
  },
  'about.certified_licensed': { uz: 'Sertifikatlangan va litsenziyalangan', ru: 'Сертифицировано и лицензировано', en: 'Certified & Licensed' },
  'about.certified_licensed_desc': { 
    uz: 'Sog\'liqni saqlash organlari tomonidan to\'liq litsenziyalangan, barcha talab qilinadigan sertifikatlar bilan',
    ru: 'Полностью лицензировано органами здравоохранения со всеми необходимыми сертификатами',
    en: 'Fully licensed by health authorities with all required certifications'
  },
  'about.expert_team_desc': { 
    uz: 'Zamonaviy jihozlarni ishlatadigan va ekologik xavfsiz usullarni qo\'llaydigan malakali mutaxassislar',
    ru: 'Обученные профессионалы, использующие новейшее оборудование и экологически безопасные методы',
    en: 'Trained professionals using latest equipment and eco-friendly methods'
  },
  'about.service_24_7_desc': { 
    uz: 'Favqulodda vaziyatlarda yordam berish uchun kun bo\'yi mavjud',
    ru: 'Доступны круглосуточно для помощи в экстренных ситуациях',
    en: 'Emergency response available round the clock for urgent situations'
  },
  
  // FAQ Page
  'faq.title': { uz: 'Ko\'p so\'raladigan savollar', ru: 'Часто задаваемые вопросы', en: 'Frequently Asked Questions' },
  'faq.subtitle': { 
    uz: 'SamDezin xizmatlari haqida ko\'p so\'raladigan savollarga javoblar',
    ru: 'Ответы на часто задаваемые вопросы об услугах SamDezin',
    en: 'Answers to frequently asked questions about SamDezin services'
  },
  'faq.service_safety': { uz: 'Xizmat xavfsizligi', ru: 'Безопасность услуг', en: 'Service Safety' },
  'faq.scheduling_process': { uz: 'Rejalashtirish va jarayon', ru: 'Планирование и процесс', en: 'Scheduling & Process' },
  'faq.pricing_guarantees': { uz: 'Narxlar va kafolatlari', ru: 'Цены и гарантии', en: 'Pricing & Guarantees' },
  'faq.property_types': { uz: 'Turi mulklar', ru: 'Типы недвижимости', en: 'Property Types' },
  'faq.safe_children_pets': { uz: 'Bolalar va uy hayvonlari uchun xavfsizmi?', ru: 'Безопасны ли ваши обработки для детей и домашних животных?', en: 'Are your treatments safe for children and pets?' },
  'faq.safe_children_pets_answer': { 
    uz: 'Ha, mutlaqo. Biz faqat ekologik xavfsiz, sertifikatlangan mahsulotlarni ishlatamiz, ular to\'g\'ri qo\'llanilganda bolalar va uy hayvonlari uchun xavfsiz. Bizning davolashlar ma\'lum zararkunandalarni nishonga oladi va odamlar va hayvonlar uchun zararsiz.',
    ru: 'Да, абсолютно. Мы используем только экологически безопасные, сертифицированные продукты, которые безопасны для детей и домашних животных при правильном применении. Наши обработки нацелены на конкретных вредителей, будучи безвредными для людей и животных.',
    en: 'Yes, absolutely. We use only eco-friendly, certified products that are safe for children and pets when applied correctly. Our treatments target specific pests while being harmless to humans and animals.'
  },
  'faq.safety_measures': { uz: 'Texniklaringiz qanday xavfsizlik choralarini ko\'radi?', ru: 'Какие меры безопасности соблюдают ваши техники?', en: 'What safety measures do your technicians follow?' },
  'faq.safety_measures_answer': { 
    uz: 'Bizning texniklarimiz to\'liq malakali va sertifikatlangan, davolash paytida himoya vositalarini kiyadi. Ular qat\'iy xavfsizlik protokollarini bajaradi, davolangan hududlarni to\'g\'ri havo almashinuvi bilan ta\'minlaydi va barcha mahsulotlar ishlab chiqaruvchi ko\'rsatmalari va mahalliy qoidalarga muvofiq qo\'llanilishini ta\'minlaydi.',
    ru: 'Наши техники полностью обучены и сертифицированы, носят защитное оборудование во время обработки. Они следуют строгим протоколам безопасности, правильно проветривают обработанные участки и обеспечивают применение всех продуктов в соответствии с инструкциями производителя и местными правилами.',
    en: 'Our technicians are fully trained and certified, wearing protective equipment during treatments. They follow strict safety protocols, properly ventilate treated areas, and ensure all products are applied according to manufacturer guidelines and local regulations.'
  },
  'faq.leave_home': { uz: 'Davolash paytida uydan chiqishim kerakmi?', ru: 'Нужно ли мне покидать дом во время обработки?', en: 'Do I need to leave my home during treatment?' },
  'faq.leave_home_answer': { 
    uz: 'Ko\'p hollarda, davolash paytida uyingizda qolishingiz mumkin. Ba\'zi intensiv davolashlar uchun biz 2-4 soatlik tashqariga chiqishni tavsiya qilamiz. Biz har doim oldindan ogohlantiramiz, agar vaqtincha evakuatsiya kerak bo\'lsa va aniq qaytish ko\'rsatmalarini beramiz.',
    ru: 'В большинстве случаев вы можете оставаться в своем доме во время обработки. Для определенных интенсивных обработок мы можем порекомендовать покинуть дом на 2-4 часа. Мы всегда заранее информируем, если необходима временная эвакуация, и предоставляем четкие инструкции по возвращению.',
    en: 'In most cases, you can stay in your home during treatment. For certain intensive treatments, we may recommend leaving for 2-4 hours. We always inform you in advance if temporary evacuation is needed and provide clear return instructions.'
  },
  'faq.emergency_response': { uz: 'Favqulodda chaqiruvlarga qanchalik tez javob berasiz?', ru: 'Как быстро вы реагируете на экстренные вызовы?', en: 'How quickly can you respond to emergency calls?' },
  'faq.emergency_response_answer': { 
    uz: 'Biz 24/7 favqulodda xizmat taklif qilamiz, favqulodda vaziyatlar uchun odatda 2-4 soat ichida javob beramiz. Favqulodda chaqiruvlar sog\'liq xavfi, katta zararkunandalar yoki tijorat oziq-ovqat xizmati buzilishlari kabi vaziyatlarni o\'z ichiga oladi.',
    ru: 'Мы предлагаем круглосуточную экстренную службу с временем отклика обычно в течение 2-4 часов для срочных ситуаций. Экстренные вызовы включают ситуации с рисками для здоровья, крупными заражениями или нарушениями коммерческих услуг общественного питания.',
    en: 'We offer 24/7 emergency service with response times typically within 2-4 hours for urgent situations. Emergency calls include situations with health risks, large infestations, or commercial food service disruptions.'
  },
  
  'faq.after_hours': { 
    uz: 'Ish vaqtidan tashqarida xizmat mavjudmi?', 
    ru: 'Доступны ли услуги в нерабочее время?', 
    en: 'Are services available after hours?' 
  },
  'faq.after_hours_answer': { 
    uz: 'Ha, biz 24/7 favqulodda xizmat ko\'rsatamiz. Ish vaqtidan tashqarida ham zararkunandalar nazorati xizmatlarini olishingiz mumkin.',
    ru: 'Да, мы предоставляем экстренную службу 24/7. Вы можете получить услуги по борьбе с вредителями даже в нерабочее время.',
    en: 'Yes, we provide 24/7 emergency service. You can get pest control services even after regular business hours.'
  },
  
  'faq.urgent_situations': { 
    uz: 'Shoshilinch holatlar uchun qanday jarayon?', 
    ru: 'Какой процесс для срочных ситуаций?', 
    en: 'What is the process for urgent situations?' 
  },
  'faq.urgent_situations_answer': { 
    uz: 'Shoshilinch holatlar uchun darhol qo\'ng\'iroq qiling. Biz 30 daqiqada javob beramiz va kerak bo\'lsa, darhol yuborish mumkin. Favqulodda holatlar uchun maxsus narxlar mavjud.',
    ru: 'Для срочных ситуаций звоните немедленно. Мы отвечаем в течение 30 минут и можем выехать немедленно при необходимости. Для экстренных случаев действуют специальные цены.',
    en: 'For urgent situations, call immediately. We respond within 30 minutes and can dispatch immediately if needed. Special pricing applies for emergency cases.'
  },
  
  'faq.faq_badge': { uz: 'Ko\'p so\'raladigan savollar', ru: 'Часто задаваемые вопросы', en: 'Frequently Asked Questions' },
  'faq.expert_answers': { uz: 'Mutaxassis javoblari', ru: 'Ответы экспертов', en: 'Expert Answers' },
  'faq.support_24_7': { uz: '24/7 qo\'llab-quvvatlash', ru: '24/7 поддержка', en: '24/7 Support' },
  'faq.professional_team': { uz: 'Professional jamoa', ru: 'Профессиональная команда', en: 'Professional Team' },
  'faq.treatment_duration': { uz: 'Oddiy davolash qancha vaqt oladi?', ru: 'Сколько времени занимает типичная обработка?', en: 'How long does a typical treatment take?' },
  'faq.treatment_duration_answer': { 
    uz: 'Davolash vaqti mulk o\'lchami va zararkunandalar darajasi bo\'yicha o\'zgaradi. Uy-joy davolashlari odatda 1-3 soat oladi, tijorat mulklari esa 4-8 soat talab qilishi mumkin. Biz dastlabki maslahat paytida taxminiy vaqtlarni taqdim etamiz.',
    ru: 'Время обработки варьируется в зависимости от размера собственности и уровня заражения. Обработки жилых помещений обычно занимают 1-3 часа, в то время как коммерческие объекты могут потребовать 4-8 часов. Мы предоставляем предполагаемые временные рамки во время первоначальной консультации.',
    en: 'Treatment time varies by property size and infestation level. Residential treatments typically take 1-3 hours, while commercial properties may require 4-8 hours. We provide estimated timeframes during initial consultation.'
  },
  'faq.follow_up': { uz: 'Siz kuzatuv xizmatlarini taqdim etasizmi?', ru: 'Предоставляете ли вы услуги последующего наблюдения?', en: 'Do you provide follow-up services?' },
  'faq.follow_up_answer': { 
    uz: 'Ha, kuzatuv barcha xizmat paketlarimizga kiritilgan. Biz odatda dastlabki davolashdan 7-14 kun o\'tganidan keyin kuzatuv tashriflarini rejalashtiramiz, samaradorlikni ta\'minlash va kerak bo\'lsa qo\'shimcha to\'lovsiz o\'zgarishlar kiritish uchun.',
    ru: 'Да, последующее наблюдение включено во все наши пакеты услуг. Мы обычно планируем последующие визиты через 7-14 дней после первоначальной обработки, чтобы обеспечить эффективность и внести любые необходимые корректировки без дополнительной платы.',
    en: 'Yes, follow-up is included in all our service packages. We typically schedule follow-up visits 7-14 days after initial treatment to ensure effectiveness and make any necessary adjustments at no additional cost.'
  },
  'faq.free_consultation': { uz: 'Siz bepul maslahat va narxlarni taklif qilasizmi?', ru: 'Предлагаете ли вы бесплатные консультации и расценки?', en: 'Do you offer free consultations and quotes?' },
  'faq.free_consultation_answer': { 
    uz: 'Ha, biz to\'liq bepul joyda maslahat va batafsil narxlarni taqdim etamiz. Bizning mutaxassislarimiz sizning vaziyatingizni baholaydi, zararkunandalar turlarini aniqlaydi va shaffof narxlar bilan eng samarali davolash rejasini tavsiya qiladi.',
    ru: 'Да, мы предоставляем полностью бесплатные консультации на месте и подробные расценки. Наши эксперты оценят вашу ситуацию, определят типы вредителей и порекомендуют наиболее эффективный план лечения с прозрачным ценообразованием.',
    en: 'Yes, we provide completely free on-site consultations and detailed quotes. Our experts will assess your situation, identify pest types, and recommend the most effective treatment plan with transparent pricing.'
  },
  'faq.service_guarantee': { uz: 'Sizning xizmat kafolatingizga nima kiradi?', ru: 'Что входит в вашу гарантию на услуги?', en: 'What is included in your service guarantee?' },
  'faq.service_guarantee_answer': { 
    uz: 'Biz barcha davolashlar uchun 30 kunlik mamnuniyat kafolatini taklif qilamiz. Agar zararkunandalar kafolat davri ichida qaytsa, biz qo\'shimcha to\'lovsiz mulkingizni qayta davolaymiz. Ba\'zi davolashlar 6 oygacha uzaytirilgan kafolatlarni o\'z ichiga oladi.',
    ru: 'Мы предлагаем 30-дневную гарантию удовлетворенности на все обработки. Если вредители вернутся в течение гарантийного периода, мы повторно обработаем вашу собственность без дополнительной платы. Некоторые обработки включают расширенные гарантии до 6 месяцев.',
    en: 'We offer a 30-day satisfaction guarantee on all treatments. If pests return within the guarantee period, we will re-treat your property at no additional charge. Some treatments include extended warranties up to 6 months.'
  },
  'faq.payment_plans': { uz: 'Siz to\'lov rejalari yoki chegirmalarni taklif qilasizmi?', ru: 'Предлагаете ли вы планы оплаты или скидки?', en: 'Do you offer payment plans or discounts?' },
  'faq.payment_plans_answer': { 
    uz: 'Biz katta tijorat loyihalari uchun bo\'lib to\'lash rejalari kabi turli xil to\'lov variantlarini taklif qilamiz. Biz shuningdek, muntazam texnik xizmat shartnomalari, keksalar va ko\'p xizmat buyurtmalari uchun chegirmalarni taqdim etamiz.',
    ru: 'Мы предлагаем различные варианты оплаты, включая планы рассрочки для крупных коммерческих проектов. Мы также предоставляем скидки для регулярных контрактов на техническое обслуживание, пожилых людей и множественных заказов на услуги.',
    en: 'We offer various payment options including installment plans for larger commercial projects. We also provide discounts for regular maintenance contracts, senior citizens, and multiple service bookings.'
  },
  'faq.residential_commercial': { uz: 'Siz uy-joy va tijorat mulklariga xizmat ko\'rsatasizmi?', ru: 'Обслуживаете ли вы жилую и коммерческую недвижимость?', en: 'Do you service both residential and commercial properties?' },
  'faq.residential_commercial_answer': { 
    uz: 'Ha, biz uylar, kvartiralar, ofislar, restoranlar, omborxonalar, zavodlar va barcha turdagi tijorat binolari uchun keng qamrovli xizmatlarni taqdim etamiz. Har bir mulk turi maxsus davolash rejalarini oladi.',
    ru: 'Да, мы предоставляем комплексные услуги для домов, квартир, офисов, ресторанов, складов, заводов и всех типов коммерческих объектов. Каждый тип собственности получает индивидуальные планы обработки.',
    en: 'Yes, we provide comprehensive services for homes, apartments, offices, restaurants, warehouses, factories, and all types of commercial facilities. Each property type receives customized treatment plans.'
  },
  'faq.outdoor_areas': { uz: 'Siz tashqi hududlar va bog\'larni davolay olasizmi?', ru: 'Можете ли вы обрабатывать наружные зоны и сады?', en: 'Can you treat outdoor areas and gardens?' },
  'faq.outdoor_areas_answer': { 
    uz: 'Mutlaqo. Biz bog\'lar, hovlilar, patio va qishloq xo\'jaligi hududlari uchun maxsus tashqi davolashlarni taklif qilamiz. Bizning tashqi davolashlarimiz atrof-muhitga mas\'uliyatli bo\'lish uchun mo\'ljallangan, shu bilan birga zararkunandalarni samarali nazorat qiladi.',
    ru: 'Абсолютно. Мы предлагаем специализированные наружные обработки для садов, дворов, патио и сельскохозяйственных зон. Наши наружные обработки разработаны для экологической ответственности при эффективном контроле вредителей.',
    en: 'Absolutely. We offer specialized outdoor treatments for gardens, yards, patios, and agricultural areas. Our outdoor treatments are designed to be environmentally responsible while effectively controlling pests.'
  },
  'faq.preventive_maintenance': { uz: 'Siz oldini olish texnik xizmat dasturlarini taqdim etasizmi?', ru: 'Предоставляете ли вы программы профилактического обслуживания?', en: 'Do you provide preventive maintenance programs?' },
  'faq.preventive_maintenance_answer': { 
    uz: 'Ha, biz zararkunandalar paydo bo\'lishidan oldin ularni oldini olish uchun muntazam rejalashtirilgan tashriflar bilan maxsus oldini olish texnik xizmat dasturlarini taklif qilamiz. Bu dasturlar ayniqsa restoranlar, mehmonxonalar va boshqa tijorat binolari orasida mashhur.',
    ru: 'Да, мы предлагаем индивидуальные программы профилактического обслуживания с регулярными запланированными визитами для предотвращения заражений до их возникновения. Эти программы особенно популярны среди ресторанов, отелей и других коммерческих объектов.',
    en: 'Yes, we offer customized preventive maintenance programs with regular scheduled visits to prevent infestations before they occur. These programs are especially popular with restaurants, hotels, and other commercial facilities.'
  },
  
  // Pests & Threats Page
  'pests.title': { uz: 'Zararkunandalar va tahdidlar', ru: 'Вредители и угрозы', en: 'Pests & Threats' },
  'pests.subtitle': { 
    uz: 'Eng keng tarqalgan zararkunandalar va ularning xavfi haqida ma\'lumot',
    ru: 'Информация о наиболее распространенных вредителях и их угрозах',
    en: 'Information about the most common pests and their threats'
  },
  'pests.bed_bugs': { uz: 'To\'shak böcekleri', ru: 'Постельные клопы', en: 'Bed Bugs' },
  'pests.cockroaches': { uz: 'Tarakanlar', ru: 'Тараканы', en: 'Cockroaches' },
  'pests.ants': { uz: 'Chumolilar', ru: 'Муравьи', en: 'Ants' },
  'pests.mosquitoes': { uz: 'Chivinlar', ru: 'Комары', en: 'Mosquitoes' },
  'pests.rodents': { uz: 'Kemiruvchilar', ru: 'Грызуны', en: 'Rodents' },
  'pests.fleas': { uz: 'Burga', ru: 'Блохи', en: 'Fleas' },
  'pests.termites': { uz: 'Oq chumolilar', ru: 'Термиты', en: 'Termites' },
  'pests.beetles': { uz: 'Qo\'ng\'izlar', ru: 'Жуки', en: 'Beetles' },
  'pests.flies': { uz: 'Chivinlar', ru: 'Мухи', en: 'Flies' },
  'pests.habitat': { uz: 'Yashash joyi', ru: 'Среда обитания', en: 'Habitat' },
  'pests.health_risk': { uz: 'Sog\'liq xavfi', ru: 'Риск для здоровья', en: 'Health Risk' },
  'pests.treatment': { uz: 'Davolash', ru: 'Лечение', en: 'Treatment' },
  'pests.severity': { uz: 'Jiddiylik', ru: 'Серьезность', en: 'Severity' },
  'pests.high': { uz: 'Yuqori', ru: 'Высокая', en: 'High' },
  'pests.very_high': { uz: 'Juda yuqori', ru: 'Очень высокая', en: 'Very High' },
  'pests.medium': { uz: 'O\'rta', ru: 'Средняя', en: 'Medium' },
  'pests.low': { uz: 'Past', ru: 'Низкая', en: 'Low' },
  'pests.bed_bugs_habitat': { uz: 'To\'shaklar, mebellar, gilamlar, kiyimlar', ru: 'Матрасы, мебель, ковры, одежда', en: 'Mattresses, furniture, carpets, clothing' },
  'pests.bed_bugs_health': { uz: 'Teri qichishishi, allergik reaktsiyalar, uyqu buzilishi', ru: 'Раздражение кожи, аллергические реакции, нарушение сна', en: 'Skin irritation, allergic reactions, sleep disruption' },
  'pests.bed_bugs_treatment': { uz: 'Issiqlik davolash, maxsus purkalar, to\'shak qoplamasi', ru: 'Тепловая обработка, специальные спреи, чехлы для матрасов', en: 'Heat treatment, specialized sprays, mattress encasement' },
  'pests.cockroaches_habitat': { uz: 'Oshxona, hammom, qorong\'i issiq joylar', ru: 'Кухня, ванная, темные теплые места', en: 'Kitchen, bathroom, dark warm places' },
  'pests.cockroaches_health': { uz: 'Astma, allergiya, oziq-ovqat ifloslanishi, kasallik tarqalishi', ru: 'Астма, аллергия, загрязнение пищи, распространение болезней', en: 'Asthma, allergies, food contamination, disease spread' },
  'pests.cockroaches_treatment': { uz: 'Gel yemlar, qoldiq purkalar, yoriq va tirqish davolash', ru: 'Гелевые приманки, остаточные спреи, обработка трещин и щелей', en: 'Gel baits, residual sprays, crack and crevice treatment' },
  'pests.ants_habitat': { uz: 'Oshxona, bog\', devor va pol yoriqlari', ru: 'Кухня, сад, трещины в стенах и полу', en: 'Kitchen, garden, cracks in walls and floors' },
  'pests.ants_health': { uz: 'Oziq-ovqat ifloslanishi, tuzilish zarari (duradgor chumolilar)', ru: 'Загрязнение пищи, структурные повреждения (плотницкие муравьи)', en: 'Food contamination, structural damage (carpenter ants)' },
  'pests.ants_treatment': { uz: 'Chumoli yemlari, perimetr davolash, koloniya yo\'q qilish', ru: 'Муравьиные приманки, периметральная обработка, уничтожение колонии', en: 'Ant baits, perimeter treatment, colony elimination' },
  'pests.mosquitoes_habitat': { uz: 'To\'xtagan suv, bog\'lar, nam hududlar', ru: 'Стоячая вода, сады, влажные районы', en: 'Standing water, gardens, humid areas' },
  'pests.mosquitoes_health': { uz: 'Malariya, denggi isitmasi, Zika virusi, G\'arbiy Nil virusi', ru: 'Малярия, лихорадка денге, вирус Зика, вирус Западного Нила', en: 'Malaria, dengue fever, Zika virus, West Nile virus' },
  'pests.mosquitoes_treatment': { uz: 'Larvitsid qo\'llash, kattalar chivinlarni nazorat qilish, manba kamaytirish', ru: 'Применение ларвицидов, контроль взрослых комаров, сокращение источников', en: 'Larvicide application, adult mosquito control, source reduction' },
  'pests.rodents_habitat': { uz: 'Chorvador, podval, devorlar, saqlash hududlari', ru: 'Чердаки, подвалы, стены, складские помещения', en: 'Attics, basements, walls, storage areas' },
  'pests.rodents_health': { uz: 'Kasallik tarqalishi, mulk zarari, elektr yong\'inlari', ru: 'Передача болезней, повреждение собственности, электрические пожары', en: 'Disease transmission, property damage, electrical fires' },
  'pests.rodents_treatment': { uz: 'Kemiruvchi yemlari joylashtirish, kirish nuqtalarini yopish, tuzoqlar', ru: 'Размещение родентицидов, заделка точек входа, ловушки', en: 'Rodenticide placement, sealing entry points, trapping' },
  'pests.fleas_habitat': { uz: 'Uy hayvonlari hududlari, gilamlar, mebellar', ru: 'Зоны домашних животных, ковры, мягкая мебель', en: 'Pet areas, carpets, upholstery' },
  'pests.fleas_health': { uz: 'Teri qichishishi, uy hayvonlari noqulayligi, potentsial kasallik tarqalishi', ru: 'Раздражение кожи, дискомфорт домашних животных, потенциальная передача болезней', en: 'Skin irritation, pet discomfort, potential disease transmission' },
  'pests.fleas_treatment': { uz: 'Insektitsid qo\'llash, uy hayvonlari davolash, chang yutish', ru: 'Применение инсектицидов, обработка домашних животных, пылесос', en: 'Insecticide application, pet treatment, vacuuming' },
  'pests.termites_habitat': { uz: 'Yog\'och tuzilmalar, poydevor, nam hududlar', ru: 'Деревянные конструкции, фундаменты, влажные районы', en: 'Wood structures, foundations, damp areas' },
  'pests.termites_health': { uz: 'Tuzilish zarari, mulk qiymati yo\'qolishi', ru: 'Структурные повреждения, потеря стоимости недвижимости', en: 'Structural damage, property value loss' },
  'pests.termites_treatment': { uz: 'Suyuq termitsidlar, yem stansiyalari, yog\'och davolash', ru: 'Жидкие термитициды, приманки, обработка древесины', en: 'Liquid termiticides, bait stations, wood treatment' },
  'pests.beetles_habitat': { uz: 'Saqlangan oziq-ovqat, yog\'och, mato, bog\'lar', ru: 'Хранимая пища, древесина, ткань, сады', en: 'Stored food, wood, fabric, gardens' },
  'pests.beetles_health': { uz: 'Oziq-ovqat ifloslanishi, mulk zarari', ru: 'Загрязнение пищи, повреждение собственности', en: 'Food contamination, property damage' },
  'pests.beetles_treatment': { uz: 'Maqsadli purkalash, oziq-ovqat saqlashni yaxshilash, cheklash', ru: 'Целевое распыление, улучшение хранения продуктов, исключение', en: 'Targeted spraying, food storage improvement, exclusion' },
  'pests.flies_habitat': { uz: 'Axlat hududlari, organik chiqindilar, drenajlar', ru: 'Зоны мусора, органические отходы, стоки', en: 'Garbage areas, organic waste, drains' },
  'pests.flies_health': { uz: 'Kasallik tarqalishi, oziq-ovqat ifloslanishi', ru: 'Передача болезней, загрязнение пищи', en: 'Disease transmission, food contamination' },
  'pests.flies_treatment': { uz: 'Insektitsid qo\'llash, sanitariya yaxshilash, cheklash', ru: 'Применение инсектицидов, улучшение санитарии, исключение', en: 'Insecticide application, sanitation improvement, exclusion' },
  
  // Prevention Tips
  'pests.prevention_tips': { uz: 'Oldini olish maslahatlari', ru: 'Советы по профилактике', en: 'Prevention Tips' },
  'pests.prevention_subtitle': { 
    uz: 'Zararkunandalar paydo bo\'lish xavfini kamaytirish uchun oddiy qadamlarni bajarish',
    ru: 'Простые шаги, которые вы можете предпринять для снижения риска заражения вредителями',
    en: 'Simple steps you can take to reduce the risk of pest infestations'
  },
  'pests.seal_entry': { uz: 'Kirish joylarini yopish', ru: 'Запечатать точки входа', en: 'Seal Entry Points' },
  'pests.seal_entry_desc': { uz: 'Eshiklar, derazalar va quvurlar atrofidagi bo\'shliqlarni yopish', ru: 'Закрыть щели вокруг дверей, окон и труб', en: 'Close gaps around doors, windows, and pipes' },
  'pests.remove_food': { uz: 'Oziq-ovqat manbalarini olib tashlash', ru: 'Удалить источники пищи', en: 'Remove Food Sources' },
  'pests.remove_food_desc': { uz: 'Oziq-ovqatni to\'g\'ri saqlash va to\'kilgan narsalarni darhol tozalash', ru: 'Правильно хранить продукты и немедленно убирать разливы', en: 'Store food properly and clean up spills immediately' },
  'pests.eliminate_water': { uz: 'Suvni bartaraf etish', ru: 'Устранить воду', en: 'Eliminate Water' },
  'pests.eliminate_water_desc': { uz: 'Suv oqimlarini tuzatish va to\'xtagan suv manbalarini olib tashlash', ru: 'Исправить утечки и удалить стоячие источники воды', en: 'Fix leaks and remove standing water sources' },
  'pests.regular_cleaning': { uz: 'Muntazam tozalash', ru: 'Регулярная уборка', en: 'Regular Cleaning' },
  'pests.regular_cleaning_desc': { uz: 'Toza muhitlarni saqlash, ayniqsa oshxonalarda', ru: 'Поддерживать чистую среду, особенно на кухнях', en: 'Maintain clean environments, especially kitchens' },
  'pests.emergency_title': { uz: 'Zararkunandalar favqulodda holati?', ru: 'Чрезвычайная ситуация с вредителями?', en: 'Pest Emergency?' },
  'pests.emergency_desc': { 
    uz: 'Muammo yanada yomonlashishini kutmaymiz. Bizning favqulodda jamoamiz 24/7 mavjud.',
    ru: 'Не ждите, пока проблема усугубится. Наша команда экстренного реагирования доступна 24/7.',
    en: 'Don\'t wait for the problem to get worse. Our emergency response team is available 24/7.'
  },
  'pests.call_now': { uz: 'Hozir qo\'ng\'iroq qiling', ru: 'Позвоните сейчас', en: 'Call Now' },
  'pests.request_service': { uz: 'Onlayn xizmat so\'rang', ru: 'Запросить услугу онлайн', en: 'Request Service Online' },
  'pests.our_treatment': { uz: 'Bizning davolash', ru: 'Наше лечение', en: 'Our Treatment' },
  'pests.get_treatment': { uz: 'Davolash olish', ru: 'Получить лечение', en: 'Get Treatment' },
  
  // Working Hours
  'working_hours': { uz: 'Ish vaqti', ru: 'Рабочее время', en: 'Working Hours' },
  'working_hours_weekdays': { uz: 'Dush-Pay: 8:00 - 18:00', ru: 'Пн-Пт: 8:00 - 18:00', en: 'Mon-Fri: 8:00 - 18:00' },
  'working_hours_emergency': { uz: 'Favqulodda: 24/7', ru: 'Экстренно: 24/7', en: 'Emergency: 24/7' },
  
  // Contact Page
  'contact.ready_to_solve': { 
    uz: 'Zararkunandalar muammosini hal qilishga tayyormisiz? Darhol yordam uchun bizning mutaxassis jamoamiz bilan bog\'laning.',
    ru: 'Готовы решить проблему с вредителями? Свяжитесь с нашей командой экспертов для немедленной помощи.',
    en: 'Ready to solve your pest problem? Get in touch with our expert team for immediate assistance.'
  },
  
  // Contact Form
  'contact.get_free_consultation': { uz: 'Bepul maslahat oling', ru: 'Получите бесплатную консультацию', en: 'Get Free Consultation' },
  'contact.fill_form_desc': { 
    uz: 'Formani to\'ldiring va biz 30 daqiqa ichida siz bilan bog\'lanamiz',
    ru: 'Заполните форму, и мы свяжемся с вами в течение 30 минут',
    en: 'Fill out the form and we\'ll contact you within 30 minutes'
  },
  'contact.name': { uz: 'Ism *', ru: 'Имя *', en: 'Name *' },
  'contact.name_placeholder': { uz: 'To\'liq ismingiz', ru: 'Ваше полное имя', en: 'Your full name' },
  'contact.phone_placeholder': { uz: '+998 90 123 45 67', ru: '+998 90 123 45 67', en: '+998 90 123 45 67' },
  'contact.email_placeholder': { uz: 'your@email.com', ru: 'your@email.com', en: 'your@email.com' },
  'contact.service_needed': { uz: 'Kerakli xizmat', ru: 'Требуемая услуга', en: 'Service Needed' },
  'contact.select_service': { uz: 'Xizmatni tanlang', ru: 'Выберите услугу', en: 'Select a service' },
  'contact.send_message': { uz: 'Xabar yuborish', ru: 'Отправить сообщение', en: 'Send Message' },
  'contact.privacy_policy': { 
    uz: 'Ushbu formani yuborish orqali siz bizning maxfiylik siyosatiga rozilik berasiz',
    ru: 'Отправляя эту форму, вы соглашаетесь с нашей политикой конфиденциальности',
    en: 'By submitting this form, you agree to our privacy policy'
  },
  
  // Service Options
  'contact.service.home': { uz: 'Uy dezinfeksiyasi', ru: 'Дезинфекция дома', en: 'Home Disinfection' },
  'contact.service.office': { uz: 'Ofis dezinfeksiyasi', ru: 'Дезинфекция офиса', en: 'Office Disinfection' },
  'contact.service.transport': { uz: 'Transport dezinfeksiyasi', ru: 'Дезинфекция транспорта', en: 'Transport Disinfection' },
  'contact.service.pest': { uz: 'Zararkunandalar nazorati', ru: 'Борьба с вредителями', en: 'Pest Control' },
  'contact.service.garden': { uz: 'Bog\' himoyasi', ru: 'Защита сада', en: 'Garden Protection' },
  'contact.service.emergency': { uz: 'Favqulodda xizmat', ru: 'Экстренная служба', en: 'Emergency Service' },
  'contact.message_placeholder': { 
    uz: 'Zararkunandalar muammosi yoki xizmat ehtiyojlaringizni tasvirlab bering...',
    ru: 'Опишите вашу проблему с вредителями или потребности в услугах...',
    en: 'Describe your pest problem or service needs...'
  },
  'contact.emergency_service_title': { uz: '24/7 Favqulodda xizmat', ru: '24/7 Экстренная служба', en: '24/7 Emergency Service' },
  'contact.emergency_service_desc': { 
    uz: 'Shoshilinch zararkunandalar muammosi? Biz kun bo\'yi mavjudmiz',
    ru: 'Срочная проблема с вредителями? Мы доступны круглосуточно',
    en: 'Urgent pest problems? We\'re available around the clock'
  },
  'contact.social_media_desc': { 
    uz: 'Zararkunandalar oldini olish maslahatlari, maxsus takliflar va xizmatlarimiz haqidagi yangiliklar uchun ijtimoiy tarmoqlarda bizni kuzatib boring.',
    ru: 'Следите за нами в социальных сетях для получения советов по профилактике вредителей, специальных предложений и обновлений наших услуг.',
    en: 'Follow us on social media for pest prevention tips, special offers, and updates on our services.'
  },
  
  // Pricing Format
  'pricing.from': { uz: 'dan boshlab', ru: 'от', en: 'From' },
  'pricing.currency': { uz: 'UZS', ru: 'UZS', en: 'UZS' },
  'pricing.home': { uz: '150 000', ru: '150 000', en: '150,000' },
  'pricing.office': { uz: '300 000', ru: '300 000', en: '300,000' },
  'pricing.transport': { uz: '100 000', ru: '100 000', en: '100,000' },
  'pricing.antivirus': { uz: '200 000', ru: '200 000', en: '200,000' },
  'pricing.pest': { uz: '120 000', ru: '120 000', en: '120,000' },
  'pricing.garden': { uz: '250 000', ru: '250 000', en: '250,000' },
  
  // Services Page
  'services.process_title': { uz: 'Bizning xizmat jarayoni', ru: 'Наш процесс обслуживания', en: 'Our Service Process' },
  'services.process_subtitle': { 
    uz: 'Oddiy, samarali va shaffof jarayon sizning to\'liq mamnuniyatni ta\'minlash uchun',
    ru: 'Простой, эффективный и прозрачный процесс для обеспечения вашего полного удовлетворения',
    en: 'Simple, efficient, and transparent process to ensure your complete satisfaction'
  },
  'services.ready_to_start': { uz: 'Boshlashga tayyormisiz?', ru: 'Готовы начать?', en: 'Ready to Get Started?' },
  'services.ready_to_start_desc': { 
    uz: 'Bugun biz bilan bog\'laning bepul maslahat va sizning ehtiyojlaringiz uchun maxsus yechim uchun.',
    ru: 'Свяжитесь с нами сегодня для бесплатной консультации и индивидуального решения для ваших потребностей.',
    en: 'Contact us today for a free consultation and customized solution for your needs.'
  },
  'services.get_free_quote': { uz: 'Bepul narx oling', ru: 'Получить бесплатную расценку', en: 'Get Free Quote' },
  'services.emergency_service': { uz: 'Favqulodda xizmat', ru: 'Экстренная служба', en: 'Emergency Service' },
  'services.emergency_response_desc': { 
    uz: 'Bizning 24/7 favqulodda jamoamiz shoshilinch zararkunandalar nazorati vaziyatlarida yordam berishga tayyor.',
    ru: 'Наша команда экстренного реагирования 24/7 готова помочь в срочных ситуациях борьбы с вредителями.',
    en: 'Our 24/7 emergency response team is ready to help with urgent pest control situations.'
  },
  
  // About Page
  'about.why_choose': { uz: 'Nega SamDezin tanlashingiz kerak?', ru: 'Почему стоит выбрать SamDezin?', en: 'Why Choose SamDezin?' },
  'about.why_choose_subtitle': { 
    uz: 'Biz yillik tajribani zamonaviy texnikalar va ekologik xavfsiz mahsulotlar bilan birlashtiramiz',
    ru: 'Мы сочетаем годы опыта с современными техниками и экологически безопасными продуктами',
    en: 'We combine years of experience with modern techniques and eco-friendly products'
  },
  'about.what_clients_say': { uz: 'Mijozlarimiz nima deydi', ru: 'Что говорят наши клиенты', en: 'What Our Clients Say' },
  'about.what_clients_say_subtitle': { 
    uz: 'Faqat bizning so\'zimizni olmang - mamnun mijozlarimizdan eshiting',
    ru: 'Не верьте только нашим словам - услышьте от наших довольных клиентов',
    en: 'Don\'t just take our word for it - hear from our satisfied customers'
  },
  'about.happy_clients': { uz: 'Mamnun mijozlar', ru: 'Довольные клиенты', en: 'Happy Clients' },
  'about.eco_safe': { uz: 'Ekologik xavfsiz', ru: 'Экологично безопасно', en: 'Eco-Safe' },
  'about.support': { uz: 'Qo\'llab-quvvatlash', ru: 'Поддержка', en: 'Support' },
  'about.years_exp': { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years Exp.' },
  
  // FAQ Page
  'faq.get_answers': { 
    uz: 'Bizning zararkunandalar nazorati va dezinfeksiya xizmatlari haqida eng keng tarqalgan savollarga javoblar oling.',
    ru: 'Получите ответы на самые распространенные вопросы о наших услугах по борьбе с вредителями и дезинфекции.',
    en: 'Get answers to the most common questions about our pest control and disinfection services.'
  },
  'faq.categories': { uz: 'Kategoriyalar', ru: 'Категории', en: 'Categories' },
  'faq.expert_team_desc': { 
    uz: 'Bizning mutaxassis jamoamiz 24/7 mavjud bo\'lib, har qanday savollarga javob beradi va shaxsiy yechimlar taqdim etadi.',
    ru: 'Наша команда экспертов доступна 24/7 для ответов на любые вопросы и предоставления индивидуальных решений.',
    en: 'Our expert team is available 24/7 to answer any questions and provide personalized solutions.'
  },
  'faq.quick_tips': { uz: 'Tezkor maslahatlar', ru: 'Быстрые советы', en: 'Quick Tips' },
  'faq.quick_tips_desc': { 
    uz: 'Bizning xizmatimizni kutayotganingizda qilishingiz mumkin bo\'lgan oddiy narsalar',
    ru: 'Простые вещи, которые вы можете делать, ожидая нашего обслуживания',
    en: 'Simple things you can do while waiting for our service'
  },
  'faq.immediate_safety': { uz: 'Darhol xavfsizlik', ru: 'Немедленная безопасность', en: 'Immediate Safety' },
  'faq.safety_children_pets': { 
    uz: 'Bolalar va uy hayvonlarini zararkunandalar joylashgan hududlardan uzoq saqlang',
    ru: 'Держите детей и домашних животных подальше от зараженных участков',
    en: 'Keep children and pets away from infested areas'
  },
  'faq.safety_no_sprays': { 
    uz: 'Professional davolashdan oldin uy purkalarini ishlatmang',
    ru: 'Не используйте бытовые спреи перед профессиональной обработкой',
    en: 'Don\'t use household sprays before professional treatment'
  },
  'faq.safety_ventilate': { 
    uz: 'Har qanday tozalash mahsulotlarini ishlatayotganingizda hududni shamollatiring',
    ru: 'Проветривайте помещение при использовании любых чистящих средств',
    en: 'Ventilate the area if using any cleaning products'
  },
  'faq.preparation': { uz: 'Tayyorgarlik', ru: 'Подготовка', en: 'Preparation' },
  'faq.prep_remove_food': { 
    uz: 'Davolash hududlaridan oziq-ovqat mahsulotlarini olib tashlang',
    ru: 'Уберите продукты питания из зон обработки',
    en: 'Remove food items from treatment areas'
  },
  'faq.prep_clear_access': { 
    uz: 'Zararkunandalar joylashgan hududlarga kirishni tozalang',
    ru: 'Обеспечьте доступ к зараженным участкам',
    en: 'Clear access to infested areas'
  },
  'faq.prep_note_activity': { 
    uz: 'Eng ko\'p zararkunandalar faolligini ko\'rgan joyingizni belgilang',
    ru: 'Отметьте, где вы видели наибольшую активность вредителей',
    en: 'Note where you\'ve seen the most pest activity'
  },
  'faq.documentation': { uz: 'Hujjatlashtirish', ru: 'Документирование', en: 'Documentation' },
  'faq.doc_photos': { 
    uz: 'Zararkunandalar zarari yoki ko\'rinishlarining suratlarini oling',
    ru: 'Сделайте фотографии повреждений или появлений вредителей',
    en: 'Take photos of pest damage or sightings'
  },
  'faq.doc_time_activity': { 
    uz: 'Zararkunandalar eng faol bo\'lgan kun vaqtini belgilang',
    ru: 'Отметьте время дня, когда вредители наиболее активны',
    en: 'Note the time of day pests are most active'
  },
  'faq.doc_record': { 
    uz: 'Zararkunandalarni ko\'rgan joyingizning yozuvini saqlang',
    ru: 'Ведите запись мест, где вы видели вредителей',
    en: 'Keep a record of where you\'ve seen pests'
  },
  'faq.still_have_questions': { uz: 'Hali savollaringiz bormi?', ru: 'Все еще есть вопросы?', en: 'Still Have Questions?' },
  'faq.call_us': { uz: 'Qo\'ng\'iroq qiling', ru: 'Позвоните', en: 'Call' },
  'faq.live_chat': { uz: 'Jonli chat yordami', ru: 'Поддержка в чате', en: 'Live Chat Support' },
  
  // Service Card Buttons
  'services.book_service': { uz: 'Xizmat buyurtma qilish', ru: 'Заказать услугу', en: 'Book Service' },
  'services.learn_more': { uz: 'Batafsil', ru: 'Узнать больше', en: 'Learn More' },
  
  // Service Features
  'services.features.bedroom_living': { uz: 'Yotoqxona va mehmonxona davolash', ru: 'Обработка спальни и гостиной', en: 'Bedroom & Living Room Treatment' },
  'services.features.kitchen_bathroom': { uz: 'Oshxona va hammom sanitizatsiyasi', ru: 'Санитизация кухни и ванной', en: 'Kitchen & Bathroom Sanitization' },
  'services.features.basement_attic': { uz: 'Podval va chorvador tozalash', ru: 'Очистка подвала и чердака', en: 'Basement & Attic Cleaning' },
  'services.features.pet_safe': { uz: 'Uy hayvonlari uchun xavfsiz mahsulotlar', ru: 'Безопасные для домашних животных продукты', en: 'Pet-Safe Products' },
  'services.features.office_sanitization': { uz: 'Ofis maydoni sanitizatsiyasi', ru: 'Санитизация офисного пространства', en: 'Office Space Sanitization' },
  'services.features.factory_floor': { uz: 'Zavod pol davolash', ru: 'Обработка заводского пола', en: 'Factory Floor Treatment' },
  'services.features.hvac_cleaning': { uz: 'HVAC tizimi tozalash', ru: 'Очистка системы HVAC', en: 'HVAC System Cleaning' },
  'services.features.maintenance_plans': { uz: 'Muntazam texnik xizmat rejalari', ru: 'Регулярные планы технического обслуживания', en: 'Regular Maintenance Plans' },
  'services.features.interior_cleaning': { uz: 'Ichki chuqur tozalash', ru: 'Глубокая внутренняя очистка', en: 'Interior Deep Cleaning' },
  'services.features.air_conditioning': { uz: 'Konditsioner davolash', ru: 'Обработка кондиционера', en: 'Air Conditioning Treatment' },
  'services.features.upholstery_sanitization': { uz: 'Mebellar sanitizatsiyasi', ru: 'Санитизация мягкой мебели', en: 'Upholstery Sanitization' },
  'services.features.express_service': { uz: 'Ekspress xizmat mavjud', ru: 'Доступна экспресс-служба', en: 'Express Service Available' },
  'services.features.uv_light': { uz: 'UV-C yorug\'lik davolash', ru: 'Обработка УФ-С светом', en: 'UV-C Light Treatment' },
  'services.features.ozone_disinfection': { uz: 'Ozon dezinfeksiya', ru: 'Озоновая дезинфекция', en: 'Ozone Disinfection' },
  'services.features.surface_sterilization': { uz: 'Sirt sterilizatsiyasi', ru: 'Стерилизация поверхности', en: 'Surface Sterilization' },
  'services.features.air_purification': { uz: 'Havo tozalash', ru: 'Очистка воздуха', en: 'Air Purification' },
  'services.features.cockroach_elimination': { uz: 'Tarakanlarni yo\'q qilish', ru: 'Уничтожение тараканов', en: 'Cockroach Elimination' },
  'services.features.ant_colony': { uz: 'Chumoli koloniyasini olib tashlash', ru: 'Удаление муравьиной колонии', en: 'Ant Colony Removal' },
  'services.features.rodent_control': { uz: 'Kemiruvchilar nazorati', ru: 'Контроль грызунов', en: 'Rodent Control' },
  'services.features.bed_bug_treatment': { uz: 'To\'shak böcekleri davolash', ru: 'Обработка постельных клопов', en: 'Bed Bug Treatment' },
  'services.features.plant_disease': { uz: 'O\'simlik kasalligi davolash', ru: 'Лечение болезней растений', en: 'Plant Disease Treatment' },
  'services.features.insect_control': { uz: 'Hasharotlar nazorati', ru: 'Контроль насекомых', en: 'Insect Control' },
  'services.features.soil_sanitization': { uz: 'Tuproq sanitizatsiyasi', ru: 'Санитизация почвы', en: 'Soil Sanitization' },
  'services.features.organic_methods': { uz: 'Organik usullar mavjud', ru: 'Доступны органические методы', en: 'Organic Methods Available' },
  
  // FAQ Section - Missing translations
  'faq.general': { uz: 'Umumiy', ru: 'Общие', en: 'General' },
  'faq.services': { uz: 'Xizmatlar', ru: 'Услуги', en: 'Services' },
  'faq.safety': { uz: 'Xavfsizlik', ru: 'Безопасность', en: 'Safety' },
  'faq.pricing': { uz: 'Narxlar', ru: 'Цены', en: 'Pricing' },
  'faq.emergency': { uz: 'Favqulodda', ru: 'Экстренная', en: 'Emergency' },
  
  'faq.what_services': { uz: 'Qanday xizmatlar taqdim etasiz?', ru: 'Какие услуги вы предоставляете?', en: 'What services do you provide?' },
  'faq.what_services_answer': { 
    uz: 'Biz uy, ofis, transport dezinfeksiyasi va zararkunandalar nazorati xizmatlarini taqdim etamiz. Barcha xizmatlarimiz ekologik xavfsiz va professional.',
    ru: 'Мы предоставляем услуги по дезинфекции домов, офисов, транспорта и борьбе с вредителями. Все наши услуги экологически безопасны и профессиональны.',
    en: 'We provide home, office, transport disinfection and pest control services. All our services are eco-friendly and professional.'
  },
  
  'faq.how_long': { uz: 'Davolash qancha vaqt oladi?', ru: 'Сколько времени занимает лечение?', en: 'How long does treatment take?' },
  'faq.how_long_answer': { 
    uz: 'Oddiy davolash 1-3 soat oladi. Murakkab holatlar uchun 4-6 soat kerak bo\'lishi mumkin.',
    ru: 'Обычное лечение занимает 1-3 часа. Для сложных случаев может потребоваться 4-6 часов.',
    en: 'Regular treatment takes 1-3 hours. Complex cases may require 4-6 hours.'
  },
  
  'faq.eco_friendly': { uz: 'Xizmatlaringiz ekologik xavfsizmi?', ru: 'Ваши услуги экологически безопасны?', en: 'Are your services eco-friendly?' },
  'faq.eco_friendly_answer': { 
    uz: 'Ha, biz faqat ekologik xavfsiz mahsulotlardan foydalanamiz. Ular bolalar va uy hayvonlari uchun xavfsiz.',
    ru: 'Да, мы используем только экологически безопасные продукты. Они безопасны для детей и домашних животных.',
    en: 'Yes, we use only eco-friendly products. They are safe for children and pets.'
  },
  
  'faq.home_treatment': { uz: 'Uy davolash qanday amalga oshiriladi?', ru: 'Как проводится лечение дома?', en: 'How is home treatment conducted?' },
  'faq.home_treatment_answer': { 
    uz: 'Biz barcha xonalarni, mebellarni va yashash joylarini professional jihozlarda davolaymiz.',
    ru: 'Мы обрабатываем все комнаты, мебель и жилые зоны профессиональным оборудованием.',
    en: 'We treat all rooms, furniture and living areas with professional equipment.'
  },
  
  'faq.office_treatment': { uz: 'Ofis davolash qanday?', ru: 'Как проводится лечение офиса?', en: 'How is office treatment conducted?' },
  'faq.office_treatment_answer': { 
    uz: 'Ofis davolash ish vaqtidan tashqarida amalga oshiriladi va barcha ish joylarini qamrab oladi.',
    ru: 'Офисное лечение проводится вне рабочего времени и охватывает все рабочие места.',
    en: 'Office treatment is conducted outside working hours and covers all work areas.'
  },
  
  'faq.transport_treatment': { uz: 'Transport davolash qanday?', ru: 'Как проводится лечение транспорта?', en: 'How is transport treatment conducted?' },
  'faq.transport_treatment_answer': { 
    uz: 'Avtomobil va jamoat transportini maxsus jihozlarda to\'liq dezinfeksiya qilamiz.',
    ru: 'Мы полностью дезинфицируем автомобили и общественный транспорт специальным оборудованием.',
    en: 'We fully disinfect cars and public transport with special equipment.'
  },
  
  'faq.safe_for_pets': { uz: 'Uy hayvonlari uchun xavfsizmi?', ru: 'Безопасно ли для домашних животных?', en: 'Is it safe for pets?' },
  'faq.safe_for_pets_answer': { 
    uz: 'Ha, barcha mahsulotlarimiz uy hayvonlari uchun xavfsiz. Davolashdan keyin 2-3 soat kutish kerak.',
    ru: 'Да, все наши продукты безопасны для домашних животных. После лечения нужно подождать 2-3 часа.',
    en: 'Yes, all our products are safe for pets. After treatment, wait 2-3 hours.'
  },
  
  'faq.safe_for_children': { uz: 'Bolalar uchun xavfsizmi?', ru: 'Безопасно ли для детей?', en: 'Is it safe for children?' },
  'faq.safe_for_children_answer': { 
    uz: 'Ha, barcha mahsulotlarimiz bolalar uchun xavfsiz. Davolashdan keyin 2-3 soat kutish kerak.',
    ru: 'Да, все наши продукты безопасны для детей. После лечения нужно подождать 2-3 часа.',
    en: 'Yes, all our products are safe for children. After treatment, wait 2-3 hours.'
  },
  
  'faq.ventilation_needed': { uz: 'Ventilyatsiya kerakmi?', ru: 'Нужна ли вентиляция?', en: 'Is ventilation needed?' },
  'faq.ventilation_needed_answer': { 
    uz: 'Davolashdan keyin 2-3 soat ventilyatsiya qilish tavsiya etiladi.',
    ru: 'После лечения рекомендуется проветривание в течение 2-3 часов.',
    en: 'Ventilation is recommended for 2-3 hours after treatment.'
  },
  
  'faq.pricing_structure': { uz: 'Narxlar qanday?', ru: 'Какова структура цен?', en: 'What is the pricing structure?' },
  'faq.pricing_structure_answer': { 
    uz: 'Narxlar maydon va xizmat turiga qarab belgilanadi. Bepul maslahat va narx taklifini oling.',
    ru: 'Цены определяются площадью и типом услуги. Получите бесплатную консультацию и предложение.',
    en: 'Prices are determined by area and service type. Get free consultation and quote.'
  },
  


  // Pests Section - Missing translations
  'pests.cockroaches_desc': { 
    uz: 'Tarakanlar oshxona va hammomlarda yashaydi. Ular oziq-ovqat ifloslanishi va kasallik tarqatish xavfini oshiradi.',
    ru: 'Тараканы живут на кухнях и в ванных. Они увеличивают риск загрязнения пищи и распространения болезней.',
    en: 'Cockroaches live in kitchens and bathrooms. They increase the risk of food contamination and disease spread.'
  },
  'pests.ants_desc': { 
    uz: 'Chumolilar oshxona va bog\'larda yashaydi. Ular oziq-ovqat ifloslanishi va tuzilish zarariga olib keladi.',
    ru: 'Муравьи живут на кухнях и в садах. Они приводят к загрязнению пищи и структурным повреждениям.',
    en: 'Ants live in kitchens and gardens. They lead to food contamination and structural damage.'
  },
  'pests.rodents_desc': { 
    uz: 'Kemiruvchilar chorvador va podvallarda yashaydi. Ular kasallik tarqatish va mulk zarariga olib keladi.',
    ru: 'Грызуны живут на чердаках и в подвалах. Они приводят к распространению болезней и повреждению имущества.',
    en: 'Rodents live in attics and basements. They lead to disease transmission and property damage.'
  },
  'pests.bed_bugs_desc': { 
    uz: 'To\'shak böcekleri to\'shaklar va mebellarda yashaydi. Ular teri qichishishi va uyqu buzilishiga olib keladi.',
    ru: 'Постельные клопы живут в матрасах и мебели. Они приводят к раздражению кожи и нарушению сна.',
    en: 'Bed bugs live in mattresses and furniture. They lead to skin irritation and sleep disruption.'
  },
  
  'pests.allergies': { uz: 'Allergiya', ru: 'Аллергия', en: 'Allergies' },
  'pests.nuisance': { uz: 'Noqulaylik', ru: 'Неудобство', en: 'Nuisance' },
  'pests.bites': { uz: 'Tishlash', ru: 'Укусы', en: 'Bites' },
  'pests.sleep_disruption': { uz: 'Uyqu buzilishi', ru: 'Нарушение сна', en: 'Sleep disruption' },
  'pests.psychological_impact': { uz: 'Psixologik ta\'sir', ru: 'Психологическое воздействие', en: 'Psychological impact' },
  
  // Missing about translations
  'about.certified_team': { uz: 'Sertifikatlangan jamoa', ru: 'Сертифицированная команда', en: 'Certified Team' },
  'about.certified_team_desc': { 
    uz: 'Bizning mutaxassislarimiz barcha kerakli sertifikatlarga ega va doimiy o\'qitishdan o\'tadi',
    ru: 'Наши специалисты имеют все необходимые сертификаты и проходят постоянное обучение',
    en: 'Our specialists have all necessary certifications and undergo continuous training'
  },
  'about.eco_friendly': { uz: 'Ekologik xavfsiz', ru: 'Экологически безопасно', en: 'Eco-Friendly' },
  'about.eco_friendly_desc': { 
    uz: 'Biz faqat ekologik xavfsiz mahsulotlardan foydalanamiz, ular bolalar va uy hayvonlari uchun xavfsiz',
    ru: 'Мы используем только экологически безопасные продукты, безопасные для детей и домашних животных',
    en: 'We use only eco-friendly products that are safe for children and pets'
  },
  'about.emergency_service': { uz: 'Favqulodda xizmat', ru: 'Экстренная служба', en: 'Emergency Service' },
  'about.emergency_service_desc': { 
    uz: '24/7 favqulodda chaqiruvlarga javob beramiz va 30 daqiqada yetib boramiz',
    ru: 'Мы отвечаем на экстренные вызовы 24/7 и приезжаем в течение 30 минут',
    en: 'We respond to emergency calls 24/7 and arrive within 30 minutes'
  },
  'about.subtitle': { 
    uz: 'Professional zararkunandalar nazorati va dezinfeksiya xizmatlari sizning xavfsizligingiz uchun',
    ru: 'Профессиональные услуги по борьбе с вредителями и дезинфекции для вашей безопасности',
    en: 'Professional pest control and disinfection services for your safety'
  },
  
  // Testimonial translations
  'testimonial.aziza.name': { uz: 'Aziza Karimova', ru: 'Азиза Каримова', en: 'Aziza Karimova' },
  'testimonial.aziza.role': { uz: 'Uy egasi', ru: 'Домовладелец', en: 'Homeowner' },
  'testimonial.aziza.content': { 
    uz: 'Ajoyib xizmat! Ular professional, puxta va ekologik xavfsiz edi. Yuqori tavsiya etaman!',
    ru: 'Отличный сервис! Они были профессиональными, тщательными и экологически безопасными. Очень рекомендую!',
    en: 'Excellent service! They were professional, thorough, and eco-friendly. Highly recommend!'
  },
  
  'testimonial.dmitri.name': { uz: 'Dmitri Petrov', ru: 'Дмитрий Петров', en: 'Dmitri Petrov' },
  'testimonial.dmitri.role': { uz: 'Ofis menejeri', ru: 'Офис-менеджер', en: 'Office Manager' },
  'testimonial.dmitri.content': { 
    uz: 'Tez javob va ajoyib natijalar. Bizning ofis endi to\'liq zararkunandalardan xoli.',
    ru: 'Быстрый ответ и отличные результаты. Наш офис теперь полностью свободен от вредителей.',
    en: 'Fast response time and great results. Our office is now completely pest-free.'
  },
  
  'testimonial.marina.name': { uz: 'Marina Ivanova', ru: 'Марина Иванова', en: 'Marina Ivanova' },
  'testimonial.marina.role': { uz: 'Restoran egasi', ru: 'Владелец ресторана', en: 'Restaurant Owner' },
  'testimonial.marina.content': { 
    uz: 'Professional jamoa, batafsillarga e\'tibor bilan. Bizning mijozlar xavfsiz va qulay his qilishadi.',
    ru: 'Профессиональная команда с вниманием к деталям. Наши клиенты чувствуют себя в безопасности и комфортно.',
    en: 'Professional team with attention to detail. Our customers feel safe and comfortable.'
  },
  
  // Missing hero translations
  'hero.eco_friendly': { uz: 'Ekologik xavfsiz', ru: 'Экологически безопасно', en: 'Eco-Friendly' },
  'hero.emergency_24_7': { uz: '24/7 favqulodda', ru: '24/7 экстренно', en: '24/7 Emergency' },
  'hero.certified_experts': { uz: 'Sertifikatlangan mutaxassislar', ru: 'Сертифицированные эксперты', en: 'Certified Experts' },
  'hero.get_free_quote': { uz: 'Bepul maslahat olish', ru: 'Получить бесплатную консультацию', en: 'Get Free Quote' },
  'hero.emergency_desc': { 
    uz: 'Favqulodda holatlar uchun 24/7 mavjud. 30 daqiqada yetib boramiz.',
    ru: 'Доступны 24/7 для экстренных случаев. Приезжаем в течение 30 минут.',
    en: 'Available 24/7 for emergencies. We arrive within 30 minutes.'
  },
  'hero.professional_pest_control': { uz: 'Professional zararkunandalar nazorati', ru: 'Профессиональная борьба с вредителями', en: 'Professional Pest Control' },
  'hero.happy_clients_label': { uz: 'Mamnun mijozlar', ru: 'Довольные клиенты', en: 'Happy Clients' },
  'hero.support_label': { uz: 'Qo\'llab-quvvatlash', ru: 'Поддержка', en: 'Support' },
  'hero.years_experience': { uz: 'Yillik tajriba', ru: 'Лет опыта', en: 'Years Experience' },
  'hero.emergency_line': { uz: '24/7 favqulodda liniya', ru: '24/7 экстренная линия', en: '24/7 Emergency Line' },
  'hero.call_now': { uz: 'Hozir qo\'ng\'iroq qiling', ru: 'Позвонить сейчас', en: 'Call Now' },
  'hero.certified_badge': { uz: 'Sertifikatlangan', ru: 'Сертифицировано', en: 'Certified' },
  'hero.five_star_rated': { uz: '5 yulduzli reyting', ru: '5-звездочный рейтинг', en: '5-Star Rated' },
  
  // TrustSection translations
  'trust.why_trust': { uz: 'Nega SamDezin ishonish kerak?', ru: 'Почему доверять SamDezin?', en: 'Why Trust SamDezin?' },
  'trust.why_trust_subtitle': { 
    uz: 'Professional, sertifikatlangan va ekologik xavfsiz zararkunandalar nazorati xizmatlari',
    ru: 'Профессиональные, сертифицированные и экологически безопасные услуги по борьбе с вредителями',
    en: 'Professional, certified, and eco-friendly pest control services you can rely on'
  },
  
  'trust.certified_licensed': { uz: 'Sertifikatlangan va litsenziyalangan', ru: 'Сертифицировано и лицензировано', en: 'Certified & Licensed' },
  'trust.certified_licensed_desc': { 
    uz: 'O\'zbekiston sog\'liqni saqlash organlari tomonidan to\'liq litsenziyalangan va barcha kerakli sertifikatlarga ega',
    ru: 'Полностью лицензированы органами здравоохранения Узбекистана со всеми необходимыми сертификатами',
    en: 'Fully licensed by Uzbekistan health authorities with all necessary certifications'
  },
  
  'trust.eco_friendly': { uz: 'Ekologik xavfsiz', ru: 'Экологически безопасно', en: 'Eco-Friendly' },
  'trust.eco_friendly_desc': { 
    uz: 'Bolalar, uy hayvonlari va atrof-muhit uchun xavfsiz, sertifikatlangan yashil mahsulotlar',
    ru: 'Безопасно для детей, домашних животных и окружающей среды с сертифицированными зелеными продуктами',
    en: 'Safe for children, pets, and the environment with certified green products'
  },
  
  'trust.emergency_service': { uz: '24/7 favqulodda xizmat', ru: '24/7 экстренная служба', en: '24/7 Emergency Service' },
  'trust.emergency_service_desc': { 
    uz: 'Shoshilinch zararkunandalar nazorati holatlari uchun kun bo\'yi mavjudlik',
    ru: 'Круглосуточная доступность для срочных ситуаций борьбы с вредителями',
    en: 'Round-the-clock availability for urgent pest control situations'
  },
  
  'trust.years_experience': { uz: '5+ yillik tajriba', ru: '5+ лет опыта', en: '5+ Years Experience' },
  'trust.years_experience_desc': { 
    uz: 'Zararkunandalar nazorati va dezinfeksiya xizmatlarida keng tajriba',
    ru: 'Обширный опыт в услугах по борьбе с вредителями и дезинфекции',
    en: 'Extensive experience in pest control and disinfection services'
  },
  

  
  'trust.what_clients_say': { uz: 'Mijozlarimiz nima deydi', ru: 'Что говорят наши клиенты', en: 'What Our Clients Say' },
  'trust.what_clients_say_subtitle': { 
    uz: 'Faqat bizning so\'zimizni olmang - mamnun mijozlarimizdan eshiting',
    ru: 'Не верьте нам на слово - послушайте наших довольных клиентов',
    en: 'Don\'t just take our word for it - hear from our satisfied customers'
  },
  
  'trust.free_consultation': { uz: 'Bepul maslahat mavjud', ru: 'Бесплатная консультация доступна', en: 'Free Consultation Available' },
  'trust.same_day_service': { uz: 'Xuddi shu kun xizmati', ru: 'Служба в тот же день', en: 'Same Day Service' },
  'trust.ready_experience': { uz: 'Professional xizmatni boshdan kechirishga tayyormisiz?', ru: 'Готовы испытать профессиональный сервис?', en: 'Ready to Experience Professional Service?' },
  'trust.join_satisfied_customers': { uz: 'SamDezin zararkunandalar nazorati va dezinfeksiya ehtiyojlari uchun ishonadigan yuzlab mamnun mijozlarga qo\'shiling.', ru: 'Присоединяйтесь к сотням довольных клиентов, которые доверяют SamDezin свои потребности в борьбе с вредителями и дезинфекции.', en: 'Join hundreds of satisfied customers who trust SamDezin for their pest control and disinfection needs.' },
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