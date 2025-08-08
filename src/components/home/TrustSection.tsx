import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Award, 
  Leaf, 
  Clock, 
  Users, 
  CheckCircle,
  Star
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustSection: React.FC = () => {
  const { t } = useLanguage();

  const trustFactors = [
    {
      icon: Shield,
      title: t('trust.certified_title'),
      description: t('trust.certified_desc'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Leaf,
      title: t('trust.eco_title'),
      description: t('trust.eco_desc'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Award,
      title: t('trust.experience'),
      description: t('trust.certified_desc'),
      color: 'text-safety-orange',
      bgColor: 'bg-safety-orange/10',
    },
    {
      icon: Clock,
      title: t('trust.support_title'),
      description: t('trust.support_desc'),
      color: 'text-trust-blue',
      bgColor: 'bg-trust-blue/10',
    },
  ];

  const stats = [
    { number: '500+', label: t('trust.projects'), icon: Users },
    { number: '100%', label: t('trust.eco_title'), icon: Leaf },
    { number: '24/7', label: t('trust.support_title'), icon: Clock },
    { number: '5★', label: t('trust.satisfaction'), icon: Star },
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('trust.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for safe, effective, and environmentally responsible pest control solutions
          </p>
        </div>

        {/* Trust Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFactors.map((factor, index) => {
            const IconComponent = factor.icon;
            return (
              <Card 
                key={factor.title}
                className="service-card bg-background border-0 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 ${factor.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                      <IconComponent className={`w-8 h-8 ${factor.color}`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {factor.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="bg-background rounded-2xl p-8 shadow-card animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={stat.label}
                  className="text-center animate-bounce-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="space-y-2">
                    <IconComponent className="w-8 h-8 text-primary mx-auto" />
                    <div className="text-3xl md:text-4xl font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="inline-flex items-center space-x-6 bg-background rounded-full px-8 py-4 shadow-soft">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Ministry Certified</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Eco-Safe Products</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-foreground">Insured Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;