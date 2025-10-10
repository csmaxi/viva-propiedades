import Link from "next/link"
import { Building2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
          <span className="ml-2 text-lg sm:text-2xl font-bold text-gray-900">Viva Propiedades</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-4 md:gap-6">
          <Link className="text-xs sm:text-sm font-medium hover:text-emerald-600 transition-colors" href="#servicios">
            Servicios
          </Link>
          <Link className="text-xs sm:text-sm font-medium hover:text-emerald-600 transition-colors" href="#propiedades">
            Propiedades
          </Link>
          <Link className="text-xs sm:text-sm font-medium hover:text-emerald-600 transition-colors" href="#nosotros">
            Nosotros
          </Link>
          <Link className="text-xs sm:text-sm font-medium hover:text-emerald-600 transition-colors" href="#contacto">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

