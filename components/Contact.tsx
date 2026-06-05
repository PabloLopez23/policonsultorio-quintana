import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import {
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_LINK,
} from "@/config/contact";

const contactItems = [
  {
    label: "WhatsApp",
    value: CONTACT_PHONE,
    icon: Phone,
    href: WHATSAPP_LINK,
  },
  {
    label: "Dirección",
    value: CLINIC_ADDRESS,
    icon: MapPin,
  },
  {
    label: "Horarios",
    value: CLINIC_HOURS,
    icon: Clock,
  },
  {
    label: "Email",
    value: CONTACT_EMAIL,
    icon: Mail,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 bg-dental-ocean py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-dental-aqua">
            Contacto
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-white sm:text-4xl">
            Estamos cerca para cuidar tu sonrisa
          </h2>
          <p className="mt-4 text-lg leading-8 text-dental-mint">
            Escribinos para coordinar tu consulta, consultar disponibilidad o resolver
            dudas sobre nuestros tratamientos.
          </p>

          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-dental-aqua text-dental-deep shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-dental-ocean">{item.label}</p>
                    <p className="mt-1 font-semibold text-dental-deep">{item.value}</p>
                  </div>
                </>
              );

              return item.href ? (
                <a
                  className="flex items-center gap-4 rounded-lg border border-white/50 bg-white/90 p-4 shadow-sm transition hover:bg-white"
                  href={item.href}
                  key={item.label}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div
                  className="flex items-center gap-4 rounded-lg border border-white/50 bg-white/90 p-4 shadow-sm"
                  key={item.label}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <div className="min-h-[360px] overflow-hidden rounded-lg border border-white/20 bg-dental-deep shadow-soft">
          <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-[linear-gradient(135deg,#45e2d7_0%,#00aaa0_45%,#006f83_100%)] p-8 text-center">
            <MapPin className="h-12 w-12 text-white" />
            <h3 className="mt-5 text-xl font-black text-white">Mapa de ubicación</h3>
            <p className="mt-3 max-w-sm text-sm leading-6 text-dental-mint">
              Sección preparada para insertar el mapa de Google Maps cuando tengas la
              dirección exacta de la clínica.
            </p>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-dental-deep shadow-sm transition hover:bg-dental-mint"
              href={WHATSAPP_LINK}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle className="h-4 w-4" />
              Consultar ubicación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
