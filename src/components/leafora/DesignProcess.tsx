
import { motion } from "framer-motion";

import sketch from "../../assets/leafora/sketch.jpeg";
import finalDesign from "../../assets/leafora/final-design.png";
import packaging from "../../assets/leafora/packaging.jpeg";

const steps = [
  {
    number: "01",
    title: "Initial Sketch",
    image: sketch,
    description:
      "The packaging structure and layout were first explored through hand-drawn sketches to define the overall composition and information hierarchy.",
  },
  {
    number: "02",
    title: "Digital Design",
    image: finalDesign,
    description:
      "The selected concept was transformed into a refined digital design using Adobe Illustrator while establishing the complete visual identity.",
  },
  {
    number: "03",
    title: "Packaging Mockup",
    image: packaging,
    description:
      "The final branding was presented through realistic packaging mockups to demonstrate the premium shelf appearance of the product.",
  },
];

export default function DesignProcess() {
  return (
    <section className="py-28 bg-[#08140F]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Design Process
          </span>

          <h2 className="text-5xl font-bold mt-4">
            From Idea to Final Product
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            The Leafora brand was developed through a structured creative
            process beginning with concept sketches, followed by digital
            branding development and finally presented through premium
            packaging mockups.
          </p>
        </motion.div>

        <div className="space-y-24 mt-20">

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div>

                <span className="text-[#C9A55B] text-6xl font-bold">
                  {step.number}
                </span>

                <h3 className="text-4xl font-bold mt-6">
                  {step.title}
                </h3>

                <p className="text-zinc-400 leading-9 text-lg mt-6">
                  {step.description}
                </p>

              </div>

              <div className="overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">

                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full transition duration-500 hover:scale-105"
                />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}