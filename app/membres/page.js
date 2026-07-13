import Image from 'next/image';
import Link from 'next/link';

const bureau = [
  { nom: 'Jade GUITTARD', poste: 'Présidente', photo: '/membres/jade_guittard.jpg', position: 'object-top', linkedin: 'https://www.linkedin.com/in/jade-guittard/' },
  { nom: 'Alexis DURIEU', poste: 'Vice-Président', photo: '/membres/alexis_durieu.jpg', position: 'object-center', linkedin: 'https://www.linkedin.com/in/alexis-durieu-602b3325b/' },
  { nom: 'Florent DELALANDE', poste: 'Secrétaire Général', photo: '/membres/florent_delalande.jpg', position: 'object-top', linkedin: 'https://www.linkedin.com/in/florent-delalande-39a226291/' },
  { nom: 'Julien REGNIER', poste: 'Trésorier', photo: '/membres/julien_regnier.jpg', position: 'object-top', linkedin: 'https://www.linkedin.com/in/julien--regnier/' },
  { nom: 'Tom DUGAIL', poste: 'Vice-Trésorier', photo: '/membres/tom_dugail.jpg', position: 'object-top', linkedin: 'https://www.linkedin.com/in/tom-dugail/' },
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
            <div className="p-5 flex flex-col items-center gap-2">
              <h2 className="text-lg font-bold text-slate-900">{membre.nom}</h2>
              <p className="text-blue-700 font-medium">{membre.poste}</p>
              <a
                href={membre.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-slate-400 hover:text-blue-700 transition-colors"
                aria-label={`LinkedIn de ${membre.nom}`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
