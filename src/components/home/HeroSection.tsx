import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Shield, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-pest-control.jpg';
import floatingParticles from '@/assets/floating-particles.jpg';

const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${floatingParticles})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-8 h-8 bg-white/15 rounded-full backdrop-blur-sm" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 bg-white/10 rounded-full backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-medium">Certified & Eco-Friendly</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {t('hero.title')}
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl">
                {t('hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 shadow-card"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('hero.cta')}
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-safety-orange rounded-full flex items-center justify-center animate-pulse">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white/80 text-sm">24/7 Emergency Service</p>
                  <p className="text-white font-bold text-lg">+998 90 123 45 67</p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: 'Certified' },
                { icon: CheckCircle, label: 'Eco-Safe' },
                { icon: Phone, label: '24/7 Support' },
              ].map(({ icon: Icon, label }, index) => (
                <div 
                  key={label}
                  className="flex items-center space-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                  <span className="text-white/90 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Professional pest control specialists"
                className="w-full h-auto rounded-2xl shadow-float"
              />
              
              {/* Floating Stats */}
              <div className="absolute -top-6 -left-6 bg-white rounded-lg shadow-card p-4 animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-xs text-muted-foreground">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-card p-4 animate-bounce-in" style={{ animationDelay: '1.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-muted-foreground">Eco-Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;