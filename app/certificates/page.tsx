export default function CertificatesPage() {
  const certificates = [
    {
      title: "Data Science with Python",
      description:
        "Learned data analysis, preprocessing, visualization and machine learning fundamentals using Python.",
      file: "/certs/Data_Science_with_Python.pdf",
    },
    {
      title: "Python for Data Science",
      description:
        "Applied Python tools such as Pandas and NumPy for solving data-driven problems.",
      file: "/certs/Python_for_Data_Science.pdf",
    },
    {
      title: "Python Essentials",
      description:
        "Covered core programming concepts, functions, and problem-solving using Python.",
      file: "/certs/Python_Essentials.pdf",
    },
    {
      title: "Object-Oriented Programming",
      description:
        "Implemented OOP principles including encapsulation, inheritance and polymorphism.",
      file: "/certs/Object_Oriented_Programming.pdf",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-zinc-100 px-6 py-20">

      <h1 className="text-4xl font-bold text-cyan-400 text-center mb-16">
        Certifications
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-zinc-900/70 border border-white/10 rounded-2xl p-6 hover:scale-105 transition duration-300"
          >
            <h2 className="text-xl font-semibold text-cyan-400">
              {cert.title}
            </h2>

            <p className="text-zinc-300 mt-4 text-sm leading-relaxed">
              {cert.description}
            </p>

            <a
              href={cert.file}
              target="_blank"
              className="inline-block mt-6 px-5 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-black font-semibold hover:scale-105 transition"
            >
              View Certificate
            </a>
          </div>
        ))}

      </div>

    </main>
  );
}