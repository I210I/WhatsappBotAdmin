import { useAuth } from '../context/AuthContext';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

import type { Node, Edge } from 'reactflow';

const initialNodes: Node[] = [
  { id: '1', type: 'input', data: { label: 'Inicio' }, position: { x: 100, y: 100 } },
];
const initialEdges: Edge[] = [];

export default function ProjectPage({ projectId, onBack }: { projectId: string, onBack: () => void }) {
  const { user } = useAuth();
  // Aquí puedes cargar nodos/edges reales por proyecto
  return (
    <div style={{ height: '100vh', background: '#f6f6f6' }}>
      <div style={{ padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={onBack}>← Volver</button>
        <h2 style={{ margin: 0 }}>Proyecto {projectId}</h2>
        <span style={{ marginLeft: 'auto', color: '#888' }}>{user}</span>
      </div>
      <div style={{ height: '80vh', background: '#fff', margin: 16, borderRadius: 8, boxShadow: '0 2px 8px #0001' }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
          <MiniMap />
          <Controls />
          <Background color="#f6f6f6" gap={16} />
        </ReactFlow>
      </div>
    </div>
  );
}
