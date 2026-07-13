'use client';

import Link from 'next/link';
import { useState } from 'react';

const liens = [
  { nom: 'Accueil', href: '/' },
  { nom: 'Évènements', href: '/evenements' },
  {
    nom: 'Projets',
    href: '/projets',
    sousMenus: [{ nom: 'Aéromodélisme', href: '/projets/aeromodelisme' }],
  },
  { nom: 'Membres', href: '/membres' },
  { nom: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <nav className="bg-blue-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">

        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-900" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10"/>
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <span className="font-bold text-xl tracking-wide">Télécom Air & Space</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {liens.map((lien) =>
            lien.sousMenus ? (
              <div key={lien.nom} className="relative">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-1 hover:text-blue-200 transition-colors font-medium"
                >
                  {lien.nom}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                {dropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-white text-blue-900 rounded-lg shadow-xl py-2 min-w-48 z-50 border border-blue-100">
                    {lien.sousMenus.map((sous) => (
                      <Link
                        key={sous.nom}
                        href={sous.href}
                        onClick={() => setDropdown(false)}
                        className="block px-5 py-3 hover:bg-blue-50 transition-colors font-medium"
                      >
                        {sous.nom}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={lien.nom}
                href={lien.href}
                className="hover:text-blue-200 transition-colors font-medium"
              >
                {lien.nom}
              </Link>
            )
          )}
        </div>

        <Link
          href="/espace-membres"
          className="hidden md:block bg-white text-blue-900 hover:bg-blue-50 transition-colors px-5 py-2.5 rounded-full text-sm font-bold shadow"
        >
          Espace membres
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuMobile(!menuMobile)}
          aria-label="Menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {menuMobile
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
            }
          </svg>
        </button>
      </div>

      {menuMobile && (
        <div className="md:hidden bg-blue-800 px-6 pb-6 flex flex-col gap-4 pt-4">
          {liens.map((lien) => (
            <div key={lien.nom}>
              <Link
                href={lien.href}
                onClick={() => setMenuMobile(false)}
                className="hover:text-blue-200 transition-colors block font-medium text-lg"
              >
                {lien.nom}
              </Link>
              {lien.sousMenus?.map((sous) => (
                <Link
                  key={sous.nom}
                  href={sous.href}
                  onClick={() => setMenuMobile(false)}
                  className="block pl-4 mt-2 text-blue-200 hover:text-white transition-colors"
                >
                  {sous.nom}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/espace-membres"
            onClick={() => setMenuMobile(false)}
            className="bg-white text-blue-900 font-bold px-5 py-3 rounded-full text-center mt-2"
          >
            Espace membres
          </Link>
        </div>
      )}
    </nav>
  );
}
