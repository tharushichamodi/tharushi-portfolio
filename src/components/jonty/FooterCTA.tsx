import { motion } from "framer-motion";
import { ArrowLeft, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterCTA() {
  return (
    <section className="py-32 bg-[#0b0b0d] border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 p-[2px]"
        >
          <div className="rounded-[38px] bg-[#0b0b0d] px-10 py-20 text-center">

            <span className="uppercase tracking-[0.35em] text-orange-500 text-sm">
              THANK YOU
            </span>

            <h2 className="text-5xl md:text-6xl font-bold mt-6">
              Thanks for Exploring
              <br />
              <span className="text-orange-500">
                The Jonty Project
              </span>
            </h2>

            <p className="text-zinc-400 text-xl leading-9 max-w-3xl mx-auto mt-8">
              This case study showcases my skills in branding,
              digital marketing, creative direction and visual
              communication through a complete fashion campaign.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-14">

              <a
                href="https://github.com/tharushichamodi/Jonty-Clothing-Brand"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition font-semibold"
              >
                <Github size={20} />
                View GitHub
              </a>

              <Link
                to="/"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 hover:border-orange-500 hover:bg-zinc-900 transition"
              >
                <ArrowLeft size={20} />
                Back to Portfolio
              </Link>

              <a
                href="mailto:tharushiranasingha2001@gmail.com"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-zinc-700 hover:border-orange-500 hover:bg-zinc-900 transition"
              >
                <Mail size={20} />
                Contact Me
              </a>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}