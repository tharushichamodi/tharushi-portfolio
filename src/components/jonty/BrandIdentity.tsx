import { motion } from "framer-motion";

const cards = [
  {
    title: "Brand Name",
    value: "The Jonty",
    description:
      "A premium streetwear clothing brand focused on confidence, self-expression and motivational fashion.",
  },
  {
    title: "Tagline",
    value: "Gift of God",
    description:
      "The brand encourages people to embrace their identity, dreams and individuality through meaningful apparel.",
  },
  {
    title: "Target Audience",
    value: "18 - 35 Years",
    description:
      "Young adults who love modern oversized fashion, premium quality clothing and motivational branding.",
  },
  {
    title: "Brand Values",
    value: "Quality • Creativity • Inspiration",
    description:
      "Every campaign was designed to create an emotional connection between the brand and its audience.",
  },
];

export function BrandIdentity() {
  return (
    <section className="bg-[#0b0b0d] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-orange-500 text-sm"
        >
          Brand Identity
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-5"
        >
          Creating a Premium Fashion Identity
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-xl leading-9 mt-8 max-w-4xl"
        >
          The visual identity was designed to communicate confidence,
          individuality and premium streetwear aesthetics. Every design
          element, typography choice and campaign poster followed a
          consistent branding strategy.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 hover:border-orange-500 transition duration-300"
            >
              <p className="uppercase tracking-[0.3em] text-orange-400 text-sm mb-4">
                {card.title}
              </p>

              <h3 className="text-3xl font-bold mb-6">
                {card.value}
              </h3>

              <p className="text-zinc-400 leading-8">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}