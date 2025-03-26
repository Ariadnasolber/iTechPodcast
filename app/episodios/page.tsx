import AudioPlayer from "@/components/audio-player";

export default function EpisodesPage() {
    return (
        <main className="min-h-screen bg-white dark:bg-zinc-950">
            {/* Header */}
            <section className="bg-zinc-50 dark:bg-zinc-900 pt-32 pb-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl font-semibold mb-4 tracking-tight">
                            Episodios
                        </h1>
                        <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light">
                            Explora todos nuestros episodios y descubre las últimas novedades de Apple.
                        </p>
                    </div>
                </div>
            </section>

            {/* Episodes List */}
            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-8">
                        {/* Episode 0 */}
                        <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-700">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                                            Episodio 5
                                        </span>
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                        🎙️ Nuevos productos de Apple en 2025
                                        </h2>
                                    </div>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        45 min
                                    </span>
                                </div>
                                <p className="mb-6 text-zinc-600 dark:text-zinc-50">
                                Hoy hablaremos de algo que nos tiene muy emocionados: los nuevos productos que Apple lanzará en 2025. Y ojo, porque las filtraciones sugieren que veremos más de 15 dispositivos nuevos este año. 
                                </p>
                                <div className="mb-6">
                                    <AudioPlayer audioSrc="/mi_podcast.mp3" />
                                </div>
                            </div>
                        </div>

                        {/* Episode 1 */}
                        <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-700">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                                            Episodio 5
                                        </span>
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                        🎙️ Apple Watch con cámara integrada y
                                            funciones avanzadas
                                        </h2>
                                    </div>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        45 min
                                    </span>
                                </div>
                                <p className="mb-6 text-zinc-600 dark:text-zinc-50">
                                Hoy hablamos de un rumor que podría cambiar la forma en que usamos el Apple Watch. ¿Te imaginas un reloj con cámara integrada? 
                                </p>
                                <div className="mb-6">
                                    <AudioPlayer audioSrc="/mi_podcast.mp3" />
                                </div>
                            </div>
                        </div>

                        {/* Episode 2 */}
                        <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-700">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                                            Episodio 4
                                        </span>
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                        🎙️ Anuncio del evento especial de Apple
                                            y expectativas sobre iOS 19{" "}
                                        </h2>
                                    </div>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        38 min
                                    </span>
                                </div>
                                <p className="mb-6 text-zinc-600 dark:text-zinc-50">
                                Hoy tenemos grandes noticias: Apple ha confirmado un "evento especial" para el 9 de junio de 2025, coincidiendo con la WWDC. 
                                </p>
                                <div className="mb-6">
                                    <AudioPlayer audioSrc="/mi_podcast.mp3" />
                                </div>
                            </div>
                        </div>

                        {/* Episode 3 */}
                        <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg overflow-hidden border border-zinc-100 dark:border-zinc-700">
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <span className="inline-block bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-sm font-medium px-3 py-1 rounded-full mb-2">
                                            Episodio 3
                                        </span>
                                        <h2 className="text-2xl font-semibold tracking-tight">
                                        🎙️ Rumores sobre el rediseño del iPhone
                                            17{" "}
                                        </h2>
                                    </div>
                                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                                        52 min
                                    </span>
                                </div>
                                <p className="mb-6 text-zinc-600 dark:text-zinc-50">
                                Hoy hablaremos de un tema que está generando mucha expectativa: el posible rediseño del iPhone 17. Y es que los rumores apuntan a que Apple planea cambiar radicalmente su línea de smartphones. 
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
    );
}
