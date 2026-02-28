const teamMembers = [
  {
    name: "Alejo Chiaretta",
    age: 21,
    role: "Full-Stack Developer",
    ig: "https://instagram.com/alejochiaretta",
  },
  {
    name: "Nazareno Garrone",
    age: 23,
    role: "Frontend Developer",
    ig: "https://www.instagram.com/naza.garrone/",
  },
  {
    name: "Santiago Giustolisi",
    age: 21,
    role: "Backend Developer",
    ig: "https://www.instagram.com/santyy.__/",
  },
  {
    name: "Joaquin Dopazo",
    age: 21,
    role: "QA / DevOps",
    ig: "https://www.instagram.com/joaquin_dopazo/",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-28">
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Conocé al <span className="text-purple">equipo</span>
        </h2>
        <p className="text-white/60 mt-4 max-w-2xl mx-auto">
          Somos 4 desarrolladores construyendo productos digitales rápidos,
          modernos y con foco en resultados.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {teamMembers.map((m) => (
          <div
            key={m.name}
            className="rounded-2xl border border-white/[0.10] bg-black/30 p-6 text-center hover:border-purple/60 transition"
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-purple/20 flex items-center justify-center text-xl font-bold text-purple">
              {m.name.split(" ")[0][0]}
            </div>

            <h3 className="font-semibold text-lg text-white">
              {m.name} · {m.age}
            </h3>
            <p className="text-white/60 text-sm mt-1">{m.role}</p>

            <a
              href={m.ig}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 text-sm text-purple hover:underline"
            >
              Ver Instagram
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;