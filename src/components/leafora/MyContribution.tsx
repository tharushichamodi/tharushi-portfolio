import { motion } from "framer-motion";
import {
  Lightbulb,
  PenTool,
  Palette,
  Package,
  Sparkles,
  Target,
} from "lucide-react";

const contributions = [
  {
    icon: <Lightbulb size={28} />,
    title: "Brand Name",
    description:
      "Created the brand name 'Leafora' by combining 'Leaf' and 'Aura' to represent a premium and natural tea experience.",
  },
  {
    icon: <Target size={28} />,
    title: "Brand Concept",
    description:
      "Developed the overall branding concept focusing on elegance, authenticity and Sri Lankan premium Ceylon tea.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Creative Direction",
    description:
      "Led the visual direction by defining the project's style, colour palette and premium brand personality.",
  },
  {
    icon: <Palette size={28} />,
    title: "Visual Identity",
    description:
      "Designed the logo concept, typography selection and overall visual identity guidelines.",
  },
  {
    icon: <Package size={28} />,
    title: "Packaging Concept",
    description:
      "Planned the packaging layout and presentation concept before collaborating with the team during the final design stage.",
  },

];

export default function MyContribution() {
  return (
    <section className="py-28 bg-[#08140F]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.3em] text-[#C9A55B] text-sm">
            My Contribution
          </span>

          <h2 className="text-5xl font-bold mt-4">
            What I Contributed
          </h2>

          <p className="mt-6 text-zinc-400 max-w-3xl text-lg leading-8">
            Although Leafora was developed as a university group project,
            I was responsible for establishing the creative foundation by
            creating the brand name, brand concept, visual direction and
            packaging idea before collaborating with the team on the final
            design execution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {contributions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:border-[#C9A55B]/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 text-[#C9A55B] flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-8">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}