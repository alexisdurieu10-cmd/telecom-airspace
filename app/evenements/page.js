const evenements = [
  {
    titre: 'Baptême avion',
    date: '2025',
    description: 'Description à venir.',
  },
  {
    titre: 'Week-end planeur',
    date: '2025',
    description: 'Description à venir.',
  },
];

export default function Evenements() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Évènements</h1>
      <p className="text-slate-500 mb-12 text-lg">Retrouvez ici les évènements passés de l&apos;association.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {evenements.map((evt) => (
          <div key={evt.titre} className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-slate-200 h-56 flex items-center justify-center text-slate-400 text-sm">
              Photo à venir
            </div>
            <div className="p-6">
              <span className="text-blue-900 font-semibold text-sm">{evt.date}</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1 mb-3">{evt.titre}</h2>
              <p className="text-slate-600">{evt.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
