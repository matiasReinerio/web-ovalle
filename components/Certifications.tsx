"use client";

import { motion } from "motion/react";
import { Award, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Certificación / Norma 1",
    issuer: "Entidad Emisora",
    description: "Breve descripción del alcance de esta certificación y su importancia para la calidad del servicio.",
    icon: ShieldCheck,
  },
  {
    title: "Certificación / Norma 2",
    issuer: "Entidad Emisora",
    description: "Breve descripción del alcance de esta certificación y su importancia para la calidad del servicio.",
    icon: FileCheck,
  },
  {
    title: "Certificación / Norma 3",
    issuer: "Entidad Emisora",
    description: "Breve descripción del alcance de esta certificación y su importancia para la calidad del servicio.",
    icon: Award,
  },
  {
    title: "Certificación / Norma 4",
    issuer: "Entidad Emisora",
    description: "Evaluación y respaldo normativo para nuestra ejecución de proyectos y operaciones logísticas.",
    icon: CheckCircle2,
  },
  {
    title: "Certificación / Norma 5",
    issuer: "Entidad Emisora",
    description: "Estricto cumplimiento de normativas de seguridad en sistemas contra incendios y circuito cerrado.",
    icon: ShieldCheck,
  },
  {
    title: "Certificación / Norma 6",
    issuer: "Entidad Emisora",
    description: "Acreditación de calidad en procesos de mantenimiento preventivo y postventa continuo.",
    icon: Award,
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 border-y border-slate-200/50 dark:border-white/5 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl lg:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-6"
          >
            Certificaciones y Estándares
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Contamos con el respaldo de organismos internacionales y nacionales, garantizando que cada proceso cumple con las normativas más exigentes de la industria.
          </motion.p>
        </div>

        {/* Contenedor del Carrusel Horizontal */}
        <div className="flex overflow-x-auto gap-6 sm:gap-8 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style dangerouslySetInnerHTML={{__html: `
            .flex.overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}} />
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative p-5 rounded-3xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 w-[240px] min-w-[240px] flex-shrink-0 flex flex-col justify-between"
            >
              <div className="w-12 h-12 rounded-2xl bg-action/10 flex items-center justify-center mb-6">
                <cert.icon className="w-6 h-6 text-action" strokeWidth={1.5} />
              </div>
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-action block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-base font-display font-bold text-slate-900 dark:text-white leading-tight">
                  {cert.title}
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">
                {cert.description}
              </p>
              
              <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-white/5 flex items-center gap-2 text-action font-medium text-[10px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Vigente y Validado
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
