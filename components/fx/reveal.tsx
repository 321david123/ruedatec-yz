"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useInView, type Variants } from "framer-motion"

// El estado oculto es instantáneo: solo se aplica a contenido fuera de pantalla.
const hide = { duration: 0 }

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 32, transition: hide },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40, transition: hide },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40, transition: hide },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92, transition: hide },
    visible: { opacity: 1, scale: 1 },
  },
}

/**
 * Aparece con animación al entrar en pantalla.
 *
 * El HTML del servidor se entrega visible: si el JavaScript tarda o falla
 * (datos móviles lentos, navegadores viejos) el contenido se ve igual. Ya en
 * el cliente, solo se oculta lo que sigue debajo de la pantalla, para
 * animarlo cuando el usuario llegue a él.
 */
export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: {
  children: ReactNode
  delay?: number
  direction?: "up" | "left" | "right" | "scale"
  className?: string
  once?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: "-60px" })
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (el && el.getBoundingClientRect().top > window.innerHeight) setArmed(true)
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={armed && !inView ? "hidden" : "visible"}
      variants={variants[direction]}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
