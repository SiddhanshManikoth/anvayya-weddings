import { motion } from "framer-motion";
import FloralCorner from "./FloralCorner";
import heroImg from "@/assets/hero-wedding.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <FloralCorner position="top-left" className="w-48 h-48 md:w-72 md:h-72 opacity-60" />
      <FloralCorner position="bottom-right" className="w-48 h-48 md:w-72 md:h-72 opacity-60" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-24 pb-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Binding Moments That Last
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-foreground mb-6">
            Plan Your Dream Wedding,{" "}
            <span className="text-primary italic">Stress-Free</span>
          </h1>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-light">
            We are more than just a vendor directory. Anvayya is your single platform for end-to-end wedding planning, transparent budgeting, and complete logistics management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors"
            >
              Start Planning Your Wedding
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3.5 border border-primary text-primary font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/5 transition-colors"
            >
              How It Works
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={heroImg}
              alt="Beautiful Indian wedding couple"
              className="w-full h-[500px] lg:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>
          {/* Decorative frame */}
          <div className="absolute -inset-3 border border-primary/20 rounded-2xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
