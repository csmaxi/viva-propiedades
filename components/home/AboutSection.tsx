import Image from "next/image"
import { Users, Award, TrendingUp } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="w-full py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                ¿Por qué elegir Viva Propiedades?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                Con años de experiencia en el mercado inmobiliario, somos tu socio de confianza para todas tus
                necesidades de propiedades.
              </p>
            </div>
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">Equipo Experto</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Agentes certificados con amplio conocimiento del mercado local.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">Servicio Premium</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Atención personalizada y acompañamiento en todo el proceso.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-gray-900">Mejores Resultados</h3>
                  <p className="text-gray-600 text-sm sm:text-base">Estrategias efectivas que garantizan los mejores precios del mercado.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-2xl -z-10 hidden sm:block" />
              <Image
                alt="Equipo Viva Propiedades"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
                height="400"
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                width="600"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-600/10 rounded-2xl -z-10 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
