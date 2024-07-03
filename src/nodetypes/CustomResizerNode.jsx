import React from 'react';
import { Handle, NodeResizeControl } from 'reactflow';

export default function CustomResizerNode({ id, data, isConnectable, selected }) {
    return (
        <div style={{ position: 'relative', padding: 10 }}>
            {data.label}
            <Handle type="target" position="left" isConnectable={isConnectable} />
            <Handle type="source" position="right" id={`${id}-source`} isConnectable={isConnectable} />
            {selected && (
                <NodeResizeControl>
                    <div style={{ position: 'absolute', bottom: -5, right: -5, width: 20, height: 20, background: 'red', borderRadius: '50%' }} />
                </NodeResizeControl>
            )}
        </div>
    );
}
