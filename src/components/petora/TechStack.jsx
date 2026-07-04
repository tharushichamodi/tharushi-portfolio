import { motion } from "framer-motion";
import {
  Atom,
  FileCode2,
  Palette,
  Server,
  Database,
  Github,
} from "lucide-react";

const technologies = [
  {
    icon: <Atom size={30} />,
    title: "React",
    description:
      "Built reusable frontend components and responsive user interfaces.",
  },
  {
    icon: <FileCode2 size={30} />,
    title: "JavaScript",
    description:
      "Implemented dynamic interactions and client-side functionality.",
  },
  {
    icon: <Palette size={30} />,
    title: "CSS",
    description:
      "Designed responsive layouts, animations and modern styling.",
  },
  {
    icon: <Server size={30} />,
    title: "Node.js",
    description:
      "Integrated frontend interfaces with backend services.",
  },
  {
    icon: <Database size={30} />,
    title: "MongoDB",
    description:
      "Used for storing and managing application data.",
  },
  {
    icon: <Github size={30} />,
    title: "Git & GitHub",
    description:
      "Managed version control and collaborated efficiently with the team.",
  },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            Technology Stack
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Tools & Technologies
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            Petora was developed using modern web technologies to build a
            responsive, scalable and user-friendly platform while maintaining
            clean development practices.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {technologies.map((tech, index) => (

            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="
                bg-zinc-900
                rounded-3xl
                border
                border-zinc-800
                p-8
                hover:-translate-y-2
                hover:border-orange-500/50
                hover:shadow-[0_15px_40px_rgba(249,115,22,0.15)]
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                {tech.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                {tech.title}
              </h3>

              <p className="text-zinc-400 leading-8 mt-4">
                {tech.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}