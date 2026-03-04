import { motion } from "framer-motion";
import weddingDecor from "@/assets/wedding-decor.jpg";
import weddingVenue from "@/assets/wedding-venue.jpg";

const steps = [
{
  number: "01",
  title: "Discover & Customize",
  description: "Enter your requirements once and easily compare verified local vendors based on price, reviews, and services."
},
{
  number: "02",
  title: "Review Upfront Costs",
  description: "Get a clear, transparent cost estimate for your entire wedding so you can plan confidently within your budget."
},
{
  number: "03",
  title: "Leave the Logistics to Us",
  description: "Our team manages all bookings, coordination, and schedules leading up to the event."
},
{
  number: "04",
  title: "Celebrate Stress-Free",
  description: "On the wedding day, Anvayya handles the ground execution while you create memories with your loved ones."
}];


const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground">
            A Seamless Journey to <span className="italic text-primary">Your Big Day</span>
          </h2>
        </motion.div>

        {/* Image mosaic */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={weddingDecor}
            alt="Wedding table decoration"
            className="w-full h-64 object-cover rounded-lg" />
          
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            src={weddingVenue}
            alt="Wedding venue setup"
            className="w-full h-64 object-cover rounded-lg" />
          
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) =>
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="text-center">
            
              <span className="font-display text-5xl font-light text-secondary-foreground">{step.number}</span>
              <h3 className="font-display text-xl font-medium text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="font-body text-muted-foreground font-light leading-relaxed text-base">{step.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default HowItWorksSection;