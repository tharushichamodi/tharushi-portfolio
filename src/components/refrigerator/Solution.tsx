import { motion } from "framer-motion";
import {
  Layers3,
  Snowflake,
  Cpu,
  LayoutGrid,
} from "lucide-react";

import refrigerator from "../../assets/refrigerator/prototype.png";

const features = [
  {
    icon: <Layers3 size={28} />,
    title: "Section-Based Access",
    description:
      "Users can open only the required refrigerator section instead of exposing the entire cooling space.",
  },
  {
    icon: <Snowflake size={28} />,
    title: "Reduced Cold-Air Loss",
    description:
      "Internal compartment covers help retain cold air, improving cooling efficiency and reducing energy waste.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Smart Control Panel",
    description:
      "A simple control interface allows users to quickly access the desired compartment with minimal effort.",
  },
  {
    icon: <LayoutGrid size={28} />,
    title: "Organized Storage",
    description:
      "Dedicated storage sections make food easier to locate while reducing the time the refrigerator remains open.",
  },
];

export default function Solution() {
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
            Final Solution
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Smart Controlled Cooling Refrigerator
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            Based on the research findings, we designed a refrigerator
            concept that minimizes unnecessary cold-air loss through
            section-based access and an intuitive control panel while
            improving overall usability and energy efficiency.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <img
              src={refrigerator}
              alt="Refrigerator Prototype"
              className="
                rounded-[32px]
                border
                border-cyan-500/20
                shadow-2xl
              "
            />

          </motion.div>

          {/* Features */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {features.map((feature) => (

              <div
                key={feature.title}
                className="
                  bg-[#111827]
                  rounded-3xl
                  border
                  border-cyan-500/10
                  p-7
                  hover:border-cyan-400/40
                  transition-all
                  duration-300
                "
              >

                <div className="flex gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-white">

                      {feature.title}

                    </h3>

                    <p className="text-zinc-400 leading-8 mt-3">

                      {feature.description}

                    </p>

                  </div>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}