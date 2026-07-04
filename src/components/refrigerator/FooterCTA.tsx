import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section className="py-24 bg-[#090E18] border-t border-cyan-500/10">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[36px]
            bg-[#111827]
            border
            border-cyan-500/10
            p-12
            text-center
            hover:border-cyan-400/30
            transition-all
            duration-300
          "
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Thank You
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Thank You for Viewing
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-2xl mx-auto mt-6">
            Thank you for exploring this UX case study. This project reflects
            my experience in UX research, collaborative design, documentation,
            prototyping and presenting user-centered solutions. Feel free to
            explore more of my featured projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-12">

            {/* Prototype Button */}

            <a
              href="#prototype"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-500
                px-8
                py-4
                text-black
                font-semibold
                hover:bg-cyan-400
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <ExternalLink size={20} />
              View Prototype
            </a>

            {/* Back Button */}

            <Link
              to="/#projects"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-zinc-700
                bg-[#1F2937]
                px-8
                py-4
                text-white
                font-semibold
                hover:border-cyan-400
                hover:bg-[#273449]
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