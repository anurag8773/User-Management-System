export const validateUser = (username, age) => {
    if (!username || !age) {
      return false;
    }
    return true;
  };
  