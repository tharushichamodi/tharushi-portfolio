import { motion } from "framer-motion";
import { Type, Palette, BadgeCheck, Tag } from "lucide-react";

const identity = [
  {
    icon: <BadgeCheck size={28} />,
    title: "Brand Name",
    value: "Leafora",
    description:
      "A unique brand name created by combining 'Leaf' and 'Aura', representing premium tea leaves and a peaceful experience.",
  },
  {
    icon: <Tag size={28} />,
    title: "Tagline",
    value: "Sip Nature's Calm",
    description:
      "The tagline reflects the brand's promise of relaxation, balance and a premium tea experience.",
  },
  {
    icon: <Palette size={28} />,
    title: "Colour Palette",
    value: "Green • Gold • White",
    description:
      "Deep green symbolizes nature and premium tea, gold expresses luxury, while white creates clarity and elegance.",
  },
  {
    icon: <Type size={28} />,
    title: "Typography",
    value: "Cinzel • Poppins • Open Sans",
    description:
      "Elegant serif and modern sans-serif typefaces were selected to balance sophistication with readability.",
  },
];

export default function BrandIdentity() {
  return (
    <section className="py-28 bg-[#08140F]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.35em] text-[#C9A55B] text-sm">
            Brand Identity
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Visual Identity System
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            Every visual element was carefully selected to create a premium,
            calming and memorable tea brand that reflects the authenticity of
            Sri Lankan Ceylon tea.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {identity.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#C9A55B]/40 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 text-[#C9A55B] flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <h4 className="mt-3 text-[#C9A55B] text-lg font-medium">
                {item.value}
              </h4>

              <p className="mt-5 text-zinc-400 leading-8">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}