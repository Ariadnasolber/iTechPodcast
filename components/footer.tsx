import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-6">SoundWaves</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">
              Tu podcast sobre tecnología, cultura y entretenimiento.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/episodios"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Episodios
                </Link>
              </li>
              <li>
                <Link
                  href="/produccion"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Producción
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Listen On */}
          <div>
            <h3 className="text-base font-semibold mb-6">Escúchanos en</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Spotify
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Apple Podcasts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Google Podcasts
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} SoundWaves. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Política de privacidad
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Términos de uso
            </Link>
            <Link href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Licencia CC
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

