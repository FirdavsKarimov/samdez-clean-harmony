import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  CheckCircle, 
  Star, 
  Users, 
  Award,
  Clock,
  Heart,
  Zap
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustSection = () => {
  const { t } = useLanguage();

  const trustFactors = [
    {
      icon: Shield,
      title: t('trust.certified_licensed'),
      description: t('trust.certified_licensed_desc'),
      color: 'text-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: CheckCircle,
      title: t('trust.eco_friendly'),
      description: t('trust.eco_friendly_desc'),
      color: 'text-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: Clock,
      title: t('trust.emergency_service'),
      description: t('trust.emergency_service_desc'),
      color: 'text-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Award,
      title: t('trust.years_experience'),
      description: t('trust.years_experience_desc'),
      color: 'text-orange-500',
      bgColor: 'bg-orange-50'
    }
  ];

  const testimonials = [
    {
      name: t('testimonial.aziza.name'),
      role: t('testimonial.aziza.role'),
      content: t('testimonial.aziza.content'),
      rating: 5,
      avatar: 'AK'
    },
    {
      name: t('testimonial.dmitri.name'),
      role: t('testimonial.dmitri.role'),
      content: t('testimonial.dmitri.content'),
      rating: 5,
      avatar: 'DP'
    },
    {
      name: t('testimonial.marina.name'),
      role: t('testimonial.marina.role'),
      content: t('testimonial.marina.content'),
      rating: 5,
      avatar: 'MI'
    }
  ];

  const stats = [
    { number: '500+', label: t('hero.happy_clients'), icon: Heart, color: 'text-red-500' },
    { number: '24/7', label: t('hero.support_24_7'), icon: Clock, color: 'text-blue-500' },
    { number: '5+', label: t('about.years_exp'), icon: Award, color: 'text-green-500' },
    { number: '100%', label: t('trust.satisfaction'), icon: Star, color: 'text-yellow-500' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        
        {/* Trust Factors */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('trust.why_trust')}
          </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('trust.why_trust_subtitle')}
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
                <div key={factor.title} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 ${factor.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${factor.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {factor.title}
                      </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
            );
          })}
          </div>
        </div>

        {/* Stats */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-center mb-4">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('trust.what_clients_say')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('trust.what_clients_say_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {t('trust.ready_experience')}
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t('trust.join_satisfied_customers')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                <span>{t('trust.free_consultation')}</span>
            </div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>{t('trust.same_day_service')}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;