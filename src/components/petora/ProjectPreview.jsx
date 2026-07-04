import { motion } from "framer-motion";

import storeVideo from "../../assets/petora/store.mp4";
import dashboardVideo from "../../assets/petora/dashboard.mp4";

export default function ProjectPreview() {
  return (
    <section className="py-24 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            Project Walkthrough
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            User Interface Preview
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            These walkthroughs showcase two of the major frontend modules I
            designed and developed: the Pet Store interface and the Dashboard
            UI. Both were built with a strong focus on responsiveness,
            usability and a clean user experience.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">

          {/* Pet Store */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-zinc-900
              rounded-[32px]
              border
              border-zinc-800
              overflow-hidden
              hover:border-orange-500/50
              hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
              transition-all
              duration-300
            "
          >

            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source src={storeVideo} type="video/mp4" />
            </video>

            <div className="p-8">

              <h3 className="text-2xl font-semibold text-white">
                Pet Store Module
              </h3>

              <p className="text-zinc-400 leading-8 mt-4">
                Designed and developed a responsive online pet store
                interface with promotional banners, product listings and
                an engaging shopping experience.This walkthrough highlights the frontend interfaces I developed. 
                Some dynamic content, such as product details, depends on backend API integration within the complete application.
              </p>

            </div>

          </motion.div>

          {/* Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-zinc-900
              rounded-[32px]
              border
              border-zinc-800
              overflow-hidden
              hover:border-orange-500/50
              hover:shadow-[0_20px_60px_rgba(249,115,22,0.15)]
              transition-all
              duration-300
            "
          >

            <video
              controls
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="w-full"
            >
              <source src={dashboardVideo} type="video/mp4" />
            </video>

            <div className="p-8">

              <h3 className="text-2xl font-semibold text-white">
                Dashboard Interface
              </h3>

              <p className="text-zinc-400 leading-8 mt-4">
                Built a modern dashboard with structured navigation,
                responsive layouts and an intuitive user experience for
                efficient management.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}