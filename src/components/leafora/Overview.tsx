import { motion } from "framer-motion";
import {
  CalendarDays,
  Users,
  Briefcase,
  PenTool,
  Palette,
} from "lucide-react";

const items = [
  {
    icon: <CalendarDays size={28} />,
    title: "Duration",
    value: "4 Weeks",
  },
  {
    icon: <Users size={28} />,
    title: "Team",
    value: "University Group Project",
  },
{
  icon: <Briefcase size={28} />,
  title: "My Role",
  value: "Brand Strategy & Creative Direction",
},
  {
    icon: <PenTool size={28} />,
    title: "Software",
    value: "Adobe Illustrator • Photoshop",
  },
  {
    icon: <Palette size={28} />,
    title: "Category",
    value: "Brand Identity & Packaging",
  },
];

export default function Overview() {
  return (
    <section
      id="overview"
      className="py-28 bg-[#08140F]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[0.3em] text-[#C9A55B] text-sm">
            Project Overview
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Project Information
          </h2>

          <p className="text-zinc-400 mt-6 max-w-3xl text-lg leading-8">
            Leafora is a premium Ceylon tea branding project created to
            communicate elegance, authenticity, and Sri Lankan heritage
            through a refined visual identity and luxury packaging system.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">

          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-[#C9A55B]/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A55B]/10 text-[#C9A55B] flex items-center justify-center">
                {item.icon}
              </div>

              <h3 className="mt-6 text-zinc-400 text-sm uppercase tracking-wider">
                {item.title}
              </h3>

              <p className="mt-3 text-xl font-semibold leading-8">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}