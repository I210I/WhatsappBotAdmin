import { useAuth } from '../context/AuthContext';

export default function DashboardPage({ onSelectProject }: { onSelectProject: (id: string) => void }) {
  const { user, logout } = useAuth();
  // Simulación de proyectos
  const projects = [
    { id: '1', name: 'Proyecto Demo 1' },
    { id: '2', name: 'Proyecto Demo 2' },
  ];

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>Bienvenido, {user}</h2>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
      <h3>Proyectos</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects.map(p => (
          <li key={p.id} style={{ marginBottom: 12 }}>
            <button onClick={() => onSelectProject(p.id)} style={{ width: '100%', textAlign: 'left', padding: 12, borderRadius: 6, border: '1px solid #ddd', background: '#fff' }}>
              {p.name}
            </button>
          </li>
        ))}
      </ul>
      <button style={{ marginTop: 16 }}>+ Nuevo proyecto</button>
    </div>
  );
}
