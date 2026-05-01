import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[70vh] min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
        <Image
          alt="Casa moderna"
          className="object-cover"
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
      </div>
      <div className="absolute inset-0 z-20 flex items-end lg:items-center">
        <div className="container mx-auto px-4 md:px-6 pb-12 sm:pb-16 lg:pb-0">
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-4">
              Tu hogar ideal te está esperando
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/85 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              En Viva Propiedades te ayudamos a encontrar la propiedad perfecta. Especialistas en compra, venta y
              alquiler de inmuebles en las mejores zonas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="bg-white text-emerald-900 hover:bg-emerald-50 font-semibold w-full sm:w-auto shadow-lg shadow-black/10"
                onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Propiedades
              </Button>
              <Button
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 font-semibold w-full sm:w-auto"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar Asesor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
