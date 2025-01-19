import React from 'react';
import { useDrag } from 'react-dnd';

const HobbyItem = ({ hobby }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'hobby',
    item: hobby,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {hobby.name}
    </div>
  );
};

export default HobbyItem;
