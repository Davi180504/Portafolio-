"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto my-40 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
          Passionate about building scalable, secure, and high-performance systems.
        </p>
      </motion.div>

      {/* CONTENT */}
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* AVATAR */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 blur-2xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

            {/* Imagen */}
            <img
              src="/avatar.jpeg"
              alt="David Ortiz"
              className="relative w-60 h-60 object-cover rounded-full border border-white/10 shadow-xl"
            />

          </div>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/40 via-fuchsia-500/20 to-transparent"
        >
          <div className="h-full w-full rounded-2xl bg-zinc-900/80 backdrop-blur-xl p-8 border border-white/10 group-hover:border-cyan-400/40 transition">

            <p className="text-zinc-300 leading-relaxed">
              Systems Engineering student focused on building scalable and secure web applications.
              I specialize in full-stack development, authentication systems, and modern backend
              architectures using technologies like Next.js and PostgreSQL.
            </p>

            <p className="text-zinc-400 mt-4">
              I am passionate about creating efficient solutions, improving system design,
              and continuously learning new technologies to solve real-world problems.
            </p>

            {/* BADGES */}
            <div className="flex flex-wrap gap-3 mt-6">
              {["Full-Stack", "Backend Focus", "Problem Solver"].map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="text-xs px-4 py-1.5 rounded-full bg-zinc-800 border border-cyan-400/20 text-cyan-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Glow hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-cyan-500/10"></div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}