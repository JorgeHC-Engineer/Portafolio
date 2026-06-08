const technologies = [
  "JavaScript",
  "HTML",
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "Django",
  "SAP",
  "Git",
  "SQL",
];

const experienceAreas = [
  {
    title: "Frontend Development",
    description:
      "Construcción de interfaces web claras, responsivas y mantenibles utilizando tecnologías como JavaScript, HTML, React y Next.js.",
  },
  {
    title: "Backend Development",
    description:
      "Desarrollo de lógica de negocio, APIs y estructuras del lado del servidor, con enfoque en organización, escalabilidad y mantenimiento.",
  },
  {
    title: "Automation & Tools",
    description:
      "Creación de scripts y herramientas internas para automatizar tareas repetitivas, validar procesos y mejorar flujos de trabajo técnicos.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
        <nav className="flex items-center justify-between border-b border-slate-800 pb-6">
          <p className="text-lg font-semibold tracking-tight">Jorge Hernández</p>

          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-300">
              Sobre mí
            </a>
            <a href="#experience" className="hover:text-cyan-300">
              Experiencia
            </a>
            <a href="#projects" className="hover:text-cyan-300">
              Proyectos
            </a>
            <a href="#contact" className="hover:text-cyan-300">
              Contacto
            </a>
          </div>
        </nav>

        <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
          <section>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
              Full Stack Developer
            </p>

            <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
              Desarrollo aplicaciones web funcionales, claras y escalables.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Construyo soluciones web enfocadas en experiencia de usuario,
              lógica de negocio y mantenimiento a largo plazo, combinando
              desarrollo frontend, backend y automatización técnica.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                Ver proyectos
              </a>

              <a
                href="#contact"
                className="rounded-full border border-slate-700 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Contactarme
              </a>
            </div>
          </section>

          <aside className="rounded-3xl border border-cyan-400/20 bg-slate-900/70 p-6 shadow-2xl shadow-cyan-500/10">
            <p className="text-sm text-slate-400">Perfil principal</p>

            <h2 className="mt-3 text-2xl font-semibold text-white">
              Full Stack Developer
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Experiencia en desarrollo web con JavaScript, HTML y SAP, con
              conocimientos complementarios en Python, automatización y pruebas
              funcionales.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Sobre mí
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Desarrollador enfocado en construir soluciones útiles y mantenibles.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Soy desarrollador de software con experiencia en desarrollo web y
            soluciones empresariales. He trabajado con JavaScript, HTML y SAP,
            participando en la creación y mantenimiento de funcionalidades para
            entornos de negocio.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            Actualmente también trabajo con automatización técnica usando Python,
            Pytest y Playwright, lo que complementa mi perfil al permitirme crear
            soluciones más confiables, verificables y fáciles de mantener.
          </p>
        </div>
      </section>

      <section id="experience" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Experiencia
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Áreas de desarrollo profesional.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {experienceAreas.map((area) => (
              <article
                key={area.title}
                className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white">{area.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Proyectos
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Proyectos destacados.
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold text-white">
                Portfolio Website
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Sitio web personal desarrollado para presentar experiencia,
                proyectos, tecnologías y contacto profesional de forma clara y
                escalable.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript", "Tailwind CSS"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </article>

            <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/60 hover:shadow-xl hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-semibold text-white">
                Automation Project
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                Proyecto técnico enfocado en automatización de procesos,
                generación de reportes y validación de flujos dentro de un
                entorno empresarial.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Python", "Pytest", "Playwright", "Git"].map(
                  (technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {technology}
                    </span>
                  ),
                )}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
            Contacto
          </p>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
            Construyamos algo útil.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Puedes agregar aquí tus enlaces de GitHub, LinkedIn, correo y CV
            cuando los tengamos listos.
          </p>
        </div>
      </section>
    </main>
  );
}