"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const filters = ["All", "Frontend", "Backend", "Database", "AI"];

const projects = [
  {
    title: "Authentication System",
    category: "Backend",
    type: "Individual",
    description: "JWT authentication with PostgreSQL.",
    image: "/login.jpeg",
  },
  {
    title: "AI Platform",
    category: "AI",
    type: "Team",
    description: "Sign language learning platform.",
    image: "/IA project.jpeg",
  },
  {
    title: "User Management",
    category: "Database",
    type: "Individual",
    description: "Full CRUD with PostgreSQL.",
    image: "/Base de datos.jpeg",
  },
  {
    title: "Portfolio UI",
    category: "Frontend",
    type: "Team",
    description: "Modern UI with Next.js and animations.",
    image: "/Interfaz.jpeg",
  },
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="relative z-10 max-w-6xl mx-auto mb-40 px-6">

      {/* HEADER ANIMADO */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-zinc-400 mt-3">
          Explore my work across different technologies
        </p>
      </motion.div>

      {/* FILTER + LEGEND */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex flex-col items-center gap-6 mb-12"
      >

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  active === filter
                    ? "bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black"
                    : "bg-zinc-900 border border-white/10 text-zinc-400 hover:border-cyan-400 hover:text-white"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* LEGEND */}
        <div className="flex gap-6 text-sm text-zinc-400">

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
            Individual
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400"></span>
            Team
          </div>

        </div>

      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-3 gap-8">

        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-transparent"
          >
            <div className="bg-zinc-900/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/40 transition">

              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />

                {/* BADGE */}
                <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 border border-white/10">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.type === "Individual"
                        ? "bg-green-400"
                        : "bg-blue-400"
                    }`}
                  ></span>

                  {project.type}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-cyan-300">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 mt-2">
                  {project.description}
                </p>

                <span className="text-xs text-fuchsia-400 mt-3 inline-block">
                  {project.category}
                </span>
              </div>

              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-cyan-500/10"></div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}