import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
} from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 left-0 w-[520px] h-[520px] rounded-full bg-[#8EA4D2]/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-[#8EA4D2]/5 blur-[170px]" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-20"
        >

          <div className="flex items-center gap-5 mb-6">

            <div className="w-16 h-[2px] bg-[#8EA4D2]" />

            <span className="uppercase tracking-[0.35em] text-[#8EA4D2] text-sm">
              CONTACT
            </span>

          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">

            Let's Work

            <br />

            <span className="bg-gradient-to-r from-white via-white to-[#8EA4D2] bg-clip-text text-transparent">

              Together.

            </span>

          </h2>

          <p className="text-zinc-400 text-xl leading-9 max-w-3xl mt-8">

            Whether you're looking for a UI/UX designer,
           creative designer, Digital Marketer, or a collaborative partner for your next project, I'm here to help bring your ideas to life.
          

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity:0, x:-40 }}
            whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="space-y-6"
          >

            {/* EMAIL */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-[#8EA4D2]/10 flex items-center justify-center flex-shrink-0">

                <Mail
                  size={28}
                  className="text-[#8EA4D2]"
                />

              </div>

              <div className="min-w-0">

                <p className="text-zinc-500 mb-1">
                  Email
                </p>

                <a
                  href="mailto:tharushiranasingha2001@gmail.com"
                  className="text-xl md:text-2xl font-semibold hover:text-[#8EA4D2] transition break-all"
                >
                  tharushiranasingha2001@gmail.com
                </a>

              </div>

            </div>

            {/* PHONE */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-[#8EA4D2]/10 flex items-center justify-center flex-shrink-0">

                <Phone
                  size={28}
                  className="text-[#8EA4D2]"
                />

              </div>

              <div>

                <p className="text-zinc-500 mb-1">
                  Phone
                </p>

                <a
                  href="tel:+94756941259"
                  className="text-2xl font-semibold hover:text-[#8EA4D2] transition"
                >
                  +94 75 694 1259
                </a>

              </div>

            </div>

                        {/* LOCATION */}

            <div className="rounded-[30px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 flex items-center gap-6">

              <div className="w-16 h-16 rounded-2xl bg-[#8EA4D2]/10 flex items-center justify-center flex-shrink-0">

                <MapPin
                  size={28}
                  className="text-[#8EA4D2]"
                />

              </div>

              <div>

                <p className="text-zinc-500 mb-1">
                  Location
                </p>

                <h3 className="text-2xl font-semibold">
                  Sri Lanka
                </h3>

              </div>

            </div>

            {/* SOCIAL LINKS */}

            <div className="flex gap-4 pt-2">

              <a
                href="https://github.com/tharushichamodi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-[#8EA4D2] hover:text-black transition-all duration-300"
              >
                <Github size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/tharushi-ranasingha-5a1659399/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-[#8EA4D2] hover:text-black transition-all duration-300"
              >
                <Linkedin size={22} />
              </a>

              {/* Download CV */}

              <a
                href="/Tharushi_Ranasingha_CV.pdf"
                target="_blank"
                className="px-7 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center hover:bg-[#8EA4D2] hover:text-black transition-all duration-300 font-medium"
              >
                Download CV
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-10 md:p-14 flex flex-col justify-center"
          >

            <span className="uppercase tracking-[0.35em] text-[#8EA4D2] text-sm">
              AVAILABLE FOR WORK
            </span>

            <h3 className="text-5xl md:text-6xl font-bold leading-tight mt-6">

              Ready to Build

              <br />

              <span className="bg-gradient-to-r from-white via-white to-[#8EA4D2] bg-clip-text text-transparent">
                Something Amazing?
              </span>

            </h3>

            <p className="text-zinc-400 text-xl leading-9 mt-8">

              Whether you have a freelance project,
              internship opportunity, collaboration
              or simply want to connect, I'd love to
              hear from you.

            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="mailto:tharushiranasingha2001@gmail.com?subject=Portfolio Inquiry"
                className="inline-flex items-center gap-3 rounded-full bg-[#8EA4D2] px-8 py-4 text-black font-semibold hover:bg-[#7891c6] transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Send Email
              </a>

              <a
                href="https://github.com/tharushichamodi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 font-semibold hover:border-[#8EA4D2] hover:text-[#8EA4D2] transition-all duration-300"
              >
                <Github size={20} />
                View GitHub
              </a>

            </div>

          </motion.div>

        </div>

                </div>

 

    </section>
  );
}