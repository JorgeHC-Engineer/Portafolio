import { experienceAreas } from "@/data/portfolio-data";

export function Experience() {
  return (
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
  );
}