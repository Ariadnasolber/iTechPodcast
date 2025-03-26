import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <section className="bg-zinc-50 dark:bg-zinc-900 pt-32 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-semibold mb-4 tracking-tight">Contacto y Participación</h1>
            <p className="text-xl text-zinc-500 dark:text-zinc-400 font-light">
              Conéctate con nosotros y forma parte de nuestra comunidad de podcast.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Tabs defaultValue="contacto" className="mb-8">
              <TabsList className="grid w-full grid-cols-2 rounded-full p-1 bg-zinc-100 dark:bg-zinc-800">
                <TabsTrigger
                  value="contacto"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700"
                >
                  Contacto
                </TabsTrigger>
                <TabsTrigger
                  value="participacion"
                  className="rounded-full data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700"
                >
                  Participación
                </TabsTrigger>
              </TabsList>
              <TabsContent value="contacto">
                <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8 border border-zinc-100 dark:border-zinc-700">
                  <h2 className="text-2xl font-semibold mb-6">Envíanos un mensaje</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input id="name" placeholder="Tu nombre" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" className="rounded-xl" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Input id="subject" placeholder="Asunto de tu mensaje" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" placeholder="Escribe tu mensaje aquí" rows={5} className="rounded-xl" />
                    </div>
                    <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                      Enviar mensaje
                    </Button>
                  </form>
                </div>
              </TabsContent>
              <TabsContent value="participacion">
                <div className="bg-white dark:bg-zinc-800 rounded-3xl shadow-lg p-8 border border-zinc-100 dark:border-zinc-700">
                  <h2 className="text-2xl font-semibold mb-6">Participa en nuestro podcast</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name-participation">Nombre</Label>
                        <Input id="name-participation" placeholder="Tu nombre" className="rounded-xl" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email-participation">Correo electrónico</Label>
                        <Input
                          id="email-participation"
                          type="email"
                          placeholder="tu@email.com"
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="topic">Tema o sugerencia</Label>
                      <Input id="topic" placeholder="Tema que te gustaría que tratáramos" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe brevemente tu idea o participación"
                        rows={3}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Archivo de audio (opcional)</Label>
                      <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-6 text-center">
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
                          className="mx-auto mb-2 text-zinc-400"
                        >
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" x2="12" y1="19" y2="22"></line>
                        </svg>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                          Arrastra y suelta tu archivo de audio o
                        </p>
                        <Button variant="outline" size="sm" className="rounded-full">
                          Seleccionar archivo
                        </Button>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">MP3 o WAV, máximo 20MB</p>
                      </div>
                    </div>
                    <Button type="submit" className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                      Enviar participación
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  )
}

