import React from 'react';
import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
import UserNode from './UserNode';

const UserFlow = ({ users, addHobbyToUser }) => {
  const nodes = users.map((user, index) => ({
    id: user.id.toString(),
    data: { label: `${user.username}, Age: ${user.age}` },
    position: { x: index * 200, y: 100 },
    type: 'userNode',
  }));

  return (
    <div style={{ height: 500 }}>
      <ReactFlow elements={nodes}>
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default UserFlow;
