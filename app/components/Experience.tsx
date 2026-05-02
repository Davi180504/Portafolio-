"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="relative z-10 max-w-5xl mx-auto mb-40 px-6">

      {/* TÍTULO */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>

      {/* TIMELINE */}
      <div className="relative border-l border-zinc-700 space-y-16 pl-8">

        {/* ITEM 1 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* DOT */}
          <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />

          {/* CARD */}
          <div className="bg-zinc-900/70 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-2xl hover:scale-[1.02] transition shadow-[0_0_40px_rgba(34,211,238,0.15)]">

            <h3 className="text-xl font-semibold text-cyan-400">
              Freelance Full-Stack Developer
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              2024 — Present
            </p>

            <p className="text-zinc-300 mt-4">
              Developed scalable full-stack applications using Next.js and PostgreSQL,
              focusing on secure authentication systems and real-world architecture.
            </p>

            <ul className="mt-4 text-sm text-zinc-400 list-disc list-inside space-y-1">
              <li>JWT authentication systems</li>
              <li>REST API design</li>
              <li>Dashboard development</li>
            </ul>

          </div>
        </motion.div>

        {/* ITEM 2 */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -left-[34px] top-2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]" />

          <div className="bg-zinc-900/70 backdrop-blur-xl border border-purple-500/20 p-6 rounded-2xl hover:scale-[1.02] transition shadow-[0_0_40px_rgba(168,85,247,0.15)]">

            <h3 className="text-xl font-semibold text-purple-400">
              Programming Tutor (Mentor)
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              2023 — Present
            </p>

            <p className="text-zinc-300 mt-4">
              Delivered personalized programming mentoring focused on logic,
              problem-solving and web development fundamentals.
            </p>

            <ul className="mt-4 text-sm text-zinc-400 list-disc list-inside space-y-1">
              <li>1:1 mentorship</li>
              <li>Real project guidance</li>
              <li>Algorithm understanding</li>
            </ul>

          </div>
        </motion.div>

      </div>
    </section>
  );
}