import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="w-full py-16 sm:py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-5 text-center max-w-2xl mx-auto">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              ¿Listo para encontrar tu propiedad ideal?
            </h2>
            <p className="text-emerald-100/90 text-base sm:text-lg md:text-xl leading-relaxed">
              Contáctanos hoy mismo y déjanos ayudarte a hacer realidad tus sueños inmobiliarios.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold w-full sm:w-auto"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar Ahora
            </Button>
            <Button
              size="lg"
              className="bg-white/10 border-2 border-white text-white hover:bg-white/20 font-semibold w-full sm:w-auto"
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
