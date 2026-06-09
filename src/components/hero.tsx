import { technologies } from "@/data/portfolio-data";

const profileHighlights = [
  "Full Stack Development",
  "Business Solutions",
  "Automation Tools",
];

export function Hero() {
  return (
    <div className="grid flex-1 items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
      <section>
        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">
          Software Developer
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-white md:text-7xl">
          Jorge Hernández
        </h1>

        <p className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-slate-200 md:text-4xl">
          Construyo soluciones de software funcionales, claras y mantenibles.
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Desarrollo aplicaciones web, herramientas internas y automatizaciones
          técnicas, combinando frontend, backend y lógica de negocio para
          resolver necesidades reales.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-neutral-950 shadow-lg shadow-white/10 transition hover:bg-slate-200"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition hover:border-white hover:bg-white/[0.04]"
          >
            Contactarme
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {profileHighlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
            >
              {highlight}
            </span>
          ))}
        </div>
      </section>

      <aside className="relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-black/40 backdrop-blur">
        <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
          Current Focus
        </p>

        <h2 className="mt-4 text-3xl font-semibold text-white">
          Software Development
        </h2>

        <p className="mt-4 leading-7 text-slate-400">
          Desarrollo de soluciones web, lógica de negocio y herramientas técnicas
          con enfoque en claridad, mantenimiento y utilidad real.
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            Main Stack
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-neutral-900 px-3 py-1 text-sm text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
          <div>
            <p className="text-3xl font-bold text-white">Full Stack</p>
            <p className="mt-1 text-sm text-slate-500">Área principal</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">Automation</p>
            <p className="mt-1 text-sm text-slate-500">Plus técnico</p>
          </div>
        </div>
      </aside>
    </div>
  );
}