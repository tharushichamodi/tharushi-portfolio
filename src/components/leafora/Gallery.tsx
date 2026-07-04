import { motion } from "framer-motion";

import sketch from "../../assets/leafora/sketch.jpeg";
import finalDesign from "../../assets/leafora/final-design.png";
import packaging from "../../assets/leafora/packaging.jpeg";

const images = [
  {
    image: sketch,
    title: "Initial Sketch",
    description:
      "Early concept sketches exploring packaging layout and information hierarchy.",
  },
  {
    image: finalDesign,
    title: "Final Artwork",
    description:
      "Completed packaging artwork developed through the branding process.",
  },
  {
    image: packaging,
    title: "Packaging Mockup",
    description:
      "Premium mockup presenting the final Leafora tea packaging.",
  },
];

export default function Gallery() {
  return (
    <section className="py-28 bg-[#08140F]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Project Gallery
          </span>

          <h2 className="text-5xl font-bold mt-5">
            Design Showcase
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-8">
            From concept sketches to the completed packaging design,
            each stage contributed to building the premium identity
            of the Leafora brand.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {images.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-[30px] overflow-hidden border border-white/10 bg-white/5"
            >

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-semibold">
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