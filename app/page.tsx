"use client";

import { projects } from "./data/project";
import Image from "next/image";
import Link from "next/link";
import Logo from "./components/Logo";
import Experience from "./components/Experience";
import LearningSection from "./components/LearningSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import MindsetSection from "./components/MindsetSection";
import WorkflowSection from "./components/WorkflowSection";
import Goals from "./components/Goals";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100 px-6">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-cyan-500/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-fuchsia-600/30 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* HERO */}
<section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center">

  {/* LOGO ARRIBA */}
  <div className="mb-8">
    <Logo />
  </div>

  {/* NOMBRE */}
  <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
    David Ortiz
  </h1>

  {/* SUBTÍTULO */}
  <p className="mt-6 text-xl text-cyan-300 tracking-wide">
    Full-Stack Developer · Next.js · PostgreSQL
  </p>

        <p className="mt-6 max-w-xl text-zinc-300">
          Full-stack developer focused on building secure and scalable web applications 
          with real-world architecture. Specialized in authentication systems, dashboards, 
          and database-driven platforms.
        </p>

        {/* BOTONES CORREGIDOS */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <a
            href="https://github.com/Davi180504"
            target="_blank"
            className="px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:scale-110 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/david-santiago-ortiz-vargas-214a403ab"
            target="_blank"
            className="px-8 py-3 rounded-xl border border-fuchsia-500/50 text-fuchsia-300 hover:border-fuchsia-400 transition"
          >
            LinkedIn
          </a>

          <Link
            href="/certificates"
            className="px-8 py-3 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition"
          >
            Certifications
          </Link>

        </div>
      </section>

      <AboutSection />

      {/* WHAT I BUILD */}
      <section className="relative z-10 max-w-5xl mx-auto my-32">
        <h2 className="text-3xl font-bold mb-10 text-purple-400">
          What I Build
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Scalable Web Applications",
              desc: "High-performance applications built for scalability"
            },
            {
              title: "Authentication Systems",
              desc: "Secure login systems with JWT and access control"
            },
            {
              title: "Data-Driven Platforms",
              desc: "Applications powered by structured databases"
            },
            {
              title: "REST API Architectures",
              desc: "Clean and modular backend architectures"
            }
          ].map((item) => (
            <div
              key={item.title}
              className="group relative p-[1px] rounded-xl bg-gradient-to-r from-fuchsia-500/40 via-purple-500/30 to-cyan-400/40 hover:scale-105 transition"
            >
              <div className="rounded-xl bg-zinc-900/80 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <section className="relative z-10 max-w-5xl mx-auto my-32">
        <h2 className="text-3xl font-bold mb-10 text-purple-400">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Node.js",
            "Tailwind CSS",
            "REST APIs",
            "JWT Auth",
            "Git & GitHub"
          ].map((tech) => (
            <div
              key={tech}
              className="group relative p-[1px] rounded-xl bg-gradient-to-r from-cyan-400/30 via-fuchsia-500/20 to-purple-500/30 hover:scale-105 transition"
            >
              <div className="rounded-xl bg-zinc-900/80 backdrop-blur-xl px-6 py-4 text-center">
                <span className="text-sm text-zinc-300 group-hover:text-white transition">
                  {tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STATS */}
<section className="relative z-10 max-w-5xl mx-auto my-32 px-6">
  <h2 className="text-3xl font-bold mb-10 text-cyan-400 text-center">
    Impact
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    {[
      { value: "3+", label: "Projects Built" },
      { value: "1", label: "AI-Based System" },
      { value: "2+", label: "Students Mentored" },
      { value: "5+", label: "Technologies Used" }
    ].map((item, i) => (
      <div
        key={item.label}
        className="group rounded-2xl bg-zinc-900/70 border border-cyan-500/20 p-6 text-center
        hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]
        transition-all duration-300"
      >
        <h3 className="text-4xl font-extrabold text-cyan-400 group-hover:scale-110 transition">
          {item.value}
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          {item.label}
        </p>
      </div>
    ))}

  </div>
</section>

{/* SERVICES */}
<section className="relative z-10 max-w-5xl mx-auto my-32 px-6">
  <h2 className="text-3xl font-bold mb-10 text-fuchsia-400 text-center">
    What I Do
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    {[
      {
        title: "Full-Stack Web Development",
        desc: "Building complete web applications with modern technologies like Next.js and PostgreSQL.",
      },
      {
        title: "Backend & API Development",
        desc: "Designing scalable APIs, authentication systems, and secure backend architectures.",
      },
      {
        title: "Database Design",
        desc: "Structuring relational databases and optimizing queries for performance and scalability.",
      },
      {
        title: "Authentication & Security",
        desc: "Implementing JWT authentication, protected routes, and secure data handling.",
      }
    ].map((item) => (
      <div
        key={item.title}
        className="group relative p-[1px] rounded-xl bg-gradient-to-r from-fuchsia-500/30 via-purple-500/20 to-cyan-400/30
        hover:scale-[1.03] hover:-translate-y-1
        hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]
        transition-all duration-300"
      >
        <div className="rounded-xl bg-zinc-900/80 backdrop-blur-xl p-6 h-full">
          <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition">
            {item.title}
          </h3>

          <p className="text-sm text-zinc-400 mt-2">
            {item.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

<ProjectsSection />

<WorkflowSection />

<MindsetSection />

<Goals />

<Experience />

<LearningSection />


      {/* PHILOSOPHY */}
<section className="relative z-10 max-w-4xl mx-auto my-32 px-6 text-center">
  <div className="rounded-2xl bg-zinc-900/70 border border-purple-500/20 p-10
  shadow-[0_0_40px_rgba(168,85,247,0.15)]">

    <h2 className="text-3xl font-bold mb-6 text-purple-400">
      Development Philosophy
    </h2>

    <p className="text-zinc-300 leading-relaxed">
      I focus on building scalable, secure, and maintainable systems, 
      prioritizing clean architecture and real-world performance. 
      My goal is to create solutions that are not only functional, 
      but also efficient, reliable, and designed for long-term growth.
    </p>

  </div>
</section>

      {/* INTERESTS */}
<section className="relative z-10 max-w-5xl mx-auto mb-32 px-6">
  <h2 className="text-3xl font-bold mb-10 text-purple-400 text-center">
    Beyond Coding
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "Artificial Intelligence",
        desc: "Interest in AI systems, machine learning, and real-world applications like sign language recognition.",
      },
      {
        title: "System Design",
        desc: "Passion for designing scalable architectures and understanding how large systems are structured.",
      },
      {
        title: "Continuous Learning",
        desc: "Constantly exploring new technologies, frameworks, and best practices in software development.",
      },
      {
        title: "Problem Solving",
        desc: "Enjoy tackling complex challenges through logic, algorithms, and structured thinking.",
      },
      {
        title: "Teaching & Mentoring",
        desc: "Helping others learn programming concepts and improve their problem-solving skills.",
      },
      {
        title: "Technology Trends",
        desc: "Following trends in software engineering, AI, and modern development tools.",
      }
    ].map((item, i) => (
      <div
        key={item.title}
        className={`group relative p-[1px] rounded-xl bg-gradient-to-r from-purple-500/30 via-fuchsia-500/20 to-cyan-400/30 
        hover:scale-[1.03] hover:-translate-y-1 
        hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] 
        transition-all duration-300`}
      >
        <div className="rounded-xl bg-zinc-900/80 backdrop-blur-xl p-6 h-full">
          <h3 className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition">
            {item.title}
          </h3>

          <p className="text-sm text-zinc-400 mt-2">
            {item.desc}
          </p>
        </div>
      </div>
    ))}

  </div>
</section>

      {/* CONTACT */}
<section className="relative z-10 max-w-4xl mx-auto mb-32 px-6">
  <h2 className="text-4xl font-bold mb-10 text-fuchsia-400 text-center">
    Contact Me
  </h2>

  <form className="bg-zinc-900/70 backdrop-blur-xl border border-fuchsia-500/20 p-8 rounded-2xl shadow-[0_0_40px_rgba(217,70,239,0.15)] space-y-6">

    {/* Name */}
    <div>
      <label className="block mb-2 font-semibold text-zinc-300">
        Name
      </label>
      <input
        type="text"
        placeholder="Name"
        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500/30 transition"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block mb-2 font-semibold text-zinc-300">
        E-mail
      </label>
      <input
        type="email"
        placeholder="Your@email.com"
        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
      />
    </div>

    {/* Mensaje */}
    <div>
      <label className="block mb-2 font-semibold text-zinc-300">
        Message
      </label>
      <textarea
        placeholder="Write your message..."
        rows={6}
        className="w-full p-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition"
      />
    </div>

    {/* Botón */}
    <button className="w-full py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:scale-105 transition">
      Send Message
    </button>
  </form>

  {/* Email extra */}
  <p className="text-sm text-zinc-400 text-center mt-6">
    you can also reach me at: 
    <span className="text-cyan-400 font-semibold">
      {" "}vargasdavid182004@gmail.com
    </span>
  </p>
</section>

    </main>
  );
}