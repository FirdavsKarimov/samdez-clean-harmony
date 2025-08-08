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
  CheckCircle,
  ArrowRight,
  Clock,
  Phone
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import pageBgPattern from '@/assets/page-bg-pattern.jpg';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Home,
      title: t('services.home'),
      description: 'Complete residential disinfection and pest control for homes and apartments. Safe for families, children, and pets.',
      features: ['Bedroom & Living Room Treatment', 'Kitchen & Bathroom Sanitization', 'Basement & Attic Cleaning', 'Pet-Safe Products'],
      price: 'From 150,000 UZS',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Building2,
      title: t('services.office'),
      description: 'Professional office and industrial facility disinfection services. Maintain healthy work environments.',
      features: ['Office Space Sanitization', 'Factory Floor Treatment', 'HVAC System Cleaning', 'Regular Maintenance Plans'],
      price: 'From 300,000 UZS',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Car,
      title: t('services.transport'),
      description: 'Vehicle and transport disinfection for cars, buses, trucks, and public transportation.',
      features: ['Interior Deep Cleaning', 'Air Conditioning Treatment', 'Upholstery Sanitization', 'Express Service Available'],
      price: 'From 100,000 UZS',
      color: 'text-trust-blue',
      bgColor: 'bg-trust-blue/10',
    },
    {
      icon: Shield,
      title: t('services.antivirus'),
      description: 'Advanced anti-virus sterilization using modern equipment and hospital-grade disinfectants.',
      features: ['UV-C Light Treatment', 'Ozone Disinfection', 'Surface Sterilization', 'Air Purification'],
      price: 'From 200,000 UZS',
      color: 'text-safety-orange',
      bgColor: 'bg-safety-orange/10',
    },
    {
      icon: Bug,
      title: t('services.pest'),
      description: 'Expert pest and rodent control with eco-friendly methods. Effective against all common pests.',
      features: ['Cockroach Elimination', 'Ant Colony Removal', 'Rodent Control', 'Bed Bug Treatment'],
      price: 'From 120,000 UZS',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Trees,
      title: t('services.garden'),
      description: 'Garden and agricultural protection services for healthy crops and beautiful landscapes.',
      features: ['Plant Disease Treatment', 'Insect Control', 'Soil Sanitization', 'Organic Methods Available'],
      price: 'From 250,000 UZS',
      color: 'text-eco-green',
      bgColor: 'bg-eco-green/10',
    },
  ];

  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `url(${pageBgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-service">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional pest control and disinfection services tailored to your specific needs. 
              All services include free consultation and follow-up support.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="service-card bg-gradient-card border-0 shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center`}>
                            <IconComponent className={`w-8 h-8 ${service.color}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground">
                              {service.title}
                            </h3>
                            <p className="text-primary font-semibold">{service.price}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">What's Included:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                        <Button className="flex-1" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Book Service
                        </Button>
                        <Button variant="outline" size="sm">
                          Learn More
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
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, efficient, and transparent process to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Free Consultation', description: 'Initial assessment and quote', icon: Phone },
              { step: '02', title: 'Service Planning', description: 'Customized treatment plan', icon: Shield },
              { step: '03', title: 'Professional Treatment', description: 'Expert application of solutions', icon: CheckCircle },
              { step: '04', title: 'Follow-up Support', description: 'Monitoring and maintenance', icon: Clock },
            ].map((process, index) => {
              const IconComponent = process.icon;
              return (
                <Card 
                  key={process.step}
                  className="text-center bg-background shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-2xl font-bold text-primary">{process.step}</div>
                      <IconComponent className="w-12 h-12 text-secondary mx-auto" />
                      <h3 className="text-lg font-semibold text-foreground">{process.title}</h3>
                      <p className="text-muted-foreground text-sm">{process.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Contact us today for a free consultation and customized solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="shadow-card">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                <Clock className="w-5 h-5 mr-2" />
                Emergency Service
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Services;