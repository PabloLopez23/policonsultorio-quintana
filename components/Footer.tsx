const footerLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Turnos", href: "#turnos" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-dental-deep text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-lg font-black text-white">CLINICA PREDEN</p>
          <p className="mt-2 text-sm text-dental-mint/75">
            © 2026 CLINICA PREDEN. Todos los derechos reservados.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-dental-mint/80">
          {footerLinks.map((link) => (
            <a className="transition hover:text-white" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
