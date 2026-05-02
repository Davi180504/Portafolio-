"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Understanding the Problem",
    desc: "I analyze requirements, identify constraints, and break down the problem into clear, actionable parts.",
    tag: "Analysis",
    tools: ["Notion", "Diagrams", "Docs"],
    impact: "Clarity",
  },
  {
    step: "02",
    title: "System Design",
    desc: "I design scalable architectures, define APIs, and structure the database.",
    tag: "Architecture",
    tools: ["PostgreSQL", "ERD", "REST"],
    impact: "Scalability",
  },
  {
    step: "03",
    title: "Development",
    desc: "I build modular and efficient code using best practices.",
    tag: "Build",
    tools: ["Next.js", "Node.js", "TypeScript"],
    impact: "Performance",
  },
  {
    step: "04",
    title: "Testing & Security",
    desc: "I validate functionality and secure endpoints.",
    tag: "Quality",
    tools: ["JWT", "Validation", "Testing"],
    impact: "Security",
  },
  {
    step: "05",
    title: "Deployment",
    desc: "I deploy applications with optimized configurations.",
    tag: "Release",
    tools: ["Vercel", "Docker", "CI/CD"],
    impact: "Stability",
  },
  {
    step: "06",
    title: "Optimization",
    desc: "I monitor performance and improve the system.",
    tag: "Improve",
    tools: ["Logs", "Metrics", "Debug"],
    impact: "Efficiency",
  },
];

export default function WorkflowSection() {
  return (
    <section className="relative z-10 max-w-6xl mx-auto mb-40 px-6">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          How I Work
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          My workflow is structured to deliver scalable, secure, and high-quality software solutions.
        </p>
      </motion.div>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-purple-500 opacity-40 blur-[1px]" />

        <div className="space-y-24">

          {workflow.map((step) => (
            <div key={step.step} className="relative flex items-center">

              {/* LEFT CARD */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="hidden md:block w-1/2 pr-12"
              >
                <div className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-transparent">
                  <div className="bg-zinc-900/80 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)] hover:scale-[1.02] transition">

                    <span className="text-xs text-fuchsia-400">
                      Step {step.step}
                    </span>

                    <h3 className="text-xl font-semibold mt-2 text-white">
                      {step.title}
                    </h3>

                    <p className="text-zinc-400 mt-2 text-sm">
                      {step.desc}
                    </p>

                    {/* glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-cyan-500/10"></div>

                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE */}
              <div className="w-full md:w-1/2 flex items-center relative">

                {/* CONNECTOR */}
                <div className="hidden md:block absolute left-0 top-1/2 w-12 h-[2px] bg-gradient-to-r from-cyan-400 to-fuchsia-500"></div>

                {/* DOT */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full 
                  bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black text-lg font-bold shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                >
                  {step.step}
                </motion.div>

                {/* GLOW */}
                <div className="absolute w-24 h-24 rounded-full bg-fuchsia-500/20 blur-2xl left-[-15px] top-1/2 -translate-y-1/2"></div>

                {/* RIGHT CONTENT */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="ml-8"
                >

                  {/* TAG */}
                  <p className="text-sm text-cyan-400 uppercase tracking-widest">
                    {step.tag}
                  </p>

                  {/* IMPACT */}
                  <div className="mt-3 inline-block px-4 py-1.5 text-sm rounded-full bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-300">
                    {step.impact}
                  </div>

                  {/* TOOLS */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    {step.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-3 py-1.5 rounded bg-zinc-800 border border-white/10 text-zinc-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* DECOR LINE */}
                  <div className="mt-5 h-[3px] w-20 bg-gradient-to-r from-cyan-400 to-fuchsia-500"></div>

                </motion.div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}