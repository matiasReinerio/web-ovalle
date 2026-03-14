"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function Trayectoria() {
  return (
    <section id="trayectoria" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-xl lg:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-6">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Nuestros 38 años de experiencia nos han posicionado como una empresa líder en la integración de sistemas de seguridad, permitiéndonos entregar soluciones confiables y de calidad a nuestros clientes, destacando algo fundamental: La seguridad, no solo está orientada a los bienes e inmuebles, sino que también a las personas.
            </p>

            <ul className="space-y-4">
              {[
                "Compromiso inquebrantable con la calidad",
                "Equipo de profesionales altamente capacitados",
                "Preocupación por la satisfacción de nuestros clientes"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-action shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[8/5] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative shadow-2xl">
              {/* Placeholder for actual image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 to-transparent mix-blend-multiply z-10" />
              <Image
                src="/ovalle-casa-matriz.jpg"
                alt="Casa Matriz Empresas Ovalle"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-24 right-24 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 z-20">
                <p className="text-white font-medium text-sm leading-relaxed text-center">
                  Casa Matriz Ovalle & Cia.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-action/20 rounded-full blur-2xl z-0" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
