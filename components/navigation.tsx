"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent"
          >
            RuedaTec
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <span className="text-gray-600 cursor-not-allowed" title="Próximamente disponible">
              ChatBot
            </span>
            <Link href="/modelos" className="text-gray-300 hover:text-white transition-colors">
              Modelos
            </Link>
            <Link href="/conocenos" className="text-gray-300 hover:text-white transition-colors">
              Conócenos
            </Link>
            <span className="text-gray-600 cursor-not-allowed" title="Próximamente disponible">
              Prototipo
            </span>
            <Link href="/contactanos" className="text-gray-300 hover:text-white transition-colors">
              Contáctanos
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4"
          >
            <span className="block text-gray-600 cursor-not-allowed" title="Próximamente disponible">
              ChatBot
            </span>
            <Link href="/modelos" className="block text-gray-300 hover:text-white transition-colors">
              Modelos
            </Link>
            <Link href="/conocenos" className="block text-gray-300 hover:text-white transition-colors">
              Conócenos
            </Link>
            <span className="block text-gray-600 cursor-not-allowed" title="Próximamente disponible">
              Prototipo
            </span>
            <Link href="/contactanos" className="block text-gray-300 hover:text-white transition-colors">
              Contáctanos
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  )
}
