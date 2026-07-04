import { motion } from "framer-motion";
import {
  Target,
  Users,
  Palette,
  Smartphone,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const strategies = [
  {
    icon: Target,
    title: "Brand Positioning",
    description:
      "Positioned The Jonty as a premium oversized streetwear clothing brand focused on confidence, motivation and self-expression.",
  },
  {
    icon: Users,
    title: "Target Audience",
    description:
      "Focused on young adults aged 18–35 who are interested in modern fashion, premium apparel and motivational lifestyle branding.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description:
      "Designed a bold visual language using premium typography, high-quality mockups and consistent brand colors across every campaign.",
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description:
      "Created Instagram, Facebook and TikTok-ready promotional content optimized for engagement and brand awareness.",
  },
  {
    icon: Megaphone,
    title: "Marketing Campaign",
    description:
      "Developed product launch posters, promotional advertisements, fashion mockups and digital campaign assets.",
  },
  {
    icon: TrendingUp,
    title: "Business Goal",
    description:
      "Increase brand recognition, customer engagement and product visibility through a complete digital marketing strategy.",
  },
];

export default function MarketingStrategy() {
  return (
    <section className="py-28 bg-[#0b0b0d]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-orange-500 text-sm"
        >
          MARKETING STRATEGY
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mt-5"
        >
          Digital Marketing Strategy
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-zinc-400 text-xl leading-9 max-w-4xl mt-8"
        >
          A complete digital marketing strategy was developed to establish
          The Jonty as a modern premium clothing brand through consistent
          branding, social media marketing, promotional content and
          audience-focused communication.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {strategies.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-8 hover:border-orange-500 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center mb-6">
                  <Icon size={30} className="text-orange-500" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 leading-8">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}