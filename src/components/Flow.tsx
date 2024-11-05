import { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
  NodeTypes,
} from 'reactflow';
import { ArrowDownToLine, CircuitBoard, ArrowUpFromLine } from 'lucide-react';
import CustomNode from './CustomNode';
import 'reactflow/dist/style.css';

const nodeTypes: NodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: '1',
    type: 'custom',
    data: { 
      label: 'Input Node',
      type: 'input',
      icon: <ArrowDownToLine className="w-4 h-4" />,
    },
    position: { x: 250, y: 100 },
  },
  {
    id: '2',
    type: 'custom',
    data: { 
      label: 'Processing Node',
      type: 'process',
      icon: <CircuitBoard className="w-4 h-4" />,
    },
    position: { x: 250, y: 250 },
  },
  {
    id: '3',
    type: 'custom',
    data: { 
      label: 'Output Node',
      type: 'output',
      icon: <ArrowUpFromLine className="w-4 h-4" />,
    },
    position: { x: 250, y: 400 },
  },
];

const initialEdges = [
  { 
    id: 'e1-2', 
    source: '1', 
    target: '2', 
    animated: true,
    className: 'stroke-blue-500',
  },
  { 
    id: 'e2-3', 
    source: '2', 
    target: '3', 
    animated: true,
    className: 'stroke-green-500',
  },
];

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge({
      ...connection,
      animated: true,
      className: 'stroke-gray-400',
    }, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-50"
      >
        <Controls className="bg-white/80 backdrop-blur-sm" />
        <MiniMap 
          className="bg-white/80 backdrop-blur-sm"
          nodeColor={(node) => {
            switch (node.data?.type) {
              case 'input': return '#3B82F6';
              case 'process': return '#22C55E';
              case 'output': return '#A855F7';
              default: return '#64748B';
            }
          }}
        />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}