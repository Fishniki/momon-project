import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const Home = () => {
  // const [keuangan, setKeuangan] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // const handleSidebar = () => {
  //   setKeuangan(!keuangan);
  // };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

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
