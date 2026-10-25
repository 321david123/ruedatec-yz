"use client"

import { useEffect, useRef } from "react"
import { useInView, useMotionValue, useSpring } from "framer-motion"

const format = (n: number) => Intl.NumberFormat("es-MX").format(Math.round(n))

/**
 * Número que cuenta de 0 al valor objetivo cuando entra en pantalla.
 * El servidor entrega el valor final, para que se lea bien aun sin JavaScript.
 */
export default function Counter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-40px" })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 })

  useEffect(() => {
    if (inView) motionValue.set(value)
  }, [inView, value, motionValue])

  useEffect(() => {
    if (ref.current) ref.current.textContent = `${prefix}${format(spring.get())}${suffix}`
    const unsubscribe = spring.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${format(latest)}${suffix}`
      }
    })
    return unsubscribe
  }, [spring, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(value)}${suffix}`}
    </span>
  )
}
