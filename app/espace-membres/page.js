'use client';

import { useRouter } from 'next/navigation';

export default function EspaceMembres() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-blue-900 mb-2">Espace membres</h1>
          <p className="text-slate-500 text-lg">Bienvenue dans l&apos;espace réservé aux membres.</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Se déconnecter
        </button>
      </div>

      <div className="bg-slate-50 rounded-2xl p-10 text-center text-slate-400">
        Trombinoscope à venir
      </div>
    </div>
  );
}
