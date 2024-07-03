import React from 'react';
import { Handle, NodeResizer } from 'reactflow';

export default function ResizableNodeSelected({ id, data, isConnectable, selected }) {
    return (
        <div style={/*{ position: 'relative', padding: "10px 50px", border: "1px solid black", borderRadius: 8 }*/{ background: '#fff', border: '1px solid red', borderRadius: 15, fontSize: 12 }}>
            {data.label}
            <Handle type="target" position="top" isConnectable={isConnectable} />
            <Handle type="source" position="bottom" id={`${id}-source`} isConnectable={isConnectable} />
            <NodeResizer />
        </div>
    );
}
