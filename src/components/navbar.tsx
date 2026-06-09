const navLinks = [
  {
    label: "Sobre mí",
    href: "#about",
  },
  {
    label: "Experiencia",
    href: "#experience",
  },
  {
    label: "Proyectos",
    href: "#projects",
  },
  {
    label: "Contacto",
    href: "#contact",
  },
];

export function Navbar() {
  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between rounded-full border border-white/10 bg-neutral-950/70 px-5 py-4 shadow-2xl shadow-black/30 backdrop-blur">
      <p className="text-sm font-semibold tracking-tight text-white md:text-base">
        Jorge Hernández
      </p>

      <div className="hidden gap-6 text-sm text-slate-400 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="transition hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}