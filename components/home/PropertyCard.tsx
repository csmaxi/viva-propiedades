import Image from "next/image"
import { MapPin } from "lucide-react"
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
      case "DESTACADA": return "bg-red-600"
      case "LUJO": return "bg-yellow-600"
      case "NUEVO": return "bg-orange-600"
      case "COMERCIAL": return "bg-purple-600"
      default: return "bg-gray-600"
    }
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-300  flex flex-col">
      <CardHeader className="p-0 relative">
        <Image
          alt={property.title}
          className="aspect-video w-full rounded-t-lg object-cover"
          height="250"
          src={property.image}
          width="400"
        />
        <div className={`absolute top-4 left-4 ${getCategoryColor(property.category)} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
          {property.category}
        </div>
        {property.badge && (
          <div className={`absolute top-4 right-4 ${getBadgeColor(property.badge)} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
            {property.badge}
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
        <div className="flex flex-col h-full">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
            <CardTitle className="text-emerald-900 text-lg sm:text-xl">{property.title}</CardTitle>
            <span className="text-xl sm:text-2xl font-bold text-emerald-600 whitespace-nowrap">{property.price}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            {property.location}
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3">
            {property.bedrooms && <span>🛏️ {property.bedrooms} hab</span>}
            {property.bathrooms && <span>🚿 {property.bathrooms} baños</span>}
            {property.parking && <span>🚗 {property.parking} estac</span>}
            <span>📐 {property.area}</span>
          </div>
          <CardDescription className="text-sm line-clamp-3 mb-4 flex-1">
            {property.description}
          </CardDescription>
          <Button 
            className="w-full bg-emerald-600 hover:bg-emerald-700 mt-auto"
            onClick={() => onViewDetails(property)}
          >
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

