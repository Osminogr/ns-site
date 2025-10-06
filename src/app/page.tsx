"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { IntroductionSection } from "@/components/introduction-section";
import { FeaturesSection } from "@/components/features-section";
import { HowToJoinSection } from "@/components/how-to-join-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { LorePage } from "@/components/lore-page";

export default function Home() {
  const [showLorePage, setShowLorePage] = useState(false);

  const handleOpenLore = () => {
    setShowLorePage(true);
  };

  const handleCloseLore = () => {
    setShowLorePage(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>
        
        <IntroductionSection />
        
        <div id="features">
          <FeaturesSection />
        </div>
        
        <div id="join">
          <HowToJoinSection />
        </div>
        
        <div id="faq">
          <FAQSection />
        </div>
        
        <CTASection onOpenLore={handleOpenLore} />
      </main>
      
      <Footer />
      
      {showLorePage && <LorePage onClose={handleCloseLore} />}
    </div>
  );
}