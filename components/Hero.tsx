import { ArrowRight, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { WHATSAPP_LINK } from "@/config/contact";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-dental-ocean">
      <Image
        alt="Profesional odontológico atendiendo a una paciente en un consultorio moderno"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
        fill
        priority
        quality={100}
        sizes="100vw"
        src="/hero-dental-clinic.png"
        unoptimized
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,77,99,0.96)_0%,rgba(0,111,131,0.86)_48%,rgba(0,170,160,0.42)_100%)] sm:bg-[linear-gradient(90deg,rgba(0,77,99,0.96)_0%,rgba(0,111,131,0.88)_30%,rgba(0,170,160,0.48)_46%,rgba(0,170,160,0.12)_62%,rgba(0,170,160,0)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-dental-ocean/95 to-transparent" />

      <div className="mx-auto flex min-h-[78svh] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-dental-aqua/40 bg-dental-aqua/20 px-3 py-2 text-sm font-semibold text-dental-mint shadow-sm">
            Clínica dental integral
          </p>
          <h1 className="text-4xl font-black leading-tight tracking-normal text-white sm:text-5xl lg:text-6xl">
            Tu sonrisa en manos profesionales
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-dental-mint sm:text-xl">
            Atención odontológica integral para vos y tu familia en Policonsultorio
            Quintana.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md bg-dental-aqua px-6 py-3.5 text-base font-bold text-dental-deep shadow-soft transition hover:bg-dental-mint focus:outline-none focus:ring-2 focus:ring-dental-aqua focus:ring-offset-2 focus:ring-offset-dental-deep"
              href={WHATSAPP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <CalendarCheck className="h-5 w-5" />
              Pedir turno por WhatsApp
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 bg-white/95 px-6 py-3.5 text-base font-bold text-dental-deep transition hover:border-dental-aqua hover:text-dental-ocean"
              href="#servicios"
            >
              Ver servicios
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 text-sm text-dental-mint sm:grid-cols-3">
            {["Atención integral", "Trato cercano", "Turnos ágiles"].map((item) => (
              <div key={item} className="border-l-2 border-dental-aqua pl-3 font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
