import { motion } from "framer-motion";

import video1 from "../../assets/jonty/video1.mp4";
import video2 from "../../assets/jonty/video2.MP4";

export default function VideoShowcase() {
  return (
    <section className="py-28 bg-[#0b0b0d]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-orange-500 text-sm"
        >
          CAMPAIGN VIDEOS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-5"
        >
          Promotional Video Showcase
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-xl leading-9 max-w-3xl mt-8"
        >
          Two promotional videos were produced to showcase the
          Jonty Clothing Brand through premium storytelling,
          fashion visuals and social media marketing content.
        </motion.p>

        {/* ---------------- Video 1 ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-24"
        >

          <h3 className="text-3xl font-semibold mb-8">
            Brand Commercial
          </h3>

          <div className="flex justify-center">

            <video
              controls
              playsInline
              preload="metadata"
              className="w-[380px] rounded-[32px] border border-zinc-800 shadow-2xl"
            >
              <source src={video1} type="video/mp4" />
            </video>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                Product Showcase
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Highlights premium oversized T-shirts and fashion
                branding.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                Storytelling
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Presents the brand message using cinematic
                visuals.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                Advertising
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Designed for promotional campaigns across
                multiple social media platforms.
              </p>
            </div>

          </div>

        </motion.div>

        {/* ---------------- Video 2 ---------------- */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-28"
        >

          <h3 className="text-3xl font-semibold mb-8">
            Social Media Reel
          </h3>

          <div className="flex justify-center">

            <video
              controls
              playsInline
              preload="metadata"
              className="w-[380px] rounded-[32px] border border-zinc-800 shadow-2xl"
            >
              <source src={video2} type="video/mp4" />
            </video>

          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                Instagram Reel
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Vertical content optimized for Instagram
                audiences.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                TikTok Ready
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Designed for engaging short-form fashion
                marketing.
              </p>
            </div>

            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6">
              <h4 className="text-xl font-semibold">
                Brand Awareness
              </h4>

              <p className="text-zinc-400 mt-4 leading-7">
                Reinforces the identity of The Jonty through
                consistent visual storytelling.
              </p>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}