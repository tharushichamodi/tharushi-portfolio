import { motion } from "framer-motion";
import { Cuboid, MonitorSmartphone, BookOpen } from "lucide-react";

import prototype from "../../assets/refrigerator/prototype.png";
import controlPanel from "../../assets/refrigerator/control-panel.png";
import manual from "../../assets/refrigerator/manual.png";

const prototypes = [
  {
    image: prototype,
    icon: <Cuboid size={24} />,
    title: "3D Product Prototype",
    description:
      "A conceptual 3D refrigerator design demonstrating the internal compartment system and smart cooling concept.",
  },
  {
    image: controlPanel,
    icon: <MonitorSmartphone size={24} />,
    title: "Control Panel Interface",
    description:
      "A simple and intuitive control panel allowing users to select specific refrigerator compartments quickly.",
  },
  {
    image: manual,
    icon: <BookOpen size={24} />,
    title: "User Manual",
    description:
      "A user guide explaining the refrigerator features, interactions and operating instructions.",
  },
];

export default function Prototype() {
  return (
    <section
      id="prototype"
      className="py-24 bg-[#090E18]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Prototype
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Design Prototype
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            The concept was visualized through a 3D prototype, control panel
            interface and supporting user documentation to communicate the
            interaction flow and overall user experience.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {prototypes.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-[#111827]
                rounded-3xl
                border
                border-cyan-500/10
                overflow-hidden
                hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-8">

                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8 mt-4">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}