import { technologies } from "@/data/portfolio-data";

export function Hero() {
  return (
    <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.2fr_0.8fr]">
      <section>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Full Stack Developer
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Desarrollo aplicaciones web funcionales, claras y escalables.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Construyo soluciones web enfocadas en experiencia de usuario, lógica de
          negocio y mantenimiento a largo plazo, combinando desarrollo frontend,
          backend y automatización técnica.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:bg-slate-200"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-white hover:text-white"
          >
            Contactarme
          </a>
        </div>
      </section>

      <aside className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur">
        <p className="text-sm text-slate-500">Perfil principal</p>

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
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </aside>
    </div>
  );
}