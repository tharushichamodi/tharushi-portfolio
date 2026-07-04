import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] px-5 md:px-8 pt-5 md:pt-7">

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`max-w-[1700px] mx-auto rounded-[28px] border transition-all duration-500 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-3xl border-white/10 shadow-[0_20px_60px_rgba(0,0,0,.45)]"
            : "bg-black/35 backdrop-blur-2xl border-white/5"
        }`}
      >

        <div className="h-20 px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="hero"
            smooth
            duration={600}
            offset={-90}
            className="cursor-pointer font-display text-[1.7rem] md:text-[2rem] font-bold tracking-tight text-white"
          >
            THARUSHI
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((link) => (

              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={600}
                offset={-90}
                spy
                activeClass="text-white"
                className="relative cursor-pointer text-sm font-medium tracking-wide text-zinc-400 hover:text-white transition-all duration-300 group"
              >

                {link.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full"></span>

              </Link>

            ))}

            <Link
              to="contact"
              smooth
              duration={600}
              offset={-90}
              className="group relative overflow-hidden rounded-full bg-white px-7 py-3 font-semibold text-black cursor-pointer transition-all duration-300 hover:scale-105"
            >

              <span className="relative z-10">
                Let's Talk
              </span>

              <span className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>

              <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                Let's Talk
              </span>

            </Link>

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() =>
              setMobileMenuOpen(!mobileMenuOpen)
            }
            className="lg:hidden text-zinc-300 hover:text-white"
          >
            {mobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>

                {/* Mobile Menu */}

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden rounded-b-[28px] border-t border-white/10 bg-black/90 backdrop-blur-3xl"
            >
              <nav className="flex flex-col gap-5 px-8 py-8">

                {navLinks.map((link) => (

                  <Link
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-90}
                    spy={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className="cursor-pointer text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>

                ))}

                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-90}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-3 rounded-full bg-white py-3 text-center font-semibold text-black transition-all duration-300 hover:bg-accent cursor-pointer"
                >
                  Let's Talk
                </Link>

              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </header>
  );
}