import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layers, Settings, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "Modern, responsive websites built with React, Node.js, and cutting-edge technologies.",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Scalable backend systems with Java Spring Boot and Node.js that handle millions of requests.",
  },
  {
    icon: Settings,
    title: "Custom CRM Solutions",
    description: "Tailored CRM systems that streamline your business operations and boost productivity.",
  },
  {
    icon: Layers,
    title: "API Development",
    description: "RESTful and GraphQL APIs designed for performance, security, and developer experience.",
  },
  {
    icon: Globe,
    title: "System Architecture",
    description: "Microservices and distributed systems designed for scale and resilience.",
  },
  {
    icon: BarChart3,
    title: "Performance Optimization",
    description: "Database tuning, caching strategies, and code optimization for peak performance.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            Full-Stack Engineering Services
          </h2>
          <p className="text-muted-foreground text-lg">
            From frontend interfaces to backend infrastructure, we deliver end-to-end solutions that power your business.
          </p>
        </motion.div>

        {/* Services Grid */}
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
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" className="border-accent text-foreground hover:bg-accent/10 rounded-full px-8 group">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;

