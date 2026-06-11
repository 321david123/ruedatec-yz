"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Headphones,
  User,
  MessageCircle,
  Send,
  Instagram,
} from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Aurora from "@/components/fx/aurora"
import Reveal from "@/components/fx/reveal"
import SpotlightCard from "@/components/fx/spotlight-card"
import SectionHeading from "@/components/fx/section-heading"

const channels = [
  {
    icon: Headphones,
    title: "Soporte técnico",
    description: "Instalación, mantenimiento y uso de nuestros productos.",
    lines: [
      { icon: Mail, label: "soporte@ruedatec.com", href: "mailto:soporte@ruedatec.com" },
      { icon: Phone, label: "+1 (309) 850-9382", href: "tel:+13098509382" },
    ],
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
    spot: "rgba(34, 211, 238, 0.10)",
  },
  {
    icon: User,
    title: "Contacto directo",
    description: "Habla directamente con el fundador del proyecto.",
    lines: [{ icon: Mail, label: "yo@davidmtz.me · CEO & Fundador", href: "mailto:yo@davidmtz.me" }],
    color: "text-amber-300",
    bg: "bg-amber-400/10",
    spot: "rgba(251, 191, 36, 0.10)",
  },
  {
    icon: Clock,
    title: "Horarios de atención",
    description: "Lunes a viernes, 9:00 AM – 6:00 PM (CST, México).",
    lines: [{ icon: MapPin, label: "México · expansión internacional en camino" }],
    color: "text-violet-300",
    bg: "bg-violet-400/10",
    spot: "rgba(167, 139, 250, 0.10)",
  },
]

const promises = [
  {
    icon: MessageCircle,
    title: "Respuesta en 24 horas",
    description:
      "Nuestro equipo se compromete a responder todas las consultas dentro de las 24 horas en días laborales.",
  },
  {
    icon: MapPin,
    title: "Cobertura nacional",
    description:
      "Basados en México, ofrecemos soporte y servicios a nivel nacional con planes de expansión internacional.",
  },
  {
    icon: Headphones,
    title: "Soporte especializado",
    description:
      "Equipo técnico capacitado para resolver cualquier duda sobre instalación, mantenimiento y uso.",
  },
]

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", topic: "Quiero apoyar el proyecto", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[${form.topic}] Mensaje de ${form.name}`)
    const body = encodeURIComponent(`Hola equipo RuedaTec,\n\n${form.message}\n\n— ${form.name}\n${form.email}`)
    window.location.href = `mailto:soporte@ruedatec.com?subject=${subject}&body=${body}`
  }

  const inputClasses =
    "w-full rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-all"

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          required
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className={inputClasses}
        />
        <input
          type="email"
          required
          placeholder="tu@email.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
        />
      </div>
      <select
        value={form.topic}
        onChange={(e) => setForm({ ...form, topic: e.target.value })}
        className={`${inputClasses} appearance-none`}
      >
        <option className="bg-night-900">Quiero apoyar el proyecto</option>
        <option className="bg-night-900">Tengo una sugerencia de mejora</option>
        <option className="bg-night-900">Soporte técnico</option>
        <option className="bg-night-900">Prensa y colaboraciones</option>
        <option className="bg-night-900">Otro</option>
      </select>
      <textarea
        required
        rows={5}
        placeholder="Cuéntanos en qué podemos ayudarte..."
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className={`${inputClasses} resize-none`}
      />
      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(251,191,36,0.45)]"
      >
        Enviar mensaje
        <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      <p className="text-xs text-zinc-500">
        Al enviar se abrirá tu cliente de correo con el mensaje listo para mandar.
      </p>
    </form>
  )
}

export default function ContactanosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative px-6 pb-20 pt-44">
        <Aurora />
        <div className="container relative z-10 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300 md:text-xs">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400/70" />
              Hablemos
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/70" />
            </p>
            <h1 className="font-display mx-auto mt-7 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
              Estamos a un <span className="text-amber-300">mensaje</span> de distancia
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              ¿Dudas, ideas, ganas de apoyar? Ponte en contacto y descubre cómo RuedaTec puede
              transformar tu movilidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Canales */}
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <div className="grid gap-5 md:grid-cols-3">
            {channels.map((channel, i) => (
              <Reveal key={channel.title} delay={i * 0.1}>
                <SpotlightCard className="h-full" spotColor={channel.spot}>
                  <div className="flex h-full flex-col p-8">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${channel.bg}`}>
                      <channel.icon className={`h-6 w-6 ${channel.color}`} />
                    </div>
                    <h3 className="font-display mt-5 text-xl font-bold text-white">{channel.title}</h3>
                    <p className="mt-2 flex-grow text-sm leading-relaxed text-zinc-400">{channel.description}</p>
                    <ul className="mt-5 space-y-2.5">
                      {channel.lines.map((line) => (
                        <li key={line.label}>
                          {line.href ? (
                            <a
                              href={line.href}
                              className={`flex items-center gap-2.5 text-sm text-zinc-300 transition-colors hover:${channel.color.replace("text-", "text-")}`}
                            >
                              <line.icon className={`h-4 w-4 shrink-0 ${channel.color}`} />
                              {line.label}
                            </a>
                          ) : (
                            <span className="flex items-center gap-2.5 text-sm text-zinc-300">
                              <line.icon className={`h-4 w-4 shrink-0 ${channel.color}`} />
                              {line.label}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario + compromisos */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20 mask-fade-edges" aria-hidden />
        <div className="container relative z-10 mx-auto">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <SectionHeading
                index="01"
                align="left"
                eyebrow="Escríbenos"
                title={
                  <>
                    Tu mensaje <span className="text-cyan-300">importa</span>
                  </>
                }
                description="Cuéntanos tu historia, tus dudas o tus ideas. Este dispositivo está 100% orientado a la experiencia del usuario, y tu punto de vista nos hace mejores."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="flex h-full flex-col gap-5">
                {promises.map((promise) => (
                  <div key={promise.title} className="glass flex items-start gap-5 rounded-3xl p-7">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10">
                      <promise.icon className="h-6 w-6 text-amber-300" />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">{promise.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{promise.description}</p>
                    </div>
                  </div>
                ))}

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ruedatec?igsh=MTY0bWJub3Y0cXB6Yg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group gradient-border relative mt-auto overflow-hidden rounded-3xl"
                >
                  <div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-night-900 to-night-950 p-7">
                    <div className="flex items-center gap-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400/20 to-fuchsia-500/20">
                        <Instagram className="h-6 w-6 text-white" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white">@ruedatec</h3>
                        <p className="text-sm text-zinc-400">Síguenos para ver el avance del prototipo</p>
                      </div>
                    </div>
                    <Send className="h-5 w-5 text-zinc-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-amber-300" />
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
