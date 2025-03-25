import AudioPlayer from "@/components/audio-player"

export default function EpisodesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">Episodios</h1>
            <p className="text-xl text-gray-500 dark:text-gray-400 font-light">
              Explora nuestra colección completa de episodios sobre tecnología, cultura y entretenimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            {/* Episode 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                      Episodio 5
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight">El futuro de la inteligencia artificial</h2>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">45 min</span>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  En este episodio exploramos las últimas tendencias en IA y cómo están transformando nuestra forma de
                  trabajar y vivir. Analizamos los avances más recientes y sus implicaciones éticas.
                </p>
                <div className="mb-6">
                  <AudioPlayer audioSrc="/mi_podcast.mp3" />
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                      Episodio 4
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight">Desarrollo web en 2025</h2>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">38 min</span>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Las tecnologías que dominarán el desarrollo web este año. Analizamos frameworks, herramientas y
                  metodologías que todo desarrollador debería conocer.
                </p>
                <div className="mb-6">
                  <AudioPlayer audioSrc="/mi_podcast.mp3" />
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-8">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                      Episodio 3
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight">Entrevista con María López</h2>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">52 min</span>
                </div>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                  Hablamos con la experta en ciberseguridad sobre los retos actuales en la protección de datos y
                  sistemas informáticos. María comparte consejos prácticos para empresas y particulares.
                </p>
                <div className="mb-6">
                  <AudioPlayer audioSrc="/mi_podcast.mp3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

