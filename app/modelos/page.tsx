"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Battery, Zap, Sun, Smartphone, Check, ChevronRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { joinWaitlist } from "./waitlist-action"

// Model data
const models = [
  {
    id: "modelo-basico",
    name: "RuedaTec Básico",
    tagline: "Movilidad accesible para todos",
    description:
      "El modelo básico de RuedaTec convierte cualquier silla de ruedas manual en eléctrica con nuestro sistema modular. Incluye batería de larga duración, control intuitivo y diseño ergonómico.",
    price: "MXN $5,999",
    features: [
      "Batería con 8 horas de autonomía",
      "Velocidad máxima de 6 km/h",
      "Aplicación móvil básica",
      "Instalación sencilla",
      "Garantía de 1 año",
    ],
    image: "/ruedatec-basico-model.png",
    color: "blue",
  },
  {
    id: "modelo-solar",
    name: "RuedaTec Solar",
    tagline: "Independencia sin límites",
    description:
      "Nuestro modelo premium incluye paneles solares integrados para una autonomía extendida. Disfruta de mayor potencia, control avanzado mediante nuestra app y un diseño elegante y funcional.",
    price: "MXN $9,999",
    features: [
      "Paneles solares integrados",
      "Batería con 12 horas de autonomía",
      "Velocidad máxima de 8 km/h",
      "Aplicación móvil avanzada",
      "Sensores inteligentes",
      "Garantía de 2 años",
    ],
    image: "/ruedatec-solar-model.jpeg",
    color: "indigo",
  },
]

export default function ModelosPage() {
  const [activeModel, setActiveModel] = useState(models[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const formRef1 = useRef<HTMLFormElement>(null)
  const formRef2 = useRef<HTMLFormElement>(null)
  const ctaFormRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, formRef: React.RefObject<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    const formData = new FormData(e.currentTarget)

    try {
      await joinWaitlist(formData)
      setSubmitSuccess(true)

      // Reset the form safely
      if (formRef.current) {
        formRef.current.reset()
      }

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 3000)
    } catch (error) {
      console.error("Error:", error)
      setSubmitError("Error al procesar la suscripción. Inténtalo de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
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
              Nuestros{" "}
              <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Modelos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre la libertad y la independencia con nuestros sistemas de conversión para sillas de ruedas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Models Tabs Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <Tabs
            defaultValue={models[0].id}
            className="w-full"
            onValueChange={(value) => {
              const model = models.find((m) => m.id === value)
              if (model) setActiveModel(model)
            }}
          >
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              {models.map((model) => (
                <TabsTrigger key={model.id} value={model.id} className="text-sm md:text-base">
                  {model.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {models.map((model, index) => (
              <TabsContent key={model.id} value={model.id} className="space-y-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-2 md:order-1"
                  >
                    <Badge className={`bg-${model.color}-500 hover:bg-${model.color}-600 mb-4`}>{model.tagline}</Badge>
                    <h2 className="text-3xl font-bold mb-4">{model.name}</h2>
                    <p className="text-gray-300 mb-6">{model.description}</p>
                    <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                      {model.price}
                    </p>

                    <div className="space-y-3 mb-8">
                      {model.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <form
                      ref={index === 0 ? formRef1 : formRef2}
                      onSubmit={(e) => handleSubmit(e, index === 0 ? formRef1 : formRef2)}
                      className="flex gap-2 max-w-md"
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="tu@email.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                      />
                      <input type="hidden" name="model" value={model.name} />
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 whitespace-nowrap disabled:opacity-50"
                      >
                        {isSubmitting ? "Enviando..." : "Lista de espera"} <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </form>

                    {submitSuccess && (
                      <div className="mt-2 text-green-400 text-sm flex items-center gap-1">
                        <Check className="w-4 h-4" />
                        ¡Te has unido a la lista de espera!
                      </div>
                    )}

                    {submitError && <div className="mt-2 text-red-400 text-sm">{submitError}</div>}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 md:order-2"
                  >
                    <div className="relative rounded-2xl overflow-hidden group bg-gradient-to-br from-gray-100 to-gray-200 p-8">
                      <Image
                        src={model.image || "/placeholder.svg"}
                        alt={`${model.name} - Sistema de conversión para silla de ruedas`}
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Características destacadas</h2>
            <p className="text-gray-300">
              Nuestros modelos están diseñados pensando en la comodidad, eficiencia y autonomía del usuario
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Battery className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Batería de larga duración</h3>
              <p className="text-gray-400">
                Nuestras baterías de litio ofrecen hasta 12 horas de autonomía con una sola carga.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Motor potente</h3>
              <p className="text-gray-400">
                Motores de alta eficiencia que proporcionan la potencia necesaria para superar pendientes y terrenos
                difíciles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Sun className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Energía solar</h3>
              <p className="text-gray-400">
                Paneles solares integrados que extienden la autonomía y permiten cargar la batería mientras te
                desplazas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Control inteligente</h3>
              <p className="text-gray-400">
                Aplicación móvil para controlar la velocidad, dirección y funciones especiales con facilidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <Card className="bg-white/5 border-white/10 p-8 md:p-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para transformar tu movilidad?</h2>
              <p className="text-gray-300 mb-6">
                Únete a nuestra lista de espera y sé de los primeros en experimentar la libertad que ofrece RuedaTec.
              </p>
              <form
                ref={ctaFormRef}
                onSubmit={(e) => handleSubmit(e, ctaFormRef)}
                className="flex gap-2 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
                />
                <input type="hidden" name="model" value="General" />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white border-0 whitespace-nowrap disabled:opacity-50"
                >
                  {isSubmitting ? "Enviando..." : "Lista de espera"} <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </form>

              {submitSuccess && (
                <div className="mt-2 text-green-400 text-sm flex items-center justify-center gap-1">
                  <Check className="w-4 h-4" />
                  ¡Te has unido a la lista de espera!
                </div>
              )}

              {submitError && <div className="mt-2 text-red-400 text-sm text-center">{submitError}</div>}
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
