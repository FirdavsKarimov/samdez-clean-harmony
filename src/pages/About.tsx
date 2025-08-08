import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Shield, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import pageBgPattern from '@/assets/page-bg-pattern.jpg';

const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Award,
      title: 'Industry Experience',
      description: '5+ years of professional pest control and disinfection services',
      color: 'text-primary'
    },
    {
      icon: Shield,
      title: 'Certified & Licensed',
      description: 'Fully licensed by health authorities with all required certifications',
      color: 'text-secondary'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained professionals using latest equipment and eco-friendly methods',
      color: 'text-trust-blue'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Emergency response available round the clock for urgent situations',
      color: 'text-safety-orange'
    }
  ];

  const testimonials = [
    {
      name: 'Dilshod Karimov',
      role: 'Homeowner',
      comment: 'SamDez completely solved our ant problem safely. Highly recommended!',
      rating: 5
    },
    {
      name: 'Marina Petrova',
      role: 'Office Manager',
      comment: 'Professional service, eco-friendly products. Our office is now pest-free.',
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      role: 'Restaurant Owner',
      comment: 'Fast response, effective treatment. They helped us maintain health standards.',
      rating: 5
    }
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
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.story')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At SamDez, we believe in creating safe, healthy environments for families and businesses 
                  throughout Uzbekistan. Our commitment goes beyond simple pest elimination - we focus on 
                  long-term prevention and environmental responsibility.
                </p>
                <p>
                  Since our founding in 2020, we've helped over 500 satisfied clients with our comprehensive 
                  approach to pest control and disinfection. We use only eco-friendly, certified products 
                  that are safe for children, pets, and the environment.
                </p>
                <p>
                  Our team of certified professionals undergoes continuous training to stay updated with 
                  the latest techniques and safety standards in the industry.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-secondary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Eco-Safe</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-trust-blue mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </Card>
              <Card className="p-6 text-center shadow-card">
                <div className="text-3xl font-bold text-safety-orange mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Exp.</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose SamDez?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine years of experience with modern techniques and eco-friendly products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="service-card bg-background border-0 shadow-soft animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 bg-${feature.color.split('-')[1]}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name}
                className="pest-card bg-gradient-card border-0 shadow-soft animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Quote className="w-8 h-8 text-primary/30" />
                    
                    <p className="text-muted-foreground italic">
                      "{testimonial.comment}"
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                      
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold mb-8">Certified & Trusted</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-semibold">Ministry Certified</h3>
                <p className="text-primary-foreground/80">
                  Licensed by Uzbekistan health authorities
                </p>
              </div>
              
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-semibold">Eco-Friendly</h3>
                <p className="text-primary-foreground/80">
                  Safe for children, pets, and environment
                </p>
              </div>
              
              <div className="space-y-4">
                <CheckCircle className="w-12 h-12 mx-auto" />
                <h3 className="text-xl font-semibold">Insured Service</h3>
                <p className="text-primary-foreground/80">
                  Full insurance coverage for peace of mind
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default About;