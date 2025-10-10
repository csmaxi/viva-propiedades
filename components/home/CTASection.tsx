import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              ¿Listo para encontrar tu propiedad ideal?
            </h2>
            <p className="max-w-[600px] mx-auto text-emerald-100 md:text-xl/relaxed">
              Contáctanos hoy mismo y déjanos ayudarte a hacer realidad tus sueños inmobiliarios.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-emerald-600 hover:bg-gray-100"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white font-bold hover:bg-emerald-700"
              onClick={() => document.getElementById('propiedades')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

