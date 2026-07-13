import Image from 'next/image';

const bureau = [
  { nom: 'Jade GUITTARD', poste: 'Présidente', photo: '/membres/jade_guittard.jpg', position: 'object-top' },
  { nom: 'Alexis DURIEU', poste: 'Vice-Président', photo: '/membres/alexis_durieu.jpg', position: 'object-center' },
  { nom: 'Florent DELALANDE', poste: 'Secrétaire Général', photo: '/membres/florent_delalande.jpg', position: 'object-top' },
  { nom: 'Julien REGNIER', poste: 'Trésorier', photo: '/membres/julien_regnier.jpg', position: 'object-top' },
  { nom: 'Tom DUGAIL', poste: 'Vice-Trésorier', photo: '/membres/tom_dugail.jpg', position: 'object-top' },
];

export default function Membres() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Le Bureau</h1>
      <p className="text-slate-500 mb-12 text-lg">L&apos;équipe qui dirige l&apos;association cette année.</p>

      <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
        {bureau.map((membre) => (
          <div key={membre.nom} className={`bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow text-center${bureau.indexOf(membre) === bureau.length - 1 && bureau.length % 2 !== 0 ? ' col-span-2 max-w-sm mx-auto w-full' : ''}`}>
            <div className="relative h-64 w-full bg-slate-100">
              <Image
                src={membre.photo}
                alt={membre.nom}
                fill
                className={`object-cover ${membre.position}`}
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-slate-900">{membre.nom}</h2>
              <p className="text-blue-700 font-medium mt-1">{membre.poste}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
