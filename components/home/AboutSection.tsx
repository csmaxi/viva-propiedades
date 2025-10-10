import Image from "next/image"
import { Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                ¿Por qué elegir Viva Propiedades?
              </h2>
              <p className="mx-auto lg:mx-0 max-w-[600px] text-gray-600 md:text-xl">
                Con años de experiencia en el mercado inmobiliario, somos tu socio de confianza para todas tus
                necesidades de propiedades.
              </p>
            </div>
            <div className="grid gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Equipo Experto</h3>
                  <p className="text-gray-600">Agentes certificados con amplio conocimiento del mercado local.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Servicio Premium</h3>
                  <p className="text-gray-600">Atención personalizada y acompañamiento en todo el proceso.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Mejores Resultados</h3>
                  <p className="text-gray-600">
                    Estrategias efectivas que garantizan los mejores precios del mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <Image
                alt="Equipo Viva Propiedades"
                className="aspect-video w-full overflow-hidden rounded-xl object-cover shadow-2xl"
                height="400"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

