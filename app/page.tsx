'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PropertyType, CategoryFilter, Property } from "@/types/property"
import { properties } from "@/data/properties"
import { Header } from "@/components/home/Header"
import { HeroSection } from "@/components/home/HeroSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { PropertyFilters } from "@/components/home/PropertyFilters"
import { PropertyCard } from "@/components/home/PropertyCard"
import { PropertyModal } from "@/components/home/PropertyModal"
import { AboutSection } from "@/components/home/AboutSection"
import { CTASection } from "@/components/home/CTASection"
import { Footer } from "@/components/home/Footer"

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState<PropertyType>("Todas")
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Todas")
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Función para manejar el click en "Ver Detalles"
  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property)
    setIsDialogOpen(true)
  }

  // Filtrar propiedades según los filtros activos
  const filteredProperties = properties.filter(prop => {
    const matchesType = activeFilter === "Todas" || prop.type === activeFilter
    const matchesCategory = categoryFilter === "Todas" || prop.category === categoryFilter
    return matchesType && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <ServicesSection />

        {/* Propiedades Destacadas */}
        <section id="propiedades" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                  Propiedades Destacadas
                </h2>
                <p className="max-w-[900px] mx-auto text-gray-600 md:text-xl/relaxed">
                  Descubre nuestra selección de propiedades premium en las mejores ubicaciones
                </p>
              </div>
            </div>

            <PropertyFilters 
              activeFilter={activeFilter}
              categoryFilter={categoryFilter}
              onTypeFilterChange={setActiveFilter}
              onCategoryFilterChange={setCategoryFilter}
            />

            {/* Contador de resultados */}
            <div className="text-center mb-4">
              <p className="text-gray-600">
                Mostrando <span className="font-bold text-emerald-600">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'propiedad' : 'propiedades'}
              </p>
            </div>

            {/* Grid de Propiedades */}
            <div className="mx-auto grid max-w-7xl gap-6 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard 
                  key={property.id}
                  property={property}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>

            {/* Mensaje si no hay resultados */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron propiedades para este filtro.</p>
              </div>
            )}

            {/* Botón Ver Más */}
            <div className="text-center py-8">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              >
                Ver Todas las Propiedades ({properties.length}+)
              </Button>
            </div>
          </div>
        </section>

        <AboutSection />
        <CTASection />
      </main>

      <Footer />

      <PropertyModal 
        property={selectedProperty}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  )
}
