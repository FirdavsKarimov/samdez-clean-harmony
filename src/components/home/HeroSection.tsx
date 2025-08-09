import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Phone, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      text: t('hero.eco_friendly'),
      color: 'text-green-500'
    },
    {
      icon: Clock,
      text: t('hero.emergency_24_7'),
      color: 'text-blue-500'
    },
    {
      icon: Users,
      text: t('hero.certified_experts'),
      color: 'text-purple-500'
    }
  ];

  const stats = [
    { number: '500+', label: t('hero.happy_clients_label'), color: 'text-blue-500' },
    { number: '24/7', label: t('hero.support_label'), color: 'text-green-500' },
    { number: '5+', label: t('hero.years_experience'), color: 'text-purple-500' }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-indigo-600/10" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>{t('hero.professional_pest_control')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              {t('hero.subtitle')}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50">
                    <IconComponent className={`w-4 h-4 ${feature.color}`} />
                    <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.get_free_quote')}
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300">
                {t('hero.learn_more')}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Emergency Contact */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('hero.emergency_service')}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {t('hero.emergency_desc')}
                </p>

                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-4">
                    <div className="text-2xl font-bold text-red-600 mb-1">+998 90 123 45 67</div>
                    <div className="text-sm text-red-500">{t('hero.emergency_line')}</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Clock className="w-4 h-4 mr-2" />
                    {t('hero.call_now')}
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{t('hero.certified_badge')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>{t('hero.five_star_rated')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;