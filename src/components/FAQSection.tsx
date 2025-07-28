import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does ADmyBRAND AI generate campaigns?",
      answer: "Our AI uses advanced machine learning models trained on millions of successful marketing campaigns. It analyzes your brand voice, target audience, and campaign objectives to generate personalized, high-converting content that aligns with your brand guidelines and marketing goals."
    },
    {
      question: "Can I customize the AI-generated content?",
      answer: "Absolutely! Every piece of generated content can be fully customized and edited. You can adjust tone, messaging, visuals, and targeting parameters. The AI learns from your edits to improve future generations and better match your preferences over time."
    },
    {
      question: "What platforms does ADmyBRAND AI support?",
      answer: "We support all major marketing channels including social media platforms (Facebook, Instagram, LinkedIn, Twitter), Google Ads, email marketing, content marketing, and display advertising. Our multi-channel orchestration ensures consistent messaging across all touchpoints."
    },
    {
      question: "How secure is my data and brand information?",
      answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 Type II compliance, and GDPR-compliant data handling. Your brand data never leaves our secure servers, and we never use your information to train models for other customers. You maintain full ownership of your data."
    },
    {
      question: "Can I integrate ADmyBRAND AI with my existing tools?",
      answer: "Yes! We offer seamless integrations with popular marketing tools including HubSpot, Salesforce, Mailchimp, Hootsuite, Google Analytics, and 100+ other platforms. Our API also allows custom integrations with your proprietary systems."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including 24/7 chat support, dedicated account managers for Enterprise customers, extensive documentation, video tutorials, and regular training webinars. Our team of marketing experts is always ready to help you succeed."
    },
    {
      question: "How quickly can I see results?",
      answer: "Most customers see improvements in campaign performance within the first week. You can generate and launch campaigns in minutes rather than days, and our AI continuously optimizes performance based on real-time data to maximize your ROI."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required, no setup fees, and you can cancel anytime. This gives you plenty of time to experience the full power of ADmyBRAND AI Suite."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium">Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Get </span>
            <span className="text-gradient">Answers</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Everything you need to know about ADmyBRAND AI Suite. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "glass-card border border-glass-border rounded-xl overflow-hidden transition-all duration-300",
                openIndex === index && "border-primary/30 shadow-lg"
              )}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0",
                    openIndex === index && "rotate-180 text-primary"
                  )}
                />
              </button>
              
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-border mb-4" />
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-glass-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our team is here to help you get the most out of ADmyBRAND AI Suite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Contact Support
              </button>
              <button className="px-6 py-3 border border-border text-foreground rounded-xl font-medium hover:bg-accent transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection