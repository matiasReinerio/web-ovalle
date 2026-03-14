"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Empresa Alpha",
    description: "Implementación integral de sistema de control de acceso y CCTV.",
    image: "https://picsum.photos/seed/alpha/800/600",
  },
  {
    id: 2,
    title: "Constructora Beta",
    description: "Diseño e instalación de red de detección y extinción de incendios.",
    image: "https://picsum.photos/seed/beta/800/600",
  },
  {
    id: 3,
    title: "Logística Gamma",
    description: "Automatización de acceso vehicular y cerco eléctrico perimetral.",
    image: "https://picsum.photos/seed/gamma/800/600",
  },
  {
    id: 4,
    title: "Edificio Corporativo Delta",
    description: "Integración de alarmas de robo y cámaras de alta resolución.",
    image: "https://picsum.photos/seed/delta/800/600",
  },
  {
    id: 5,
    title: "Retail Omega",
    description: "Mantenimiento preventivo de sistemas contra incendios y seguridad.",
    image: "https://picsum.photos/seed/omega/800/600",
  },
  {
    id: 6,
    title: "Clínica Sigma",
    description: "Actualización de citofonía y control de acceso biométrico.",
    image: "https://picsum.photos/seed/sigma/800/600",
  },
  {
    id: 7,
    title: "Industria Epsilon",
    description: "Instalación de supresores y circuito cerrado de televisión.",
    image: "https://picsum.photos/seed/epsilon/800/600",
  },
  {
    id: 8,
    title: "Condominio Zeta",
    description: "Proyecto completo de cerco eléctrico y vigilancia 24/7.",
    image: "https://picsum.photos/seed/zeta/800/600",
  },
  {
    id: 9,
    title: "Bodegas Theta",
    description: "Sistemas avanzados de detección temprana de fuego y alarmas.",
    image: "https://picsum.photos/seed/theta/800/600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-xl lg:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-6">
              Proyectos Destacados
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Casos de éxito que demuestran nuestra capacidad de ejecución y compromiso con la excelencia.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 aspect-[4/3] md:aspect-[5/4]"
            >
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div>
                  <h3 className="text-xl font-display font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-200">
                    {project.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
