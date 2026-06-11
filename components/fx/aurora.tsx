/**
 * Fondo de auroras animadas: blobs de luz ámbar/cian sobre rejilla técnica,
 * con capa de ruido fílmico para textura.
 */
export default function Aurora({
  className = "",
  intensity = "high",
}: {
  className?: string
  intensity?: "high" | "low"
}) {
  const opacity = intensity === "high" ? "" : "opacity-50"
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity} ${className}`} aria-hidden>
      <div className="absolute inset-0 bg-grid mask-fade-edges" />
      <div className="absolute -top-1/4 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 animate-aurora-a rounded-full bg-amber-500/[0.13] blur-[140px]" />
      <div className="absolute -left-40 top-1/4 h-[36rem] w-[36rem] animate-aurora-b rounded-full bg-cyan-500/[0.10] blur-[120px]" />
      <div className="absolute -right-40 top-1/2 h-[32rem] w-[32rem] animate-aurora-a rounded-full bg-violet-600/[0.08] blur-[120px]" />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
    </div>
  )
}
