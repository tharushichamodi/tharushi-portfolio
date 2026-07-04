import { motion } from "framer-motion";

const timeline = [
  {
    number: "01",
    title: "Research",
    description:
      "Analyzed fashion industry trends, target audience preferences and competitor branding to build a strong project foundation.",
  },
  {
    number: "02",
    title: "Brand Strategy",
    description:
      "Developed the brand identity, defined the vision, selected typography, colors and created a consistent visual language.",
  },
  {
    number: "03",
    title: "Design Process",
    description:
      "Designed premium T-shirts, campaign posters, promotional mockups and social media marketing assets.",
  },
  {
    number: "04",
    title: "Marketing Campaign",
    description:
      "Created digital marketing content including promotional posters, social media advertisements and campaign visuals.",
  },
  {
    number: "05",
    title: "Final Outcome",
    description:
      "Delivered a complete branding and digital marketing campaign with a premium and modern streetwear identity.",
  },
];

export default function Timeline() {
  return (
    <section className="py-28 bg-[#0b0b0d]">

      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[0.35em] text-orange-500 text-sm">
          PROJECT TIMELINE
        </span>

        <h2 className="text-5xl font-bold mt-5">
          From Idea to Launch
        </h2>

        <p className="text-zinc-400 text-xl leading-9 max-w-3xl mt-8">
          The development process followed a structured workflow from
          research and strategy to branding, campaign creation and
          final delivery.
        </p>

        <div className="relative mt-24">

          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-zinc-700"></div>

          <div className="space-y-16">

            {timeline.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative flex gap-8"
              >

                <div className="relative z-10">

                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-black">
                    {item.number}
                  </div>

                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 w-full hover:border-orange-500 transition duration-300">

                  <h3 className="text-3xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 mt-4">
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}