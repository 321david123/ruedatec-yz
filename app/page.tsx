"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Zap,
  Sun,
  Smartphone,
  Box,
  HeartHandshake,
  Trophy,
  Rocket,
  Award,
  Quote,
  ChevronDown,
} from "lucide-react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Aurora from "@/components/fx/aurora"
import Reveal from "@/components/fx/reveal"
import SpotlightCard from "@/components/fx/spotlight-card"
import Marquee from "@/components/fx/marquee"
import Counter from "@/components/fx/counter"
import JourneyLine from "@/components/fx/journey-line"
import SectionHeading from "@/components/fx/section-heading"

const SUPPORT_MAILTO =
  "mailto:yo@davidmtz.me?subject=Apoyo%20a%20RuedaTec&body=Hola,%20me%20interesa%20apoyar%20el%20proyecto%20RuedaTec."

const stats = [
  { value: 12, suffix: " h", label: "de autonomía con carga solar" },
  { value: 8, suffix: " km/h", label: "de velocidad máxima" },
  { value: 100, suffix: " %", label: "energía limpia y renovable" },
  { value: 3, suffix: "", label: "premios de innovación" },
]

const marqueeWords = [
  "Energía solar",
  "Sistema modular",
  "App inteligente",
  "Diseño ergonómico",
  "Hecho en México",
  "Inclusión real",
  "Movilidad eléctrica",
]

const processSteps = [
  {
    number: "01",
    title: "Diseño 3D en Blender",
    description:
      "Antes de construir, modelamos cada pieza en 3D. Así validamos la idea, anticipamos problemas y arrancamos la construcción con una base sólida.",
  },
  {
    number: "02",
    title: "Sistema modular",
    description:
      "Desarrollamos un módulo eléctrico que se acopla a cualquier silla de ruedas manual, sin reemplazarla: tu silla, ahora eléctrica.",
  },
  {
    number: "03",
    title: "App con Flutter",
    description:
      "Creamos la aplicación que controla velocidad, dirección y funciones especiales. La clave para interactuar con tu silla de forma inteligente.",
  },
  {
    number: "04",
    title: "Pruebas con usuarios reales",
    description:
      "Salimos a la calle. Cada iteración se valida con personas reales, porque el dispositivo está 100% orientado a la experiencia del usuario.",
  },
]

const achievements = [
  {
    icon: Trophy,
    badge: "2023 · Internacional",
    title: "Invention Convention Americas",
    description:
      "Primer lugar en la categoría de tecnología de asistencia. Reconocimiento internacional a nuestra innovación en movilidad sostenible.",
    accent: "text-amber-300",
    glow: "rgba(251, 191, 36, 0.12)",
  },
  {
    icon: Rocket,
    badge: "Hackathon",
    title: "Ganadores de Hackathon",
    description:
      "Primer lugar en innovación tecnológica, destacando la mejor implementación de IoT y sostenibilidad en una solución integral.",
    accent: "text-cyan-300",
    glow: "rgba(34, 211, 238, 0.12)",
  },
  {
    icon: Award,
    badge: "Estatal",
    title: "Campeones Estatales",
    description:
      "Reconocidos por el impacto social del proyecto, su viabilidad comercial y el potencial de escalabilidad a nivel nacional.",
    accent: "text-violet-300",
    glow: "rgba(167, 139, 250, 0.12)",
  },
]

const testimonials = [
  {
    quote:
      "RuedaTec, la solución que cambia vidas. Convierte sillas de ruedas manuales en eléctricas y sostenibles mediante su sistema modular. Libertad, independencia y tecnología al alcance de todos.",
    author: "Miguel",
    role: "Usuario de pruebas",
  },
  {
    quote:
      "Movilidad sostenible, inclusión imparable. Descubre RuedaTec y haz que cada recorrido sea una experiencia llena de libertad.",
    author: "Jesús",
    role: "Colaborador",
  },
  {
    quote:
      "¡Cambiemos juntos el rumbo hacia la inclusión! RuedaTec, el aliado que promueve la igualdad y la autonomía en cada movimiento.",
    author: "El equipo",
    role: "RuedaTec",
  },
]

export default function Home() {
  const { scrollY } = useScroll()
  const heroY = useTransform(scrollY, [0, 600], [0, 120])
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0])

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navigation />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center px-6 pt-28">
        <Aurora />

        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="container relative z-10 mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300 md:text-xs"
            >
              <Trophy className="h-4 w-4" />
              Ganadores · Invention Convention Americas 2023
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display mt-7 text-balance text-6xl font-bold leading-[0.95] tracking-tight text-white md:text-8xl lg:text-9xl"
            >
              La movilidad,
              <br />
              <span className="text-gradient-solar">reinventada.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-2xl text-balance text-lg leading-relaxed text-zinc-400 md:text-xl"
            >
              Convertimos cualquier silla de ruedas manual en un sistema{" "}
              <span className="font-semibold text-white">eléctrico</span>,{" "}
              <span className="font-semibold text-amber-300">solar</span> e{" "}
              <span className="font-semibold text-cyan-300">inteligente</span>. Independencia
              real a través de la innovación, hecho en México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/modelos"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_45px_rgba(251,191,36,0.5)]"
              >
                Descubre los modelos
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={SUPPORT_MAILTO}
                className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
              >
                Apoya el proyecto
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </motion.div>

            {/* Estadísticas */}
            <motion.dl
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-20 flex flex-wrap gap-x-12 gap-y-8"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col border-l border-white/15 pl-5">
                  <dd className="font-display text-3xl font-bold text-white md:text-4xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-1 max-w-[10rem] text-xs leading-snug text-zinc-500">{stat.label}</dt>
                </div>
              ))}
            </motion.dl>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <ChevronDown className="h-6 w-6 text-zinc-600" />
        </motion.div>
      </section>

      {/* ── Marquesina ─────────────────────────────────────── */}
      <section className="border-y border-white/10 py-6">
        <Marquee>
          {marqueeWords.map((word) => (
            <span key={word} className="flex items-center">
              <span className="font-display mx-6 text-xl font-semibold uppercase tracking-[0.15em] text-zinc-500 md:text-2xl">
                {word}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400/60" />
            </span>
          ))}
        </Marquee>
      </section>

      {/* ── Recorrido: la línea hila las secciones ─────────── */}
      <div className="relative">
        <JourneyLine />

        {/* ── Bento: qué es RuedaTec ───────────────────────── */}
        <section className="relative px-6 py-28 md:py-36">
          <div className="container mx-auto">
            <SectionHeading
              index="01"
              eyebrow="El sistema"
              title={
                <>
                  Tu silla. <span className="text-cyan-300">Ahora eléctrica.</span>
                </>
              }
              description="No reemplazamos tu silla de ruedas: la potenciamos. Un módulo que se acopla, se carga con el sol y se controla desde tu teléfono."
            />

            <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {/* Foto del equipo: tarjeta grande */}
              <Reveal className="md:col-span-2 md:row-span-2 lg:col-span-2" direction="scale">
                <div className="group relative h-full min-h-[26rem] overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src="/ruedatec-team-photo.jpeg"
                    alt="Equipo RuedaTec en pruebas de campo con un usuario real"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Pruebas de campo
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-bold text-white md:text-3xl">
                      Construido en la calle, con personas reales
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-300">
                      Cada decisión de diseño nace de escuchar a quienes usan el dispositivo todos
                      los días. Realmente nos importan.
                    </p>
                  </div>
                </div>
              </Reveal>

              {[
                {
                  icon: Zap,
                  title: "Eléctrico",
                  description: "Motores de alta eficiencia que superan pendientes y terrenos difíciles sin esfuerzo.",
                  color: "text-amber-300",
                  bg: "bg-amber-400/10",
                  spot: "rgba(251, 191, 36, 0.10)",
                  delay: 0.1,
                },
                {
                  icon: Sun,
                  title: "Solar",
                  description: "Paneles integrados que extienden la autonomía y cargan la batería mientras te desplazas.",
                  color: "text-orange-300",
                  bg: "bg-orange-400/10",
                  spot: "rgba(251, 146, 60, 0.10)",
                  delay: 0.2,
                },
                {
                  icon: Smartphone,
                  title: "App inteligente",
                  description: "Desarrollada con Flutter: velocidad, dirección y funciones especiales en tu bolsillo.",
                  color: "text-cyan-300",
                  bg: "bg-cyan-400/10",
                  spot: "rgba(34, 211, 238, 0.10)",
                  delay: 0.3,
                },
                {
                  icon: Box,
                  title: "Diseño 3D primero",
                  description: "Todo nace como un modelo en Blender: validamos antes de construir una sola pieza.",
                  color: "text-violet-300",
                  bg: "bg-violet-400/10",
                  spot: "rgba(167, 139, 250, 0.10)",
                  delay: 0.4,
                },
              ].map((feature) => (
                <Reveal key={feature.title} delay={feature.delay}>
                  <SpotlightCard className="h-full" spotColor={feature.spot}>
                    <div className="flex h-full flex-col p-7">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${feature.bg}`}>
                        <feature.icon className={`h-6 w-6 ${feature.color}`} />
                      </div>
                      <h3 className="font-display mt-5 text-xl font-bold text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-400">{feature.description}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}

              {/* Tarjeta de inclusión a lo ancho */}
              <Reveal className="md:col-span-3 lg:col-span-2" delay={0.2}>
                <SpotlightCard className="h-full" spotColor="rgba(52, 211, 153, 0.10)">
                  <div className="flex h-full flex-col justify-between gap-6 p-7 sm:flex-row sm:items-center">
                    <div className="flex items-start gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10">
                        <HeartHandshake className="h-6 w-6 text-emerald-300" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold text-white">Inclusivo por diseño</h3>
                        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
                          La movilidad es un derecho fundamental. Democratizamos la tecnología de
                          asistencia para que la independencia esté al alcance de todos.
                        </p>
                      </div>
                    </div>
                    <Link
                      href="/conocenos"
                      className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-emerald-400/50 hover:text-emerald-300"
                    >
                      Conócenos
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </SpotlightCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Proceso ──────────────────────────────────────── */}
        <section className="relative border-t border-white/10 px-6 py-28 md:py-36">
          <div className="pointer-events-none absolute inset-0 bg-dots opacity-20 mask-fade-edges" aria-hidden />
          <div className="container relative z-10 mx-auto">
            <div className="flex justify-end">
              <SectionHeading
                index="02"
                eyebrow="El proceso"
                title={
                  <>
                    De la idea <span className="text-amber-300">al pavimento</span>
                  </>
                }
                description="Así transformamos un proyecto escolar en tecnología que cambia vidas, paso a paso."
              />
            </div>

            <div className="mt-20 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {processSteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.12}>
                  <div className="group relative h-full">
                    <span className="font-display text-stroke block text-8xl font-bold leading-none transition-all duration-500 group-hover:text-stroke-solar lg:text-9xl">
                      {step.number}
                    </span>
                    <div className="relative -mt-6 ml-2 border-l border-white/15 pl-6 transition-colors duration-500 group-hover:border-amber-400/50">
                      <h3 className="font-display text-xl font-bold text-white">{step.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Modelos ──────────────────────────────────────── */}
        <section className="relative border-t border-white/10 px-6 py-28 md:py-36">
          <Aurora intensity="low" />
          <div className="container relative z-10 mx-auto">
            <SectionHeading
              index="03"
              eyebrow="Los modelos"
              title={
                <>
                  Dos caminos, <span className="text-amber-300">una libertad</span>
                </>
              }
              description="Elige el sistema de conversión que se adapte a tu vida. Ambos convierten tu silla manual en eléctrica."
            />

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {/* Modelo Básico */}
              <Reveal direction="left">
                <SpotlightCard className="h-full" spotColor="rgba(34, 211, 238, 0.08)">
                  <div className="flex h-full flex-col p-8 md:p-10">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                          Movilidad accesible
                        </span>
                        <h3 className="font-display mt-2 text-3xl font-bold text-white">RuedaTec Básico</h3>
                      </div>
                      <span className="font-display text-2xl font-bold text-white">
                        $5,999 <span className="text-sm font-medium text-zinc-500">MXN</span>
                      </span>
                    </div>

                    <div className="relative mt-8 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-200 to-zinc-400 p-6">
                      <Image
                        src="/ruedatec-basico-model.png"
                        alt="Render 3D del sistema RuedaTec Básico montado en una silla de ruedas"
                        width={600}
                        height={400}
                        className="h-56 w-full object-contain transition-transform duration-700 hover:scale-105 md:h-64"
                      />
                    </div>

                    <ul className="mt-8 grid flex-grow grid-cols-2 gap-3 text-sm text-zinc-300">
                      {["8 h de autonomía", "6 km/h máx.", "App móvil básica", "Garantía de 1 año"].map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/modelos"
                      className="group mt-8 inline-flex items-center gap-2 self-start rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-400/60 hover:text-cyan-300"
                    >
                      Ver modelo
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </SpotlightCard>
              </Reveal>

              {/* Modelo Solar */}
              <Reveal direction="right" delay={0.15}>
                <div className="gradient-border relative h-full rounded-3xl">
                  <SpotlightCard
                    className="h-full border-transparent bg-gradient-to-b from-amber-400/[0.06] to-transparent"
                    spotColor="rgba(251, 191, 36, 0.10)"
                  >
                    <div className="flex h-full flex-col p-8 md:p-10">
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                            <Sun className="h-3.5 w-3.5" /> El más avanzado
                          </span>
                          <h3 className="font-display mt-2 text-3xl font-bold text-white">RuedaTec Solar</h3>
                        </div>
                        <span className="font-display text-2xl font-bold text-amber-300">
                          $9,999 <span className="text-sm font-medium text-zinc-500">MXN</span>
                        </span>
                      </div>

                      <div className="relative mt-8 overflow-hidden rounded-2xl bg-zinc-800/80 p-6">
                        <Image
                          src="/ruedatec-solar-model.jpeg"
                          alt="Render 3D del sistema RuedaTec Solar con paneles solares integrados"
                          width={600}
                          height={400}
                          className="h-56 w-full object-cover transition-transform duration-700 hover:scale-105 md:h-64"
                        />
                      </div>

                      <ul className="mt-8 grid flex-grow grid-cols-2 gap-3 text-sm text-zinc-300">
                        {[
                          "Paneles solares",
                          "12 h de autonomía",
                          "8 km/h máx.",
                          "App avanzada",
                          "Sensores inteligentes",
                          "Garantía de 2 años",
                        ].map((f) => (
                          <li key={f} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/modelos"
                        className="group mt-8 inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                      >
                        Ver modelo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </SpotlightCard>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Logros ───────────────────────────────────────── */}
        <section className="relative border-t border-white/10 px-6 py-28 md:py-36">
          <div className="container mx-auto">
            <div className="flex justify-end">
              <SectionHeading
                index="04"
                eyebrow="Reconocimientos"
                title={
                  <>
                    Innovación <span className="text-amber-300">premiada</span>
                  </>
                }
                description="Cada reconocimiento nos impulsa a seguir creando soluciones con impacto real."
              />
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {achievements.map((achievement, i) => (
                <Reveal key={achievement.title} delay={i * 0.12}>
                  <SpotlightCard className="h-full" spotColor={achievement.glow}>
                    <div className="flex h-full flex-col p-8">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <achievement.icon className={`h-7 w-7 ${achievement.accent}`} />
                      </div>
                      <span className={`mt-6 text-xs font-semibold uppercase tracking-[0.2em] ${achievement.accent}`}>
                        {achievement.badge}
                      </span>
                      <h3 className="font-display mt-2 text-2xl font-bold text-white">{achievement.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{achievement.description}</p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonios ──────────────────────────────────── */}
        <section className="relative overflow-hidden border-t border-white/10 px-6 py-28 md:py-36">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[60rem] -translate-x-1/2 rounded-full bg-amber-500/[0.05] blur-[120px]" aria-hidden />
          <div className="container relative z-10 mx-auto">
            <SectionHeading
              index="05"
              eyebrow="Voces"
              align="center"
              title={
                <>
                  Lo que <span className="text-cyan-300">mueve</span> a la gente
                </>
              }
            />

            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, i) => (
                <Reveal key={testimonial.author} delay={i * 0.12} className={i === 1 ? "md:translate-y-8" : ""}>
                  <figure className="glass relative flex h-full flex-col rounded-3xl p-8">
                    <Quote className="h-8 w-8 text-amber-400/40" />
                    <blockquote className="mt-5 flex-grow text-base leading-relaxed text-zinc-300">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                      <span className="font-display flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm font-bold text-amber-300">
                        {testimonial.author.charAt(0)}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{testimonial.author}</p>
                        <p className="text-xs text-zinc-500">{testimonial.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ── CTA final ──────────────────────────────────────── */}
      <section className="relative px-6 pb-28 pt-12 md:pb-36">
        <div className="container mx-auto">
          <Reveal direction="scale">
            <div className="gradient-border relative overflow-hidden rounded-[2.5rem]">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-night-900 via-night-950 to-night-950 px-8 py-20 text-center md:px-16 md:py-28">
                <Aurora />

                <div className="relative z-10 mx-auto max-w-3xl">
                  <h2 className="font-display text-balance text-4xl font-bold leading-[1.02] tracking-tight text-white md:text-6xl">
                    ¿Listo para moverte <span className="text-gradient-solar">diferente</span>?
                  </h2>
                  <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
                    Únete a la lista de espera, apóyanos con tus ideas o simplemente escríbenos.
                    Cada movimiento cuenta.
                  </p>
                  <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                    <Link
                      href="/modelos"
                      className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-base font-semibold text-black transition-all duration-300 hover:shadow-[0_0_45px_rgba(251,191,36,0.5)]"
                    >
                      Únete a la lista de espera
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      href="/contactanos"
                      className="glass inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                    >
                      Hablemos
                      <ArrowUpRight className="h-5 w-5" />
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
