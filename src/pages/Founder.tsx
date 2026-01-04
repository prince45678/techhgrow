import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Github, Twitter, Award, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";


const skills = [
  { name: "Java/Spring Boot", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "React", level: 85 },
  { name: "PostgreSQL/MongoDB", level: 90 },
  { name: "System Architecture", level: 88 },
  { name: "AWS/Cloud Services", level: 85 },
];

const experience = [
  {
    title: "Founder & Lead Engineer",
    company: "TechHGrow",
    period: "2022 - Present",
    description: "Leading a team of engineers to deliver scalable backend solutions for startups and enterprises.",
  },
  {
    title: "Senior Backend Engineer",
    company: "Enterprise Tech Company",
    period: "2019 - 2022",
    description: "Architected and built microservices handling millions of daily transactions with 99.99% uptime.",
  },
  {
    title: "Software Engineer",
    company: "Tech Startup",
    period: "2018 - 2019",
    description: "Developed core backend services and APIs for a fast-growing fintech platform.",
  },
];

const achievements = [
  { icon: Briefcase, label: "5+ Years", description: "Backend Experience" },
  { icon: Code2, label: "50+", description: "Projects Delivered" },
  { icon: Award, label: "10M+", description: "Requests Handled Daily" },
  { icon: GraduationCap, label: "Certified", description: "AWS Solutions Architect" },
];

const Founder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent/10 rounded-3xl blur-2xl" />
                
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 space-y-6"
            >
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Meet the Founder</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
                Prince Khiyani
              </h1>
              <p className="text-xl text-muted-foreground">
                Senior Backend Engineer & Founder
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With over 5 years of experience in backend engineering, I've helped numerous startups and enterprises build scalable, reliable systems. My passion lies in solving complex technical challenges and turning ideas into production-ready solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                At TechHGrow, we combine deep technical expertise with a commitment to understanding your business goals. Whether you're scaling an existing system or building from scratch, we're here to help you succeed.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="mailto:info@techhgrow.com"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+917042367611"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <achievement.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">{achievement.label}</div>
                <div className="text-sm text-muted-foreground">{achievement.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Experience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
                Technical Skills
              </h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
                Experience
              </h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={exp.title}
                    className="glass-card rounded-xl p-6 border-l-4 border-l-accent"
                  >
                    <div className="text-sm text-accent font-medium mb-1">{exp.period}</div>
                    <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                    <div className="text-muted-foreground text-sm mb-2">{exp.company}</div>
                    <p className="text-muted-foreground text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              Let's Build Something Great Together
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always excited to discuss new projects and opportunities. Whether you have a specific requirement or just want to explore possibilities, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 group">
                  Schedule a Call
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="mailto:info@techhgrow.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-foreground/30 text-foreground hover:bg-foreground/10 rounded-full px-8"
                >
                  <Mail className="mr-2 w-4 h-4" />
                  info@techhgrow.com
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Founder;