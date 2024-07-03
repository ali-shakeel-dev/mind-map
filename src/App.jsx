// import React, { useCallback, useState, useRef, useEffect } from 'react';
// import ReactFlow, {
//   MiniMap,
//   SelectionMode,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
//   reconnectEdge,
//   Panel,
// } from 'reactflow';
// import 'reactflow/dist/style.css';
// import '../src/components/Navbar.css'

// // Import the custom node components
// import ResizableNode from './nodetypes/ResizableNode';
// import ResizableNodeSelected from './nodetypes/ResizableNodeSelected';
// import CustomResizerNode from './nodetypes/CustomResizerNode';
// import Navbar from './components/Navbar';

// const nodeTypes = {
//   ResizableNode,
//   ResizableNodeSelected,
//   CustomResizerNode,
// };

// const initialNodes = [

//   {
//     id: '1', type: 'ResizableNode', position: { x: -160, y: 0 }, data: {
//       label: 'Make your daily mind maps using MindFlow, an intractive simple tool.'
//     }
//   },
//   { id: '2', type: 'ResizableNode', position: { x: 100, y: 100 }, data: { label: 'Tought 1' } },
//   { id: '3', type: 'ResizableNode', position: { x: -100, y: 100 }, data: { label: 'Tought 2' } },

// ];
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }, { id: 'c1-2', source: '1', target: '3' }];

// export default function App() {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const [nodeCount, setNodeCount] = useState(2); // Initialize with the number of initial nodes

//   const reconnectDone = useRef(true);

//   // Load nodes and edges from local storage on initial render
//   useEffect(() => {
//     const storedNodes = JSON.parse(localStorage.getItem('reactFlowNodes'));
//     if (storedNodes) {
//       setNodes(storedNodes);
//     }

//     const storedEdges = JSON.parse(localStorage.getItem('reactFlowEdges'));
//     if (storedEdges) {
//       setEdges(storedEdges);
//     }
//   }, [setNodes, setEdges]);

//   // Update local storage whenever nodes or edges change
//   useEffect(() => {
//     localStorage.setItem('reactFlowNodes', JSON.stringify(nodes));
//   }, [nodes]);

//   useEffect(() => {
//     localStorage.setItem('reactFlowEdges', JSON.stringify(edges));
//   }, [edges]);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

//   const addNode = () => {
//     const nodeName = prompt('Enter the node name:');
//     if (!nodeName) return; // Cancelled prompt or empty input

//     const newNodeId = `${nodeCount + 2}`;
//     const newNode = {
//       id: newNodeId,
//       position: { x: Math.random() * 40, y: Math.random() * 40 }, // Adjust as per your requirements
//       data: { label: nodeName },
//       type: 'ResizableNode',
//     };
//     setNodes((prevNodes) => [...prevNodes, newNode]);
//     setNodeCount((prevCount) => prevCount + 2);
//   };

//   const [variant, setVariant] = useState('cross');

//   const panOnDrag = [1, 2];

//   const onNodeDoubleClick = useCallback((event, node) => {
//     const newLabel = prompt('Enter a Value');
//     if (!newLabel) return;
//     setNodes((nds) =>
//       nds.map((n) => (n.id === node.id ? { ...n, data: { ...n.data, label: newLabel } } : n))
//     );
//   }, [setNodes]);

//   const onEdgeDoubleClick = useCallback((event, edge) => {
//     const newLabel = prompt('Enter a new label for the edge');
//     if (!newLabel) return;
//     setEdges((eds) =>
//       eds.map((e) => (e.id === edge.id ? { ...e, label: newLabel } : e))
//     );
//   }, [setEdges]);

//   const onReconnectStart = useCallback(() => {
//     reconnectDone.current = false;
//   }, []);

//   const onReconnect = useCallback((oldEdge, newConnection) => {
//     reconnectDone.current = true;
//     setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
//   }, [setEdges]);

//   const onReconnectEnd = useCallback((_, edge) => {
//     if (!reconnectDone.current) {
//       setEdges((eds) => eds.filter((e) => e.id !== edge.id));
//     }

//     reconnectDone.current = true;
//   }, [setEdges]);

//   return (
//     <div id='mainContainer' style={{ width: '100%', height: '90vh' }}>
//       <Navbar />

//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodeDoubleClick={onNodeDoubleClick}
//         onEdgeDoubleClick={onEdgeDoubleClick}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         onReconnect={onReconnect}
//         onReconnectStart={onReconnectStart}
//         onReconnectEnd={onReconnectEnd}
//         fitView
//         panOnScroll
//         selectionOnDrag
//         panOnDrag={panOnDrag}
//         selectionMode={SelectionMode.Partial}
//         nodeTypes={nodeTypes}
//       >
//         <Controls />
//         <MiniMap />
//         <Background color="#ccc" variant={variant} />
//         <Panel>
//           <div id='sideBar' className='drop-shadow'>
//             <i className='bx bx-plus bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={addNode}></i>
//             <i className='bx bx-grid bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('cross')}></i>
//             <i className='bx bx-square bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('lines')}></i>
//             <i className='bx bxs-grid bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('dots')}></i>
//           </div>
//         </Panel>
//       </ReactFlow>
//     </div>
//   );
// }

// Working with local storag


import React, { useCallback, useState, useRef, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  SelectionMode,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  reconnectEdge,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import '../src/components/Navbar.css'

// Import the custom node components
import ResizableNode from './nodetypes/ResizableNode';
import ResizableNodeSelected from './nodetypes/ResizableNodeSelected';
import CustomResizerNode from './nodetypes/CustomResizerNode';
import Navbar from './components/Navbar';

const nodeTypes = {
  ResizableNode,
  ResizableNodeSelected,
  CustomResizerNode,
};


const initialNodes = JSON.parse(localStorage.getItem('reactFlowNodes')) || [];
const initialEdges = JSON.parse(localStorage.getItem('reactFlowEdges')) || [];

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [nodeCount, setNodeCount] = useState(1); // Initialize with the number of initial nodes

  const reconnectDone = useRef(true);

  // Load nodes and edges from local storage on initial render
  useEffect(() => {
    const storedNodes = JSON.parse(localStorage.getItem('reactFlowNodes'));
    if (storedNodes) {
      setNodes(storedNodes);
    }

    const storedEdges = JSON.parse(localStorage.getItem('reactFlowEdges'));
    if (storedEdges) {
      setEdges(storedEdges);
    }
  }, [setNodes, setEdges]);

  // Update local storage whenever nodes or edges change
  useEffect(() => {
    localStorage.setItem('reactFlowNodes', JSON.stringify(nodes));
  }, [nodes]);

  useEffect(() => {
    localStorage.setItem('reactFlowEdges', JSON.stringify(edges));
  }, [edges]);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const addNode = () => {
    const nodeName = prompt('Enter the node name:');
    if (!nodeName) return; // Cancelled prompt or empty input

    const newNodeId = `${nodeCount + 1}`;
    const newNode = {
      id: newNodeId,
      position: { x: Math.random() * 40, y: Math.random() * 40 }, // Adjust as per your requirements
      data: { label: nodeName },
      type: 'ResizableNode',
    };
    setNodes((prevNodes) => {
      const updatedNodes = [...prevNodes, newNode];
      localStorage.setItem('reactFlowNodes', JSON.stringify(updatedNodes)); // Save to local storage
      return updatedNodes;
    });
    setNodeCount((prevCount) => prevCount + 1);
  };

  const [variant, setVariant] = useState('cross');

  const panOnDrag = [1, 2];

  const onNodeDoubleClick = useCallback((event, node) => {
    const newLabel = prompt('Enter a Value');
    if (!newLabel) return;
    setNodes((nds) =>
      nds.map((n) => (n.id === node.id ? { ...n, data: { ...n.data, label: newLabel } } : n))
    );
  }, [setNodes]);

  const onEdgeDoubleClick = useCallback((event, edge) => {
    const newLabel = prompt('Enter a new label for the edge');
    if (!newLabel) return;
    setEdges((eds) =>
      eds.map((e) => (e.id === edge.id ? { ...e, label: newLabel } : e))
    );
  }, [setEdges]);

  const onReconnectStart = useCallback(() => {
    reconnectDone.current = false;
  }, []);

  const onReconnect = useCallback((oldEdge, newConnection) => {
    reconnectDone.current = true;
    setEdges((els) => reconnectEdge(oldEdge, newConnection, els));
  }, [setEdges]);

  const onReconnectEnd = useCallback((_, edge) => {
    if (!reconnectDone.current) {
      setEdges((eds) => eds.filter((e) => e.id !== edge.id));
    }

    reconnectDone.current = true;
  }, [setEdges]);



  return (
    <div id='mainContainer' style={{ width: '100%', height: '90vh' }}>
      <Navbar />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodeDoubleClick={onNodeDoubleClick}
        onEdgeDoubleClick={onEdgeDoubleClick}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onReconnect={onReconnect}
        onReconnectStart={onReconnectStart}
        onReconnectEnd={onReconnectEnd}
        fitView
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background color="#ccc" variant={variant} />
        <Panel>
          <div id='sideBar' className='drop-shadow'>
            <i className='bx bx-plus bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={addNode}></i>
            <i className='bx bx-grid bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('cross')}></i>
            <i className='bx bx-square bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('lines')}></i>
            <i className='bx bxs-grid bg-white hover:bg-gray-100 w-full text-lg flex justify-center cursor-pointer' onClick={() => setVariant('dots')}></i>
          </div>
        </Panel>
      </ReactFlow>
    </div>
  );
}

