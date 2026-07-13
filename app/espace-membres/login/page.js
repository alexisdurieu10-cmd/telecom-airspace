'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/espace-membres');
    } else {
      setError('Mot de passe incorrect');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-96 flex items-center justify-center px-4 py-16">
      <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-10 w-full max-w-md">
        <h1 className="text-2xl font-extrabold text-blue-900 mb-2 text-center">Espace membres</h1>
        <p className="text-slate-500 text-center mb-8">Réservé aux membres de l&apos;association</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-900 text-white font-bold py-3 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50"
          >
            {loading ? 'Connexion...' : 'Accéder'}
          </button>
        </form>
      </div>
    </div>
  );
}
