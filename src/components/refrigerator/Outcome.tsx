import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  Users,
  ShieldCheck,
} from "lucide-react";

const outcomes = [
  {
    icon: <CheckCircle2 size={26} />,
    title: "Improved User Experience",
    description:
      "The concept provides a more intuitive way to access refrigerator compartments while reducing unnecessary interactions.",
  },
  {
    icon: <ShieldCheck size={26} />,
    title: "Energy Efficiency",
    description:
      "The proposed compartment-based cooling system helps minimize cold-air loss and supports better energy efficiency.",
  },
  {
    icon: <Users size={26} />,
    title: "Collaborative Teamwork",
    description:
      "Working as a multidisciplinary team strengthened communication, collaboration and project management skills.",
  },
  {
    icon: <Lightbulb size={26} />,
    title: "UX Design Experience",
    description:
      "The project enhanced my understanding of UX research, documentation, prototyping and presenting user-centered design solutions.",
  },
];

export default function Outcome() {
  return (
    <section className="py-24 bg-[#060B14]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Outcome & Reflection
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Project Impact
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            This project demonstrates how user-centered design can solve
            everyday problems through research-driven decisions. Beyond the
            final concept, it strengthened my ability to collaborate,
            document design processes and communicate solutions effectively.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {outcomes.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
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

        {/* Reflection */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            mt-20
            rounded-[36px]
            bg-[#111827]
            border
            border-cyan-500/10
            p-10
          "
        >

          <h3 className="text-3xl font-bold text-white">
            Reflection
          </h3>

          <p className="text-zinc-400 leading-9 text-lg mt-6">
            This project allowed me to experience the complete UX design
            process—from identifying user problems and conducting research
            to documenting solutions, designing supporting materials and
            presenting the final concept. Working in a collaborative team
            environment improved my communication skills, strengthened my
            understanding of user-centered design and reinforced the
            importance of designing products that are both functional and
            meaningful.
          </p>

        </motion.div>

      </div>

    </section>
  );
}