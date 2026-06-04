"use client";

import { CalendarCheck, Menu, X } from "lucide-react";
import { useState } from "react";
import { WHATSAPP_LINK } from "@/config/contact";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Turnos", href: "#turnos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dental-deep/95 text-white backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Inicio">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-dental-aqua text-lg font-black text-dental-deep">
            PQ
          </span>
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            Policonsultorio Quintana
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-dental-mint/80 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-white" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            className="inline-flex items-center gap-2 rounded-md bg-dental-aqua px-5 py-2.5 text-sm font-semibold text-dental-deep shadow-soft transition hover:bg-dental-mint focus:outline-none focus:ring-2 focus:ring-dental-aqua focus:ring-offset-2 focus:ring-offset-dental-deep"
            href={WHATSAPP_LINK}
            rel="noreferrer"
            target="_blank"
          >
            <CalendarCheck className="h-4 w-4" />
            Pedir turno
          </a>
        </div>

        <button
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-white/10 bg-dental-deep px-4 py-4 shadow-soft lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-3 py-3 text-sm font-semibold text-dental-mint transition hover:bg-white/10 hover:text-white"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-dental-aqua px-5 py-3 text-sm font-semibold text-dental-deep"
              href={WHATSAPP_LINK}
              onClick={() => setIsOpen(false)}
              rel="noreferrer"
              target="_blank"
            >
              <CalendarCheck className="h-4 w-4" />
              Pedir turno
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
