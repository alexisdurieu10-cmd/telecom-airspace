import Link from 'next/link';

const projets = [
  {
    titre: 'Aéromodélisme',
    href: '/projets/aeromodelisme',
    description: 'Conception et pilotage de modèles réduits d\'avions.',
  },
];

export default function Projets() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Projets</h1>
      <p className="text-slate-500 mb-12 text-lg">Les projets techniques et créatifs de l&apos;association.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {projets.map((projet) => (
          <Link key={projet.titre} href={projet.href}>
            <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
              <div className="bg-slate-200 h-56 flex items-center justify-center text-slate-400 text-sm">
                Photo à venir
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-blue-900 mb-3">{projet.titre}</h2>
                <p className="text-slate-600">{projet.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
