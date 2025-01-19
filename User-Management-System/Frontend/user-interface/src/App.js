import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import UserFlow from './components/UserFlow';
import UserForm from './components/UserForm';
import { fetchUsers } from './services/userService';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [hobbies, setHobbies] = useState([]);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const addUser = (userData) => {
    setUsers([...users, userData]);
  };

  const addHobbyToUser = (userId, hobby) => {
    setUsers(users.map((user) =>
      user.id === userId ? { ...user, hobbies: [...user.hobbies, hobby] } : user
    ));
  };

  return (
    <div className="app">
      <Sidebar hobbies={hobbies} />
      <UserFlow users={users} addHobbyToUser={addHobbyToUser} />
      <UserForm onSubmit={addUser} />
    </div>
  );
};

export default App;
