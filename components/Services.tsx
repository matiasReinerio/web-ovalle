"use client";

import { motion } from "motion/react";
import { Flame, FireExtinguisher, Cctv, ShieldAlert, Fingerprint, CarFront, PhoneCall, Zap, Lightbulb, Hammer, Wrench, Headset } from "lucide-react";

const services = [
  {
    title: "Detección y control de incendio",
    description: "Proyectamos e instalamos sistemas direccionables y convencionales, que permiten detectar en forma temprana y oportuna las emergencias, para así activar los planes de contingencia.",
    icon: Flame,
  },
  {
    title: "Extinción de incendio",
    description: "Ofrecemos sistemas de extinción de incendio en base a agua, espuma y gas, para hoteles, clínicas, hospitales, industria y comercio.",
    icon: FireExtinguisher,
  },
  {
    title: "Circuito cerrado de televisión",
    description: "Desarrollamos diversas soluciones en CCTV orientadas a la prevención y control de las áreas más críticas de a acuerdo a las necesidades de nuestros clientes, con tecnologías análogas, HD e IP.",
    icon: Cctv,
  },
  {
    title: "Alarma de robo",
    description: "Sistema en base a detectores magnéticos, quiebre, vibración, pulsadores de emergencia, detectores de movimiento y barreras infrarrojas.",
    icon: ShieldAlert,
  },
  {
    title: "Control de acceso",
    description: "Implementamos sistemas de control de acceso en base a computador o stand alone, con el fin de restringir accesos con lectoras de proximidad biométricas o Tag en los lugares solicitados por nuestros clientes.",
    icon: Fingerprint,
  },
  {
    title: "Automatización de acceso vehicular",
    description: "Realizamos la instalación y mantención de variados sistemas de portones automáticos (corredera, batientes, barreras con pluma accionada con controles remoto, lectoras de proximidad o tag).",
    icon: CarFront,
  },
  {
    title: "Citofonía y video portero",
    description: "Instalamos y mantenemos sistemas de comunicación digital en edificios y condominios, obteniendo una comunicación clara y efectiva para nuestros clientes.",
    icon: PhoneCall,
  },
  {
    title: "Cerco eléctrico",
    description: "Instalamos cercos eléctricos perimetrales como primer anillo de seguridad, el cual se zonifica de acuerdo al diseño geográfico entregando una seguridad efectiva y disuasiva. Este produce descargas de alto voltaje pero con bajo amperaje.",
    icon: Zap,
  },
];

const coreServices = [
  {
    title: "Asesorías y desarrollo de proyectos",
    description: "Evaluación técnica y diseño de soluciones a la medida, asegurando el cumplimiento normativo y la viabilidad de cada proyecto.",
    icon: Lightbulb,
  },
  {
    title: "Ejecución de proyectos",
    description: "Implementación ágil e instalación profesional de sistemas, cumpliendo los más altos estándares de calidad y seguridad.",
    icon: Hammer,
  },
  {
    title: "Mantención preventiva de sistemas",
    description: "Inspecciones periódicas y ajustes técnicos para prolongar la vida útil de los equipos y evitar fallas críticas o interrupciones.",
    icon: Wrench,
  },
  {
    title: "Postventa",
    description: "Soporte técnico continuo, asistencia rápida y garantía de servicio para maximizar la confiabilidad en todo momento.",
    icon: Headset,
  },
];

const brands = [
  { name: "BFT", description: "Automatización de portones y barreras automáticas." },
  { name: "Paradox", description: "Intrusión y detección de incendio." },
  { name: "Bosch", description: "Sistemas de seguridad de alta tecnología." },
  { name: "DSC", description: "Líder mundial en seguridad electrónica." },
  { name: "Aiphone", description: "Sistemas de comunicación de alta tecnología: citofonía y video portero." },
  { name: "Rosslare", description: "Tecnologías de control de acceso integradas." },
  { name: "Kantech", description: "Sistemas de control de acceso integrados." },
  { name: "HID", description: "Líderes en sistemas de control de acceso." },
  { name: "Notifier", description: "Equipos de detección de incendios y sistemas de audioevacuación." },
  { name: "Secutron", description: "Equipos de detección de incendios y sistemas de audioevacuación." },
  { name: "Ademco", description: "Integración de sistemas de seguridad." },
  { name: "Pelco", description: "Soluciones de video vigilancia y seguridad." },
  { name: "Hikvision", description: "Sistemas de CCTV de alta calidad." }
];

export function Services() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="services" className="pt-12 pb-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mb-12 text-left">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl lg:text-xl font-display text-slate-900 dark:text-white"
          >
            Un portafolio de sistemas avanzados para brindar la máxima seguridad en sus instalaciones.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-5 lg:p-6 rounded-2xl bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-xl bg-action/10 dark:bg-action/20 flex items-center justify-center shrink-0">
                  <service.icon className="w-6 h-6 text-action" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-display font-semibold text-slate-900 dark:text-white leading-tight">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-slate-800 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Core Services Section */}
        <div className="mt-24 pt-16 border-t border-slate-200/50 dark:border-white/10">
          <div className="max-w-3xl mb-12 text-left">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-2xl font-display font-semibold text-slate-900 dark:text-white"
            >
              Nuestros Servicios Integrales
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-slate-600 dark:text-slate-400 text-lg"
            >
              Más allá de nuestra tecnología, brindamos un acompañamiento completo en cada etapa de su proyecto de seguridad para garantizar resultados óptimos.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col items-start gap-5 p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 shadow-sm flex items-center justify-center shrink-0 text-action">
                  <service.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-20">
            <motion.h4 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-display font-medium text-slate-900 dark:text-white mb-6"
            >
              Marcas que integran nuestros sistemas
            </motion.h4>
            <div className="overflow-hidden w-full relative">
              <div className="group relative">
                <div className="flex w-max animate-carousel group-hover:[animation-play-state:paused] py-4">
                  {duplicatedBrands.map((brand, index) => (
                    <div
                      key={`${brand.name}-${index}`}
                      className="flex flex-col flex-shrink-0 gap-1 min-w-[180px] max-w-[200px] mx-6"
                    >
                      <span className="text-base font-display font-extrabold text-slate-800 dark:text-slate-300 tracking-tight">
                        {brand.name}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {brand.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
