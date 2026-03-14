import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientsCarousel } from "@/components/ClientsCarousel";
import { Services } from "@/components/Services";
import { Trayectoria } from "@/components/Trayectoria";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <ClientsCarousel />
      <Services />
      <Certifications />
      <Trayectoria />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
