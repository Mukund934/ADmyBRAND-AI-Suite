import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card-enhanced"
import { 
  Zap, 
  Brain, 
  Target, 
  BarChart3, 
  Palette, 
  Users, 
  MessageSquare, 
  Shield 
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const FeaturesSection = () => {
  const { ref: sectionRef, isInView } = useScrollAnimation({ threshold: 0.2 })
  
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI Campaign Generation",
      description: "Create compelling marketing campaigns in seconds with our advanced AI that understands your brand voice and target audience.",
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Target className="w-8 h-8 text-accent" />,
      title: "Smart Audience Targeting",
      description: "Leverage machine learning to identify and reach your ideal customers with precision targeting across all channels.",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Performance Analytics",
      description: "Track, measure, and optimize your campaigns with real-time analytics and actionable insights powered by AI.",
      gradient: "from-green-500/20 to-blue-500/20"
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "Creative Automation",
      description: "Generate stunning visuals, copy, and creative assets that align with your brand guidelines automatically.",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Multi-Channel Management",
      description: "Orchestrate campaigns across social media, email, web, and mobile from a single, unified platform.",
      gradient: "from-teal-500/20 to-cyan-500/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Brand Safety & Compliance",
      description: "Ensure all generated content meets your brand guidelines and industry compliance requirements automatically.",
      gradient: "from-indigo-500/20 to-purple-500/20"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-24 relative overflow-hidden"
      aria-label="Product features and capabilities"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className={`inline-flex items-center px-4 py-2 rounded-full glass-card border border-primary/20 mb-6 hover-scale transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '200ms' }}>
            <Zap className="w-4 h-4 text-primary mr-2 animate-pulse" />
            <span className="text-sm font-medium">Powerful Features</span>
          </div>
          
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`} style={{ transitionDelay: '400ms' }}>
            <span className="text-foreground">Everything You Need to </span>
            <span className="text-gradient">Dominate Marketing</span>
          </h2>
          
          <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: '600ms' }}>
            Our comprehensive AI suite provides all the tools you need to create, manage, 
            and optimize marketing campaigns that drive real business results.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              variant="feature" 
              glow 
              className={`group relative hover-tilt hover-icon-bounce transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${800 + index * 100}ms`
              }}
              role="article"
              aria-label={`Feature: ${feature.title}`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
              
              <CardHeader className="relative z-10">
                <div className="mb-4 p-3 rounded-lg bg-background/50 backdrop-blur-sm w-fit transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '1200ms' }}>
          {[
            { number: "10,000+", label: "Active Users" },
            { number: "500M+", label: "Campaigns Generated" },
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`space-y-2 hover-scale transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${1400 + index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection