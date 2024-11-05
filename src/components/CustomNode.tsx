import { Handle, Position, NodeProps } from 'reactflow';

export type CustomData = {
  label: string;
  type?: 'input' | 'process' | 'output';
  icon?: React.ReactNode;
};
 const columns = [
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: 'Full Name',
      key: 'full_name',
    },
    {
      title: 'Email',
      key: 'email',
    },
    {
      title: 'Gender',
      key: 'gender',
    },
    {
      title: 'Date of Birth',
      key: 'date_of_birth',
    },
    {
      title: 'Created At',
      key: 'created_at',
    },
    {
      title: 'Country Code',
      key: 'country_code',
    },
  ];

export default function CustomNode({ data }: NodeProps<CustomData>) {
  const getNodeStyle = () => {
    switch (data.type) {
      case 'input':
        return 'border-blue-500 bg-blue-50';
      case 'process':
        return 'border-green-500 bg-green-50';
      case 'output':
        return 'border-purple-500 bg-purple-50';
      default:
        return 'border-gray-500 bg-white';
    }
  };

  return (
    <div className={`px-4 py-2 border-2 rounded-lg shadow-lg ${getNodeStyle()}`}>
      {/* <Handle type="target" position={Position.Top} />
      <div className="flex items-center gap-2">
        {data.icon && <div className="text-gray-700">{data.icon}</div>}
        <div className="font-medium text-gray-800">{data.label}</div>
      </div>
      <div className="flex flex-row items-center justify-around w-full bg-red-500">
      <Handle style={{left:"0%"}} type="source" position={Position.Bottom} id="left"/>
      <Handle type="source"  position={Position.Bottom} id="center"/>
      <Handle type="source" style={{left:"99%",background:"red"}} position={Position.Bottom} id="right"/>
      
      </div> */}
      <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
    </div>
  );
}