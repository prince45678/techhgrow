import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const reasons = [
  {
    title: "Production-Grade Code",
    description: "We write clean, maintainable code that's ready for production from day one.",
  },
  {
    title: "Scalable Architecture",
    description: "Systems designed to grow with your business, handling millions of users.",
  },
  {
    title: "Security First",
    description: "Industry-standard security practices baked into every solution we build.",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support to ensure your systems are always running smoothly.",
  },
  {
    title: "Transparent Communication",
    description: "Regular updates, clear timelines, and no surprises throughout the project.",
  },
  {
    title: "Cost-Effective Solutions",
    description: "Enterprise-quality solutions at competitive prices without compromising quality.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We understand your requirements and business goals" },
  { step: "02", title: "Planning", description: "Detailed architecture and project roadmap creation" },
  { step: "03", title: "Development", description: "Agile development with regular demos and feedback" },
  { step: "04", title: "Deployment", description: "Smooth deployment with monitoring and support" },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
              Engineering Excellence, Delivered
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We combine deep technical expertise with a commitment to understanding your business. Here's what sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{reason.title}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Process */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                Our Process
              </h3>
              <div className="space-y-6">
                {process.map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link to="/contact" className="block mt-8">
                <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full group">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
