import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "../../assets/leafora/hero.jpeg";

export default function LeaforaHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#08140F]">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-180px] left-[-180px] w-[520px] h-[520px] rounded-full bg-[#C9A55B]/10 blur-[180px]" />

        <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] rounded-full bg-[#0F8A5F]/10 blur-[180px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            BRAND IDENTITY PROJECT
          </span>

          <h1 className="text-6xl lg:text-8xl font-bold mt-6 leading-none">
            LEAFORA
          </h1>

          <h2 className="text-2xl text-zinc-300 mt-8">
            Premium Ceylon Tea Branding
          </h2>

          <p className="text-zinc-400 text-xl leading-9 mt-10 max-w-xl">
            A premium tea branding project focused on creating a modern visual
            identity through strategic brand naming, elegant typography,
            luxury packaging and cohesive brand storytelling.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-12">

            {/* GitHub */}
            <a
              href="https://github.com/tharushichamodi/Leafora-Tea-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#C9A55B] text-black px-8 py-4 font-semibold hover:scale-105 hover:bg-[#D6B56A] transition-all duration-300"
            >
              <Github size={20} />
              View GitHub
            </a>

            {/* Back to Projects */}
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-[#C9A55B]/40 px-8 py-4 text-[#C9A55B] font-semibold hover:bg-[#C9A55B]/10 hover:border-[#C9A55B] hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={hero}
            alt="Leafora Branding"
            className="rounded-[40px] shadow-2xl border border-white/10"
          />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ArrowDown
          className="text-[#C9A55B]"
          size={28}
        />
      </motion.div>

    </section>
  );
}