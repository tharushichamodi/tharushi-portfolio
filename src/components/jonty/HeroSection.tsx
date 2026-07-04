import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "../../assets/jonty/hero.png";

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <img
        src={hero}
        alt="Jonty Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0d] via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <div className="max-w-5xl text-center">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.45em] text-orange-500 text-sm mb-8"
          >
            Digital Marketing Project
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-black leading-none"
          >
            Jonty
            <br />
            Clothing Brand
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="mt-10 text-zinc-300 text-xl leading-10 max-w-4xl mx-auto"
          >
            A complete digital marketing and branding campaign developed
            for The Jonty Clothing Brand including premium poster
            designs, social media campaigns, promotional content,
            branding assets and advertising materials.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .5 }}
            className="flex flex-wrap justify-center gap-6 mt-14"
          >
            <Link
              to="/"
              className="px-8 py-4 rounded-full border border-zinc-700 bg-zinc-900/70 hover:bg-zinc-800 duration-300 flex items-center gap-3"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>

            <a
              href="https://github.com/tharushichamodi/Jonty-Clothing-Brand"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 duration-300 flex items-center gap-3 text-white font-medium"
            >
              <Github size={20} />
              View GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}