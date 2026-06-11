import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom opacity-40" aria-hidden />

      <div className="container relative z-10 mx-auto px-6 pb-10 pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca */}
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Logo de RuedaTec"
                width={36}
                height={36}
                className="h-9 w-9 rounded-[10px] ring-1 ring-white/10"
              />
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Rueda<span className="text-amber-400">Tec</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm leading-relaxed text-zinc-400">
              Convertimos sillas de ruedas manuales en sistemas eléctricos, solares e
              inteligentes. Independencia real con energía limpia, hecho en México.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link
                href="https://www.instagram.com/ruedatec?igsh=MTY0bWJub3Y0cXB6Yg=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de RuedaTec"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-all duration-300 hover:border-amber-400/50 hover:text-amber-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Navegación */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Explora
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/", label: "Inicio" },
                { href: "/modelos", label: "Modelos" },
                { href: "/conocenos", label: "Conócenos" },
                { href: "/contactanos", label: "Contáctanos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-zinc-300 transition-colors hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
              <li className="text-sm text-zinc-600">ChatBot — próximamente</li>
              <li className="text-sm text-zinc-600">Prototipo — próximamente</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-zinc-300">
              <li>
                <a
                  href="mailto:soporte@ruedatec.com"
                  className="flex items-center gap-3 transition-colors hover:text-amber-300"
                >
                  <Mail className="h-4 w-4 text-amber-400/70" />
                  soporte@ruedatec.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+13098509382"
                  className="flex items-center gap-3 transition-colors hover:text-amber-300"
                >
                  <Phone className="h-4 w-4 text-amber-400/70" />
                  +1 (309) 850-9382
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-amber-400/70" />
                México · Lun–Vie, 9:00–18:00 CST
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} RuedaTec. Movilidad para todos.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Política de privacidad
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>

      {/* Marca de agua gigante */}
      <div
        className="pointer-events-none relative z-0 -mb-7 select-none overflow-hidden text-center md:-mb-12"
        aria-hidden
      >
        <span className="font-display bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-[20vw] font-bold leading-[0.8] tracking-tighter text-transparent">
          RUEDATEC
        </span>
      </div>
    </footer>
  )
}
