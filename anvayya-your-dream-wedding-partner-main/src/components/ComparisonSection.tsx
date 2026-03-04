import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

const features = [
  { feature: "Discover & Compare Vendors", anvayya: true, others: true },
  { feature: "Transparent Full Wedding Cost", anvayya: true, others: false },
  { feature: "Logistics & On-Ground Execution", anvayya: true, others: false },
  { feature: "Single Responsible Partner", anvayya: true, others: false },
  { feature: "Burden Taken Off Families", anvayya: true, others: false },
];

const ComparisonSection = () => {
  return (
    <section id="why-us" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Difference</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            How Anvayya is <span className="italic text-primary">Different</span>
          </h2>
          <p className="font-body text-muted-foreground font-light leading-relaxed">
            Unlike standard wedding directories that just provide inspiration and vendor numbers, Anvayya is an execution partner built for Indian families.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto overflow-hidden rounded-lg border border-border"
        >
          <table className="w-full">
            <thead>
              <tr className="bg-primary/10">
                <th className="text-left font-body text-xs tracking-widest uppercase text-muted-foreground py-4 px-6">Feature</th>
                <th className="text-center font-display text-lg text-primary py-4 px-6">Anvayya</th>
                <th className="text-center font-body text-xs tracking-widest uppercase text-muted-foreground py-4 px-6">Others</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-card"}>
                  <td className="font-body text-sm text-foreground py-4 px-6 font-light">{row.feature}</td>
                  <td className="text-center py-4 px-6">
                    {row.anvayya ? (
                      <Check className="w-5 h-5 text-primary mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="text-center py-4 px-6">
                    {row.others ? (
                      <Check className="w-5 h-5 text-muted-foreground mx-auto" />
                    ) : (
                      <Minus className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;
