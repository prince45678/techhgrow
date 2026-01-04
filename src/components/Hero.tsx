import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Activity } from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  {
    icon: Activity,
    value: "10M+",
    label: "requests/day",
    description: "Production traffic without downtime",
  },
  {
    icon: Shield,
    value: "99.99%",
    label: "uptime",
    description: "Critical systems, zero drama",
  },
  {
    icon: Zap,
    value: "Battle-tested",
    label: "fixes",
    description: "Not theory — real incidents",
  },
];

const clientLogos = [
  "FinTech Startup",
  "E-commerce Pro",
  "HealthTech",
  "SaaS Platform",
  "RetailMax",
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <span className="text-accent text-sm font-medium">BACKEND ENGINEERING STUDIO</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-foreground leading-tight">
              Engineering backends that{" "}
              <span className="text-foreground">survive real production</span> traffic
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed">
              TechHGrow helps startups and scale-ups design, fix, and scale backend systems that cannot afford downtime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group">
                  Book a Technical Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10 rounded-full px-8"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading companies</p>
              <div className="flex flex-wrap gap-6">
                {clientLogos.map((client) => (
                  <span key={client} className="text-sm text-muted-foreground/70 font-medium">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="glass-card rounded-2xl p-8 space-y-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="flex items-baseline space-x-2">
                      <span className="text-xl font-bold text-foreground">{stat.value}</span>
                      <span className="text-muted-foreground text-sm">{stat.label}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:hidden mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
