import { motion } from "framer-motion";

import packaging from "../../assets/leafora/packaging.jpeg";

export default function PackagingShowcase() {
  return (
    <section className="py-32 bg-[#0B1712] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Packaging Design
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Premium Packaging
          </h2>

          <p className="text-zinc-400 text-lg leading-9 max-w-3xl mx-auto mt-8">
            The final packaging was designed to communicate elegance,
            authenticity and premium quality. Every visual element,
            including typography, botanical illustrations and gold
            accents, was carefully arranged to create a luxurious
            shelf presence while reflecting the calming experience
            of Leafora tea.
          </p>

        </motion.div>

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mt-20"
        >

          <img
            src={packaging}
            alt="Leafora Packaging"
            className="
              w-full
              rounded-[40px]
              border
              border-white/10
              shadow-2xl
              transition-all
              duration-500
              hover:scale-[1.02]
            "
          />

        </motion.div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Premium Appearance
            </h3>

            <p className="mt-5 text-zinc-400 leading-8">
              A luxurious visual style created using elegant
              typography, rich green tones and refined gold accents.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Functional Layout
            </h3>

            <p className="mt-5 text-zinc-400 leading-8">
              Product information was organised using a clean
              hierarchy to improve readability while maintaining
              a premium presentation.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-semibold">
              Brand Consistency
            </h3>

            <p className="mt-5 text-zinc-400 leading-8">
              Every design element supports the Leafora brand,
              creating a consistent identity across packaging
              and promotional materials.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}