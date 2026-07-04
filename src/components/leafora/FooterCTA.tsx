import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section className="py-32 bg-[#0B1712] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 lg:p-16 text-center"
        >

          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Thank You
          </span>

          <h2 className="text-5xl lg:text-6xl font-bold mt-6">
            Explore More Projects
          </h2>

          <p className="text-zinc-400 text-xl leading-9 max-w-3xl mx-auto mt-8">
            Thank you for exploring the Leafora Tea Branding case study.
            Feel free to explore the GitHub repository.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-14">

            {/* GitHub */}

            <a
              href="https://github.com/tharushichamodi/Leafora-Tea-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-[#C9A55B] px-8 py-4 text-black font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#d8b46b]"
            >
              <Github size={20} />
              View GitHub
            </a>

            {/* Back */}

            <Link
              to="/#projects"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold hover:border-[#C9A55B] hover:text-[#C9A55B] transition-all duration-300"
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