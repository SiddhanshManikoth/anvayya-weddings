import { motion } from "framer-motion";
import { LayoutGrid, Eye, Truck, ShieldCheck } from "lucide-react";
import weddingDetail from "@/assets/wedding-detail.jpg";

const solutions = [
{
  icon: LayoutGrid,
  title: "Everything in One Place",
  description: "Explore, compare, and book verified caterers, makeup artists, decorators, photographers, and venues—all customized to your preferences."
},
{
  icon: Eye,
  title: "100% Budget Clarity",
  description: "No hidden costs or surprises. We provide a complete, consolidated view of your total wedding expense before you finalize any bookings."
},
{
  icon: Truck,
  title: "Deep Logistics Support",
  description: "We take full ownership of vendor coordination, scheduling, deliveries, and on-ground execution."
},
{
  icon: ShieldCheck,
  title: "Quality & Accountability",
  description: "Strict quality checks and execution accountability means you never worry about no-shows or miscommunications."
}];


const SolutionSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            
            <img
              src={weddingDetail}
              alt="Bridal bouquet details"
              className="w-full h-[500px] object-cover rounded-lg shadow-xl" />
            
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-lg pointer-events-none" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Anvayya Promise</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-10">
                Your Single Point of <span className="italic text-primary">Responsibility</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {solutions.map((item, i) =>
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5">
                
                  <div className="w-12 h-12 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="font-body text-muted-foreground font-light leading-relaxed text-base">{item.description}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default SolutionSection;