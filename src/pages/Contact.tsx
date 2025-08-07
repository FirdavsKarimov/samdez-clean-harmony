import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Shield,
  CheckCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      details: ['+998 90 123 45 67', '+998 91 987 65 43'],
      color: 'text-primary'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: ['info@samdez.uz', 'emergency@samdez.uz'],
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      title: t('contact.address'),
      details: ['Tashkent, Uzbekistan', 'Yunusobod District'],
      color: 'text-trust-blue'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon-Fri: 8:00 - 18:00', 'Emergency: 24/7'],
      color: 'text-safety-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-service">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ready to solve your pest problem? Get in touch with our expert team for immediate assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <Card className="shadow-card border-0 bg-gradient-card">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    
                    <div className="text-center">
                      <h2 className="text-2xl font-bold text-foreground mb-2">Get Free Consultation</h2>
                      <p className="text-muted-foreground">Fill out the form and we'll contact you within 30 minutes</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground mb-2 block">Phone *</label>
                          <Input
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+998 90 123 45 67"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Service Needed</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          <option value="home">Home Disinfection</option>
                          <option value="office">Office Disinfection</option>
                          <option value="transport">Transport Disinfection</option>
                          <option value="pest">Pest Control</option>
                          <option value="garden">Garden Protection</option>
                          <option value="emergency">Emergency Service</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Describe your pest problem or service needs..."
                          rows={4}
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>

                      <div className="text-center">
                        <p className="text-xs text-muted-foreground">
                          By submitting this form, you agree to our privacy policy
                        </p>
                      </div>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card 
                      key={info.title}
                      className="service-card shadow-soft border-0 bg-background animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6 text-center">
                        <div className={`w-12 h-12 bg-${info.color.split('-')[1]}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <IconComponent className={`w-6 h-6 ${info.color}`} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Emergency Contact */}
              <Card className="bg-destructive text-destructive-foreground shadow-card">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">24/7 Emergency Service</h3>
                  <p className="text-destructive-foreground/90 mb-4">
                    Urgent pest problems? We're available around the clock
                  </p>
                  <Button variant="secondary" size="lg" className="shadow-card">
                    <Phone className="w-5 h-5 mr-2" />
                    +998 90 123 45 67
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="bg-secondary text-secondary-foreground shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-center">Why Choose Our Service?</h3>
                  <div className="space-y-3">
                    {[
                      'Response within 30 minutes',
                      'Free consultation and quote',
                      '30-day satisfaction guarantee',
                      'Eco-friendly products only'
                    ].map((fact, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5" />
                        <span className="text-sm">{fact}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">We serve all areas of Tashkent and surrounding regions</p>
          </div>

          <Card className="shadow-card border-0 overflow-hidden animate-slide-up">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-primary mx-auto" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Interactive Map</h3>
                  <p className="text-muted-foreground">Google Maps integration would go here</p>
                  <Button variant="outline" className="mt-4">
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Media & Additional Contact */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h2 className="text-2xl font-bold text-foreground mb-8">Stay Connected</h2>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: MessageCircle, label: 'Telegram', color: 'text-blue-500' },
                { icon: Phone, label: 'WhatsApp', color: 'text-green-500' },
                { icon: Mail, label: 'Email', color: 'text-red-500' },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="outline"
                    size="lg"
                    className="space-x-2 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <IconComponent className={`w-5 h-5 ${social.color}`} />
                    <span>{social.label}</span>
                  </Button>
                );
              })}
            </div>

            <p className="text-muted-foreground max-w-2xl mx-auto">
              Follow us on social media for pest prevention tips, special offers, and updates on our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;