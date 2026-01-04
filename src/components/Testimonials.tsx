import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CTO, FinTech Startup",
    content: "TechHGrow transformed our legacy system into a modern, scalable architecture. Their Java expertise is unmatched, and they delivered exactly what we needed for our high-traffic platform.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder, E-commerce Platform",
    content: "The CRM solution they built has revolutionized how we manage customer relationships. Our team productivity increased by 40% within the first month.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "VP Engineering, SaaS Company",
    content: "Prince and his team are true backend experts. They helped us handle 10x traffic growth without a single downtime incident. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sneha Verma",
    role: "Product Manager, HealthTech",
    content: "From API design to deployment, TechHGrow handled everything professionally. Their attention to security and performance is impressive.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mt-4 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            We've helped dozens of companies build and scale their backend infrastructure. Here's what they have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 lg:p-8 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-accent/20" />
              
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-semibold">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
