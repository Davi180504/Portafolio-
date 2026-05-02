"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  BrainCircuit,
  Database,
  Globe,
  Cpu,
} from "lucide-react";

const goals = [
  {
    icon: BrainCircuit,
    title: "Continuous Learning",
    desc: "Constantly improving my knowledge in software engineering, cybersecurity, cloud computing, and scalable architectures.",
  },
  {
    icon: Database,
    title: "Scalable Systems",
    desc: "Building efficient and maintainable systems capable of handling real-world challenges and growth.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Development",
    desc: "Applying secure coding practices and infrastructure protection to create reliable digital solutions.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "Developing technology solutions that solve problems and create positive impact for people and businesses worldwide.",
  },
  {
    icon: Cpu,
    title: "Innovation",
    desc: "Exploring emerging technologies such as Artificial Intelligence, automation, and distributed systems.",
  },
  {
    icon: Rocket,
    title: "Professional Growth",
    desc: "Growing as a Systems Engineer focused on high-performance software development and modern technologies.",
  },
];

export default function GoalsSection() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-32">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
          Goals & Vision
        </p>

        <h2 className="text-5xl font-bold text-white leading-tight">
          Engineering the Future Through
          <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
            {" "}Technology
          </span>
        </h2>

        <p className="text-zinc-400 mt-6 max-w-3xl mx-auto text-lg">
          My vision is to grow as a Systems Engineer capable of designing
          secure, scalable, and innovative digital solutions that make a real
          impact in the technology industry.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {goals.map((goal, index) => {
          const Icon = goal.icon;

          return (
            <motion.div
              key={goal.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-transparent"
            >

              <div className="relative h-full rounded-3xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl p-8 overflow-hidden hover:-translate-y-1 transition duration-300">

                {/* GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500/5 blur-3xl"></div>

                {/* ICON */}
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                  <Icon className="text-black w-8 h-8" />
                </div>

                {/* TITLE */}
                <h3 className="relative z-10 text-2xl font-semibold text-white mt-6">
                  {goal.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 text-zinc-400 mt-4 leading-relaxed">
                  {goal.desc}
                </p>

                {/* DECORATIVE LINE */}
                <div className="relative z-10 mt-6 h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full"></div>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
}