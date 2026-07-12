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
  { nom: 'Développement', href: '/developpement' },
  { nom: 'Membres', href: '/membres' },
  { nom: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [menuMobile, setMenuMobile] = useState(false);

  return (
    <nav className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">

        <Link href="/" className="font-bold text-lg tracking-wide">
          Télécom Air & Space
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {liens.map((lien) =>
            lien.sousMenus ? (
              <div key={lien.nom} className="relative">
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="hover:text-blue-300 transition-colors flex items-center gap-1"
                >
                  {lien.nom} <span className="text-xs">▾</span>
                </button>
                {dropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-slate-800 rounded shadow-lg py-2 min-w-40 z-50">
                    {lien.sousMenus.map((sous) => (
                      <Link
                        key={sous.nom}
                        href={sous.href}
                        onClick={() => setDropdown(false)}
                        className="block px-4 py-2 hover:bg-slate-700 transition-colors"
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
                className="hover:text-blue-300 transition-colors"
              >
                {lien.nom}
              </Link>
            )
          )}
        </div>

        <Link
          href="/espace-membres"
          className="hidden md:block bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded text-sm font-medium"
        >
          Espace membres
        </Link>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuMobile(!menuMobile)}
          aria-label="Menu"
        >
          {menuMobile ? '✕' : '☰'}
        </button>
      </div>

      {menuMobile && (
        <div className="md:hidden bg-slate-800 px-4 pb-4 flex flex-col gap-4 pt-2">
          {liens.map((lien) => (
            <div key={lien.nom}>
              <Link
                href={lien.href}
                onClick={() => setMenuMobile(false)}
                className="hover:text-blue-300 transition-colors block"
              >
                {lien.nom}
              </Link>
              {lien.sousMenus?.map((sous) => (
                <Link
                  key={sous.nom}
                  href={sous.href}
                  onClick={() => setMenuMobile(false)}
                  className="block pl-4 mt-1 text-sm text-slate-300 hover:text-blue-300 transition-colors"
                >
                  {sous.nom}
                </Link>
              ))}
            </div>
          ))}
          <Link
            href="/espace-membres"
            onClick={() => setMenuMobile(false)}
            className="bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 rounded text-center text-sm font-medium"
          >
            Espace membres
          </Link>
        </div>
      )}
    </nav>
  );
}
