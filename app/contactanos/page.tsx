"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, HeadphonesIcon, User, MessageCircle } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactanosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent" />
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y descubre cómo RuedaTec puede transformar tu
              movilidad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HeadphonesIcon className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Soporte Técnico</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-blue-500" />
                    <a href="mailto:soporte@ruedatec.com" className="text-gray-300 hover:text-white transition-colors">
                      soporte@ruedatec.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-blue-500" />
                    <a href="tel:+13098509382" className="text-gray-300 hover:text-white transition-colors">
                      +1 (309) 850-9382
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Contacto Directo</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-green-500" />
                    <a href="mailto:yo@davidmtz.me" className="text-gray-300 hover:text-white transition-colors">
                      yo@davidmtz.me
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm">CEO & Fundador</p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Horarios de Atención</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Lunes - Viernes</p>
                  <p className="text-white font-semibold">9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-400">Zona horaria: CST (México)</p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-white/5 border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Respuesta rápida</h3>
                    <p className="text-white">
                      Nuestro equipo se compromete a responder todas las consultas dentro de las 24 horas durante días
                      laborales.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Ubicación</h3>
                    <p className="text-white">
                      Basados en México, ofrecemos soporte y servicios a nivel nacional con planes de expansión
                      internacional.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8">
                <div className="flex items-start gap-4">
                  <HeadphonesIcon className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Soporte especializado</h3>
                    <p className="text-white">
                      Nuestro equipo técnico está capacitado para resolver cualquier duda sobre instalación,
                      mantenimiento y uso de nuestros productos.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
