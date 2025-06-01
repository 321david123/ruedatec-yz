"use client"

import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Zap, Sun, Users, Smartphone, ChevronDown } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <motion.div style={{ opacity, scale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        </motion.div>

        <div className="container mx-auto z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              We are trying{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                something
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Haciendo realidad la independencia a través de la innovación
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              RuedaTec, una nueva perspectiva de movilidad. Con energía solar y diseño ergonómico, llevamos la comodidad
              y eficiencia a otro nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0"
                onClick={() =>
                  window.open(
                    "mailto:yo@davidmtz.me?subject=Apoyo%20a%20RuedaTec&body=Hola,%20me%20interesa%20apoyar%20el%20proyecto%20RuedaTec.",
                    "_blank",
                  )
                }
              >
                Apoyanos <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                className="bg-black border-2 border-white/40 text-white hover:bg-gray-900 hover:border-white/60"
                onClick={() => (window.location.href = "/conocenos")}
              >
                Conoce más
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 hover:border-orange-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Apoyanos</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">Aporta la causa</h4>
                <p className="text-gray-300 mb-6 flex-grow">
                  Siempre estamos al tanto de una aportación/punto de vista, ya que este dispositivo esta 100% orientado
                  a la experiencia del usuario
                </p>
                <Button variant="ghost" className="text-orange-500 hover:text-orange-400 p-0 self-start">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Conoce</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">Explora lo que creamos</h4>
                <p className="text-gray-300 mb-4">Historia</p>
                <p className="text-gray-300 mb-6 flex-grow">Revisa lo que hacemos</p>
                <Button variant="ghost" className="text-cyan-500 hover:text-cyan-400 p-0 self-start">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Contactános</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">Hablános</h4>
                <p className="text-gray-300 mb-6 flex-grow">
                  Nos darás y te darás la oportunidad de poder subir de nivel
                </p>
                <Button variant="ghost" className="text-purple-500 hover:text-purple-400 p-0 self-start">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 hover:border-green-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Mejoras</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">Puedes aportar algo?</h4>
                <p className="text-gray-300 mb-6 flex-grow">Contáctanos y ayudanos a poder ser mejores</p>
                <Button variant="ghost" className="text-green-500 hover:text-green-400 p-0 self-start">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 hover:border-yellow-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-white">Visualiza</h3>
                <h4 className="text-2xl font-bold mb-4 text-white">Mantente al tanto del avance</h4>
                <p className="text-gray-300 mb-6 flex-grow">
                  Descubre el progreso de nuestro desarrollo y las próximas innovaciones
                </p>
                <Button variant="ghost" className="text-yellow-500 hover:text-yellow-400 p-0 self-start">
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonio</h2>
            <blockquote className="text-xl md:text-2xl text-gray-300 mb-8 italic">
              "RuedaTec, la solución que cambia vidas. Convierte sillas de ruedas manuales en eléctricas y sostenibles
              mediante su sistema modular. Libertad, independencia y tecnología al alcance de todos. Descubre una nueva
              forma de moverte con RuedaTec"
            </blockquote>
            <p className="text-lg text-orange-500">- Miguel</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Galería</h2>
            <p className="text-xl text-gray-400">Realmente nos importan</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-2xl"
            >
              <Image
                src="/ruedatec-team-photo.jpeg"
                alt="Equipo RuedaTec con sillas de ruedas"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Antes de todo...</h3>
                <p className="text-gray-400">
                  Realizamos un diseño 3D antes que nada en la aplicación de blender para poder darnos una idea sobre lo
                  que podíamos lograr y tener un buen inicio para la construcción
                </p>
              </Card>

              <Card className="bg-white/5 border-white/10 p-6">
                <h3 className="text-xl font-semibold mb-4 text-white">Pensamos en todo.</h3>
                <h4 className="text-lg font-semibold mb-2 text-orange-500">La app.</h4>
                <p className="text-gray-400">
                  La aplicación de RuedaTec, está siendo creada con la tecnología de Flutter, es la clave para
                  interactuar con tu silla de ruedas de manera inteligente.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Icons */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Eléctrico</h3>
              <p className="text-sm text-gray-400">Sistema modular eficiente</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
                <Sun className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Solar</h3>
              <p className="text-sm text-gray-400">Energía sostenible</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">App Inteligente</h3>
              <p className="text-sm text-gray-400">Control total con Flutter</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Inclusivo</h3>
              <p className="text-sm text-gray-400">Para todos</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent via-red-500/5 to-transparent">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-white/5 border-white/10 p-8 h-full">
                <p className="text-lg text-gray-300 italic mb-4">
                  "¡Cambiemos juntos el rumbo hacia la inclusión! RuedaTec, el aliado que promueve la igualdad y la
                  autonomía en cada movimiento."
                </p>
                <p className="text-orange-500">- The team</p>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Card className="bg-white/5 border-white/10 p-8 h-full">
                <p className="text-lg text-gray-300 italic mb-4">
                  "Movilidad sostenible, inclusión imparable. Descubre ruedaTec y haz que cada recorrido sea una
                  experiencia llena de libertad."
                </p>
                <p className="text-orange-500">- Jesús</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
