"use client";

import { projects } from "./data/project";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100 px-6">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-cyan-500/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-fuchsia-600/30 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          David Ortiz
        </h1>

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

      {/* ABOUT */}
      <section className="relative z-10 max-w-4xl mx-auto my-32 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Systems Engineering student focused on building production-ready applications 
          and intelligent systems. I specialize in full-stack development, secure 
          authentication architectures, and scalable backend solutions using modern technologies.
        </p>
      </section>

      {/* WHAT I BUILD */}
      <section className="relative z-10 max-w-5xl mx-auto my-32">
        <h2 className="text-3xl font-bold mb-10 text-purple-400">
          What I Build
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Scalable Web Applications",
            "Authentication Systems",
            "Data-Driven Platforms",
            "REST API Architectures"
          ].map(item => (
            <div
              key={item}
              className="rounded-xl px-6 py-4 text-center bg-zinc-900/70 border border-purple-500/20"
            >
              {item}
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
            "JWT Authentication",
            "Git & GitHub"
          ].map(tech => (
            <div
              key={tech}
              className="rounded-xl px-6 py-4 text-center bg-zinc-900/70 border border-purple-500/20"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-12 text-fuchsia-400">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl bg-zinc-900/70 border border-white/10 overflow-hidden hover:scale-105 transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 mt-2">
                  {project.description}
                </p>

                <p className="text-xs text-zinc-500 mt-2">
                  {project.tech.join(" · ")}
                </p>

                <div className="flex gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-xs text-cyan-400 hover:underline"
                  >
                    GitHub
                  </a>

                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="relative z-10 max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400">
          Experience
        </h2>

        <div className="rounded-2xl bg-zinc-900/70 border border-cyan-500/20 p-6">
          <h3 className="text-xl font-semibold text-cyan-400">
            Freelance Full-Stack Developer
          </h3>
          <p className="text-sm text-zinc-400 mt-2">
            Developed scalable web applications using Next.js and PostgreSQL, 
            implementing authentication systems, dashboards, and secure data handling 
            in real-world project simulations.
          </p>
        </div>
      </section>

      {/* CURRENTLY LEARNING */}
      <section className="relative z-10 max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-10 text-purple-400">
          Currently Learning
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Advanced Authentication Patterns",
            "System Design",
            "Clean Architecture",
            "API Security Best Practices"
          ].map(item => (
            <div
              key={item}
              className="rounded-xl px-6 py-4 text-center bg-zinc-900/70 border border-purple-500/20"
            >
              {item}
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