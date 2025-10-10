import { Tag, Key, Briefcase, Landmark, Building2, Home } from "lucide-react"
import { PropertyType, CategoryFilter } from "@/types/property"

interface PropertyFiltersProps {
  activeFilter: PropertyType
  categoryFilter: CategoryFilter
  onTypeFilterChange: (filter: PropertyType) => void
  onCategoryFilterChange: (filter: CategoryFilter) => void
}

export function PropertyFilters({
  activeFilter,
  categoryFilter,
  onTypeFilterChange,
  onCategoryFilterChange
}: PropertyFiltersProps) {
  return (
    <div className="max-w-5xl mx-auto mb-8 bg-white rounded-2xl shadow-lg p-6 md:p-8">
      {/* Filtros por Tipo de Operación */}
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tag className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-gray-900">Tipo de Operación</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { value: "Todas" as CategoryFilter, label: "Todas", icon: Building2 },
            { value: "VENTA" as CategoryFilter, label: "Venta", icon: Tag },
            { value: "ALQUILER" as CategoryFilter, label: "Alquiler", icon: Key },
            { value: "COMERCIAL" as CategoryFilter, label: "Comercial", icon: Briefcase },
            { value: "TERRENO" as CategoryFilter, label: "Terreno", icon: Landmark }
          ].map((filter) => {
            const Icon = filter.icon
            const isActive = categoryFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => onCategoryFilterChange(filter.value)}
                className={`
                  relative flex flex-col items-center justify-center p-4 rounded-xl border-2 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-md
                  ${isActive 
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-600 text-white shadow-lg scale-105' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                  }
                `}
              >
                <Icon className={`h-6 w-6 mb-2 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {filter.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Separador */}
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-4 text-sm text-gray-500 font-medium">Y</span>
        </div>
      </div>

      {/* Filtros por Tipo de Propiedad */}
      <div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Home className="h-5 w-5 text-emerald-600" />
          <h3 className="text-lg font-bold text-gray-900">Tipo de Propiedad</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { value: "Todas" as PropertyType, label: "Todas", icon: Building2 },
            { value: "Casas" as PropertyType, label: "Casas", icon: Home },
            { value: "Departamentos" as PropertyType, label: "Deptos", icon: Building2 },
            { value: "Terrenos" as PropertyType, label: "Terrenos", icon: Landmark },
            { value: "Oficinas" as PropertyType, label: "Oficinas", icon: Briefcase }
          ].map((filter) => {
            const Icon = filter.icon
            const isActive = activeFilter === filter.value
            return (
              <button
                key={filter.value}
                onClick={() => onTypeFilterChange(filter.value)}
                className={`
                  relative flex flex-col items-center justify-center p-4 rounded-xl border-2 
                  transition-all duration-300 transform hover:scale-105 hover:shadow-md
                  ${isActive 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-600 text-white shadow-lg scale-105' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }
                `}
              >
                <Icon className={`h-6 w-6 mb-2 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {filter.label}
                </span>
                {isActive && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

