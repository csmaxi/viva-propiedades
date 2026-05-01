import Image from "next/image"
import { MapPin, Bed, Bath, Car, Maximize2, Heart, Share2, Phone, Mail, Clock, Users, X } from "lucide-react"
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
      case "DESTACADA": return "bg-red-500"
      case "LUJO": return "bg-yellow-500"
      case "NUEVO": return "bg-orange-500"
      case "COMERCIAL": return "bg-purple-600"
      default: return "bg-gray-600"
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        <DialogTitle className="sr-only">
          {property.title}
        </DialogTitle>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-all"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative">
          <div className="relative h-[250px] sm:h-[300px] md:h-[400px] w-full">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  alert('Agregado a favoritos')
                }}
              >
                <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full bg-white/90 hover:bg-white shadow-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  alert('Compartir propiedad')
                }}
              >
                <Share2 className="h-5 w-5 text-gray-600 hover:text-emerald-500 transition-colors" />
              </Button>
            </div>
          </div>

          <div className="p-5 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {property.title}
                </h2>
                <div className="flex items-center text-gray-500 text-sm sm:text-base">
                  <MapPin className="h-4 w-4 mr-1.5 text-emerald-600 flex-shrink-0" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600">
                  {property.price}
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                  {property.category === "ALQUILER" ? "Por mes" : "Precio total"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 bg-gray-50 rounded-xl">
              {property.bedrooms && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Bed className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{property.bedrooms}</p>
                    <p className="text-xs text-gray-500">Habitaciones</p>
                  </div>
                </div>
              )}
              {property.bathrooms && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Bath className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{property.bathrooms}</p>
                    <p className="text-xs text-gray-500">Baños</p>
                  </div>
                </div>
              )}
              {property.parking && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <Car className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-lg sm:text-xl font-bold text-gray-900">{property.parking}</p>
                    <p className="text-xs text-gray-500">Estacionamientos</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Maximize2 className="h-5 w-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-gray-900">{property.area}</p>
                  <p className="text-xs text-gray-500">Superficie</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Descripción</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {property.description}
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Características</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Seguridad 24/7",
                  "Áreas verdes",
                  "Cerca del metro",
                  "Gimnasio",
                  "Salón de eventos",
                  "Pet friendly"
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-5 sm:p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Agente Asignado</h3>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-emerald-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-7 w-7 text-emerald-700" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-gray-900">María González</p>
                  <p className="text-sm text-gray-500">Agente Inmobiliario Certificado</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <a href="tel:+15551234567" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 font-medium">
                      <Phone className="h-3.5 w-3.5" />
                      (555) 123-4567
                    </a>
                    <a href="mailto:maria@riogpropiedades.com" className="text-sm text-emerald-600 hover:text-emerald-700 flex items-center gap-1.5 font-medium">
                      <Mail className="h-3.5 w-3.5" />
                      Contactar
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
      </DialogContent>
    </Dialog>
  )
}
