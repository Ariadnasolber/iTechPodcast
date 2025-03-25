import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import AudioPlayer from "@/components/audio-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-semibold mb-6 tracking-tight">"¿Ari Qué?"</h1>
            <p className="text-xl mb-10 text-gray-500 dark:text-gray-400 font-light leading-relaxed">
              Tu podcast sobre 
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8">
                <Play className="mr-2 h-5 w-5" /> Escuchar ahora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Episode */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 tracking-tight text-center">Último episodio</h2>
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
            <div className="aspect-video relative bg-gray-100 dark:bg-gray-700">
              <img
                src="/mitologia.png?height=400&width=800"
                alt="Portada del episodio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 flex items-center justify-center bg-white/30 backdrop-blur-md hover:bg-white/40 text-white border border-white/50"
                >
                  <Play className="h-8 w-8 ml-1" />
                </Button>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2 tracking-tight">Mitología Japonesa</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Episodio 5 • 45 minutos</p>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                En este episodio exploramos las últimas tendencias en IA y cómo están transformando nuestra forma de
                trabajar y vivir.
              </p>
              <AudioPlayer audioSrc="/mi_podcast.mp3" />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12 tracking-tight text-center">Explora nuestro contenido</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Link href="/episodios" className="group">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Episodios</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Explora todos nuestros episodios y descubre nuevo contenido.
                </p>
              </div>
            </Link>

            <Link href="/produccion" className="group">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Producción</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Conoce cómo creamos nuestro podcast y las herramientas que usamos.
                </p>
              </div>
            </Link>

            <Link href="/contacto" className="group">
              <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-lg">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Contacto</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Envíanos tus sugerencias o participa en futuros episodios.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

