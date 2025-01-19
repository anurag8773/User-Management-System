import React from 'react';

const UserNode = ({ data }) => (
  <div className="user-node">
    <strong>{data.label}</strong>
  </div>
);

export default UserNode;
