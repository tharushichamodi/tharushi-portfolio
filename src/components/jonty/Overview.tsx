import { motion } from "framer-motion";

export function Overview() {
  const details = [
    {
      title: "Role",
      value: "Brand Identity\nDesigner",
    },
    {
      title: "Category",
      value: "Digital Marketing",
    },
    {
      title: "Duration",
      value: "Academic Project",
    },
    {
      title: "Tools",
      value: "Photoshop •\nIllustrator",
    },
  ];

  return (
    <section className="bg-[#0b0b0d] py-28">
      <div className="max-w-7xl mx-auto px-6">

        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-orange-500 text-sm"
        >
          Project Overview
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-5xl md:text-6xl font-bold mt-5"
        >
          Building a Modern Fashion Brand
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="mt-10 max-w-4xl space-y-6"
        >
          <p className="text-zinc-400 leading-9 text-xl">
            This project focused on creating a complete branding and
            digital marketing campaign for The Jonty Clothing Brand.
          </p>

          <p className="text-zinc-400 leading-9 text-xl">
            The campaign included premium poster designs, product
            promotions, social media content, visual branding, and
            marketing strategies aimed at increasing brand awareness
            and customer engagement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
          {details.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * .15,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 hover:border-orange-500 duration-300"
            >
              <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-8">
                {item.title}
              </p>

              <h3 className="text-3xl font-semibold whitespace-pre-line leading-tight">
                {item.value}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}