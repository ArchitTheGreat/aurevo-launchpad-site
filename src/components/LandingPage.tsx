import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, BarChart2, Bot, Check } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const LandingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: Zap,
      title: "Fast Hosting",
      description: "Lightning-fast loading speeds with global CDN and optimized infrastructure."
    },
    {
      icon: Shield,
      title: "Security",
      description: "Enterprise-grade security with SSL certificates and regular backups."
    },
    {
      icon: BarChart2,
      title: "Analytics",
      description: "Detailed insights into your website performance and visitor behavior."
    },
    {
      icon: Bot,
      title: "AI Assistance",
      description: "Smart chatbot integration to help your customers 24/7."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      monthlyPrice: 999,
      yearlyPrice: 9590,
      period: isAnnual ? "/year" : "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "1 Website",
        "Free SSL Certificate",
        "Hosting Included",
        "Basic Support",
        "99.9% Uptime"
      ],
      popular: false
    },
    {
      name: "Growth",
      monthlyPrice: 1999,
      yearlyPrice: 19190,
      period: isAnnual ? "/year" : "/month",
      description: "Ideal for growing businesses",
      features: [
        "3 Websites",
        "Analytics Dashboard",
        "Priority Support",
        "Advanced Security",
        "Custom Domain"
      ],
      popular: true
    },
    {
      name: "Pro",
      monthlyPrice: 4999,
      yearlyPrice: 47990,
      period: isAnnual ? "/year" : "/month",
      description: "For established businesses",
      features: [
        "Unlimited Sites",
        "AI Chatbot Integration",
        "Dedicated Manager",
        "White-label Options",
        "API Access"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navbar */}
      <motion.header 
        className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="font-bold text-2xl text-primary">
              AUREVO – Business
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#tos" className="text-foreground hover:text-primary transition-colors">ToS</a>
            </div>

            <Button variant="gradient" size="lg">
              Get Started
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Your Business Website,{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Live in Minutes
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
                Focus on growing your business. We handle hosting, security, and speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button variant="gradient" size="xl">
                  Start Today
                </Button>
                <Button variant="outline" size="xl">
                  Book a Demo
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img 
                src={heroImage} 
                alt="AUREVO Business Platform" 
                className="w-full h-auto rounded-xl shadow-card"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to help your business grow faster and more efficiently.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 hover:shadow-card transition-all duration-300 border-0 bg-card/50">
                  <CardContent className="p-0">
                    <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include hosting and security.
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mb-8">
              <span className={`mr-3 ${!isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-muted transition-colors hover:bg-muted/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-primary transition-transform ${
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`ml-3 ${isAnnual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="ml-2 text-sm bg-gradient-primary text-white px-2 py-1 rounded-full">
                  Save 20%
                </span>
              )}
            </div>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className={`relative p-8 hover:shadow-card transition-all duration-300 ${
                  plan.popular ? 'border-2 border-primary shadow-card' : 'border-0'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardContent className="p-0">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-foreground">
                          ₹{isAnnual ? plan.yearlyPrice.toLocaleString() : plan.monthlyPrice.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                      {isAnnual && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Save ₹{((plan.monthlyPrice * 12) - plan.yearlyPrice).toLocaleString()} per year
                        </p>
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      variant={plan.popular ? "gradient" : "outline"} 
                      className="w-full"
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of businesses that trust AUREVO for their online presence.
            </p>
            <Button variant="gradient" size="xl">
              Get Started with AUREVO
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="font-bold text-xl text-primary mb-4 md:mb-0">
              AUREVO – Business
            </div>
            
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              <a href="#tos" className="text-muted-foreground hover:text-primary transition-colors">ToS</a>
            </div>

            <p className="text-muted-foreground">
              © 2025 AUREVO – Business. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;