import { motion } from "framer-motion";
import {
  Home,
  Menu,
  Stethoscope,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

const contributions = [
  {
    icon: <Home size={28} />,
    title: "Home Page",
    description:
      "Designed and developed the landing page with a modern layout, engaging hero section and responsive user interface.",
  },
  {
    icon: <Menu size={28} />,
    title: "Navigation & Header",
    description:
      "Built a responsive navigation system with an intuitive layout to improve usability across the platform.",
  },
  {
    icon: <Stethoscope size={28} />,
    title: "Veterinary Module",
    description:
      "Designed and developed the frontend interface for the veterinary services section with a clean and user-friendly experience.",
  },
  {
    icon: <ShoppingBag size={28} />,
    title: "Pet Store",
    description:
      "Created the online pet store interface featuring product sections, promotional banners and responsive layouts.",
  },
  {
    icon: <LayoutDashboard size={28} />,
    title: "Dashboard UI",
    description:
      "Developed a modern dashboard interface with organized navigation, information cards and responsive components.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Responsive Design",
    description:
      "Optimized every assigned page for desktop, tablet and mobile devices to ensure a seamless user experience.",
  },
];

export default function Contribution() {
  return (
    <section className="py-24 bg-[#09090B]">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="uppercase tracking-[0.35em] text-orange-500 text-sm font-semibold">
            My Contribution
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            My Responsibilities
          </h2>

          <p className="text-zinc-400 text-lg leading-8 max-w-3xl mt-6">
            As a frontend developer in this university group project,
            I was responsible for designing and developing several key
            interfaces while maintaining a responsive, consistent and
            user-friendly experience across the platform.
          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {contributions.map((item, index) => (

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