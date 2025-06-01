"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Target, Users, Lightbulb, Rocket } from "lucide-react"
import Image from "next/image"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ConocenosPage() {
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
                Conócenos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Somos un equipo apasionado por la innovación y la inclusión, comprometidos con transformar la movilidad a
              través de la tecnología.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold mb-6 text-white">Nuestra Misión</h2>
              <p className="text-white mb-6 text-lg">
                En RuedaTec, creemos que la movilidad es un derecho fundamental. Nuestra misión es democratizar el
                acceso a la tecnología de asistencia, convirtiendo sillas de ruedas manuales en sistemas eléctricos
                inteligentes y sostenibles.
              </p>
              <p className="text-white mb-8">
                Trabajamos cada día para eliminar las barreras de movilidad y crear un mundo más inclusivo, donde la
                independencia y la libertad de movimiento estén al alcance de todos.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Target className="w-6 h-6 text-blue-500" />
                  </div>
                  <p className="text-sm text-gray-400">Innovación</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <p className="text-sm text-gray-400">Inclusión</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <Lightbulb className="w-6 h-6 text-purple-500" />
                  </div>
                  <p className="text-sm text-gray-400">Sostenibilidad</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/ruedatec-team-with-user.jpeg"
                  alt="Equipo RuedaTec trabajando con usuario real en pruebas de campo"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nuestros Logros</h2>
            <p className="text-white max-w-2xl mx-auto">
              El reconocimiento de nuestro trabajo nos motiva a seguir innovando y creando soluciones que impacten
              positivamente la vida de las personas.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-yellow-500" />
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 mb-4">2023</Badge>
                <h3 className="text-xl font-semibold mb-4 text-white">Invention Convention Americas</h3>
                <p className="text-white mb-4">
                  Ganadores del primer lugar en la categoría de tecnología de asistencia en la prestigiosa Invention
                  Convention Americas 2023.
                </p>
                <p className="text-sm text-gray-400">
                  Reconocimiento internacional por nuestra innovación en movilidad sostenible.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-blue-500" />
                </div>
                <Badge className="bg-blue-500/20 text-blue-400 mb-4">Hackathon</Badge>
                <h3 className="text-xl font-semibold mb-4 text-white">Ganadores de Hackathon</h3>
                <p className="text-white mb-4">
                  Primer lugar en hackathon de innovación tecnológica, destacando por nuestra solución integral de
                  movilidad inteligente.
                </p>
                <p className="text-sm text-gray-400">
                  Reconocimiento por la mejor implementación de IoT y sostenibilidad.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10 p-8 text-center h-full">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-green-500" />
                </div>
                <Badge className="bg-green-500/20 text-green-400 mb-4">Estatal</Badge>
                <h3 className="text-xl font-semibold mb-4 text-white">Competencia Estatal</h3>
                <p className="text-white mb-4">
                  Campeones estatales en competencia de innovación tecnológica, siendo reconocidos por el impacto social
                  de nuestro proyecto.
                </p>
                <p className="text-sm text-gray-400">
                  Destacamos por la viabilidad comercial y el potencial de escalabilidad.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nuestros Valores</h2>
            <p className="text-white max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y nos impulsan a crear soluciones que realmente marquen la
              diferencia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Innovación</h3>
              <p className="text-gray-400 text-sm">
                Buscamos constantemente nuevas formas de mejorar la vida de las personas a través de la tecnología.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Inclusión</h3>
              <p className="text-gray-400 text-sm">
                Diseñamos pensando en la diversidad y la accesibilidad para crear un mundo más equitativo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Excelencia</h3>
              <p className="text-gray-400 text-sm">
                Nos comprometemos con la calidad en cada detalle, desde el diseño hasta la experiencia del usuario.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">Impacto</h3>
              <p className="text-gray-400 text-sm">
                Medimos nuestro éxito por el impacto positivo que generamos en la vida de las personas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Nuestra Historia</h2>
              <p className="text-white text-lg">
                RuedaTec nació de la necesidad de crear soluciones accesibles y sostenibles para la movilidad. Lo que
                comenzó como un proyecto universitario se ha convertido en una empresa comprometida con la innovación
                social.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Card className="bg-white/5 border-white/10 p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-white">El Futuro de la Movilidad</h3>
                    <p className="text-white mb-6">
                      Nuestro equipo multidisciplinario combina experiencia en ingeniería, diseño y tecnología para
                      crear soluciones que no solo funcionen, sino que transformen vidas.
                    </p>
                    <p className="text-white">
                      Con cada reconocimiento y cada usuario que mejora su calidad de vida, reafirmamos nuestro
                      compromiso de seguir innovando y expandiendo el acceso a la movilidad independiente.
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      src="https://davidmtz.me//assets/img/43534.jpeg"
                      alt="Equipo RuedaTec en ceremonia de premiación"
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover rounded-xl"
                    />
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
