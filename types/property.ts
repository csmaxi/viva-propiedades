// Tipos de propiedad
export type PropertyType = "Todas" | "Casas" | "Departamentos" | "Terrenos" | "Oficinas"
export type CategoryFilter = "Todas" | "VENTA" | "ALQUILER" | "COMERCIAL" | "TERRENO"

// Interfaz para las propiedades
export interface Property {
  id: number
  title: string
  price: string
  location: string
  bedrooms?: number
  bathrooms?: number
  parking?: number | string
  area: string
  description: string
  image: string
  type: PropertyType
  category: "VENTA" | "ALQUILER" | "COMERCIAL" | "TERRENO"
  badge?: string
}

