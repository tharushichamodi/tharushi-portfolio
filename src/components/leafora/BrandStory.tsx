import { motion } from "framer-motion";
import { Leaf, Sparkles, HeartHandshake } from "lucide-react";

export default function BrandStory() {
  return (
    <section className="py-28 bg-[#0B1712]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.3em] text-[#C9A55B] text-sm">
            Brand Story
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Why <span className="text-[#C9A55B]">Leafora?</span>
          </h2>

          <p className="mt-6 text-zinc-400 text-lg leading-8 max-w-4xl">
            The name <strong>Leafora</strong> was created by combining the
            words <strong>"Leaf"</strong>, representing premium Ceylon tea
            leaves, and <strong>"Aura"</strong>, representing a peaceful and
            calming atmosphere. Together, they form a unique brand name that
            reflects a luxurious tea experience designed to help people slow
            down, relax and enjoy moments of peace in their everyday lives.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {/* Meaning */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 flex items-center justify-center text-[#C9A55B]">
              <Leaf size={28} />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Brand Meaning
            </h3>

            <p className="mt-4 text-zinc-400 leading-8">
              <strong>Leaf</strong> symbolizes premium Ceylon tea leaves,
              freshness and nature, while <strong>Aura</strong> represents a
              peaceful atmosphere, relaxation and emotional wellbeing. The
              combination of these two ideas created the name
              <strong> Leafora</strong>.
            </p>
          </motion.div>

          {/* Purpose */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 flex items-center justify-center text-[#C9A55B]">
              <Sparkles size={28} />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Brand Purpose
            </h3>

            <p className="mt-4 text-zinc-400 leading-8">
              Leafora was designed as a premium tea brand that delivers more
              than a beverage. It creates a calming tea experience that helps
              people relax, reduce daily stress and enjoy peaceful moments
              through high-quality Ceylon tea.
            </p>
          </motion.div>

          {/* Target Audience */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 flex items-center justify-center text-[#C9A55B]">
              <HeartHandshake size={28} />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Target Audience
            </h3>

            <p className="mt-4 text-zinc-400 leading-8">
              Leafora targets adults aged <strong>25–45</strong> who appreciate
              premium tea, value wellness and seek moments of calm in their busy
              lifestyles. The brand is positioned for consumers looking for a
              luxurious, relaxing and authentic Ceylon tea experience.
            </p>
          </motion.div>

          {/* Brand Personality */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 flex items-center justify-center text-[#C9A55B]">
              <Sparkles size={28} />
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              Brand Personality
            </h3>

            <p className="mt-4 text-zinc-400 leading-8">
              Elegant, natural, premium and calming. Every design decision,
              from the deep green colour palette to the gold accents and
              botanical illustrations, was chosen to communicate trust,
              sophistication and relaxation.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}