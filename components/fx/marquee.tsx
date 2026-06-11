import type { ReactNode } from "react"

/**
 * Marquesina infinita: duplica el contenido para lograr un loop perfecto.
 */
export default function Marquee({
  children,
  slow = false,
  className = "",
}: {
  children: ReactNode
  slow?: boolean
  className?: string
}) {
  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max shrink-0 items-center ${slow ? "animate-marquee-slow" : "animate-marquee"}`}
      >
        {children}
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
