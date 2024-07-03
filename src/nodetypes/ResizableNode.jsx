import React from 'react';
import { Handle, NodeResizer } from 'reactflow';

export default function ResizableNode({ id, data, isConnectable, selected }) {

    return (
        <div style={{ background: '#fff', textAlign: 'center', padding: "10px 20px", border: '1px solid black', boxShadow: "3px 3px 0px 0px rgba(0,0,0,0.75)", fontSize: 12 }}>
            {data.label}

            <Handle type="target" position="top" isConnectable={isConnectable} />
            <Handle type="source" position="bottom" id={`${id}-source`} isConnectable={isConnectable} />
            {selected && <NodeResizer />}
        </div>
    );
}
