import React from 'react';
import HobbyItem from './HobbyItem';

const Sidebar = ({ hobbies }) => {
  return (
    <div className="sidebar">
      <h3>Hobbies</h3>
      {hobbies.map((hobby) => (
        <HobbyItem key={hobby.id} hobby={hobby} />
      ))}
    </div>
  );
};

export default Sidebar;
