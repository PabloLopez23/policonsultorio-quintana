import { CalendarCheck } from "lucide-react";
import { WHATSAPP_LINK } from "@/config/contact";

export function CTA() {
  return (
    <section
      id="turnos"
      className="scroll-mt-20 bg-[linear-gradient(135deg,#45e2d7_0%,#00aaa0_48%,#006f83_100%)] py-16 text-white sm:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-dental-mint">
            Turnos
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl">
            ¿Querés mejorar tu sonrisa?
          </h2>
          <p className="mt-4 text-lg leading-8 text-dental-mint">
            Solicitá tu turno hoy y recibí atención profesional en Policonsultorio
            Quintana.
          </p>
        </div>

        <a
          className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-base font-bold text-dental-deep shadow-soft transition hover:bg-dental-mint focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-dental-ocean"
          href={WHATSAPP_LINK}
          rel="noreferrer"
          target="_blank"
        >
          <CalendarCheck className="h-5 w-5" />
          Reservar turno
        </a>
      </div>
    </section>
  );
}
