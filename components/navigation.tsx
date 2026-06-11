"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"

const links = [
  { href: "/", label: "Inicio" },
  { href: "/modelos", label: "Modelos" },
  { href: "/conocenos", label: "Conócenos" },
  { href: "/contactanos", label: "Contáctanos" },
]

const SUPPORT_MAILTO =
  "mailto:yo@davidmtz.me?subject=Apoyo%20a%20RuedaTec&body=Hola,%20me%20interesa%20apoyar%20el%20proyecto%20RuedaTec."

export default function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* Barra de progreso de lectura */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-amber-400 via-orange-400 to-cyan-400"
      />

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "glass shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo de RuedaTec"
              width={36}
              height={36}
              className="h-9 w-9 rounded-[10px] ring-1 ring-white/10 transition-transform duration-700 group-hover:rotate-90"
            />
            <span className="font-display text-xl font-bold tracking-tight text-white">
              Rueda<span className="text-amber-400">Tec</span>
            </span>
          </Link>

          {/* Navegación escritorio */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white/10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <a
              href={SUPPORT_MAILTO}
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-2.5 text-sm font-semibold text-black transition-all duration-300 hover:shadow-[0_0_28px_rgba(251,191,36,0.45)]"
            >
              Apoya el proyecto
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.nav>
      </header>

      {/* Menú móvil a pantalla completa */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-black/90 px-8 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-display block py-3 text-4xl font-bold tracking-tight transition-colors ${
                      pathname === link.href ? "text-gradient-solar" : "text-white hover:text-amber-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10"
            >
              <a
                href={SUPPORT_MAILTO}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-7 py-3.5 text-base font-semibold text-black"
              >
                Apoya el proyecto <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-8 text-sm text-zinc-500">
                Próximamente: ChatBot · Prototipo interactivo
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
