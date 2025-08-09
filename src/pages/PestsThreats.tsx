import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle, 
  Shield, 
  Home, 
  Heart,
  Phone,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import bedbugsImage from '@/assets/pests/bedbugs.jpg';
import cockroachesImage from '@/assets/pests/cockroaches.jpg';
import antsImage from '@/assets/pests/ants.jpg';
import mosquitoesImage from '@/assets/pests/mosquitoes.jpg';
import rodentsImage from '@/assets/pests/rodents.jpg';

const PestsThreats = () => {
  const { t } = useLanguage();

  const pests = [
    {
      name: t('pests.bed_bugs'),
      image: bedbugsImage,
      habitat: t('pests.bed_bugs_habitat'),
      healthRisk: t('pests.bed_bugs_health'),
      treatment: t('pests.bed_bugs_treatment'),
      severity: t('pests.high'),
      color: 'text-destructive'
    },
    {
      name: t('pests.cockroaches'),
      image: cockroachesImage,
      habitat: t('pests.cockroaches_habitat'),
      healthRisk: t('pests.cockroaches_health'),
      treatment: t('pests.cockroaches_treatment'),
      severity: t('pests.very_high'),
      color: 'text-destructive'
    },
    {
      name: t('pests.ants'),
      image: antsImage,
      habitat: t('pests.ants_habitat'),
      healthRisk: t('pests.ants_health'),
      treatment: t('pests.ants_treatment'),
      severity: t('pests.medium'),
      color: 'text-safety-orange'
    },
    {
      name: t('pests.mosquitoes'),
      image: mosquitoesImage,
      habitat: t('pests.mosquitoes_habitat'),
      healthRisk: t('pests.mosquitoes_health'),
      treatment: t('pests.mosquitoes_treatment'),
      severity: t('pests.very_high'),
      color: 'text-destructive'
    },
    {
      name: t('pests.rodents'),
      image: rodentsImage,
      habitat: t('pests.rodents_habitat'),
      healthRisk: t('pests.rodents_health'),
      treatment: t('pests.rodents_treatment'),
      severity: t('pests.high'),
      color: 'text-destructive'
    },
    {
      name: t('pests.fleas'),
      image: '/api/placeholder/400/300',
      habitat: t('pests.fleas_habitat'),
      healthRisk: t('pests.fleas_health'),
      treatment: t('pests.fleas_treatment'),
      severity: t('pests.medium'),
      color: 'text-safety-orange'
    },
    {
      name: t('pests.termites'),
      image: '/api/placeholder/400/300',
      habitat: t('pests.termites_habitat'),
      healthRisk: t('pests.termites_health'),
      treatment: t('pests.termites_treatment'),
      severity: t('pests.very_high'),
      color: 'text-destructive'
    },
    {
      name: t('pests.beetles'),
      image: '/api/placeholder/400/300',
      habitat: t('pests.beetles_habitat'),
      healthRisk: t('pests.beetles_health'),
      treatment: t('pests.beetles_treatment'),
      severity: t('pests.low'),
      color: 'text-secondary'
    },
    {
      name: t('pests.flies'),
      image: '/api/placeholder/400/300',
      habitat: t('pests.flies_habitat'),
      healthRisk: t('pests.flies_health'),
      treatment: t('pests.flies_treatment'),
      severity: t('pests.medium'),
      color: 'text-safety-orange'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case t('pests.very_high'): return 'bg-destructive text-destructive-foreground';
      case t('pests.high'): return 'bg-safety-orange text-white';
      case t('pests.medium'): return 'bg-yellow-500 text-white';
      case t('pests.low'): return 'bg-secondary text-secondary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-service">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('pests.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('pests.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Pests Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pests.map((pest, index) => (
              <Card 
                key={pest.name}
                className="pest-card bg-gradient-card border-0 shadow-soft animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={pest.image}
                    alt={pest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getSeverityColor(pest.severity)}`}>
                      {pest.severity} {t('pests.severity')}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    
                    {/* Title */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground">{pest.name}</h3>
                      <AlertTriangle className={`w-5 h-5 ${pest.color}`} />
                    </div>

                    {/* Info Sections */}
                    <div className="space-y-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Home className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{t('pests.habitat')}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.habitat}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{t('pests.health_risk')}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.healthRisk}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Shield className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">{t('pests.treatment')}</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.treatment}</p>
                      </div>
                    </div>

                    {/* Action */}
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      {t('pests.get_treatment')}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prevention Tips */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('pests.prevention_tips')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('pests.prevention_subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: t('pests.seal_entry'), description: t('pests.seal_entry_desc') },
              { icon: Shield, title: t('pests.remove_food'), description: t('pests.remove_food_desc') },
              { icon: CheckCircle, title: t('pests.eliminate_water'), description: t('pests.eliminate_water_desc') },
              { icon: Heart, title: t('pests.regular_cleaning'), description: t('pests.regular_cleaning_desc') },
            ].map((tip, index) => {
              const IconComponent = tip.icon;
              return (
                <Card 
                  key={tip.title}
                  className="bg-background shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">{tip.title}</h3>
                    <p className="text-muted-foreground text-sm">{tip.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-20 bg-destructive text-destructive-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('pests.emergency_title')}
            </h2>
            <p className="text-xl text-destructive-foreground/90 mb-8">
              {t('pests.emergency_desc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-card">
                <Phone className="w-5 h-5 mr-2" />
                {t('pests.call_now')}: +998 90 123 45 67
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  {t('pests.request_service')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PestsThreats;