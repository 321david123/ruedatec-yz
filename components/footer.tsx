import Link from "next/link"
import { Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Organización</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Información
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Ayúdanos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/ruedatec?igsh=MTY0bWJub3Y0cXB6Yg=="
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>soporte@ruedatec.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (309) 850-9382</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>México</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2023 RuedaTec</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
