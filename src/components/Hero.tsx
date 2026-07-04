import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye } from "lucide-react";
import profile from "../assets/profile.jpeg";

export function Hero() {
  return (
 <section
  id="hero"
  className="relative min-h-screen flex items-center overflow-hidden pt-40 lg:pt-36"
>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
    <div className="grid lg:grid-cols-2 gap-28 items-center min-h-[85vh]">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}
            <div className="flex items-center gap-4 mb-8">

              <span className="w-14 h-px bg-accent"></span>

              <span className="uppercase tracking-[0.28em] text-sm text-accent font-medium">
                Interactive Media Undergraduate
              </span>

            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-none tracking-tight"
            >
              Hi, I'm
              <br />

              <span className="text-white">
                Tharushi
              </span>

              <br />

              <span className="text-accent">
                Ranasingha.
              </span>

            </motion.h1>

                        {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-10 text-lg md:text-xl text-zinc-400 leading-9 max-w-xl"
            >
              I create meaningful digital experiences through
              <span className="text-white font-medium"> UI/UX Design</span>,
              <span className="text-white font-medium"> Frontend Development</span>,
              <span className="text-white font-medium"> Brand Identity</span>,
              and
              <span className="text-white font-medium"> Digital Marketing</span>.

              <br />
              <br />

              As an Interactive Media undergraduate at SLIIT, I enjoy
              transforming creative ideas into intuitive, user-centered digital
              solutions with modern design and technology.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              {/* Projects */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-accent transition-all duration-300"
              >
                View My Projects

                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              {/* View Resume */}
              <a
                href="/Tharushi_Ranasingha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 px-8 py-4 rounded-full text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <Eye size={18} />
                View Resume
              </a>

              {/* Download CV */}
              <a
                href="/Tharushi_Ranasingha_CV.pdf"
                download
                className="inline-flex items-center justify-center gap-2 border border-zinc-700 px-8 py-4 rounded-full text-zinc-300 hover:bg-zinc-900 hover:text-white transition-all duration-300"
              >
                <Download size={18} />
                Download CV
              </a>
            </motion.div>

          </motion.div>

                    {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">

              {/* Background Glow */}
              <div className="absolute -inset-6 rounded-[40px] bg-accent/10 blur-[80px]"></div>

              {/* Image Card */}
              <div className="relative group overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-2">

                <img
                  src={profile}
                  alt="Tharushi Ranasingha"
                  className="w-[360px] lg:w-[400px] h-[500px] lg:h-[560px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Bottom Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">

                  <h3 className="text-white text-2xl font-semibold">
                    Tharushi Ranasingha
                  </h3>

                  <p className="text-zinc-300 mt-1">
                    Interactive Media Undergraduate
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    Sri Lanka
                  </div>

                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}