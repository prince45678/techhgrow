import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Layers, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const caseStudies = [
  {
    title: "E-commerce Platform Scaling",
    client: "RetailMax",
    category: "Backend Engineering",
    description: "Helped a growing e-commerce platform handle 10x traffic growth during seasonal sales without any downtime.",
    challenge: "The existing monolithic architecture couldn't handle the increasing traffic during peak shopping seasons, leading to frequent crashes and lost revenue.",
    solution: "Migrated to a microservices architecture using Java Spring Boot, implemented Redis caching, and set up auto-scaling on AWS.",
    results: [
      "10x improvement in handling concurrent users",
      "99.99% uptime during peak seasons",
      "40% reduction in infrastructure costs",
      "Sub-100ms response times",
    ],
    technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "AWS", "Docker"],
    icon: Database,
  },
  {
    title: "Custom CRM Development",
    client: "SalesForce Pro",
    category: "CRM Solutions",
    description: "Built a custom CRM solution that increased sales team productivity by 45% and improved lead conversion rates.",
    challenge: "The client was using spreadsheets and multiple disconnected tools to manage customer relationships, leading to data silos and missed opportunities.",
    solution: "Developed a centralized CRM with lead scoring, automated workflows, and real-time analytics using React and Node.js.",
    results: [
      "45% increase in team productivity",
      "30% improvement in lead conversion",
      "Real-time pipeline visibility",
      "Automated follow-up workflows",
    ],
    technologies: ["React", "Node.js", "MongoDB", "GraphQL", "Redis"],
    icon: Layers,
  },
  {
    title: "FinTech API Platform",
    client: "PayQuick",
    category: "API Development",
    description: "Designed and built a secure, high-performance payment API handling over 5M transactions daily.",
    challenge: "The client needed a robust API platform that could handle high transaction volumes while meeting strict security and compliance requirements.",
    solution: "Built a RESTful API with Java Spring Boot, implemented OAuth 2.0, and set up comprehensive monitoring and alerting.",
    results: [
      "5M+ daily transactions processed",
      "PCI-DSS compliant architecture",
      "99.999% API availability",
      "Average response time under 50ms",
    ],
    technologies: ["Java", "Spring Security", "PostgreSQL", "Kafka", "Kubernetes"],
    icon: Code2,
  },
  {
    title: "Healthcare Analytics Dashboard",
    client: "MedTrack",
    category: "Web Development",
    description: "Created a real-time analytics dashboard for healthcare providers to monitor patient outcomes and resource utilization.",
    challenge: "Healthcare administrators needed a way to visualize complex data across multiple departments and make data-driven decisions quickly.",
    solution: "Built an interactive dashboard with React, real-time data streaming, and advanced visualization components.",
    results: [
      "Real-time data visualization",
      "50% faster decision-making",
      "Reduced reporting time by 80%",
      "HIPAA compliant solution",
    ],
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "WebSockets"],
    icon: BarChart3,
  },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mt-4 mb-6">
              Real Problems, Real Solutions
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
              Explore how we've helped businesses solve complex technical challenges and achieve measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Info */}
                  <div className="p-6 lg:p-10 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <span className="text-accent text-sm font-medium">{study.category}</span>
                        <h3 className="text-2xl font-display font-bold text-foreground">
                          {study.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {study.description}
                    </p>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="text-muted-foreground text-sm">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                      <p className="text-muted-foreground text-sm">{study.solution}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Results */}
                  <div className="bg-secondary/50 p-6 lg:p-10 flex flex-col justify-center">
                    <h4 className="font-display font-semibold text-foreground mb-6 text-lg">
                      Key Results
                    </h4>
                    <ul className="space-y-4">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-accent text-xs font-bold">{i + 1}</span>
                          </div>
                          <span className="text-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
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
              Want Similar Results?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Let's discuss how we can help your business achieve its technical goals.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group">
                Start Your Project
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

export default CaseStudies;
