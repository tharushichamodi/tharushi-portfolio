import { motion } from "framer-motion";

const skills = [
  "UI/UX Design",
  "Brand Identity Design",
  "Digital Marketing",
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Canva",
  "Unity 6",
  "Android Studio",
  "Processing",
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-zinc-800/50 relative"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mb-6">
            About Me
          </h2>

          <div className="w-12 h-1 bg-accent mb-10"></div>

          {/* About Content */}
          <div className="max-w-4xl">
            <p className="text-lg leading-9 text-zinc-400 mb-8">
              I'm{" "}
              <span className="font-semibold text-white">
                Tharushi Ranasingha
              </span>
              , an Interactive Media undergraduate at SLIIT with a passion for
              creating meaningful digital experiences. My interests include
              UI/UX design, frontend development, branding, digital marketing,
              animation, and interactive media. I enjoy transforming ideas into
              clean, engaging, and user-friendly digital products.
            </p>

            <p className="text-lg leading-9 text-zinc-400">
              Throughout my academic and personal projects, I've worked on
              websites, mobile applications, VR experiences, branding projects,
              and digital marketing campaigns. I'm always eager to learn new
              technologies, improve my design thinking, and build creative
              solutions that make a positive impact.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-display font-semibold tracking-tight mb-8 text-zinc-100">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.05 * index,
                  }}
                  className="px-5 py-3 bg-surface border border-zinc-800 rounded-full text-sm text-zinc-300 hover:border-accent hover:text-accent transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}