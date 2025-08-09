import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: t('services.home'), href: '/services' },
      { name: t('services.office'), href: '/services' },
      { name: t('services.transport'), href: '/services' },
      { name: t('services.antivirus'), href: '/services' },
    ],
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.pests'), href: '/pests' },
      { name: t('nav.faq'), href: '/faq' },
      { name: t('nav.contact'), href: '/contact' },
    ],
    support: [
      { name: 'Emergency Service', href: '/contact' },
      { name: 'Free Consultation', href: '/contact' },
      { name: 'Service Guarantee', href: '/faq' },
      { name: 'Privacy Policy', href: '/privacy' },
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">SamDezin</div>
                <div className="text-sm text-gray-400">Pest Control & Disinfection</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional pest control and disinfection services in Uzbekistan. 
              We provide eco-friendly solutions for homes, offices, and transport.
            </p>

          {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">info@SamDezin.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Tashkent, Uzbekistan</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <div>
                <div className="font-semibold text-white">Certified</div>
                <div className="text-sm text-gray-400">Ministry Licensed</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-6 h-6 text-blue-400" />
              <div>
                <div className="font-semibold text-white">Eco-Friendly</div>
                <div className="text-sm text-gray-400">Safe Products</div>
              </div>
            </div>
              <div className="flex items-center space-x-3">
              <Clock className="w-6 h-6 text-purple-400" />
                <div>
                <div className="font-semibold text-white">24/7 Service</div>
                <div className="text-sm text-gray-400">Emergency Available</div>
              </div>
                </div>
            <div className="flex items-center space-x-3">
              <Star className="w-6 h-6 text-yellow-400" />
              <div>
                <div className="font-semibold text-white">5-Star Rated</div>
                <div className="text-sm text-gray-400">500+ Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} SamDezin. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Emergency Contact */}
            <div className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-semibold">Emergency: +998 90 123 45 67</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;