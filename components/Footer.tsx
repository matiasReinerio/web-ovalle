"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Linkedin, Twitter, Facebook, Instagram, Copy, Check, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-auto h-12">
                <Image 
                  src="/ovalle_logo.jpg" 
                  alt="Empresas Ovalle Logo" 
                  width={200}
                  height={100}
                  className="object-contain h-full w-auto rounded-md shadow-sm"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              38 años de excelencia y compromiso inquebrantable.
            </p>
            <div className="flex items-center gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {["Inicio", "Servicios", "Trayectoria", "Proyectos", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="space-y-4">
              {[
                "Detección y control de incendio",
                "Circuito cerrado de televisión",
                "Control de acceso",
                "Asesorías y desarrollo de proyectos",
                "Ejecución de proyectos",
                "Mantención preventiva de sistemas"
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contacto</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-2 group">
                <span>Mariano Sánchez Fontecilla 538, Las Condes, Santiago</span>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent("Mariano Sánchez Fontecilla 538, Las Condes, Santiago")}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-500 hover:text-accent transition-colors"
                  title="Abrir en Google Maps"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </li>
              <li className="flex items-center gap-2 group">
                <span>+56 2 2447 5400</span>
                <button 
                  onClick={() => handleCopy("+56 2 2447 5400", "phone")}
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-500 hover:text-accent transition-colors"
                  title="Copiar teléfono"
                >
                  {copiedType === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </li>
              <li className="flex items-center gap-2 group">
                <span>info@empresasovalle.cl</span>
                <button 
                  onClick={() => handleCopy("info@empresasovalle.cl", "email")}
                  className="p-1.5 rounded-md hover:bg-white/10 text-slate-500 hover:text-accent transition-colors"
                  title="Copiar email"
                >
                  {copiedType === "email" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Empresas Ovalle. Todos los derechos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
