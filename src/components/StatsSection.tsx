import { motion } from "framer-motion";
import { Users, Rocket, Clock, Target } from "lucide-react";

const stats = [
  { icon: Users, value: "50+", label: "Clients Served" },
  { icon: Rocket, value: "100+", label: "Projects Delivered" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Target, value: "99.9%", label: "Client Satisfaction" },
];

const technologies = [
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Cache" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
];

const StatsSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <div className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-8">
            Technologies We Master
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-sm font-medium hover:bg-accent/10 hover:border-accent/30 transition-colors cursor-default"
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
