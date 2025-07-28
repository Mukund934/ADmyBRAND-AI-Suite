import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import PricingSection from "@/components/PricingSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import FAQSection from "@/components/FAQSection"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import BackToTop from "@/components/ui/back-to-top"
import LoadingAnimation from "@/components/ui/loading-animation"

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simulate loading time and ensure smooth initial render
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingAnimation />
      <div className={`min-h-screen bg-background transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <Navigation />
        <main role="main">
          <HeroSection />
          <FeaturesSection />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
};

export default Index;
