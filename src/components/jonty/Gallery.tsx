import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import poster1 from "../../assets/jonty/poster1.jpg";
import poster2 from "../../assets/jonty/poster2.jpg";
import poster3 from "../../assets/jonty/poster3.jpg";
import poster4 from "../../assets/jonty/poster4.jpg";
import poster5 from "../../assets/jonty/poster5.jpg";
import poster6 from "../../assets/jonty/poster6.jpg";
import mockup1 from "../../assets/jonty/mockup1.jpg";
import mockup2 from "../../assets/jonty/mockup2.png";

const images = [
  poster1,
  poster2,
  poster3,
  poster4,
  poster5,
  poster6,
  mockup1,
  mockup2,
];

export function Gallery() {
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex + 1) % images.length
    );
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + images.length) %
        images.length
    );
  };

  return (
    <section className="bg-[#0b0b0d] py-28">

      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-orange-500 text-sm"
        >
          Gallery
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-5"
        >
          Brand Identity & Campaign Gallery
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 mt-8 text-xl leading-9 max-w-4xl"
        >
          A showcase of branding concepts,
          premium posters, campaign
          advertisements and fashion mockups
          created for The Jonty Clothing Brand.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-800 hover:border-orange-500 duration-300 cursor-pointer"
              onClick={() =>
                openImage(index)
              }
            >

              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[420px] object-cover duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 duration-500 flex items-center justify-center">

                <span className="opacity-0 group-hover:opacity-100 text-white text-lg font-semibold transition duration-500">
                  View Image
                </span>

              </div>

            </motion.div>

          ))}

        </div>

                <AnimatePresence>

          {selectedIndex !== null && (

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-lg flex items-center justify-center"
            >

              {/* Close */}
              <button
                onClick={closeImage}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <X size={24} />
              </button>

              {/* Previous */}
              <button
                onClick={previousImage}
                className="absolute left-8 w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Image */}
              <motion.img
                key={selectedIndex}
                initial={{
                  opacity: 0,
                  scale: .9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: .9,
                }}
                transition={{
                  duration: .35,
                }}
                src={images[selectedIndex]}
                alt=""
                className="max-w-[90vw] max-h-[90vh] rounded-3xl shadow-2xl"
              />

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-8 w-12 h-12 rounded-full bg-zinc-900 hover:bg-orange-500 transition flex items-center justify-center"
              >
                <ChevronRight size={28} />
              </button>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>

  );
}