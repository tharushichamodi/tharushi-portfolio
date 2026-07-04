import { motion } from "framer-motion";
import {
  Award,
  BadgeCheck,
  Sparkles,
  Users,
} from "lucide-react";

const outcomes = [
  {
    icon: <Award size={30} />,
    title: "Premium Brand Identity",
    description:
      "Successfully created a modern premium tea brand with a memorable identity that reflects the elegance of Ceylon tea.",
  },
  {
    icon: <BadgeCheck size={30} />,
    title: "Complete Branding System",
    description:
      "Developed a consistent visual identity including brand naming, packaging concept, typography and colour palette.",
  },
  {
    icon: <Sparkles size={30} />,
    title: "Professional Presentation",
    description:
      "Presented the final concept using realistic packaging mockups to demonstrate how the product would appear in the marketplace.",
  },
  {
    icon: <Users size={30} />,
    title: "Team Collaboration",
    description:
      "Worked collaboratively with the project team while contributing the brand concept, creative direction and overall visual strategy.",
  },
];

export default function Outcome() {
  return (
    <section className="py-28 bg-[#0B1712]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Project Outcome
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Final Outcome
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            Leafora demonstrates how strategic branding and thoughtful visual
            design can transform a simple tea product into a memorable premium
            brand experience.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {outcomes.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#C9A55B]/40 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-[#C9A55B]/10 flex items-center justify-center text-[#C9A55B]">

                {item.icon}

              </div>

              <h3 className="text-2xl font-semibold mt-6">
                {item.title}
              </h3>

              <p className="mt-5 text-zinc-400 leading-8">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}