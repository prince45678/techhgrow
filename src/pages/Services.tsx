import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layers, Settings, Globe, BarChart3, Server, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites built with React, Node.js, and cutting-edge technologies. We create fast, SEO-friendly applications that deliver exceptional user experiences.",
    features: ["React & Next.js", "Responsive Design", "Performance Optimized", "SEO Friendly"],
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Scalable backend systems with Java Spring Boot and Node.js that handle millions of requests. Built for reliability, security, and peak performance.",
    features: ["Java Spring Boot", "Node.js", "PostgreSQL & MongoDB", "Microservices"],
  },
  {
    icon: Settings,
    title: "Custom CRM Solutions",
    description: "Tailored CRM systems that streamline your business operations. From lead management to customer support, we build solutions that boost productivity.",
    features: ["Lead Management", "Customer Analytics", "Workflow Automation", "Custom Reports"],
  },
  {
    icon: Layers,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance, security, and developer experience. Well-documented endpoints that your team will love.",
    features: ["REST & GraphQL", "OAuth 2.0", "Rate Limiting", "API Documentation"],
  },
  {
    icon: Globe,
    title: "System Architecture",
    description: "Microservices and distributed systems designed for scale and resilience. We architect solutions that grow with your business needs.",
    features: ["Microservices", "Event-Driven", "Cloud Native", "Kubernetes"],
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Database tuning, caching strategies, and code optimization for peak performance. We identify bottlenecks and implement solutions that scale.",
    features: ["Database Tuning", "Caching (Redis)", "Query Optimization", "Load Testing"],
  },
  {
    icon: Server,
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines, infrastructure as code, and monitoring solutions. Ship faster with confidence.",
    features: ["Docker & K8s", "GitHub Actions", "AWS/GCP/Azure", "Monitoring"],
  },
  {
    icon: Shield,
    title: "Security Audits",
    description: "Comprehensive security assessments and implementation of best practices. Protect your application and user data.",
    features: ["Penetration Testing", "Code Review", "OWASP Compliance", "Data Encryption"],
  },
  {
    icon: Zap,
    title: "Technical Consulting",
    description: "Expert guidance on technology choices, architecture decisions, and team scaling. Make informed decisions with confidence.",
    features: ["Tech Stack Review", "Architecture Review", "Team Training", "Best Practices"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${servicesBg})` }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Our Services</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
              Engineering Solutions That Scale
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              From concept to deployment, we provide end-to-end engineering services that help you build, scale, and maintain world-class software.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full glass-card rounded-2xl p-6 lg:p-8 hover:border-accent/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-8 lg:p-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Every business is unique. Let's discuss your specific requirements and create a tailored solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group">
                Get a Custom Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Services;
