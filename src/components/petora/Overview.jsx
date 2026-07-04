import { motion } from "framer-motion";
import {
  FolderKanban,
  Users,
  Briefcase,
  Code2,
  Monitor,
} from "lucide-react";

const overview = [
  {
    icon: <FolderKanban size={28} />,
    title: "Project Type",
    value: "Animal Shelter Management System",
  },
  {
    icon: <Users size={28} />,
    title: "Team",
    value: "University Group Project",
  },
  {
    icon: <Briefcase size={28} />,
    title: "My Role",
    value: "Frontend Developer",
  },
  {
    icon: <Code2 size={28} />,
    title: "Technologies",
    value: "React • JavaScript • CSS • Node.js",
  },
  {
    icon: <Monitor size={28} />,
    title: "Platform",
    value: "Responsive Web Application",
  },
];

export default function Overview() {
  return (
    <section className="py-24 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            Project Overview
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            About Petora
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            Petora is a web-based Animal Shelter & Adoption Management
            System developed as a university group project. The platform
            enables users to explore pet adoption, veterinary services,
            pet care and an online pet store through a clean, responsive
            and user-friendly interface.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

          {overview.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
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

                {item.icon}

              </div>

              <h3 className="mt-6 text-sm uppercase tracking-wider text-zinc-500">

                {item.title}

              </h3>

              <p className="mt-3 text-lg font-semibold text-white leading-7">

                {item.value}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}