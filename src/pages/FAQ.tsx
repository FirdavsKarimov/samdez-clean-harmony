import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  Phone,
  MessageCircle,
  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Users,
  Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const categories = [
    { id: 'general', name: t('faq.general'), icon: HelpCircle },
    { id: 'services', name: t('faq.services'), icon: Shield },
    { id: 'safety', name: t('faq.safety'), icon: CheckCircle },
    { id: 'pricing', name: t('faq.pricing'), icon: Star },
    { id: 'emergency', name: t('faq.emergency'), icon: AlertTriangle }
  ];

  const faqData = {
    general: [
      {
        question: t('faq.what_services'),
        answer: t('faq.what_services_answer')
      },
      {
        question: t('faq.how_long'),
        answer: t('faq.how_long_answer')
      },
      {
        question: t('faq.eco_friendly'),
        answer: t('faq.eco_friendly_answer')
      }
    ],
    services: [
      {
        question: t('faq.home_treatment'),
        answer: t('faq.home_treatment_answer')
      },
      {
        question: t('faq.office_treatment'),
        answer: t('faq.office_treatment_answer')
      },
      {
        question: t('faq.transport_treatment'),
        answer: t('faq.transport_treatment_answer')
      }
    ],
    safety: [
      {
        question: t('faq.safe_for_pets'),
        answer: t('faq.safe_for_pets_answer')
      },
      {
        question: t('faq.safe_for_children'),
        answer: t('faq.safe_for_children_answer')
      },
      {
        question: t('faq.ventilation_needed'),
        answer: t('faq.ventilation_needed_answer')
      }
    ],
    pricing: [
      {
        question: t('faq.pricing_structure'),
        answer: t('faq.pricing_structure_answer')
      },
      {
        question: t('faq.free_consultation'),
        answer: t('faq.free_consultation_answer')
      },
      {
        question: t('faq.payment_methods'),
        answer: t('faq.payment_methods_answer')
      }
    ],
    emergency: [
      {
        question: t('faq.emergency_response'),
        answer: t('faq.emergency_response_answer')
      },
      {
        question: t('faq.after_hours'),
        answer: t('faq.after_hours_answer')
      },
      {
        question: t('faq.urgent_situations'),
        answer: t('faq.urgent_situations_answer')
      }
    ]
  };

  const toggleItem = (itemId: string) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const quickTips = [
    {
      icon: Shield,
      title: t('faq.immediate_safety'),
      tips: [
        t('faq.safety_children_pets'),
        t('faq.safety_no_sprays'),
        t('faq.safety_ventilate')
      ]
    },
    {
      icon: Clock,
      title: t('faq.preparation'),
      tips: [
        t('faq.prep_remove_food'),
        t('faq.prep_clear_access'),
        t('faq.prep_note_activity')
      ]
    },
    {
      icon: FileText,
      title: t('faq.documentation'),
      tips: [
        t('faq.doc_photos'),
        t('faq.doc_time_activity'),
        t('faq.doc_record')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              <span>{t('faq.faq_badge')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('faq.title')}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {t('faq.get_answers')}
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>{t('faq.expert_answers')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span>{t('faq.support_24_7')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-500" />
                <span>{t('faq.professional_team')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
                <h3 className="text-lg font-bold text-gray-900 mb-6">
                  {t('faq.categories')}
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                          activeCategory === category.id
                            ? 'bg-blue-500 text-white shadow-lg'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {faqData[activeCategory as keyof typeof faqData]?.map((item, index) => {
                  const itemId = `${activeCategory}-${index}`;
                  const isOpen = openItems[itemId];
                        
                        return (
                    <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                              <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full flex items-center justify-between text-left"
                              >
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                                </h3>
                                {isOpen ? (
                            <ChevronUp className="w-6 h-6 text-blue-500 flex-shrink-0" />
                                ) : (
                            <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                                )}
                              </button>

                              {isOpen && (
                          <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('faq.quick_tips')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('faq.quick_tips_desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickTips.map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <div key={tip.title} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {tip.title}
                    </h3>
                    <ul className="space-y-3">
                      {tip.tips.map((tipText, i) => (
                        <li key={i} className="flex items-start space-x-3 text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{tipText}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('faq.still_have_questions')}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Our expert team is here to help you with any questions or concerns you may have.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                {t('faq.call_us')}: +998 90 123 45 67
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300">
                <MessageCircle className="w-5 h-5 mr-2" />
                {t('faq.live_chat')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;