import { motion } from "framer-motion";

const results = [
  {
    value: "20+",
    title: "Campaign Designs",
    description:
      "Created premium posters, product advertisements and promotional content."
  },
  {
    value: "10+",
    title: "Brand Assets",
    description:
      "Designed logos, social media posts, mockups and branding materials."
  },
  {
    value: "100%",
    title: "Responsive Designs",
    description:
      "All campaign visuals were optimized for desktop and mobile platforms."
  },
  {
    value: "01",
    title: "Complete Brand Identity",
    description:
      "Developed a complete visual identity and digital marketing strategy."
  }
];

export default function Results() {
  return (
    <section className="py-28 bg-[#0b0b0d]">

      <div className="max-w-7xl mx-auto px-6">

        <span className="uppercase tracking-[0.35em] text-orange-500 text-sm">
          PROJECT RESULTS
        </span>

        <h2 className="text-5xl font-bold mt-5">
          Campaign Outcomes
        </h2>

        <p className="text-zinc-400 text-xl leading-9 max-w-3xl mt-8">
          This branding project successfully combined visual identity,
          digital marketing strategies and promotional content into
          one complete fashion campaign.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {results.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity:0,y:40 }}
              whileInView={{ opacity:1,y:0 }}
              viewport={{ once:true }}
              transition={{ delay:index*0.15 }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-orange-500 duration-300"
            >

              <h3 className="text-6xl font-bold text-orange-500">
                {item.value}
              </h3>

              <h4 className="text-2xl font-semibold mt-6">
                {item.title}
              </h4>

              <p className="text-zinc-400 leading-8 mt-5">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}