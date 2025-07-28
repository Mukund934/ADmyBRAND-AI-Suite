import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Zap, Brain, Target } from "lucide-react"
import { useScrollAnimation, useParallax } from "@/hooks/useScrollAnimation"

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const [isTextChanging, setIsTextChanging] = useState(false)

  const heroTexts = [
    { text: "Generate Campaigns", icon: <Zap className="w-6 h-6" />, ariaLabel: "Generate AI-powered marketing campaigns" },
    { text: "Plan Strategies", icon: <Brain className="w-6 h-6" />, ariaLabel: "Plan intelligent marketing strategies" },
    { text: "Analyze Performance", icon: <Target className="w-6 h-6" />, ariaLabel: "Analyze campaign performance with AI" },
  ]

  const { ref: heroRef, isInView } = useScrollAnimation({ threshold: 0.2 })
  const { ref: bgRef, offset } = useParallax(0.3)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTextChanging(true)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsTextChanging(false)
      }, 200)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 z-0"
      role="banner"
      aria-label="ADmyBRAND AI Suite - Transform Your Marketing with AI"
    >
      {/* Animated Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 gradient-hero will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>

          {/* Hero Badge */}
          <div className={`inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-8 hover-scale transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <Zap className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              Powered by Advanced AI Technology
            </span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '400ms' }}>
            <span className="text-foreground">Transform Your Marketing with </span>
            <br />
            <span
              className={`text-gradient inline-flex items-center gap-4 min-h-[1.2em] transition-all duration-300 ${
                isTextChanging ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              }`}
              aria-live="polite"
              aria-label={heroTexts[currentText].ariaLabel}
            >
              <span className="transition-transform duration-300 will-change-transform hover:scale-110">
                {heroTexts[currentText].icon}
              </span>
              {heroTexts[currentText].text}
            </span>
            <span className="text-foreground"> </span>
          </h1>

          {/* Subheadline */}
          <p className={`text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '600ms' }}>
            ADmyBRAND AI Suite revolutionizes your marketing workflow with intelligent campaign generation,
            strategic planning, and performance analytics that drive real results.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '800ms' }}>
            <Button
              variant="hero"
              size="xl"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="group hover-lift hover-icon-bounce"
              aria-label="Start your free trial - no credit card required"
            >
              Start Free Trial
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </Button>

            <Button
              variant="glass"
              size="xl"
              icon={<Play className="w-5 h-5" />}
              className="group hover-lift hover-icon-bounce"
              aria-label="Watch product demonstration video"
            >
              Watch Demo
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>14-Day Free Trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="mt-16 relative max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-2xl border border-glass-border relative overflow-hidden">
            {/* Simulated Dashboard */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-4 bg-gradient-primary rounded w-32" />
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-warning rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                  <div className="w-3 h-3 bg-destructive rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="glass-card p-4 rounded-lg border border-glass-border">
                    <div className="h-3 bg-primary/50 rounded w-20 mb-2" />
                    <div className="h-8 bg-gradient-primary rounded w-full mb-2" />
                    <div className="h-2 bg-muted rounded w-16" />
                  </div>
                ))}
              </div>

              <div className="h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-60" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' stroke='%2306b6d4' stroke-width='2' fill='none'/%3E%3C/svg%3E")`
                }} />
              </div>
            </div>

            {/* Animated Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 animate-gradient-shift" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
