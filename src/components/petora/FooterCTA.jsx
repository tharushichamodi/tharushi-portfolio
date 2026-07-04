import { motion } from "framer-motion";
import { ArrowLeft, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section className="py-24 bg-[#09090B] border-t border-zinc-800">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[36px]
            bg-zinc-900
            border
            border-zinc-800
            p-12
            text-center
            hover:border-orange-500/40
            transition-all
            duration-300
          "
        >

          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            Thank You
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Explore More Projects
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Thank you for taking the time to explore Petora. Feel free to
            browse the GitHub repository or return to my portfolio to discover
            more projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {/* GitHub */}

            <a
             href="https://github.com/tharushichamodi/Petora-Animal-Shelter"
  target="_blank"
  rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-orange-500
                px-8
                py-4
                text-white
                font-semibold
                hover:bg-orange-600
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                shadow-orange-500/20
              "
            >
              <Github size={20} />
              View GitHub
            </a>

            {/* Back */}

            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-zinc-700
                bg-zinc-800
                px-8
                py-4
                text-white
                font-semibold
                hover:border-orange-500
                hover:bg-zinc-700
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <ArrowLeft size={20} />
              Back to Projects
            </Link>

          </div>

        </motion.div>

      </div>

    </section>
  );
}