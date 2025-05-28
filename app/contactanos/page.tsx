"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, HeadphonesIcon, User, Check } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ContactanosPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // Here you would normally send the form data to your backend
  }

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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
              <p className="text-gray-300 mb-8">
                ¿Tienes alguna pregunta sobre nuestros productos o necesitas ayuda? Completa el formulario y te
                responderemos lo antes posible.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nombre</Label>
                      <Input id="first-name" required className="bg-white/5 border-white/10 text-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Apellido</Label>
                      <Input id="last-name" required className="bg-white/5 border-white/10 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input id="email" type="email" required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono (opcional)</Label>
                    <Input id="phone" type="tel" className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <select id="subject" className="w-full rounded-md bg-white/5 border-white/10 p-3 text-white">
                      <option value="general">Consulta general</option>
                      <option value="support">Soporte técnico</option>
                      <option value="sales">Información de ventas</option>
                      <option value="partnership">Colaboraciones</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-white"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                  >
                    Enviar mensaje <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-semibold">¡Mensaje enviado!</h3>
                  <p className="text-gray-300">
                    Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos dentro de las próximas 24
                    horas.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              )}
            </motion.div>

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
                    <h3 className="text-lg font-semibold mb-2">Respuesta rápida</h3>
                    <p className="text-gray-300">
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
                    <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                    <p className="text-gray-300">
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
                    <h3 className="text-lg font-semibold mb-2">Soporte especializado</h3>
                    <p className="text-gray-300">
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
