import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Policonsultorio Quintana | Clínica Dental",
  description:
    "Atención odontológica integral, turnos y servicios dentales profesionales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
