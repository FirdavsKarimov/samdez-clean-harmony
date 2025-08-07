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
      name: 'Bed Bugs',
      image: bedbugsImage,
      habitat: 'Mattresses, furniture, carpets, clothing',
      healthRisk: 'Skin irritation, allergic reactions, sleep disruption',
      treatment: 'Heat treatment, specialized sprays, mattress encasement',
      severity: 'High',
      color: 'text-destructive'
    },
    {
      name: 'Cockroaches',
      image: cockroachesImage,
      habitat: 'Kitchen, bathroom, dark warm places',
      healthRisk: 'Asthma, allergies, food contamination, disease spread',
      treatment: 'Gel baits, residual sprays, crack and crevice treatment',
      severity: 'Very High',
      color: 'text-destructive'
    },
    {
      name: 'Ants',
      image: antsImage,
      habitat: 'Kitchen, garden, cracks in walls and floors',
      healthRisk: 'Food contamination, structural damage (carpenter ants)',
      treatment: 'Ant baits, perimeter treatment, colony elimination',
      severity: 'Medium',
      color: 'text-safety-orange'
    },
    {
      name: 'Mosquitoes',
      image: mosquitoesImage,
      habitat: 'Standing water, gardens, humid areas',
      healthRisk: 'Malaria, dengue fever, Zika virus, West Nile virus',
      treatment: 'Larvicide application, adult mosquito control, source reduction',
      severity: 'Very High',
      color: 'text-destructive'
    },
    {
      name: 'Rodents',
      image: rodentsImage,
      habitat: 'Attics, basements, walls, storage areas',
      healthRisk: 'Disease transmission, property damage, electrical fires',
      treatment: 'Rodenticide placement, sealing entry points, trapping',
      severity: 'High',
      color: 'text-destructive'
    },
    {
      name: 'Fleas',
      image: '/api/placeholder/400/300',
      habitat: 'Pet areas, carpets, upholstery',
      healthRisk: 'Skin irritation, pet discomfort, potential disease transmission',
      treatment: 'Insecticide application, pet treatment, vacuuming',
      severity: 'Medium',
      color: 'text-safety-orange'
    },
    {
      name: 'Termites',
      image: '/api/placeholder/400/300',
      habitat: 'Wood structures, foundations, damp areas',
      healthRisk: 'Structural damage, property value loss',
      treatment: 'Liquid termiticides, bait stations, wood treatment',
      severity: 'Very High',
      color: 'text-destructive'
    },
    {
      name: 'Beetles',
      image: '/api/placeholder/400/300',
      habitat: 'Stored food, wood, fabric, gardens',
      healthRisk: 'Food contamination, property damage',
      treatment: 'Targeted spraying, food storage improvement, exclusion',
      severity: 'Low',
      color: 'text-secondary'
    },
    {
      name: 'Flies',
      image: '/api/placeholder/400/300',
      habitat: 'Garbage areas, organic waste, drains',
      healthRisk: 'Disease transmission, food contamination',
      treatment: 'Fly baits, residual sprays, sanitation improvement',
      severity: 'Medium',
      color: 'text-safety-orange'
    },
    {
      name: 'Moths',
      image: '/api/placeholder/400/300',
      habitat: 'Clothing, stored food, pantries',
      healthRisk: 'Property damage, food contamination',
      treatment: 'Pheromone traps, targeted treatment, storage improvement',
      severity: 'Low',
      color: 'text-secondary'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch(severity) {
      case 'Very High': return 'bg-destructive text-destructive-foreground';
      case 'High': return 'bg-safety-orange text-white';
      case 'Medium': return 'bg-yellow-500 text-white';
      case 'Low': return 'bg-secondary text-secondary-foreground';
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
              {t('nav.pests')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Know your enemy. Learn about common pests, their health risks, and how SamDez can protect your property.
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
                      {pest.severity} Risk
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
                          <span className="text-sm font-medium text-foreground">Habitat</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.habitat}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Heart className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">Health Risk</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.healthRisk}</p>
                      </div>

                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Shield className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium text-foreground">Our Treatment</span>
                        </div>
                        <p className="text-xs text-muted-foreground pl-6">{pest.treatment}</p>
                      </div>
                    </div>

                    {/* Action */}
                    <Button variant="outline" size="sm" className="w-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Treatment
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
              Prevention Tips
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple steps you can take to reduce the risk of pest infestations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: 'Seal Entry Points', description: 'Close gaps around doors, windows, and pipes' },
              { icon: Shield, title: 'Remove Food Sources', description: 'Store food properly and clean up spills immediately' },
              { icon: CheckCircle, title: 'Eliminate Water', description: 'Fix leaks and remove standing water sources' },
              { icon: Heart, title: 'Regular Cleaning', description: 'Maintain clean environments, especially kitchens' },
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
              Pest Emergency?
            </h2>
            <p className="text-xl text-destructive-foreground/90 mb-8">
              Don't wait for the problem to get worse. Our emergency response team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="shadow-card">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +998 90 123 45 67
              </Button>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Request Service Online
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