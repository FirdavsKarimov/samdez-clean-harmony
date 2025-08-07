import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Building2, 
  Car, 
  Shield, 
  Bug, 
  Trees,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const ServicesOverview: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      titleKey: 'services.home',
      description: 'Complete home disinfection and sanitization services for families',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Building2,
      titleKey: 'services.office',
      description: 'Professional office and industrial facility cleaning solutions',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Car,
      titleKey: 'services.transport',
      description: 'Vehicle and transport disinfection for safety on the road',
      color: 'text-trust-blue',
      bgColor: 'bg-trust-blue/10',
    },
    {
      icon: Shield,
      titleKey: 'services.antivirus',
      description: 'Advanced anti-virus sterilization and protection services',
      color: 'text-safety-orange',
      bgColor: 'bg-safety-orange/10',
    },
    {
      icon: Bug,
      titleKey: 'services.pest',
      description: 'Expert pest and rodent control with eco-friendly methods',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Trees,
      titleKey: 'services.garden',
      description: 'Garden and agricultural protection for healthy crops',
      color: 'text-eco-green',
      bgColor: 'bg-eco-green/10',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional pest control and disinfection services tailored to your specific needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.titleKey}
                className="service-card bg-gradient-card border-0 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-8 h-8 ${service.color}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Action */}
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="group p-0 h-auto text-primary hover:text-primary-dark"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-service rounded-2xl p-8 border border-border shadow-card">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Emergency Service?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Our 24/7 emergency response team is ready to help with urgent pest control situations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact">
                <Button size="lg" className="shadow-card">
                  <Shield className="w-5 h-5 mr-2" />
                  Get Emergency Help
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;