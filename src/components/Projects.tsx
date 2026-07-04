import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import jonty from "../assets/jonty.png";
import leafora from "../assets/leafora.jpeg";
import dragon from "../assets/dragon.png";
import petora from "../assets/petora.png";
import grocery from "../assets/grocery.png";
import emora from "../assets/emora.png";
import refrigerator from "../assets/refrigerator.png";

const projects = [
  {
    id: 1,
    title: "Jonty Clothing Brand",
    description:
      "Developed and executed a complete digital marketing campaign including branding, promotional content, social media strategy and advertising materials.",
    image: jonty,
    tags: [
      "Digital Marketing",
      "Branding",
      "Photoshop",
      "Illustrator",
    ],
    githubUrl: "https://github.com/tharushichamodi/Jonty-Clothing-Brand",
    detailsUrl: "/projects/jonty",
  },

  {
  id: 2,
  title: "Leafora Tea Branding",
  description:
    "Designed the brand identity and packaging concept for a premium Ceylon tea brand. Led the creative direction including brand naming, visual identity, packaging concept and overall branding strategy as part of a university group project.",
  image: leafora,
  tags: [
    "Brand Identity",
    "Packaging",
    "Adobe Illustrator",
    "Photoshop",
  ],
  githubUrl: "https://github.com/tharushichamodi/Leafora-Tea-Branding",
  detailsUrl: "/projects/leafora",
},


  {
    id: 3,
    title: "Petora Animal Shelter",
    description:
      "Designed and developed a full-stack animal shelter management system with pet adoption, animal profiles, user management, and responsive UI using React, Node.js, Express, and MongoDB.",
    image: petora,
    tags: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl:
      "https://github.com/tharushichamodi/Petora-Animal-Shelter",
    detailsUrl: "/projects/petora",
  },


 {
  id: 4,
  title: "Smart Refrigerator UX",
  description:
    "Created a complete UX design process including research, wireframes and high fidelity user interface design.",

  image: refrigerator,

  tags: [
    "UX Design",
    "Figma",
    "Wireframing",
  ],

  githubUrl:
    "https://github.com/tharushichamodi/Smart-Controlled-Cooling-Refrigerator-UX",

  detailsUrl:
    "/projects/refrigerator",
},

  {
    id: 5,
    title: "Grocery Store Website",
    description:
      "Designed and developed a modern grocery e-commerce website featuring product browsing, shopping cart functionality, responsive layouts, and a user-friendly shopping experience.",
    image: grocery,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/tharushichamodi",
    detailsUrl: "",
  },

    {
    id: 6,
    title: "Dragon Rider VR Experience",
    description:
      "Designed and developed an immersive VR experience using Unity 6 and Meta Quest 3 with interactive storytelling and realistic dragon flight simulation.",
    image: dragon,
    tags: ["Unity 6", "Meta Quest", "XR", "C#"],
    githubUrl: "https://github.com/tharushichamodi",
    detailsUrl: "",
  },



  {
    id: 7,
    title: "Emora Mobile App",
    description:
      "Designed and developed a mobile application using Android Studio with intuitive navigation and clean UI.",
    image: emora,
    tags: ["Android Studio", "Mobile", "UI Design"],
    githubUrl: "https://github.com/tharushichamodi",
    detailsUrl: "",
  },


];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-zinc-800/50 bg-surface/30"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-sm text-accent">
            Portfolio
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl leading-8">
            A collection of my academic and personal projects focused on
            UI/UX Design, Web Development, Digital Marketing and
            Interactive Media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl bg-zinc-900/60 border border-zinc-800 hover:border-accent/50 transition-all duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-3">

                    {/* Details */}
                    {project.detailsUrl ? (
                      <Link
                        to={project.detailsUrl}
                        className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-orange-500 flex items-center justify-center transition"
                        title="View Details"
                      >
                        <ExternalLink size={18} />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-10 h-10 rounded-full bg-zinc-800/50 text-zinc-600 flex items-center justify-center cursor-not-allowed"
                      >
                        <ExternalLink size={18} />
                      </button>
                    )}

                    {/* GitHub */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition"
                      title="View GitHub"
                    >
                      <Github size={18} />
                    </a>

                  </div>

                </div>

                <p className="text-zinc-400 mt-5 leading-7">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>
    </section>
  );
}