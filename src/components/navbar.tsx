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
    <nav className="flex items-center justify-between border-b border-slate-800 pb-6">
      <p className="text-lg font-semibold tracking-tight">Jorge Hernández</p>

      <div className="hidden gap-6 text-sm text-slate-300 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-cyan-300">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}