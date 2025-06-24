import { Building2, Home, MapPin, Phone, Mail, Clock, Users, Award, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white">
        <Link className="flex items-center justify-center" href="/">
          <Building2 className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">Viva Propiedades</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#servicios">
            Servicios
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#propiedades">
            Propiedades
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#nosotros">
            Nosotros
          </Link>
          <Link className="text-sm font-medium hover:text-emerald-600 transition-colors" href="#contacto">
            Contacto
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-emerald-50 to-teal-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Tu hogar ideal te está esperando
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    En Viva Propiedades te ayudamos a encontrar la propiedad perfecta. Especialistas en compra, venta y
                    alquiler de inmuebles en las mejores zonas urbanas y suburbanas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                    Ver Propiedades
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
                  >
                    Contactar Asesor
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Casa moderna"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones integrales para todas tus necesidades inmobiliarias
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
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

        {/* Propiedades Destacadas */}
        <section id="propiedades" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                  Propiedades Destacadas
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre nuestra selección de propiedades premium en las mejores ubicaciones
                </p>
              </div>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 py-8">
              <Button variant="outline" className="bg-emerald-600 text-white border-emerald-600">
                Todas
              </Button>
              <Button variant="outline" className="hover:bg-emerald-50 hover:text-emerald-600">
                Casas
              </Button>
              <Button variant="outline" className="hover:bg-emerald-50 hover:text-emerald-600">
                Departamentos
              </Button>
              <Button variant="outline" className="hover:bg-emerald-50 hover:text-emerald-600">
                Terrenos
              </Button>
              <Button variant="outline" className="hover:bg-emerald-50 hover:text-emerald-600">
                Oficinas
              </Button>
            </div>

            {/* Grid de Propiedades */}
            <div className="mx-auto grid max-w-7xl gap-6 py-8 lg:grid-cols-2 xl:grid-cols-3">
              {/* Casa 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Casa moderna en Las Condes"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VENTA
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    DESTACADA
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Casa Moderna Las Condes</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$450,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Las Condes, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 4 hab</span>
                      <span>🚿 3 baños</span>
                      <span>🚗 2 estac</span>
                      <span>📐 280 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Hermosa casa moderna con acabados de lujo, jardín privado y vista panorámica. Ubicada en sector
                      residencial exclusivo.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Departamento 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Departamento en Providencia"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ALQUILER
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Depto. Providencia Centro</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$1,200/mes</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Providencia, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 2 hab</span>
                      <span>🚿 2 baños</span>
                      <span>🚗 1 estac</span>
                      <span>📐 85 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Moderno departamento con balcón, gimnasio y piscina. Excelente conectividad con metro y centros
                      comerciales.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Casa 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Casa familiar en Ñuñoa"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VENTA
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Casa Familiar Ñuñoa</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$320,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Ñuñoa, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 3 hab</span>
                      <span>🚿 2 baños</span>
                      <span>🚗 1 estac</span>
                      <span>📐 180 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Acogedora casa familiar con patio amplio, cerca de colegios y parques. Ideal para familias
                      jóvenes.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Oficina 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Oficina en centro financiero"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    COMERCIAL
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Oficina Centro Financiero</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$2,800/mes</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Las Condes, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🏢 Piso 12</span>
                      <span>🚗 2 estac</span>
                      <span>📐 120 m²</span>
                      <span>👥 15 personas</span>
                    </div>
                    <CardDescription className="text-sm">
                      Moderna oficina con vista panorámica, sala de reuniones y recepción. Edificio clase A con todas
                      las amenidades.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Departamento 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Departamento de lujo"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VENTA
                  </div>
                  <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    LUJO
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Penthouse Vitacura</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$850,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Vitacura, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 4 hab</span>
                      <span>🚿 4 baños</span>
                      <span>🚗 3 estac</span>
                      <span>📐 350 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Exclusivo penthouse con terraza privada, jacuzzi y vista 360°. Acabados premium y domótica
                      integrada.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Terreno 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Terreno residencial"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    TERRENO
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Terreno Residencial Chicureo</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$180,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Chicureo, Colina
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>📐 500 m²</span>
                      <span>🏗️ Constructible</span>
                      <span>💧 Servicios</span>
                      <span>🌳 Arbolado</span>
                    </div>
                    <CardDescription className="text-sm">
                      Excelente terreno en condominio cerrado con seguridad 24/7. Ideal para construir casa de ensueño.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Más propiedades */}
            <div className="mx-auto grid max-w-7xl gap-6 py-4 lg:grid-cols-2 xl:grid-cols-3">
              {/* Casa 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Casa con piscina"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ALQUILER
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Casa con Piscina La Reina</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$2,500/mes</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      La Reina, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 5 hab</span>
                      <span>🚿 4 baños</span>
                      <span>🚗 2 estac</span>
                      <span>📐 400 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Espectacular casa con piscina, quincho y amplio jardín. Perfecta para familias grandes y
                      entretenimiento.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Departamento 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Departamento nuevo"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VENTA
                  </div>
                  <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NUEVO
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Depto. Nuevo Maipú</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$195,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Maipú, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 3 hab</span>
                      <span>🚿 2 baños</span>
                      <span>🚗 1 estac</span>
                      <span>📐 75 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Departamento a estrenar en proyecto nuevo. Excelente ubicación cerca del metro y centros
                      comerciales.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Oficina 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Local comercial"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    COMERCIAL
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Local Comercial Centro</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$3,200/mes</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Santiago Centro
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🏪 Planta libre</span>
                      <span>🚻 2 baños</span>
                      <span>📐 200 m²</span>
                      <span>🚶 Alto tránsito</span>
                    </div>
                    <CardDescription className="text-sm">
                      Amplio local comercial en zona de alto tránsito peatonal. Ideal para retail, restaurante o
                      servicios.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Casa 4 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Casa pareada"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    VENTA
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Casa Pareada Peñalolén</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$275,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Peñalolén, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 3 hab</span>
                      <span>🚿 2 baños</span>
                      <span>🚗 1 estac</span>
                      <span>📐 120 m²</span>
                    </div>
                    <CardDescription className="text-sm">
                      Moderna casa pareada en condominio con áreas verdes comunes y juegos infantiles. Excelente
                      conectividad.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Departamento 4 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Departamento estudiantes"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ALQUILER
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Depto. Cerca Universidad</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$800/mes</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Ñuñoa, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>🛏️ 1 hab</span>
                      <span>🚿 1 baño</span>
                      <span>📐 45 m²</span>
                      <span>🎓 Estudiantes</span>
                    </div>
                    <CardDescription className="text-sm">
                      Acogedor departamento ideal para estudiantes. Cerca de universidades, metro y centros de estudio.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Terreno 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                  <Image
                    alt="Terreno comercial"
                    className="aspect-video w-full rounded-t-lg object-cover"
                    height="250"
                    src="/placeholder.svg?height=250&width=400"
                    width="400"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    TERRENO
                  </div>
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    COMERCIAL
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-emerald-900 text-xl">Terreno Comercial Puente Alto</CardTitle>
                      <span className="text-2xl font-bold text-emerald-600">$350,000</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Puente Alto, Santiago
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <span>📐 1,200 m²</span>
                      <span>🏗️ Uso mixto</span>
                      <span>🛣️ Esquina</span>
                      <span>💧 Servicios</span>
                    </div>
                    <CardDescription className="text-sm">
                      Estratégico terreno comercial en esquina con alta visibilidad. Perfecto para desarrollo comercial
                      o mixto.
                    </CardDescription>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Ver Detalles</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Botón Ver Más */}
            <div className="text-center py-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              >
                Ver Todas las Propiedades (150+)
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre Nosotros */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">
                    ¿Por qué elegir Viva Propiedades?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
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
              <div className="flex items-center justify-center">
                <Image
                  alt="Equipo Viva Propiedades"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  ¿Listo para encontrar tu propiedad ideal?
                </h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos hoy mismo y déjanos ayudarte a hacer realidad tus sueños inmobiliarios.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100">
                  Contactar Ahora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-emerald-600"
                >
                  Ver Catálogo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contacto"
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-900"
      >
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-6 w-6 text-emerald-400" />
              <span className="text-xl font-bold text-white">Viva Propiedades</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu socio de confianza en el mercado inmobiliario. Hacemos realidad tus sueños de propiedad.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Compra de propiedades</li>
              <li>Venta de inmuebles</li>
              <li>Alquiler y gestión</li>
              <li>Asesoría inmobiliaria</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Propiedades</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Casas residenciales</li>
              <li>Departamentos</li>
              <li>Terrenos</li>
              <li>Oficinas comerciales</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@vivapropiedades.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Lun-Vie: 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-4 bg-gray-800 border-t border-gray-700">
        <div className="container px-4 md:px-6">
          <p className="text-center text-xs text-gray-400">© 2024 Viva Propiedades. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
