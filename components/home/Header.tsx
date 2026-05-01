import Link from "next/link"
import { Building2, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        <Link className="flex items-center justify-center" href="/">
          <Building2 className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
          <span className="ml-2 text-lg sm:text-2xl font-bold text-gray-900">Viva Propiedades</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#propiedades">
            Propiedades
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#nosotros">
            Nosotros
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors" href="#contacto">
            Contacto
          </Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-emerald-600 transition-colors"
          aria-label="Menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden animate-in slide-in-from-top-2">
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="#propiedades"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Propiedades
            </Link>
            <Link
              href="#nosotros"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Nosotros
            </Link>
            <Link
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
