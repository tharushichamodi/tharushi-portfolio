import { motion } from "framer-motion";
import {
  Search,
  FileText,
  BookOpen,
  Package,
  Video,
  Presentation,
} from "lucide-react";

const contributions = [
  {
    icon: <Search size={28} />,
    title: "UX Research",
    description:
      "Contributed to user research activities including interviews, competitor analysis and identifying user needs to support the UX design process.",
  },
  {
    icon: <FileText size={28} />,
    title: "Documentation",
    description:
      "Prepared and compiled project documentation, ensuring the UX process, research findings and design decisions were clearly communicated.",
  },
  {
    icon: <BookOpen size={28} />,
    title: "User Manual",
    description:
      "Designed and developed the user manual to help users understand the refrigerator concept and interaction flow.",
  },
  {
    icon: <Package size={28} />,
    title: "Packaging Design",
    description:
      "Contributed to the packaging concept and visual presentation to maintain a consistent product identity.",
  },
  {
    icon: <Video size={28} />,
    title: "Marketing Video",
    description:
      "Collaborated in producing the promotional video to communicate the product concept and key UX improvements.",
  },
  {
    icon: <Presentation size={28} />,
    title: "Presentation",
    description:
      "Participated in presenting the project, explaining the UX research process, proposed solution and final concept.",
  },
];

export default function Contribution() {
  return (
    <section className="py-24 bg-[#090E18]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            My Contribution
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            My Responsibilities
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            This was a collaborative university project. I actively contributed
            to the UX research process, documentation, user manual creation,
            marketing materials and the final presentation while working closely
            with the team throughout the project.
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
              className="
                bg-[#111827]
                rounded-3xl
                border
                border-cyan-500/10
                p-8
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">

                {item.icon}

              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-8 mt-4">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}