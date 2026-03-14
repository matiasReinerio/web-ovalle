"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { ArrowRight, Building2, Briefcase, Users, Trophy, Wrench, Award } from "lucide-react";

const stats = [
  { id: 1, name: "Años de Experiencia", value: "38", icon: Building2 },
  { id: 2, name: "Proyectos Entregados", value: "+500", icon: Briefcase },
  { id: 3, name: "Clientes Satisfechos", value: "+3500", icon: Users },
  { id: 4, name: "Reconocimientos", value: "+30", icon: Trophy },
  { id: 5, name: "Sistemas mantencion", value: "+500", icon: Wrench },
  { id: 6, name: "Marcas de Excelencia", value: "+10", icon: Award },
];

function StatCounter({ value, duration = 1.5 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [blurAmount, setBlurAmount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/\D/g, ""), 10);
      const isPlus = value.startsWith("+");
      
      // Animate the number
      const numberControls = animate(0, numericValue, {
        duration,
        ease: "circOut", // Faster finish than cubic-bezier
        onUpdate: (latest) => {
          setDisplayValue(`${isPlus ? "+" : ""}${Math.floor(latest)}`);
        },
      });

      // Animate the blur: high at start/middle, zero at end
      const blurControls = animate(0, 1, {
        duration,
        ease: "easeInOut",
        onUpdate: (progress) => {
          // Blur peaks early and fades out towards the end
          const blur = progress < 0.8 ? (1 - progress) * 4 : 0;
          setBlurAmount(blur);
        },
      });

      return () => {
        numberControls.stop();
        blurControls.stop();
      };
    }
  }, [isInView, value, duration]);

  return (
    <motion.span 
      ref={ref}
      style={{ 
        filter: `blur(${blurAmount}px)`,
        display: "inline-block"
      }}
    >
      {displayValue}
    </motion.span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-[65vh] flex items-center justify-start pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Title & Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tight text-slate-900 dark:text-white mb-10 leading-[1.1]">
              Compromiso y capacidad de ejecución en soluciones integrales de sistemas de seguridad.
            </h1>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 w-full sm:w-auto shadow-lg shadow-amber-500/20"
              >
                Contactar
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Stats Diagram (Right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative lg:ml-6 mt-12 lg:mt-0"
          >
            <div className="bg-white/40 dark:bg-slate-800/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-3xl p-8 shadow-2xl grid grid-cols-2 gap-x-6 gap-y-8 relative overflow-hidden">
              {/* Subtle background glow effects inside the widget */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              {stats.map((stat, index) => (
                <div 
                  key={stat.id} 
                  className="flex flex-col gap-3 relative z-10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/80 dark:bg-slate-700/80 flex items-center justify-center shrink-0 shadow-sm">
                      <stat.icon className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-xl md:text-2xl font-display font-bold text-slate-900 dark:text-white">
                      <StatCounter value={stat.value} />
                    </span>
                  </div>
                  <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
