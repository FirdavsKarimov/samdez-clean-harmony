import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServicesOverview from '@/components/home/ServicesOverview';
import TrustSection from '@/components/home/TrustSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <TrustSection />
    </div>
  );
};

export default Index;
