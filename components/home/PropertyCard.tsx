import Image from "next/image"
import { MapPin, Bed, Bath, Car, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Property } from "@/types/property"

interface PropertyCardProps {
  property: Property
  onViewDetails: (property: Property) => void
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
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
    <Card className="group hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border-0 shadow-md">
      <CardHeader className="p-0 relative overflow-hidden">
        <Image
          alt={property.title}
          className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-500"
          height="300"
          src={property.image}
          width="400"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className={`absolute top-3 left-3 ${getCategoryColor(property.category)} text-white px-2.5 py-1 rounded-full text-xs font-semibold`}>
          {property.category}
        </div>
        {property.badge && (
          <div className={`absolute top-3 right-3 ${getBadgeColor(property.badge)} text-white px-2.5 py-1 rounded-full text-xs font-semibold`}>
            {property.badge}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 sm:p-5 flex flex-col flex-1">
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between gap-2 mb-2">
            <CardTitle className="text-base sm:text-lg font-bold text-gray-900 leading-tight">{property.title}</CardTitle>
            <span className="text-lg sm:text-xl font-bold text-emerald-600 whitespace-nowrap flex-shrink-0">{property.price}</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3">
            <MapPin className="h-3.5 w-3.5 mr-1 flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>
          <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600 mb-3">
            {property.bedrooms && (
              <span className="flex items-center gap-1">
                <Bed className="h-3.5 w-3.5 text-gray-400" />
                {property.bedrooms} {property.bedrooms === 1 ? 'hab' : 'hab'}
              </span>
            )}
            {property.bathrooms && (
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5 text-gray-400" />
                {property.bathrooms} {property.bathrooms === 1 ? 'baño' : 'baños'}
              </span>
            )}
            {property.parking && (
              <span className="flex items-center gap-1">
                <Car className="h-3.5 w-3.5 text-gray-400" />
                {property.parking} {property.parking === 1 ? 'estac' : 'estac'}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Maximize2 className="h-3.5 w-3.5 text-gray-400" />
              {property.area}
            </span>
          </div>
          <CardDescription className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-4 flex-1 leading-relaxed">
            {property.description}
          </CardDescription>
          <Button
            className="w-full bg-emerald-600 hover:bg-emerald-700 mt-auto rounded-lg"
            onClick={() => onViewDetails(property)}
          >
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
