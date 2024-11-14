'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AlmanaqueContent() {
  const previewData = [
    { player_a: "Aurelia Bustos", goals_team_a: 2, goals_team_b: 0, player_b: "Raúl Cortina" },
    { player_a: "Playtomic", goals_team_a: 2, goals_team_b: 1, player_b: "Juán Gil Miqueo" },
    { player_a: "Manuel Recena", goals_team_a: 1, goals_team_b: 2, player_b: "Fátima Ballesteros" },
    { player_a: "Holafly", goals_team_a: 3, goals_team_b: 1, player_b: "Guillermo Montoya" },
    { player_a: "Félix López", goals_team_a: 2, goals_team_b: 2, player_b: "Álvaro Amor" },
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
              Biff tiene el Almanaque Deportivo del futuro donde aparecen los resultados de los partidos de fútbol entre los <Link
                href="https://www.trgcon.com/#patrocinio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline ml-1"
              >
                patrocinadores, speakers, y mecenas de la trg24
              </Link>  —puntuaciones de fútbol, con pádel se complicaba el tema— ¡pero le falta la página de clasificación! Necesita tu ayuda para completar la información y hacer historia.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">

              <div className="w-full sm:w-1/2 aspect-video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/2DE-de5d1Wk?si=kXIFGg54Ubtm_-rV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-md border-2 border-red-500"></iframe>
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
                    <TableHead className="text-yellow-400">Goles A</TableHead>
                    <TableHead className="text-yellow-400">Goles B</TableHead>
                    <TableHead className="text-yellow-400">Jugador B</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {previewData.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell className="text-white">{row.player_a}</TableCell>
                      <TableCell className="text-white">{row.goals_team_a}</TableCell>
                      <TableCell className="text-white">{row.goals_team_b}</TableCell>
                      <TableCell className="text-white">{row.player_b}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="text-white mt-4">
              Puedes ver todos los datos aquí:
              <Link
                href="https://storage.googleapis.com/trg24-matches/partidos_tarugo24.csv"
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
                <h3 className="text-xl font-medium text-red-500 mb-2">Consulta el Almanaque</h3>
                <p className="text-white">
                  Revisa los datos del Almanaque y, sabiendo que los partidos ganados suman 3 puntos, los empatados 1, y los perdidos 0, calcula la clasificación de la Liga Tarugo 24.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium text-red-500 mb-2">Completa la información</h3>
                <Button
                  asChild
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                >
                  <Link
                    href="https://forms.gle/ABbcyaCDx2f3mQBu5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar datos de clasificación
                  </Link>
                </Button>
                <p className="text-white mt-4">
                  Puedes usar cualquier herramienta: ábaco, calculadora, excel, pandas, duckdb,<Link
                    href="https://app.tinybird.co/signup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline ml-1"

                  >
                  Tinybird
                  </Link>... 
                </p>
              </div>
            </div>
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