import { motion } from "framer-motion";
import {
  Snowflake,
  Zap,
  Clock3,
  Refrigerator,
} from "lucide-react";

const problems = [
  {
    icon: <Snowflake size={28} />,
    title: "Cold-Air Loss",
    description:
      "Every time the refrigerator door is opened, a significant amount of cold air escapes, reducing cooling efficiency.",
  },
  {
    icon: <Zap size={28} />,
    title: "High Energy Consumption",
    description:
      "The compressor works harder to restore the internal temperature, resulting in higher electricity usage.",
  },
  {
    icon: <Clock3 size={28} />,
    title: "Long Door Opening Time",
    description:
      "Users often keep the refrigerator door open while searching for items, increasing energy waste.",
  },
  {
    icon: <Refrigerator size={28} />,
    title: "Traditional Design Limitations",
    description:
      "Conventional refrigerators expose the entire cooling space even when users only need access to one section.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 bg-[#060B14]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Design Challenge
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            The Problem
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Through user interviews and research, we identified a common issue
            with traditional refrigerators. Frequent door openings allow cold
            air to escape, increasing energy consumption and reducing cooling
            efficiency. Our challenge was to redesign the refrigerator
            experience while keeping it simple, practical and user-friendly.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {problems.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                bg-[#111827]
                rounded-3xl
                border
                border-cyan-500/10
                p-8
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8 mt-4">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}