import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building, 
  Truck, 
  Shield, 
  Bug, 
  TreePine,
  Phone,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  Award
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { backgroundImages } from '@/assets/backgrounds';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.home'),
      price: `${t('pricing.from')} ${t('pricing.home')} ${t('pricing.currency')}`,
      description: t('services.home_description'),
      features: [
        t('services.features.bedroom_living'),
        t('services.features.kitchen_bathroom'),
        t('services.features.basement_attic'),
        t('services.features.pet_safe')
      ],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600',
      bgGradient: 'from-blue-50 to-blue-100'
    },
    {
      icon: Building,
      title: t('services.office'),
      price: `${t('pricing.from')} ${t('pricing.office')} ${t('pricing.currency')}`,
      description: t('services.office_description'),
      features: [
        t('services.features.office_sanitization'),
        t('services.features.factory_floor'),
        t('services.features.hvac_cleaning'),
        t('services.features.maintenance_plans')
      ],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600',
      bgGradient: 'from-green-50 to-green-100'
    },
    {
      icon: Truck,
      title: t('services.transport'),
      price: `${t('pricing.from')} ${t('pricing.transport')} ${t('pricing.currency')}`,
      description: t('services.transport_description'),
      features: [
        t('services.features.interior_cleaning'),
        t('services.features.air_conditioning'),
        t('services.features.upholstery_sanitization'),
        t('services.features.express_service')
      ],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600',
      bgGradient: 'from-purple-50 to-purple-100'
    },
    {
      icon: Shield,
      title: t('services.antivirus'),
      price: `${t('pricing.from')} ${t('pricing.antivirus')} ${t('pricing.currency')}`,
      description: t('services.antivirus_description'),
      features: [
        t('services.features.uv_light'),
        t('services.features.ozone_disinfection'),
        t('services.features.surface_sterilization'),
        t('services.features.air_purification')
      ],
      color: 'bg-red-500',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100'
    }
  ];

  const processSteps = [
    {
      icon: Phone,
      title: t('process.free_consultation'),
      description: t('process.free_consultation_desc'),
      color: 'bg-blue-500'
    },
    {
      icon: Clock,
      title: t('process.service_planning'),
      description: t('process.service_planning_desc'),
      color: 'bg-green-500'
    },
    {
      icon: Shield,
      title: t('process.professional_treatment'),
      description: t('process.professional_treatment_desc'),
      color: 'bg-purple-500'
    },
    {
      icon: Users,
      title: t('process.follow_up_support'),
      description: t('process.follow_up_support_desc'),
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Star, color: 'text-yellow-500' },
    { number: '24/7', label: 'Support', icon: Clock, color: 'text-blue-500' },
    { number: '5+', label: 'Years Experience', icon: Award, color: 'text-green-500' },
    { number: '100%', label: 'Satisfaction', icon: CheckCircle, color: 'text-purple-500' }
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
              <span>Professional Services</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('services.title')}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12">
              {t('services.subtitle')}
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

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {service.title}
                            </h3>
                            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              {service.price}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 text-lg">What is Included:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-3 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
                        <Button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                          <Phone className="w-4 h-4 mr-2" />
                          {t('services.book_service')}
                        </Button>
                        <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 py-3 px-6 rounded-lg font-semibold transition-all duration-300">
                          {t('services.learn_more')}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t('services.process_title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.process_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="relative group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connection Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 transform -translate-y-1/2" />
                  )}
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
              {t('services.ready_to_start')}
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              {t('services.ready_to_start_desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                <Phone className="w-5 h-5 mr-2" />
                {t('services.get_free_quote')}
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300">
                <Shield className="w-5 h-5 mr-2" />
                {t('services.emergency_service')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;