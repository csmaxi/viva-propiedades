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
    <div className="max-w-5xl mx-auto mb-8 bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8">
      <div className="mb-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Tag className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
          <h3 className="text-sm sm:text-lg font-bold text-gray-900">Tipo de Operación</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:gap-3 sm:mx-0 sm:px-0">
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
                  flex-shrink-0 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 border-emerald-600 text-white shadow-lg' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                  }
                  min-w-[80px] sm:min-w-0
                `}
              >
                <Icon className={`h-5 w-5 sm:h-6 sm:w-6 mb-1.5 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                <span className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {filter.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-xs sm:text-sm text-gray-400 font-medium">o</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Home className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
          <h3 className="text-sm sm:text-lg font-bold text-gray-900">Tipo de Propiedad</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:gap-3 sm:mx-0 sm:px-0">
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
                  flex-shrink-0 flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl border-2 
                  transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-br from-blue-500 to-blue-600 border-blue-600 text-white shadow-lg' 
                    : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                  }
                  min-w-[80px] sm:min-w-0
                `}
              >
                <Icon className={`h-5 w-5 sm:h-6 sm:w-6 mb-1.5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                <span className={`text-xs sm:text-sm font-semibold whitespace-nowrap ${isActive ? 'text-white' : 'text-gray-700'}`}>
                  {filter.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
