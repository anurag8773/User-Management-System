import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const UserForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = () => {
    if (!username || !age) {
      alert('All fields are required');
      return;
    }
    onSubmit({ username, age });
    setUsername('');
    setAge('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <TextField
        label="Age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
