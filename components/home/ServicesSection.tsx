import { Home, Building2, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">Nuestros Servicios</h2>
            <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
              Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-900">Venta</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Te ayudamos a vender tu propiedad al mejor precio del mercado con estrategias de marketing
                efectivas.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-900">Compra</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Encuentra la propiedad perfecta con nuestro amplio catálogo y asesoramiento personalizado.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border-emerald-200 hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <CardTitle className="text-emerald-900">Alquiler</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription>
                Gestión completa de alquileres con contratos seguros y mantenimiento de propiedades.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

