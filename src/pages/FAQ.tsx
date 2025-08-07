import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChevronDown, 
  ChevronRight,
  Shield,
  Clock,
  DollarSign,
  Home,
  Phone,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

const FAQ = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqCategories = [
    {
      title: 'Service Safety',
      icon: Shield,
      color: 'text-primary',
      questions: [
        {
          question: 'Are your treatments safe for children and pets?',
          answer: 'Yes, absolutely. We use only eco-friendly, certified products that are safe for children and pets when applied correctly. Our treatments target specific pests while being harmless to humans and animals. We also provide detailed safety instructions and waiting periods when necessary.'
        },
        {
          question: 'What safety measures do your technicians follow?',
          answer: 'Our technicians are fully trained and certified, wearing protective equipment during treatments. They follow strict safety protocols, properly ventilate treated areas, and ensure all products are applied according to manufacturer guidelines and local regulations.'
        },
        {
          question: 'Do I need to leave my home during treatment?',
          answer: 'In most cases, you can stay in your home during treatment. For certain intensive treatments, we may recommend leaving for 2-4 hours. We always inform you in advance if temporary evacuation is needed and provide clear return instructions.'
        }
      ]
    },
    {
      title: 'Scheduling & Process',
      icon: Clock,
      color: 'text-secondary',
      questions: [
        {
          question: 'How quickly can you respond to emergency calls?',
          answer: 'We offer 24/7 emergency service with response times typically within 2-4 hours for urgent situations. Emergency calls include situations with health risks, large infestations, or commercial food service disruptions.'
        },
        {
          question: 'How long does a typical treatment take?',
          answer: 'Treatment time varies by property size and infestation level. Residential treatments typically take 1-3 hours, while commercial properties may require 4-8 hours. We provide estimated timeframes during initial consultation.'
        },
        {
          question: 'Do you provide follow-up services?',
          answer: 'Yes, follow-up is included in all our service packages. We typically schedule follow-up visits 7-14 days after initial treatment to ensure effectiveness and make any necessary adjustments at no additional cost.'
        }
      ]
    },
    {
      title: 'Pricing & Guarantees',
      icon: DollarSign,
      color: 'text-safety-orange',
      questions: [
        {
          question: 'Do you offer free consultations and quotes?',
          answer: 'Yes, we provide completely free on-site consultations and detailed quotes. Our experts will assess your situation, identify pest types, and recommend the most effective treatment plan with transparent pricing.'
        },
        {
          question: 'What is included in your service guarantee?',
          answer: 'We offer a 30-day satisfaction guarantee on all treatments. If pests return within the guarantee period, we will re-treat your property at no additional charge. Some treatments include extended warranties up to 6 months.'
        },
        {
          question: 'Do you offer payment plans or discounts?',
          answer: 'We offer various payment options including installment plans for larger commercial projects. We also provide discounts for regular maintenance contracts, senior citizens, and multiple service bookings.'
        }
      ]
    },
    {
      title: 'Property Types',
      icon: Home,
      color: 'text-trust-blue',
      questions: [
        {
          question: 'Do you service both residential and commercial properties?',
          answer: 'Yes, we provide comprehensive services for homes, apartments, offices, restaurants, warehouses, factories, and all types of commercial facilities. Each property type receives customized treatment plans.'
        },
        {
          question: 'Can you treat outdoor areas and gardens?',
          answer: 'Absolutely. We offer specialized outdoor treatments for gardens, yards, patios, and agricultural areas. Our outdoor treatments are designed to be environmentally responsible while effectively controlling pests.'
        },
        {
          question: 'Do you provide preventive maintenance programs?',
          answer: 'Yes, we offer customized preventive maintenance programs with regular scheduled visits to prevent infestations before they occur. These programs are especially popular with restaurants, hotels, and other commercial facilities.'
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const faqId = categoryIndex * 100 + questionIndex;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-service">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('nav.faq')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get answers to the most common questions about our pest control and disinfection services.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Category Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">Categories</h2>
                <div className="space-y-2">
                  {faqCategories.map((category, index) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.title}
                        className="w-full flex items-center space-x-3 p-3 rounded-lg text-left hover:bg-accent transition-smooth"
                        onClick={() => document.getElementById(`category-${index}`)?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        <IconComponent className={`w-5 h-5 ${category.color}`} />
                        <span className="text-sm font-medium text-foreground">{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* FAQ Content */}
            <div className="lg:col-span-3 space-y-12">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.title} id={`category-${categoryIndex}`} className="animate-fade-in">
                    
                    {/* Category Header */}
                    <div className="flex items-center space-x-3 mb-8">
                      <div className={`w-12 h-12 bg-${category.color.split('-')[1]}/10 rounded-lg flex items-center justify-center`}>
                        <IconComponent className={`w-6 h-6 ${category.color}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                    </div>

                    {/* Questions */}
                    <div className="space-y-4">
                      {category.questions.map((faq, questionIndex) => {
                        const faqId = categoryIndex * 100 + questionIndex;
                        const isOpen = openFAQ === faqId;
                        
                        return (
                          <Card key={questionIndex} className="shadow-soft border-0 bg-gradient-card">
                            <CardContent className="p-0">
                              
                              {/* Question */}
                              <button
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-accent/50 transition-smooth rounded-lg"
                                onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                              >
                                <h3 className="text-lg font-semibold text-foreground pr-4">
                                  {faq.question}
                                </h3>
                                {isOpen ? (
                                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                ) : (
                                  <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                              </button>

                              {/* Answer */}
                              {isOpen && (
                                <div className="px-6 pb-6 animate-fade-in">
                                  <div className="border-t border-border pt-4">
                                    <p className="text-muted-foreground leading-relaxed">
                                      {faq.answer}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Quick Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple things you can do while waiting for our service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Immediate Safety',
                tips: ['Keep children and pets away from infested areas', 'Don\'t use household sprays before professional treatment', 'Ventilate the area if using any cleaning products']
              },
              {
                icon: Home,
                title: 'Preparation',
                tips: ['Remove food items from treatment areas', 'Clear access to infested areas', 'Note where you\'ve seen the most pest activity']
              },
              {
                icon: Phone,
                title: 'Documentation',
                tips: ['Take photos of pest damage or sightings', 'Note the time of day pests are most active', 'Keep a record of where you\'ve seen pests']
              }
            ].map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card 
                  key={tip.title}
                  className="bg-background shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <IconComponent className="w-12 h-12 text-primary mx-auto mb-3" />
                      <h3 className="text-lg font-semibold text-foreground">{tip.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {tip.tips.map((tipText, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{tipText}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Our expert team is available 24/7 to answer any questions and provide personalized solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-smooth shadow-card">
                <Phone className="w-5 h-5 inline mr-2" />
                Call: +998 90 123 45 67
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-smooth">
                <CheckCircle className="w-5 h-5 inline mr-2" />
                Live Chat Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;