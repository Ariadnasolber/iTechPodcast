import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="bg-zinc-50 dark:bg-zinc-900 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">Proceso de Producción</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light">
              Descubre cómo creamos nuestro podcast desde la grabación hasta la publicación.
            </p>
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Nuestro Estudio</h2>
              <p className="text-zinc-600 dark:text-zinc-300 mb-6 leading-relaxed">
                Contamos con un estudio equipado con la mejor tecnología para garantizar la calidad de sonido en cada
                episodio. Utilizamos micrófonos de condensador, interfaces de audio y tratamiento acústico para
                minimizar el ruido ambiente.
              </p>
              <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Cada episodio pasa por un riguroso proceso de pre-producción, grabación, edición y masterización antes
                de ser publicado en nuestra web y plataformas de streaming.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Estudio de grabación"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-12 text-center">Proceso de Creación</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Card className="rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">1. Grabación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Utilizamos Audacity para grabar nuestras voces con micrófonos de condensador. Configuramos la
                  frecuencia de muestreo a 44.1kHz y profundidad de 24 bits para obtener la mejor calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">2. Edición</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Eliminamos ruidos de fondo, silencios innecesarios y errores de grabación. Organizamos el contenido
                  para mantener un ritmo dinámico y atractivo para los oyentes.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">3. Música</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Incorporamos música de fondo libre de derechos y efectos sonoros para enriquecer la experiencia
                  auditiva. Utilizamos Auto Duck para bajar automáticamente el volumen durante las voces.
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">4. Exportación</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Exportamos el audio final en formato MP3 a 192kbps, encontrando el equilibrio perfecto entre calidad y
                  tamaño de archivo para una reproducción fluida en la web.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Software and Tools */}
          <div className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold mb-8 text-center">Herramientas que utilizamos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 text-center shadow-sm">
                <img src="/audacitylogo.png?height=80&width=80" alt="Audacity" className="w-16 h-16 mx-auto mb-3" />
                <h3 className="font-medium">Audacity</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Grabación y edición</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 text-center shadow-sm">
                <img src="/FFmpeg.png?height=80&width=80" alt="FFmpeg" className="w-16 h-16 mx-auto mb-3" />
                <h3 className="font-medium">FFmpeg</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Conversión de audio</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 text-center shadow-sm">
                <img
                  src="/Adobe_Audition.png?height=80&width=80"
                  alt="Adobe Audition"
                  className="w-16 h-16 mx-auto mb-3"
                />
                <h3 className="font-medium">Adobe Audition</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Masterización</p>
              </div>
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-4 text-center shadow-sm">
                <img src="/canvalogo.png?height=80&width=80" alt="Canva" className="w-16 h-16 mx-auto mb-3" />
                <h3 className="font-medium">Canva</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Diseño de portadas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

