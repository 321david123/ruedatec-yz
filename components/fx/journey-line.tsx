"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

/**
 * Línea de recorrido: un trazo SVG que se va dibujando conforme el usuario
 * hace scroll, serpenteando entre las secciones para hilar la narrativa.
 * El punto brillante marca el frente del trazo (dónde "va" la historia).
 */
export default function JourneyLine() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.75"],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.0001,
  })
  // El cometa viaja al frente del trazo dibujado
  const dashOffset = useTransform(progress, (v) => -v)
  const cometOpacity = useTransform(progress, [0, 0.015, 0.985, 1], [0, 1, 1, 0])

  // Coordenadas en % del contenedor: serpentea de lado a lado
  const d =
    "M 50 0 C 70 3.5, 90 5, 90 9 C 90 13.5, 14 15, 10 20 C 6.5 24.5, 88 28, 90 33 C 91.5 37.5, 14 40, 10 45 C 6.5 49.5, 88 52, 90 57 C 91.5 61.5, 14 65, 10 70 C 6.5 74.5, 88 77, 90 82 C 91.5 86.5, 60 91, 50 100"

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="journey-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="35%" stopColor="#f472b6" />
            <stop offset="70%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        {/* Ruta completa, apenas visible: el camino por recorrer */}
        <path
          d={d}
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />

        {/* Halo del trazo dibujado */}
        <motion.path
          d={d}
          stroke="url(#journey-gradient)"
          strokeWidth="7"
          strokeOpacity="0.16"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: progress }}
        />

        {/* Trazo principal que se dibuja con el scroll */}
        <motion.path
          d={d}
          stroke="url(#journey-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength: progress }}
        />

        {/* Cometa: el punto que encabeza el trazo */}
        <motion.path
          d={d}
          pathLength={1}
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="0.001 1"
          style={{ strokeDashoffset: dashOffset, opacity: cometOpacity }}
        />
      </svg>
    </div>
  )
}
