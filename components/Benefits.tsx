import { Building2, ClipboardCheck, MessageCircle, UserRoundCheck } from "lucide-react";

const benefits = [
  {
    title: "Atención personalizada",
    description: "Escuchamos tus necesidades y adaptamos cada tratamiento a tu caso.",
    icon: UserRoundCheck,
  },
  {
    title: "Instalaciones modernas",
    description: "Espacios preparados para una experiencia cómoda, limpia y segura.",
    icon: Building2,
  },
  {
    title: "Planes de tratamiento claros",
    description: "Te explicamos opciones, tiempos y próximos pasos antes de avanzar.",
    icon: ClipboardCheck,
  },
  {
    title: "Fácil reserva de turnos",
    description: "Coordiná tu visita por WhatsApp de manera simple y rápida.",
    icon: MessageCircle,
  },
];

export function Benefits() {
  return (
    <section className="bg-[linear-gradient(180deg,#004d63_0%,#006f83_100%)] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-dental-aqua">
            Beneficios
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl">
            Una experiencia pensada para que te sientas acompañado
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                className="rounded-lg border border-white/20 bg-white/10 p-5 text-white shadow-sm backdrop-blur"
                key={benefit.title}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-dental-aqua text-dental-deep shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-dental-mint">{benefit.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
