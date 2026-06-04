import { BadgeCheck, CalendarCheck, ShieldCheck, Users } from "lucide-react";

const highlights = [
  { text: "Atención para adultos y niños", icon: Users },
  { text: "Profesionales capacitados", icon: BadgeCheck },
  { text: "Ambiente cómodo y seguro", icon: ShieldCheck },
  { text: "Turnos ágiles por WhatsApp", icon: CalendarCheck },
];

export function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 bg-[linear-gradient(135deg,#45e2d7_0%,#16c7c2_45%,#007d8f_100%)] py-16 sm:py-20"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-dental-deep">
            Sobre nosotros
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-dental-deep sm:text-4xl">
            Cercanía, tecnología y criterio profesional
          </h2>
          <p className="mt-5 text-lg leading-8 text-dental-deep/80">
            En Policonsultorio Quintana brindamos atención odontológica personalizada,
            combinando experiencia profesional, tecnología y un trato humano para cuidar
            la salud bucal de cada paciente.
          </p>
        </div>

        <div className="grid gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                className="flex items-center gap-4 rounded-lg border border-white/50 bg-white/80 p-4 shadow-soft"
                key={item.text}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-dental-deep text-dental-aqua">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-semibold text-dental-deep">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
