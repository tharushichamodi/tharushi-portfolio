import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

import promoVideo from "../../assets/refrigerator/promo_video.mp4";

export default function PromoVideo() {
  return (
    <section className="py-24 bg-[#060B14]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Promotional Video
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Product Concept Showcase
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            To communicate the concept effectively, we created a promotional
            video demonstrating the refrigerator's innovative cooling system,
            UX improvements and key design features. The video presents how
            the proposed solution enhances energy efficiency while providing
            a simple and intuitive user experience.
          </p>

        </motion.div>

        {/* Video */}

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-16"
        >

          <div className="
            overflow-hidden
            rounded-[36px]
            border
            border-cyan-500/20
            bg-[#111827]
            shadow-2xl
          ">

            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source src={promoVideo} type="video/mp4" />
            </video>

          </div>

        </motion.div>

        {/* Highlights */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-[#111827] rounded-2xl border border-cyan-500/10 p-6 text-center hover:border-cyan-400/40 transition-all">

            <PlayCircle
              className="mx-auto text-cyan-400 mb-4"
              size={34}
            />

            <h3 className="text-white font-semibold text-xl">
              Product Story
            </h3>

            <p className="text-zinc-400 mt-3">
              Presents the problem, design process and proposed solution.
            </p>

          </div>

          <div className="bg-[#111827] rounded-2xl border border-cyan-500/10 p-6 text-center hover:border-cyan-400/40 transition-all">

            <PlayCircle
              className="mx-auto text-cyan-400 mb-4"
              size={34}
            />

            <h3 className="text-white font-semibold text-xl">
              UX Improvements
            </h3>

            <p className="text-zinc-400 mt-3">
              Demonstrates reduced cold-air loss and improved usability.
            </p>

          </div>

          <div className="bg-[#111827] rounded-2xl border border-cyan-500/10 p-6 text-center hover:border-cyan-400/40 transition-all">

            <PlayCircle
              className="mx-auto text-cyan-400 mb-4"
              size={34}
            />

            <h3 className="text-white font-semibold text-xl">
              Product Vision
            </h3>

            <p className="text-zinc-400 mt-3">
              Showcases the future potential of the smart refrigerator concept.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}