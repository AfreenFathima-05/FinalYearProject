import React from "react";
import Navbar from "../../components/layout/Navbar";
import HeroSection from "./HeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ModulesSection from "./ModulesSection";
import SupportPreviewSection from "./SupportPreviewSection";
import TrustPrivacySection from "./TrustPrivacySection";
import FooterSection from "./FooterSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#0077ED]/20 selection:text-[#0077ED]">
      <Navbar />
      <main>
        <HeroSection />
        <ModulesSection />
        <HowItWorksSection />
        <SupportPreviewSection />
        <TrustPrivacySection />
      </main>
      <FooterSection />
    </div>
  );
}
