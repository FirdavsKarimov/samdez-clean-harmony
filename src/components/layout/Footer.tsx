import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl text-primary">SamDez</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('nav.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">{t('services.home')}</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">{t('services.office')}</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">{t('services.transport')}</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth">{t('services.pest')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('contact.title')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@samdez.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Working Hours</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-primary" />
                <div>
                  <div className="text-muted-foreground">Mon - Fri: 8:00 - 18:00</div>
                  <div className="text-muted-foreground">Sat: 9:00 - 15:00</div>
                  <div className="text-muted-foreground">Sun: Emergency only</div>
                </div>
              </div>
            </div>
            <Button variant="default" size="sm" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              {t('hero.cta')}
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 SamDez. All rights reserved. Professional pest control & disinfection services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;