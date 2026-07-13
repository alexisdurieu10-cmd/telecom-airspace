import Link from 'next/link';
import Image from 'next/image';

const liens = [
  { nom: 'Accueil', href: '/' },
  { nom: 'Évènements', href: '/evenements' },
  { nom: 'Projets', href: '/projets' },
  { nom: 'Membres', href: '/membres' },
  { nom: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo_TAS_globe_titre.jpg"
            alt="Logo Télécom Air & Space"
            width={180}
            height={60}
            className="rounded"
          />
          <p className="text-blue-200 text-sm">
            Association d&apos;Aéronautique, Spatial et Défense de Télécom Paris
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2">
            {liens.map((lien) => (
              <li key={lien.nom}>
                <Link href={lien.href} className="text-blue-200 hover:text-white transition-colors">
                  {lien.nom}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contact@telecom-airspace.fr"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              contact@telecom-airspace.fr
            </a>
            <a
              href="https://www.linkedin.com/company/t%C3%A9l%C3%A9com-aeronautics-space/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

      </div>
      <div className="border-t border-blue-800 text-center py-4 text-blue-300 text-sm">
        Télécom Air & Space — Télécom Paris
      </div>
    </footer>
  );
}
