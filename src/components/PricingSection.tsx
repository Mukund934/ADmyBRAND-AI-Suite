import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card-enhanced"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"
import { cn } from "@/lib/utils"

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and entrepreneurs",
      icon: <Zap className="w-6 h-6 text-primary" />,
      monthlyPrice: 29,
      yearlyPrice: 24,
      popular: false,
      variant: "glass" as const,
      features: [
        "5 AI-generated campaigns per month",
        "Basic analytics and reporting",
        "Email and social media integration",
        "Standard templates library",
        "Community support",
        "Basic brand guidelines"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing marketing teams",
      icon: <Crown className="w-6 h-6 text-accent" />,
      monthlyPrice: 79,
      yearlyPrice: 65,
      popular: true,
      variant: "pricing" as const,
      features: [
        "Unlimited AI campaigns",
        "Advanced analytics & insights",
        "Multi-channel orchestration",
        "Custom templates & branding",
        "Priority support",
        "A/B testing capabilities",
        "Team collaboration tools",
        "Advanced targeting options"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      icon: <Rocket className="w-6 h-6 text-primary" />,
      monthlyPrice: 199,
      yearlyPrice: 165,
      popular: false,
      variant: "elevated" as const,
      features: [
        "Everything in Professional",
        "White-label solutions",
        "Custom AI model training",
        "Advanced compliance tools",
        "Dedicated success manager",
        "Custom integrations",
        "SLA guarantees",
        "Enterprise-grade security"
      ]
    }
  ]

  const calculatePrice = (plan: typeof plans[0]) => {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
    return price
  }

  const calculateSavings = (plan: typeof plans[0]) => {
    if (!isYearly) return 0
    const monthlyCost = plan.monthlyPrice * 12
    const yearlyCost = plan.yearlyPrice * 12
    return Math.round(((monthlyCost - yearlyCost) / monthlyCost) * 100)
  }

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-card border border-accent/20 mb-6">
            <Star className="w-4 h-4 text-accent mr-2" />
            <span className="text-sm font-medium">Simple Pricing</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Choose Your </span>
            <span className="text-gradient">Perfect Plan</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Start with our free trial, then choose the plan that scales with your business. 
            No hidden fees, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center glass-card p-1 rounded-xl border border-glass-border">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all",
                !isYearly 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-all relative",
                isYearly 
                  ? "bg-primary text-primary-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              variant={plan.variant}
              className={cn(
                "relative",
                plan.popular && "border-primary shadow-2xl scale-105 z-10"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Gradient Background for Popular Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl" />
              )}

              <CardHeader className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-background/50 backdrop-blur-sm">
                    {plan.icon}
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <CardDescription className="text-sm">{plan.description}</CardDescription>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gradient">
                      ${calculatePrice(plan)}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "month" : "month"}
                    </span>
                  </div>
                  
                  {isYearly && calculateSavings(plan) > 0 && (
                    <div className="text-sm text-success font-medium">
                      Save {calculateSavings(plan)}% annually
                    </div>
                  )}
                  
                  {isYearly && (
                    <div className="text-sm text-muted-foreground">
                      Billed annually (${plan.yearlyPrice * 12})
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="relative z-10">
                <Button 
                  variant={plan.popular ? "hero" : "glass"} 
                  size="lg" 
                  className="w-full group"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl",
                    plan.popular 
                      ? "bg-gradient-to-r from-primary/20 to-accent/20" 
                      : "bg-white/5"
                  )} />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-success" />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection