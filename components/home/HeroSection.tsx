import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none text-gray-900">
                Tu hogar ideal te está esperando
              </h1>
              <p className="mx-auto lg:mx-0 max-w-[600px] text-gray-600 md:text-xl">
                En Viva Propiedades te ayudamos a encontrar la propiedad perfecta. Especialistas en compra, venta y
                alquiler de inmuebles en las mejores zonas urbanas y suburbanas.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700"
                onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Propiedades
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar Asesor
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[600px]">
              <Image
                alt="Casa moderna"
                className="aspect-video w-full overflow-hidden rounded-xl object-cover shadow-2xl"
                height="400"
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

