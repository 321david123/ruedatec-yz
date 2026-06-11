import Reveal from "./reveal"

/**
 * Encabezado de sección editorial: índice numerado + regla + eyebrow,
 * seguido del título display y una descripción opcional.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index?: string
  eyebrow: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
}) {
  const centered = align === "center"
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div
        className={`flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-400 ${
          centered ? "justify-center" : ""
        }`}
      >
        {index && <span className="font-display text-zinc-600">{index}</span>}
        <span className="h-px w-12 bg-gradient-to-r from-amber-400/70 to-transparent" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-relaxed text-zinc-400 ${centered ? "" : "max-w-2xl"}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
