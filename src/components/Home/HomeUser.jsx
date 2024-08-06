import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const HomeUser = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    navigate('/'); // Navigate to the login page
  };

  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('http://localhost:1234/api/user', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true, // Pastikan mengirim cookies
          });
          setUser(response.data);
        } else {
          navigate('/login');
        }
      } catch (e) {
        console.log(`Ada error: ${e}`);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <div>
      <Navbar onClick={handleLogout} nama={user ? user.nama : 'Guest'} />
    </div>
  );
};
