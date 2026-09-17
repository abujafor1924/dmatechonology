import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import SolutionSection from "@/components/SolutionSection";
import StatsBanner from "@/components/StatsBanner";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PartnerLogos from "@/components/PartnerLogos";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-[#00c2e0] selection:text-white">
      {/* 1. Sticky Navigation Header with Top Notification Bar */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. About Us Section */}
        <AboutSection />

        {/* 4. Features Section */}
        <FeaturesSection />

        {/* 5. Solution Section ("Controlled Fish Farming Get Aqua Solution") */}
        <SolutionSection />

        {/* 6. Stats Banner (Cyan Counter Strip) */}
        <StatsBanner />

        {/* 7. Services Section ("Explore Our Services") */}
        <ServicesSection />

        {/* 8. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 9. Pricing Section ("Get Your Pricing Plans") */}
        <PricingSection />

        {/* 10. Team Section ("Meet Our Team") */}
        <TeamSection />

        {/* 11. Contact & CTA Section ("Get In Touch") */}
        <ContactSection />

        {/* 12. Testimonials Section ("What Our Clients Say") */}
        <TestimonialsSection />

        {/* 13. Partner Logos Carousel */}
        <PartnerLogos />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
