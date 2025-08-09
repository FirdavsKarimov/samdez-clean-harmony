import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import TrustSection from '@/components/home/TrustSection';
import ContactForm from '@/components/home/ContactForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Overview */}
      <ServicesOverview />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Index;
