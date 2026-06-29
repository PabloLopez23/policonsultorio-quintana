import { About } from "../components/About";
import { Benefits } from "../components/Benefits";
import { Contact } from "../components/Contact";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Benefits />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
