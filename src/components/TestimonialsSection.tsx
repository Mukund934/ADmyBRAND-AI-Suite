import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card-enhanced"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.3 })
  
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2a5?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "ADmyBRAND AI has completely transformed our marketing workflow. We're now generating campaigns 10x faster while maintaining our brand voice perfectly. The ROI has been incredible.",
      metric: "300% increase in campaign output"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO & Founder",
      company: "GrowthLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "The AI-powered insights have given us a competitive edge we never had before. Our team can now focus on strategy while the AI handles the heavy lifting of campaign creation.",
      metric: "85% reduction in campaign creation time"
    },
    {
      name: "Emily Watson",
      role: "Head of Digital Marketing",
      company: "Innovate Co.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "From day one, ADmyBRAND AI felt like having a senior marketing strategist on our team. The quality of generated content consistently exceeds our expectations.",
      metric: "4.2x improvement in engagement rates"
    },
    {
      name: "David Park",
      role: "VP of Marketing",
      company: "ScaleUp Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "The multi-channel campaign management is a game-changer. We can orchestrate complex campaigns across all platforms from one interface. It's exactly what we needed.",
      metric: "150% increase in lead generation"
    },
    {
      name: "Lisa Thompson",
      role: "Marketing Manager",
      company: "NextGen Brands",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      content: "The AI understands our brand guidelines better than some of our previous team members. Every generated campaign feels authentic to our voice and values.",
      metric: "95% brand consistency score"
    }
  ]

  const nextTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
      setIsTransitioning(false)
    }, 150)
  }

  const prevTestimonial = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsTransitioning(false)
    }, 150)
  }

  const goToTestimonial = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex(index)
      setIsTransitioning(false)
    }, 150)
  }

  // Auto-advance testimonials with pause support
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      if (!isPaused) {
        nextTestimonial()
      }
    }, 6000)
    
    return () => clearInterval(interval)
  }, [isPaused, isTransitioning])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="py-24 relative overflow-hidden"
      aria-label="Customer testimonials and reviews"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-flex items-center px-4 py-2 rounded-full glass-card border border-accent/20 mb-6 hover-scale transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <Quote className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">Customer Stories</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '400ms' }}>
            <span className="text-foreground">Loved by </span>
            <span className="text-gradient">Marketing Teams Worldwide</span>
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '600ms' }}>
            Join thousands of marketing professionals who have transformed their workflows 
            and achieved remarkable results with ADmyBRAND AI Suite.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`max-w-4xl mx-auto mb-12 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <Card 
            variant="testimonial" 
            size="lg" 
            className={`relative overflow-hidden hover-tilt cursor-pointer transition-all duration-500 ${
              isTransitioning ? 'opacity-70 scale-98' : 'opacity-100 scale-100'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            role="article"
            aria-label={`Testimonial from ${currentTestimonial.name} at ${currentTestimonial.company}`}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-24 h-24 text-primary" />
            </div>

            <CardHeader className="relative z-10">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Avatar */}
                <div className="relative">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 rounded-full object-cover ring-4 ring-primary/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>

                {/* User Info */}
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-muted-foreground mb-2">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Metric */}
                <div className="text-center md:text-right">
                  <div className="text-2xl font-bold text-gradient mb-1">
                    {currentTestimonial.metric.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentTestimonial.metric.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground italic">
                "{currentTestimonial.content}"
              </blockquote>
            </CardContent>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-50" />
          </Card>
        </div>

        {/* Navigation and Indicators */}
        <div className={`flex items-center justify-center gap-6 transition-all duration-700 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '1000ms' }}>
          <Button
            variant="glass"
            size="icon"
            onClick={prevTestimonial}
            className="hover:bg-primary/10 hover-lift hover-icon-bounce"
            disabled={isTransitioning}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`View testimonial from ${testimonial.name}`}
                onClick={() => goToTestimonial(index)}
                disabled={isTransitioning}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover-scale ${
                  index === currentIndex 
                    ? "bg-primary scale-125 shadow-lg" 
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="glass"
            size="icon"
            onClick={nextTestimonial}
            className="hover:bg-primary/10 hover-lift hover-icon-bounce"
            disabled={isTransitioning}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Happy Customers" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "4.9/5", label: "Average Rating" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button variant="gradient" size="lg" className="group">
            Join Our Happy Customers
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection