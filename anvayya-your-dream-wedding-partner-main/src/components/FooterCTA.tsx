import { motion } from "framer-motion";
import FloralCorner from "./FloralCorner";
import ContactForm from "./ContactForm";
import logo from "@/assets/logo-main.png";

const FooterCTA = () => {
  return (
    <>
      {/* Contact Form Section */}
   

      {/* CTA */}
      <section className="relative py-24 bg-card overflow-hidden">
        <FloralCorner position="top-right" className="w-40 h-40 md:w-56 md:h-56 opacity-50" />
        <FloralCorner position="bottom-left" className="w-40 h-40 md:w-56 md:h-56 opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 text-center relative z-10">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Ready?</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
            Let's Create Your <span className="italic text-primary">Perfect Day</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-xl mx-auto mb-10 leading-relaxed text-base">
            Let Anvayya handle the coordination so your family can cherish every moment.
          </p>
          <a
            href="#contact"
            className="inline-flex px-10 py-4 bg-primary text-primary-foreground font-body text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors">
            
            Fill Out Your Wedding Details
          </a>
        </motion.div>
      </section>
   <section id="contact" className="relative py-24 bg-background overflow-hidden">
        <FloralCorner position="top-left" className="w-40 h-40 md:w-56 md:h-56 opacity-50" />
        <FloralCorner position="bottom-right" className="w-40 h-40 md:w-56 md:h-56 opacity-50" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 relative z-10">
          
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Get In Touch</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6">
              Start Your <span className="italic text-primary">Wedding Journey</span> Today
            </h2>
            <p className="font-body text-muted-foreground font-light max-w-xl mx-auto leading-relaxed text-base">
              Share your vision with us and let's create your dream wedding together.
            </p>
          </div>

          <ContactForm />
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="py-12 bg-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Anvayya" className="h-24 w-auto brightness-200" />
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              {["Home", "About", "Services", "How It Works", "Why Us", "Contact"].map((link) =>
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-body text-xs tracking-widest uppercase text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                
                  {link}
                </a>
              )}
            </nav>
            <p className="font-body text-xs text-primary-foreground/40">
              © 2026 Anvayya. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>);

};

export default FooterCTA;