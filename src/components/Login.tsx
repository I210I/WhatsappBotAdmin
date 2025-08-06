import { useState } from 'react';
import { dummyUsers } from '../dummy/users';

interface LoginProps {
  onLogin: (userId: string) => void;
}


export default function Login({ onLogin }: LoginProps) {
  const [countryCode, setCountryCode] = useState('+54');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!countryCode || !phone || !password) {
      setError('Completa todos los campos');
      return;
    }
    const user = dummyUsers.find(u => u.countryCode === countryCode && u.phone === phone && u.password === password);
    if (!user) {
      setError('Usuario o contraseña incorrectos');
      return;
    }
    setError('');
    onLogin(user.id);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto p-6 flex flex-col gap-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4 text-center">Iniciar sesión</h2>
      <div className="flex gap-2 mb-2">
        <select
          className="border rounded px-2 py-1 bg-gray-50"
          value={countryCode}
          onChange={e => setCountryCode(e.target.value)}
        >
          <option value="+54">🇦🇷 +54</option>
          <option value="+57">🇨🇴 +57</option>
          <option value="+52">🇲🇽 +52</option>
          <option value="+34">🇪🇸 +34</option>
        </select>
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-32 border rounded px-2 py-1"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          autoFocus
        />
      </div>
      <input
        type="password"
        placeholder="Contraseña"
        className="border rounded px-2 py-1 mb-2"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button type="submit" className="bg-blue-600 text-white rounded py-2 font-semibold hover:bg-blue-700 transition">Entrar</button>
    </form>
  );
}
