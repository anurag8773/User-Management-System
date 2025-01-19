export const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };
  