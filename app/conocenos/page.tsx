"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useSpring } from "framer-motion"
import {
  Trophy,
  Award,
  Target,
  Users,
  Lightbulb,
  Rocket,
  ArrowRight,
  GraduationCap,
  Wrench,
  Quote,
} from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Aurora from "@/components/fx/aurora"
import Reveal from "@/components/fx/reveal"
import SpotlightCard from "@/components/fx/spotlight-card"
import SectionHeading from "@/components/fx/section-heading"
import Counter from "@/components/fx/counter"

const timeline = [
  {
    icon: GraduationCap,
    tag: "El origen",
    title: "Un proyecto escolar con propósito",
    description:
      "RuedaTec nace de una necesidad real: crear soluciones accesibles y sostenibles para la movilidad. Lo que comenzó en un aula se convirtió en una misión.",
    accent: "text-cyan-300",
    border: "border-cyan-400/40",
  },
  {
    icon: Wrench,
    tag: "La construcción",
    title: "Del diseño 3D al prototipo funcional",
    description:
      "Modelamos todo en Blender, construimos el sistema modular y desarrollamos la app en Flutter. Cada iteración, probada con usuarios reales en la calle.",
    accent: "text-violet-300",
    border: "border-violet-400/40",
  },
  {
    icon: Award,
    tag: "Reconocimiento estatal",
    title: "Campeones de la competencia estatal",
    description:
      "Fuimos reconocidos por el impacto social del proyecto, su viabilidad comercial y el potencial de escalabilidad.",
    accent: "text-emerald-300",
    border: "border-emerald-400/40",
  },
  {
    icon: Rocket,
    tag: "Hackathon",
    title: "Primer lugar en innovación tecnológica",
    description:
      "Nuestra solución integral de movilidad inteligente destacó por la mejor implementación de IoT y sostenibilidad.",
    accent: "text-sky-300",
    border: "border-sky-400/40",
  },
  {
    icon: Trophy,
    tag: "2023 · Internacional",
    title: "Invention Convention Americas",
    description:
      "Primer lugar en la categoría de tecnología de asistencia. El reconocimiento internacional que confirmó que vamos por buen camino.",
    accent: "text-amber-300",
    border: "border-amber-400/40",
  },
]

const values = [
  {
    icon: Lightbulb,
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas formas de mejorar la vida de las personas a través de la tecnología.",
    color: "text-amber-300",
    bg: "bg-amber-400/10",
    spot: "rgba(251, 191, 36, 0.10)",
  },
  {
    icon: Users,
    title: "Inclusión",
    description:
      "Diseñamos pensando en la diversidad y la accesibilidad para crear un mundo más equitativo.",
    color: "text-emerald-300",
    bg: "bg-emerald-400/10",
    spot: "rgba(52, 211, 153, 0.10)",
  },
  {
    icon: Target,
    title: "Excelencia",
    description:
      "Nos comprometemos con la calidad en cada detalle, desde el diseño hasta la experiencia del usuario.",
    color: "text-cyan-300",
    bg: "bg-cyan-400/10",
    spot: "rgba(34, 211, 238, 0.10)",
  },
  {
    icon: Rocket,
    title: "Impacto",
    description:
      "Medimos nuestro éxito por el impacto positivo que generamos en la vida de las personas.",
    color: "text-violet-300",
    bg: "bg-violet-400/10",
    spot: "rgba(167, 139, 250, 0.10)",
  },
]

export default function ConocenosPage() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.75", "end 0.6"],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26 })

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
              El equipo
              <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400/70" />
            </p>
            <h1 className="font-display mx-auto mt-7 max-w-4xl text-balance text-5xl font-bold leading-[0.98] tracking-tight text-white md:text-7xl">
              Las personas detrás de <span className="text-amber-300">RuedaTec</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Un equipo multidisciplinario apasionado por la innovación y la inclusión,
              comprometido con transformar la movilidad a través de la tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misión */}
      <section className="px-6 py-16">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Nuestra misión
              </span>
              <h2 className="font-display mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                La movilidad es un <span className="text-cyan-300">derecho</span>, no un
                privilegio
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-400">
                Democratizamos el acceso a la tecnología de asistencia convirtiendo sillas de
                ruedas manuales en sistemas eléctricos inteligentes y sostenibles.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Trabajamos cada día para eliminar las barreras de movilidad y crear un mundo más
                inclusivo, donde la independencia y la libertad de movimiento estén al alcance de
                todos.
              </p>

              <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                {[
                  { value: 3, suffix: "", label: "premios ganados" },
                  { value: 2, suffix: "", label: "modelos en desarrollo" },
                  { value: 100, suffix: " %", label: "orientado al usuario" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-night-950/90 px-4 py-5 text-center">
                    <p className="font-display text-2xl font-bold text-white md:text-3xl">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-1 text-xs leading-snug text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div className="relative">
                <div className="gradient-border overflow-hidden rounded-[2rem]">
                  <Image
                    src="/ruedatec-team-with-user.jpeg"
                    alt="Equipo RuedaTec con un usuario real durante pruebas de campo"
                    width={640}
                    height={480}
                    className="h-auto w-full rounded-[2rem] object-cover"
                  />
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                  className="glass absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl px-5 py-4 md:-left-10"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-400/15">
                    <Trophy className="h-5 w-5 text-amber-300" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-white">1er lugar</p>
                    <p className="text-xs text-zinc-400">Invention Convention Americas 2023</p>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-20 mask-fade-edges" aria-hidden />
        <div className="container relative z-10 mx-auto">
          <SectionHeading
            index="01"
            eyebrow="La historia"
            title={
              <>
                Del aula al <span className="text-amber-300">podio internacional</span>
              </>
            }
            description="Lo que comenzó como un proyecto universitario hoy es una misión que acumula reconocimientos."
          />

          <div ref={timelineRef} className="relative mx-auto mt-20 max-w-3xl">
            {/* Línea vertical: se dibuja conforme avanzas */}
            <div className="absolute bottom-0 left-6 top-0 w-px bg-white/10 md:left-1/2" aria-hidden />
            <motion.div
              style={{ scaleY: lineProgress }}
              className="absolute bottom-0 left-6 top-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-violet-400 to-amber-400 md:left-1/2"
              aria-hidden
            />

            <div className="flex flex-col gap-14">
              {timeline.map((item, i) => {
                const isLeft = i % 2 === 0
                return (
                  <Reveal key={item.title} delay={0.05 * i} direction={isLeft ? "left" : "right"}>
                    <div
                      className={`relative flex items-start gap-6 pl-16 md:w-1/2 md:pl-0 ${
                        isLeft
                          ? "md:pr-14 md:text-right"
                          : "md:ml-auto md:pl-14"
                      }`}
                    >
                      {/* Nodo */}
                      <div
                        className={`absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border bg-night-950 ${item.border} md:left-auto ${
                          isLeft ? "md:-right-6" : "md:-left-6"
                        }`}
                      >
                        <item.icon className={`h-5 w-5 ${item.accent}`} />
                      </div>

                      <div className={isLeft ? "md:flex md:flex-col md:items-end" : ""}>
                        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${item.accent}`}>
                          {item.tag}
                        </span>
                        <h3 className="font-display mt-2 text-xl font-bold text-white md:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>

          {/* Foto de premiación */}
          <Reveal direction="scale" className="mx-auto mt-20 max-w-3xl">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10">
              <Image
                src="https://davidmtz.me//assets/img/43534.jpeg"
                alt="Equipo RuedaTec en ceremonia de premiación"
                width={900}
                height={560}
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 right-6 text-sm font-medium text-white md:text-base">
                El equipo en la ceremonia de premiación — cada reconocimiento reafirma nuestro
                compromiso de seguir innovando.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="relative border-t border-white/10 px-6 py-28">
        <div className="container mx-auto">
          <SectionHeading
            index="02"
            eyebrow="Nuestros valores"
            title={
              <>
                Lo que nos <span className="text-cyan-300">mueve</span>
              </>
            }
            description="Los principios que guían nuestro trabajo y nos impulsan a crear soluciones que marquen la diferencia."
          />

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <SpotlightCard className="h-full" spotColor={value.spot}>
                  <div className="flex h-full flex-col p-7">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${value.bg}`}>
                      <value.icon className={`h-6 w-6 ${value.color}`} />
                    </div>
                    <h3 className="font-display mt-5 text-xl font-bold text-white">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{value.description}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cita + CTA */}
      <section className="relative px-6 pb-28 pt-8">
        <div className="container mx-auto">
          <Reveal direction="scale">
            <div className="gradient-border relative overflow-hidden rounded-[2.5rem]">
              <div className="relative rounded-[2.5rem] bg-night-950 px-8 py-16 text-center md:px-16 md:py-24">
                <Aurora intensity="low" />
                <div className="relative z-10 mx-auto max-w-3xl">
                  <Quote className="mx-auto h-10 w-10 text-amber-400/50" />
                  <blockquote className="font-display mt-6 text-balance text-2xl font-bold leading-snug text-white md:text-4xl">
                    Con cada usuario que mejora su calidad de vida, reafirmamos nuestro
                    compromiso con el <span className="text-amber-300">futuro de la movilidad</span>.
                  </blockquote>
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                      href="/modelos"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_45px_rgba(251,191,36,0.5)]"
                    >
                      Conoce los modelos
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contactanos"
                      className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      Escríbenos
                    </Link>
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
