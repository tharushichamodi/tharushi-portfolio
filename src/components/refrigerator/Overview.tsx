import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Briefcase,
  Target,
  PenTool,
  Monitor,
} from "lucide-react";

const overview = [
  {
    icon: <Briefcase size={28} />,
    title: "Project Type",
    value: "University Group Project",
  },
  {
    icon: <Users size={28} />,
    title: "Team Size",
    value: "5 Members",
  },
  {
    icon: <CalendarDays size={28} />,
    title: "Duration",
    value: "Academic Semester Project",
  },
  {
    icon: <PenTool size={28} />,
    title: "My Role",
    value: "UX Research & UI Design",
  },
  {
    icon: <Monitor size={28} />,
    title: "Tools",
    value: "Figma, Illustrator, Photoshop",
  },
  {
    icon: <Target size={28} />,
    title: "Objective",
    value: "Improve Cooling Efficiency & User Experience",
  },
];

export default function Overview() {
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
            Project Overview
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            About the Project
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mx-auto mt-6">
            This project focused on redesigning the traditional refrigerator
            experience through user-centered design. By conducting UX research,
            identifying user pain points and developing innovative concepts,
            the team proposed a smart controlled cooling refrigerator that
            minimizes cold-air loss while improving usability and energy
            efficiency.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {overview.map((item, index) => (

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
                hover:border-cyan-400/40
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]
                transition-all
                duration-300
              "
            >

              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-zinc-400 mt-3 leading-7">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}