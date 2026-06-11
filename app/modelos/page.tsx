"use client"

import type React from "react"
import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Battery,
  Zap,
  Sun,
  Smartphone,
  Check,
  X,
  ShieldCheck,
} from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Aurora from "@/components/fx/aurora"
import Reveal from "@/components/fx/reveal"
import SpotlightCard from "@/components/fx/spotlight-card"
import SectionHeading from "@/components/fx/section-heading"
import { joinWaitlist } from "./waitlist-action"

const models = [
  {
    id: "modelo-basico",
    name: "RuedaTec Básico",
    tagline: "Movilidad accesible para todos",
    description:
      "Convierte cualquier silla de ruedas manual en eléctrica con nuestro sistema modular. Batería de larga duración, control intuitivo y diseño ergonómico: la puerta de entrada a tu independencia.",
    price: "5,999",
    features: [
      "Batería con 8 horas de autonomía",
      "Velocidad máxima de 6 km/h",
      "Aplicación móvil básica",
      "Instalación sencilla",
      "Garantía de 1 año",
    ],
    image: "/ruedatec-basico-model.png",
    imageBg: "bg-gradient-to-br from-zinc-200 to-zinc-400",
    accent: "cyan" as const,
  },
  {
    id: "modelo-solar",
    name: "RuedaTec Solar",
    tagline: "Independencia sin límites",
    description:
      "Nuestro modelo premium incluye paneles solares integrados para autonomía extendida. Mayor potencia, sensores inteligentes y control avanzado mediante la app: energía del sol, libertad sin horarios.",
    price: "9,999",
    features: [
      "Paneles solares integrados",
      "Batería con 12 horas de autonomía",
      "Velocidad máxima de 8 km/h",
      "Aplicación móvil avanzada",
      "Sensores inteligentes",
      "Garantía de 2 años",
    ],
    image: "/ruedatec-solar-model.jpeg",
    imageBg: "bg-zinc-800/80",
    accent: "amber" as const,
  },
]

const comparison: { label: string; basico: string | boolean; solar: string | boolean }[] = [
  { label: "Autonomía de batería", basico: "8 horas", solar: "12 horas" },
  { label: "Velocidad máxima", basico: "6 km/h", solar: "8 km/h" },
  { label: "Paneles solares integrados", basico: false, solar: true },
  { label: "Aplicación móvil", basico: "Básica", solar: "Avanzada" },
  { label: "Sensores inteligentes", basico: false, solar: true },
  { label: "Instalación sencilla", basico: true, solar: true },
  { label: "Garantía", basico: "1 año", solar: "2 años" },
  { label: "Precio", basico: "MXN $5,999", solar: "MXN $9,999" },
]

const highlights = [
  {
    icon: Battery,
    title: "Batería de larga duración",
    description: "Baterías de litio con hasta 12 horas de autonomía con una sola carga.",
  },
  {
    icon: Zap,
    title: "Motor potente",
    description: "Alta eficiencia para superar pendientes y terrenos difíciles sin esfuerzo.",
  },
  {
    icon: Sun,
    title: "Energía solar",
    description: "Paneles que extienden la autonomía y cargan mientras te desplazas.",
  },
  {
    icon: Smartphone,
    title: "Control inteligente",
    description: "Velocidad, dirección y funciones especiales desde la aplicación móvil.",
  },
]

function WaitlistForm({ model, accent = "amber" }: { model: string; accent?: "amber" | "cyan" }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("sending")
    const formData = new FormData(e.currentTarget)
    try {
      await joinWaitlist(formData)
      setStatus("success")
      formRef.current?.reset()
      setTimeout(() => setStatus("idle"), 4000)
    } catch {
      setStatus("error")
    }
  }

  const buttonClasses =
    accent === "amber"
      ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
      : "bg-gradient-to-r from-cyan-400 to-sky-500 text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="h-12 flex-grow rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm text-white placeholder:text-zinc-500 focus:border-amber-400/60 focus:outline-none focus:ring-2 focus:ring-amber-400/20"
        />
        <input type="hidden" name="model" value={model} />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`inline-flex h-12 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-all duration-300 disabled:opacity-50 ${buttonClasses}`}
        >
          {status === "sending" ? "Enviando..." : "Lista de espera"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 flex items-center gap-1.5 text-sm text-emerald-400"
        >
          <Check className="h-4 w-4" /> ¡Te has unido a la lista de espera! Revisa tu correo.
        </motion.p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400">Error al procesar la suscripción. Inténtalo de nuevo.</p>
      )}
    </div>
  )
}

export default function ModelosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <section className="relative px-6 pb-16 pt-44">
        <Aurora />
        <div className="container relative z-10 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="inline-flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300 md:text-xs">
              <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400/70" />
              Sistemas de conversión
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/70" />
            </p>
            <h1 className="font-display mx-auto mt-7 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
              Elige tu camino hacia la <span className="text-amber-300">libertad</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Dos sistemas, una misma misión: convertir tu silla de ruedas manual en eléctrica,
              inteligente y tuya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcases de modelos */}
      <section className="px-6 py-16">
        <div className="container mx-auto flex flex-col gap-24">
          {models.map((model, index) => {
            const isAmber = model.accent === "amber"
            const reversed = index % 2 === 1
            return (
              <div
                key={model.id}
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${reversed ? "" : ""}`}
              >
                <Reveal direction={reversed ? "right" : "left"} className={reversed ? "lg:order-2" : ""}>
                  <div
                    className={`relative overflow-hidden rounded-[2rem] border border-white/10 ${model.imageBg} p-8 md:p-12`}
                  >
                    <div
                      className={`pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-[100px] ${
                        isAmber ? "bg-amber-400/30" : "bg-cyan-400/20"
                      }`}
                      aria-hidden
                    />
                    <Image
                      src={model.image}
                      alt={`${model.name} — sistema de conversión para silla de ruedas`}
                      width={640}
                      height={440}
                      className="relative z-10 h-72 w-full object-contain transition-transform duration-700 hover:scale-105 md:h-96"
                    />
                  </div>
                </Reveal>

                <Reveal direction={reversed ? "left" : "right"} delay={0.1} className={reversed ? "lg:order-1" : ""}>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                      isAmber ? "text-amber-300" : "text-cyan-300"
                    }`}
                  >
                    {model.tagline}
                  </span>
                  <h2 className="font-display mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                    {model.name}
                  </h2>
                  <p className="font-display mt-4 text-3xl font-bold">
                    <span className={isAmber ? "text-amber-300" : "text-cyan-300"}>
                      MXN ${model.price}
                    </span>
                  </p>
                  <p className="mt-5 leading-relaxed text-zinc-400">{model.description}</p>

                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {model.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${isAmber ? "text-amber-400" : "text-cyan-400"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-9">
                    <WaitlistForm model={model.name} accent={model.accent} />
                  </div>
                </Reveal>
              </div>
            )
          })}
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="container mx-auto">
          <SectionHeading
            index="01"
            eyebrow="Frente a frente"
            title={
              <>
                Compara los <span className="text-amber-300">modelos</span>
              </>
            }
          />

          <Reveal className="mt-14" direction="scale">
            <div className="glass mx-auto max-w-4xl overflow-hidden rounded-3xl">
              <div className="grid grid-cols-3 border-b border-white/10 bg-white/[0.03]">
                <div className="p-5 text-sm font-semibold uppercase tracking-wider text-zinc-500">
                  Característica
                </div>
                <div className="font-display p-5 text-center text-base font-bold text-cyan-300">Básico</div>
                <div className="font-display flex items-center justify-center gap-1.5 p-5 text-center text-base font-bold text-amber-300">
                  <Sun className="h-4 w-4" /> Solar
                </div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-3 items-center ${
                    i % 2 === 1 ? "bg-white/[0.02]" : ""
                  } ${i === comparison.length - 1 ? "border-t border-amber-400/20 bg-amber-400/[0.04]" : ""}`}
                >
                  <div className="p-5 text-sm text-zinc-300">{row.label}</div>
                  <div className="p-5 text-center text-sm font-medium text-white">
                    {typeof row.basico === "boolean" ? (
                      row.basico ? (
                        <Check className="mx-auto h-5 w-5 text-cyan-400" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-zinc-600" />
                      )
                    ) : (
                      row.basico
                    )}
                  </div>
                  <div className="p-5 text-center text-sm font-medium text-white">
                    {typeof row.solar === "boolean" ? (
                      row.solar ? (
                        <Check className="mx-auto h-5 w-5 text-amber-400" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-zinc-600" />
                      )
                    ) : (
                      row.solar
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Características destacadas */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20 mask-fade-edges" aria-hidden />
        <div className="container relative z-10 mx-auto">
          <SectionHeading
            index="02"
            eyebrow="Tecnología"
            title={
              <>
                Diseñado para <span className="text-cyan-300">tu día a día</span>
              </>
            }
            description="Comodidad, eficiencia y autonomía en cada componente del sistema."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <SpotlightCard className="h-full">
                  <div className="flex h-full flex-col p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10">
                      <item.icon className="h-6 w-6 text-amber-300" />
                    </div>
                    <h3 className="font-display mt-5 text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA lista de espera */}
      <section className="px-6 pb-28 pt-8">
        <div className="container mx-auto">
          <Reveal direction="scale">
            <div className="gradient-border relative overflow-hidden rounded-[2.5rem]">
              <div className="relative rounded-[2.5rem] bg-night-950 px-8 py-16 md:px-16 md:py-20">
                <Aurora intensity="low" />
                <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400/10">
                    <ShieldCheck className="h-7 w-7 text-amber-300" />
                  </span>
                  <h2 className="font-display mt-6 text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
                    Sé de los primeros en <span className="text-amber-300">rodar</span>
                  </h2>
                  <p className="mt-4 max-w-lg leading-relaxed text-zinc-400">
                    Únete a la lista de espera y te avisaremos en cuanto haya disponibilidad.
                    Sin spam, solo libertad.
                  </p>
                  <div className="mt-8 flex w-full justify-center">
                    <WaitlistForm model="General" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  )
}
