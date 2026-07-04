import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "../../assets/petora/hero.png";

export default function PetoraHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#09090B]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[180px]" />

        <div className="absolute bottom-[-180px] right-[-120px] w-[450px] h-[450px] rounded-full bg-orange-400/10 blur-[180px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-white/[0.02] blur-[220px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            WEB APPLICATION
          </span>

          <h1 className="text-7xl lg:text-8xl font-black mt-5 text-white">
            PETORA
          </h1>

          <h2 className="text-3xl text-zinc-300 mt-8 font-medium">
            Animal Shelter & Adoption Management System
          </h2>

          <p className="text-zinc-400 text-xl leading-10 mt-10 max-w-xl">
            Petora is a university group project designed to simplify pet
            adoption and animal care through a modern web platform. The
            system includes pet adoption, veterinary services, pet care and
            an online pet store with a clean, responsive user experience.
          </p>

          <div className="flex flex-wrap gap-5 mt-14">

            {/* GitHub */}
            <a
  href="https://github.com/tharushichamodi/Petora-Animal-Shelter"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 rounded-full bg-orange-500 text-white px-9 py-4 font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/20"
>
  <Github size={20} />
  View GitHub
</a>

            {/* Back */}
            <Link
              to="/#projects"
              className="inline-flex items-center gap-3 rounded-full border border-zinc-700 bg-zinc-900 px-9 py-4 text-white font-semibold hover:border-orange-500 hover:bg-zinc-800 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

          </div>

        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >

          <div className="absolute inset-0 bg-orange-500/10 blur-3xl rounded-full scale-90" />

          <div className="relative bg-zinc-900 rounded-[36px] border border-zinc-800 shadow-2xl overflow-hidden">

            <img
              src={hero}
              alt="Petora Preview"
              className="w-full object-cover"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}