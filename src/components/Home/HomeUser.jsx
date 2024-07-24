import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HomeUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/'); // Navigate to the login page
  };

  return (
    <div>
      Home
      <button className='py-5 px-3 bg-red-300 rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  );
};
