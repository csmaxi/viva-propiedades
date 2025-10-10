import { Building2, Phone, Mail, Clock } from "lucide-react"

export function Footer() {
  return (
    <>
      <footer
        id="contacto"
        className="w-full py-6 sm:py-8 md:py-12 border-t bg-gray-900"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building2 className="h-6 w-6 text-emerald-400" />
                <span className="text-xl font-bold text-white">Viva Propiedades</span>
              </div>
              <p className="text-gray-400 text-sm">
                Tu socio de confianza en el mercado inmobiliario. Hacemos realidad tus sueños de propiedad.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Compra de propiedades</li>
                <li>Venta de inmuebles</li>
                <li>Alquiler y gestión</li>
                <li>Asesoría inmobiliaria</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Propiedades</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Casas residenciales</li>
                <li>Departamentos</li>
                <li>Terrenos</li>
                <li>Oficinas comerciales</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@vivapropiedades.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 flex-shrink-0" />
                  <span>Lun-Vie: 9:00-18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full py-4 bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6">
          <p className="text-center text-xs text-gray-400">© 2024 Viva Propiedades. Todos los derechos reservados.</p>
        </div>
      </div>
    </>
  )
}

