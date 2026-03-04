import { motion } from "framer-motion";
import { Clock, IndianRupee, HeartCrack } from "lucide-react";

const problems = [
{
  icon: Clock,
  title: "Endless Follow-ups",
  description: "You have to personally search, contact, negotiate, and follow up with multiple independent vendors."
},
{
  icon: IndianRupee,
  title: "Budget Anxiety",
  description: "Lack of price transparency leaves you constantly worrying about last-minute expenses and going over budget."
},
{
  icon: HeartCrack,
  title: "Wedding Day Stress",
  description: "Instead of enjoying the celebration, family members face high physical and emotional stress solving problems."
}];


const ProblemSection = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16">
          
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Problem</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            Indian Weddings Should Be <span className="italic text-primary">Joyful</span>, Not Exhausting
          </h2>
          <p className="font-body text-muted-foreground font-light leading-relaxed text-lg">
            Planning an Indian wedding puts a huge responsibility on families. Too often, the joy of the occasion is lost because families are forced to act as project managers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, i) =>
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="text-center p-8 bg-background rounded-lg">
            
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-3">{item.title}</h3>
              <p className="font-body text-muted-foreground font-light leading-relaxed text-base">{item.description}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ProblemSection;