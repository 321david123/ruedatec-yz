/**
 * Fondo de auroras animadas: blobs de luz ámbar/cian sobre rejilla técnica,
 * con capa de ruido fílmico para textura.
 *
 * En teléfonos los blobs son degradados estáticos: cada blob con blur animado
 * es una capa de GPU gigante, y varias juntas pueden agotar la memoria del
 * navegador móvil (Safari en iPhone recarga la página cuando eso pasa).
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
      <div className="absolute -top-1/4 left-1/2 hidden h-[60rem] w-[60rem] -translate-x-1/2 animate-aurora-a rounded-full bg-amber-500/[0.13] blur-[140px] md:block" />
      <div className="absolute -left-40 top-1/4 hidden h-[36rem] w-[36rem] animate-aurora-b rounded-full bg-cyan-500/[0.10] blur-[120px] md:block" />
      <div className="absolute -right-40 top-1/2 hidden h-[32rem] w-[32rem] animate-aurora-a rounded-full bg-violet-600/[0.08] blur-[120px] md:block" />
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: [
            "radial-gradient(40rem circle at 50% 15%, rgba(245, 158, 11, 0.13), transparent 65%)",
            "radial-gradient(22rem circle at 0% 45%, rgba(6, 182, 212, 0.10), transparent 70%)",
            "radial-gradient(20rem circle at 100% 75%, rgba(124, 58, 237, 0.08), transparent 70%)",
          ].join(", "),
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-[0.05]" />
    </div>
  )
}
