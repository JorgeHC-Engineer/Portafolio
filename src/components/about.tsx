export function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
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
  );
}