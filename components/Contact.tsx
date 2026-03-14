"use client";

import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Send, MapPin, Phone, Mail, Copy, Check, ExternalLink } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  email: z.string().email({ message: "Por favor, ingrese un correo electrónico válido." }),
  company: z.string().min(2, { message: "El nombre de la empresa es requerido." }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-xl lg:text-2xl font-display font-semibold text-slate-900 dark:text-white mb-6">
              Hablemos de su próximo proyecto
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 leading-relaxed">
              Nuestro equipo de expertos está listo para asesorarle y encontrar la mejor solución para las necesidades de su empresa.
            </p>

            <div className="space-y-8">
              {[
                { id: "address", icon: MapPin, title: "Ubicación", content: "Mariano Sánchez Fontecilla 538, Las Condes, Santiago." },
                { id: "phone", icon: Phone, title: "Teléfono", content: "+56 2 2447 5400" },
                { id: "email", icon: Mail, title: "Email de contacto", content: "info@empresasovalle.cl" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary dark:text-white mb-1">{item.title}</h4>
                    <div className="flex items-center gap-2">
                      <p className="text-slate-600 dark:text-slate-400">{item.content}</p>
                      {(item.id === "email" || item.id === "phone") && (
                        <button 
                          onClick={() => handleCopy(item.content)}
                          className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-accent transition-colors"
                          title={`Copiar ${item.title.toLowerCase()} al portapapeles`}
                        >
                          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                      {item.id === "address" && (
                        <a 
                          href={`https://maps.google.com/?q=${encodeURIComponent(item.content)}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-400 hover:text-accent transition-colors"
                          title="Abrir en Google Maps"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-xl relative z-10">
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary dark:text-white mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Gracias por contactarnos. Nos comunicaremos con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Nombre Completo
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="Ej. Juan Pérez"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Correo Electrónico
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                        placeholder="ejemplo@empresa.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Empresa
                    </label>
                    <input
                      {...register("company")}
                      id="company"
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Nombre de su empresa"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Mensaje
                    </label>
                    <textarea
                      {...register("message")}
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                      placeholder="¿En qué podemos ayudarle?"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-action hover:bg-amber-600 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>
                </form>
              )}
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl z-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
