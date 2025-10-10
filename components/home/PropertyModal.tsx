import Image from "next/image"
import { MapPin, Bed, Bath, Car, Maximize2, Heart, Share2, Phone, Mail, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Property } from "@/types/property"

interface PropertyModalProps {
  property: Property | null
  isOpen: boolean
  onClose: () => void
}

export function PropertyModal({ property, isOpen, onClose }: PropertyModalProps) {
  if (!property) return null

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "VENTA": return "bg-emerald-600"
      case "ALQUILER": return "bg-blue-600"
      case "COMERCIAL": return "bg-purple-600"
      case "TERRENO": return "bg-green-600"
      default: return "bg-gray-600"
    }
  }

  const getBadgeColor = (badge?: string) => {
    switch (badge) {
      case "DESTACADA": return "bg-red-600"
      case "LUJO": return "bg-yellow-600"
      case "NUEVO": return "bg-orange-600"
      case "COMERCIAL": return "bg-purple-600"
      default: return "bg-gray-600"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <>
          <DialogTitle className="sr-only">
            {property.title}
          </DialogTitle>
          
          {/* Botón de cerrar personalizado más visible */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 border-2 border-gray-200 hover:border-emerald-600"
          >
            <span className="text-gray-700 text-2xl font-bold hover:text-emerald-600">×</span>
          </button>

          <div className="relative">
            {/* Imagen Principal */}
            <div className="relative h-[300px] md:h-[400px] w-full">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />
              {/* Badges sobre la imagen - arriba izquierda */}
              <div className="absolute top-4 left-4 flex gap-2">
                <Badge className={`${getCategoryColor(property.category)} text-white border-0`}>
                  {property.category}
                </Badge>
                {property.badge && (
                  <Badge className={`${getBadgeColor(property.badge)} text-white border-0`}>
                    {property.badge}
                  </Badge>
                )}
              </div>
              {/* Botones de Corazón y Compartir - abajo derecha de la imagen */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full bg-white/95 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-red-500 transition-all hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    alert('Agregado a favoritos')
                  }}
                >
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </Button>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="rounded-full bg-white/95 hover:bg-white shadow-lg border-2 border-gray-200 hover:border-emerald-500 transition-all hover:scale-110"
                  onClick={(e) => {
                    e.stopPropagation()
                    alert('Compartir propiedad')
                  }}
                >
                  <Share2 className="h-5 w-5 text-gray-600 hover:text-emerald-500" />
                </Button>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 md:p-8">
              {/* Título y Precio */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {property.title}
                  </h2>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-600">
                    {property.price}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {property.category === "ALQUILER" ? "Por mes" : "Precio total"}
                  </p>
                </div>
              </div>

              {/* Características Principales */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                {property.bedrooms && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Bed className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.bedrooms}</p>
                      <p className="text-sm text-gray-600">Habitaciones</p>
                    </div>
                  </div>
                )}
                {property.bathrooms && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Bath className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.bathrooms}</p>
                      <p className="text-sm text-gray-600">Baños</p>
                    </div>
                  </div>
                )}
                {property.parking && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Car className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{property.parking}</p>
                      <p className="text-sm text-gray-600">Estacionamientos</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Maximize2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{property.area}</p>
                    <p className="text-sm text-gray-600">Superficie</p>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Características Adicionales */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Características</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Seguridad 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Áreas verdes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Cerca del metro</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Gimnasio</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Salón de eventos</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                    <span>Pet friendly</span>
                  </div>
                </div>
              </div>

              {/* Información del Agente */}
              <div className="bg-emerald-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Agente Asignado</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-emerald-200 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-emerald-700" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">María González</p>
                    <p className="text-sm text-gray-600">Agente Inmobiliario Certificado</p>
                    <div className="flex gap-3 mt-2">
                      <a href="tel:+15551234567" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                        <Phone className="h-4 w-4" />
                        (555) 123-4567
                      </a>
                      <a href="mailto:maria@vivapropiedades.com" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        Contactar
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botones de Acción */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white"
                  size="lg"
                  onClick={() => alert(`Contactando sobre: ${property.title}`)}
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Contactar Ahora
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  size="lg"
                  onClick={() => alert(`Agendando visita para: ${property.title}`)}
                >
                  <Clock className="h-5 w-5 mr-2" />
                  Agendar Visita
                </Button>
              </div>
            </div>
          </div>
        </>
      </DialogContent>
    </Dialog>
  )
}
