import Login from '../components/Login';

export default function LoginPage({ onLogin }: { onLogin: (email: string) => void }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f6f6' }}>
      <Login onLogin={onLogin} />
    </div>
  );
}
