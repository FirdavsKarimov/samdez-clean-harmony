import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building, 
  Truck, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesOverview = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.home'),
      description: t('services.home_description'),
      price: `${t('pricing.from')} ${t('pricing.home')} ${t('pricing.currency')}`,
      features: [
        t('services.features.bedroom_living'),
        t('services.features.kitchen_bathroom'),
        t('services.features.pet_safe')
      ],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building,
      title: t('services.office'),
      description: t('services.office_description'),
      price: `${t('pricing.from')} ${t('pricing.office')} ${t('pricing.currency')}`,
      features: [
        t('services.features.office_sanitization'),
        t('services.features.hvac_cleaning'),
        t('services.features.maintenance_plans')
      ],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Truck,
      title: t('services.transport'),
      description: t('services.transport_description'),
      price: `${t('pricing.from')} ${t('pricing.transport')} ${t('pricing.currency')}`,
      features: [
        t('services.features.interior_cleaning'),
        t('services.features.air_conditioning'),
        t('services.features.express_service')
      ],
      color: 'bg-purple-500',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            <span>{t('services.title')}</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                    <div className="text-center">
                      <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                        {service.price}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 text-lg">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center space-x-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action */}
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      {t('services.book_service')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Emergency Service Highlight */}
        <div className="mt-16">
          <Card className="border-0 bg-gradient-to-r from-red-500 to-red-600 text-white shadow-2xl">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">
                    {t('services.emergency_service')}
                  </h3>
                  <p className="text-red-100 text-lg mb-6">
                    {t('services.emergency_response_desc')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      +998 90 123 45 67
                    </Button>
                    <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-red-600">
                      <Clock className="w-4 h-4 mr-2" />
                      24/7 Available
                    </Button>
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-12 h-12" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                      <Star className="w-5 h-5 text-yellow-300 fill-current" />
                    </div>
                    <p className="text-red-100">500+ Emergency Calls Handled</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;