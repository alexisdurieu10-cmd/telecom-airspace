import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative bg-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-32 flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Télécom Air & Space
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-10">
            L&apos;association d&apos;Aéronautique, Spatial et Défense de Télécom Paris
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projets"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors shadow-lg"
            >
              Nos projets
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-blue-700 transition-colors"
            >
              Nous rejoindre
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Qui sommes-nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              titre: 'Aéronautique',
              texte: 'Exploration et passion pour l\'aviation civile et militaire.',
              icone: '✈',
            },
            {
              titre: 'Spatial',
              texte: 'Projets autour de l\'exploration spatiale et des technologies associées.',
              icone: '🚀',
            },
            {
              titre: 'Défense',
              texte: 'Réflexion sur les enjeux stratégiques et de défense nationale.',
              icone: '🛡',
            },
          ].map((carte) => (
            <div
              key={carte.titre}
              className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{carte.icone}</div>
              <h3 className="text-xl font-bold text-blue-700 mb-3">{carte.titre}</h3>
              <p className="text-slate-600">{carte.texte}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
