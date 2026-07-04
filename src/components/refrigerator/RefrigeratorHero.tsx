import { motion } from "framer-motion";
import { ArrowLeft, ArrowDown, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import hero from "../../assets/refrigerator/hero.png";

export default function RefrigeratorHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060B14]">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 -left-40 w-[520px] h-[520px] rounded-full bg-cyan-500/10 blur-[170px]" />

        <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] rounded-full bg-blue-600/10 blur-[170px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">

            UX DESIGN CASE STUDY

          </span>

          <h1 className="text-6xl lg:text-7xl font-bold mt-6 leading-tight text-white">

            Smart Controlled Cooling Refrigerator

          </h1>

          <h2 className="text-2xl text-zinc-300 mt-6">

            Improving Energy Efficiency Through Better User Experience

          </h2>

          <p className="text-zinc-400 text-xl leading-9 mt-10 max-w-xl">

            A collaborative UX design project focused on reducing cold-air
            loss and improving refrigerator usability through research,
            ideation, prototyping and user-centered design.

          </p>

          <div className="flex flex-wrap gap-5 mt-12">

            <a
              href="#prototype"
              className="inline-flex items-center gap-3 rounded-full bg-cyan-500 text-black px-8 py-4 font-semibold hover:bg-cyan-400 transition-all duration-300"
            >
              <ExternalLink size={20} />
              View Prototype
            </a>

            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-cyan-500/30 px-8 py-4 text-white hover:bg-cyan-500/10 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8, delay: .2 }}
        >

          <img
            src={hero}
            alt="Smart Refrigerator"
            className="rounded-[36px] border border-cyan-500/20 shadow-2xl"
          />

        </motion.div>

      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >

        <ArrowDown
          className="text-cyan-400"
          size={28}
        />

      </motion.div>

    </section>
  );
}