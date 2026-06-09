import { experienceAreas } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
          Experiencia
        </p>

        <h2 className="mt-4 text-3xl font-bold text-white md:text-5xl">
          Áreas de desarrollo profesional.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {experienceAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-white/25 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-black/30"
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