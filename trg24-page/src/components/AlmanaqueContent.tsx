'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AlmanaqueContent() {
  const previewData = [
    { player_a: "Cris Busquets", sets_team_a: 1, sets_team_b: 1, player_b: "Sngular" },
    { player_a: "Daniel Sanchez-Crespo", sets_team_a: 2, sets_team_b: 3, player_b: "Tinybird" },
    { player_a: "Félix López", sets_team_a: 2, sets_team_b: 1, player_b: "Extramile Cloud" },
    { player_a: "David Bonilla", sets_team_a: 3, sets_team_b: 3, player_b: "Juan Gil Miqueo" },
    { player_a: "Toño de la Torre", sets_team_a: 0, sets_team_b: 2, player_b: "Roberto Canales" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-700 py-12 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-400 mb-2 drop-shadow-lg">Operación Almanaque</h1>
          <p className="text-2xl text-red-500 font-semibold">¡Ayuda a Biff a hacerse rico con los resultados de la Liga Tarugo 24!</p>
          <div className="mt-4 max-w-md mx-auto">
            <Image
              src="/mcfly-almanaque.png"
              alt="Almanaque Deportivo de Regreso al Futuro"
              width={300}
              height={168}
              layout="responsive"
              className="rounded-md border-2 border-red-500"
            />
          </div>
        </header>

        <main className="space-y-12">
          <section className="bg-blue-800 shadow-lg rounded-lg p-6 border-2 border-yellow-400">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">La Misión</h2>
            <p className="text-white mb-4">
              Biff tiene el Almanaque Deportivo del futuro donde aparecen los resultados de los partidos de pádel entre los <Link
                href="https://www.trgcon.com/#patrocinio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline ml-1"
              >
                patrocinadores, speakers, y mecenas de la TRGCON24
              </Link> ¡pero le falta la página de clasificación! Necesita tu ayuda para completar la información y hacer historia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

              <div className="w-full sm:w-1/2 aspect-video relative">
                <iframe
                  src="https://www.youtube.com/embed/2DE-de5d1Wk?si=kXIFGg54Ubtm_-rV"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-md border-2 border-red-500"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="bg-blue-800 shadow-lg rounded-lg p-6 border-2 border-yellow-400">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Datos del Almanaque</h2>
            <p className="text-white mb-4">
              Aquí tienes una vista previa de los primeros 5 registros del Almanaque Deportivo:
            </p>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-yellow-400">Jugador A</TableHead>
                    <TableHead className="text-yellow-400">Sets Jugador A</TableHead>
                    <TableHead className="text-yellow-400">Sets Jugador B</TableHead>
                    <TableHead className="text-yellow-400">Jugador B</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-white">{row.player_a}</TableCell>
                      <TableCell className="text-white">{row.sets_team_a}</TableCell>
                      <TableCell className="text-white">{row.sets_team_b}</TableCell>
                      <TableCell className="text-white">{row.player_b}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-white mt-4  italic"> Los partidos son a 10 minutos, que la pista está muy cotizada. Por eso puede haber empates.
            </p>
            <p className="text-white mt-4">
              Puedes ver todos los datos aquí:
              <Link
                href="https://storage.googleapis.com/trg24-matches/partidos_trgcon24.csv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline ml-1"
              >
                Descargar CSV completo
              </Link>
            </p>
          </section>

          <section className="bg-blue-800 shadow-lg rounded-lg p-6 border-2 border-yellow-400">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">¿Cómo puedes ayudar?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-red-500 mb-2">
                  Regístrate en Tinybird
                </h3>
                <p className="text-white">
                  <Link
                    href="https://app.tinybird.co/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline ml-1"
                  >
                    Crea tu cuenta, un workspace
                  </Link> y

                  sube el <Link
                    href="https://storage.googleapis.com/trg24-matches/partidos_trgcon24.csv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline ml-1"
                  >
                    CSV con los resultados de los partidos.
                  </Link>
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-500 mb-2">Consulta el Almanaque</h3>
                <p className="text-white">
                  Revisa los datos del Almanaque y, sabiendo que los partidos ganados suman 3 puntos, los empatados 1, y los perdidos 0, calcula la clasificación de la Liga Tarugo 24 usando <Link
                    href="https://www.tinybird.co/docs/concepts/pipes"
                    className="text-yellow-400 hover:underline ml-1"

                  >
                    Pipes en tu Workspace de Tinybird.
                  </Link>
                </p>
                <p className="mt-2">
                  Tendrás que publicar API Endpoints que resuelvan una serie de preguntas que verás en el formulario de más abajo.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium text-red-500 mt-4 mb-2">Completa la información</h3>
              <p className="text-white">
                Tendrás que adjuntar las URLs generadas de los API Endpoints de Tinybird publicados, incluyento los tokens de acceso.
              </p>
              <Button
                asChild
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4"
              >
                <Link
                  href="https://forms.gle/ABbcyaCDx2f3mQBu5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enviar datos de clasificación
                </Link>
              </Button>
            </div>
          </section>

          <section className="bg-blue-800 shadow-lg rounded-lg p-6 border-2 border-yellow-400">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">¿Cómo sabes si has ganado?</h2>
            <p className="text-white mb-4">
              El viernes 22 anunciaremos el ganador en Twitter y LinkedIn entre todos los que acierten.
            </p>
            <p className="text-white mb-4">
              Y, por supuesto, te mandamos email.
            </p>
          </section>

          <section className="bg-blue-800 shadow-lg rounded-lg p-6 border-2 border-yellow-400">
            <h2 className="text-3xl font-semibold text-yellow-400 mb-4">Advertencia Temporal</h2>
            <p className="text-white mb-4">
              Recuerda, alterar el pasado puede tener consecuencias imprevistas en el futuro. ¡Usa esta información con responsabilidad!
            </p>
          </section>
        </main>

        <footer className="mt-12 text-center text-yellow-400">
          <p>&copy; {new Date().getFullYear()} Operación Almanaque. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  )
}
