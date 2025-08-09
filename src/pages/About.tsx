import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  Star,
  Heart,
  Zap,
  Target,
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: t('about.industry_experience'),
      description: t('about.industry_experience_desc'),
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: t('about.certified_team'),
      description: t('about.certified_team_desc'),
      color: 'bg-green-500'
    },
    {
      icon: Award,
      title: t('about.eco_friendly'),
      description: t('about.eco_friendly_desc'),
      color: 'bg-purple-500'
    },
    {
      icon: Clock,
      title: t('about.emergency_service'),
      description: t('about.emergency_service_desc'),
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { number: '500+', label: t('about.happy_clients'), icon: Heart, color: 'text-red-500' },
    { number: '100%', label: t('about.eco_safe'), icon: Shield, color: 'text-green-500' },
    { number: '24/7', label: t('about.support'), icon: Clock, color: 'text-blue-500' },
    { number: '5+', label: t('about.years_exp'), icon: Award, color: 'text-purple-500' }
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
              <Shield className="w-4 h-4" />
              <span>{t('about.title')}</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('about.title')}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {t('about.subtitle')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50">
                    <div className="flex items-center justify-center mb-3">
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('about.mission_desc')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">{t('about.certified_team')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">{t('about.eco_friendly')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">{t('about.emergency_service')}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.story')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('about.expert_team_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.why_choose')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.why_choose_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.title} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('about.what_clients_say')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.what_clients_say_subtitle')}
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
                  <p className="text-gray-600 leading-relaxed mb-6">
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience Professional Service?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust SamDezin for their pest control and disinfection needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Target className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300">
                <TrendingUp className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;