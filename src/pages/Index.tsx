import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import TrustSection from '@/components/home/TrustSection';
import ContactForm from '@/components/home/ContactForm';
import pageBgPattern from '@/assets/page-bg-pattern.jpg';

const Index = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${pageBgPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      <div className="relative z-10">
        <HeroSection />
        <ServicesOverview />
        <TrustSection />
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
