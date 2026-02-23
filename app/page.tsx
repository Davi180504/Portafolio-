"use client";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100 px-6">

      {/* NEON BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-[600px] w-[600px] rounded-full bg-cyan-500/30 blur-[200px]" />
      <div className="pointer-events-none absolute top-1/4 -right-48 h-[600px] w-[600px] rounded-full bg-fuchsia-600/30 blur-[200px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[180px]" />

      {/* HERO */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          David Ortiz
        </h1>

        <p className="mt-6 text-xl text-cyan-300 tracking-wide">
          Systems Engineering Student · Web Developer
        </p>

        <p className="mt-6 max-w-xl text-zinc-300">
          I design and build futuristic, scalable web applications using modern
          technologies and clean architecture.
        </p>

        <div className="mt-12 flex gap-6">
          <a
            href="https://github.com/Davi180504"
            target="_blank"
            className="relative px-8 py-3 rounded-xl font-semibold text-black bg-gradient-to-r from-cyan-400 to-fuchsia-500 hover:scale-110 transition"
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
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative z-10 max-w-4xl mx-auto my-32 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-10">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400">
          About Me
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          I am a Systems Engineering student from Colombia focused on building
          high-impact web applications. My projects simulate real-world software
          environments, combining performance, security, and futuristic UI
          design.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="relative z-10 max-w-6xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-12 text-fuchsia-400">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          {/* PROJECT 1 */}
<div className="rounded-2xl bg-zinc-900/70 border border-cyan-500/20">
  <img
    src="\login.jpeg"
    alt="Authentication System"
    className="h-52 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-cyan-400">
      Authentication System
    </h3>
    <p className="text-sm text-zinc-400 mt-2">
      Full authentication flow with protected routes and sessions.
    </p>
    <p className="text-xs text-zinc-500 mt-2">
      Next.js · Auth · UI
    </p>
  </div>
</div>

{/* PROJECT 2 */}
<div className="rounded-2xl bg-zinc-900/70 border border-fuchsia-500/20">
  <img
    src="/Interfaz .jpeg"
    alt="UI Platform"
    className="h-52 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-fuchsia-400">
      Inclusive AI Platform
    </h3>
    <p className="text-sm text-zinc-400 mt-2">
      Interactive dashboard for inclusive sign language learning.
    </p>
    <p className="text-xs text-zinc-500 mt-2">
      Next.js · Dashboard · UI/UX
    </p>
  </div>
</div>

{/* PROJECT 3 */}
<div className="rounded-2xl bg-zinc-900/70 border border-purple-500/20">
  <img
    src="/Base de datos.jpeg"
    alt="Database Design"
    className="h-52 w-full object-cover"
  />
  <div className="p-6">
    <h3 className="text-xl font-semibold text-purple-400">
      User Management System
    </h3>
    <p className="text-sm text-zinc-400 mt-2">
      PostgreSQL user management integrated with Next.js.
    </p>
    <p className="text-xs text-zinc-500 mt-2">
      Next.js · PostgreSQL · SQL
    </p>
  </div>
</div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="relative z-10 max-w-4xl mx-auto mb-32">
        <h2 className="text-3xl font-bold mb-10 text-cyan-400">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Next.js",
            "JavaScript / TypeScript",
            "PostgreSQL",
            "Authentication & Sessions",
            "Tailwind CSS",
            "Git / GitHub",
            "Responsive UI",
            "Dashboard Design",
          ].map(skill => (
            <div
              key={skill}
              className="rounded-xl px-6 py-4 text-center bg-zinc-900/70 border border-zinc-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative z-10 text-center pb-20">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-400">
          Contact
        </h2>
        <p className="text-zinc-300">vargasdavid182004@gmail.com</p>
      </section>

    </main>
  );
}