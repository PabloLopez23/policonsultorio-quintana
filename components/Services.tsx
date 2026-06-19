import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  HeartPulse,
  ShieldCheck,
  Smile,
  SmilePlus,
  Sparkles,
  Wrench,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    title: "ATM / Articulación temporomandibular",
    description:
      "Evaluación y tratamiento de molestias mandibulares, dolor al masticar o tensión en la mandíbula.",
    icon: HeartPulse,
  },
  {
    title: "Ortodoncia",
    description: "Opciones de alineación dental para mejorar estética, mordida y comodidad.",
    icon: BadgeCheck,
  },
  {
    title: "Ortopedia maxilar",
    description:
      "Tratamientos para guiar el crecimiento y corregir alteraciones óseas y funcionales.",
    icon: BadgeCheck,
  },
  {
    title: "Implantes osteointegrados",
    description:
      "Soluciones modernas para reemplazar piezas dentales perdidas con estabilidad y estética.",
    icon: ShieldCheck,
  },
  {
    title: "Tratamiento de encías",
    description:
      "Atención para prevenir y tratar inflamación, sangrado o problemas periodontales.",
    icon: ShieldCheck,
  },
  {
    title: "Prótesis dentales",
    description: "Alternativas funcionales y estéticas para recuperar confianza al hablar y comer.",
    icon: Wrench,
  },
  {
    title: "Blanqueamiento dental",
    description: "Tratamientos estéticos seguros para lograr una sonrisa más luminosa.",
    icon: Smile,
  },
  {
    title: "Limpieza dental profunda",
    description:
      "Limpieza profesional más completa para remover sarro, placa y cuidar las encías.",
    icon: Sparkles,
  },
  {
    title: "Tratamiento de conducto",
    description:
      "Procedimiento para salvar piezas dentales afectadas y eliminar dolor o infección.",
    icon: SmilePlus,
  },
  {
    title: "Tratamiento de caries",
    description: "Restauraciones cuidadas para conservar tus piezas dentales y aliviar molestias.",
    icon: SmilePlus,
  },
  {
    title: "Carillas estéticas",
    description: "Tratamientos estéticos para mejorar forma, color y apariencia de la sonrisa.",
    icon: Smile,
  },
  {
    title: "Urgencias odontológicas",
    description: "Atención rápida ante dolor, golpes, infecciones o molestias repentinas.",
    icon: HeartPulse,
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="scroll-mt-20 bg-[linear-gradient(180deg,#006f83_0%,#00aaa0_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-dental-mint">
            Servicios
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl">
            Odontología integral en un solo lugar
          </h2>
          <p className="mt-4 text-lg leading-8 text-dental-mint">
            Tratamientos pensados para prevenir, cuidar y mejorar tu sonrisa con un
            enfoque claro y profesional.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="group rounded-lg border border-white/40 bg-white/90 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft"
                key={service.title}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-dental-soft text-dental-ocean transition group-hover:bg-dental-aqua group-hover:text-dental-deep">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-dental-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
