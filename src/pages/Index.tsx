import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import AboutSection from '@/components/sections/AboutSection';
import StatsSection from '@/components/sections/StatsSection';
import FeaturedListingsSection from '@/components/sections/FeaturedListingsSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import BlogSection from '@/components/sections/BlogSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <StatsSection />
        <FeaturedListingsSection />
        <TestimonialSection />
        <BlogSection />
        <FAQSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
